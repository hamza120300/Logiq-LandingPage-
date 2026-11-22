[CmdletBinding()]
param (
    [Parameter()]
    [switch]$Json
)

$ErrorActionPreference = 'Stop'
. (Join-Path $PSScriptRoot "common.ps1")

$root = Get-ProjectRoot
$active = Get-ActiveFeature

if ($null -eq $active -or -not (Test-Path $active.feature_dir)) {
    $specsDir = Join-Path $root "specs"
    $latest = Get-ChildItem -Path $specsDir -Directory | Sort-Object Name -Descending | Select-Object -First 1
    if ($null -ne $latest) {
        $active = Set-ActiveFeature -FeatureDir $latest.FullName -FeatureName ($latest.Name -replace '^\d{3}-', '') -SpecPath (Join-Path $latest.FullName "spec.md")
    } else {
        $err = [PSCustomObject]@{
            status = "error"
            message = "No active feature found. Please create a feature first."
        }
        if ($Json) { $err | ConvertTo-Json; exit 1 } else { Write-Error $err.message; exit 1 }
    }
}

$tasksFile = Join-Path $active.feature_dir "tasks.md"
$templatePath = Join-Path $root ".specify\templates\tasks-template.md"

if (-not (Test-Path $tasksFile)) {
    if (Test-Path $templatePath) {
        $content = Get-Content $templatePath -Raw
        $content = $content.Replace("[FEATURE_NAME]", $active.feature_name)
        $dirName = Split-Path $active.feature_dir -Leaf
        $content = $content.Replace("[FEATURE_DIR]", $dirName)
        Set-Content -Path $tasksFile -Value $content -Force
    }
}

$result = [PSCustomObject]@{
    status = "success"
    feature_dir = $active.feature_dir
    feature_name = $active.feature_name
    spec_file = $active.spec_path
    plan_file = (Join-Path $active.feature_dir "plan.md")
    tasks_file = $tasksFile
    relative_tasks_file = (Resolve-Path $tasksFile -Relative)
}

if ($Json) {
    $result | ConvertTo-Json -Depth 5
} else {
    Write-Output "Tasks configured for feature: $($active.feature_name)"
    Write-Output "Tasks file: $tasksFile"
}
