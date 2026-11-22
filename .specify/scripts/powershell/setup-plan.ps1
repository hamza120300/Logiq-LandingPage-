[CmdletBinding()]
param (
    [Parameter()]
    [switch]$Json,
    [Parameter()]
    [switch]$SkipTemplate
)

$ErrorActionPreference = 'Stop'
. (Join-Path $PSScriptRoot "common.ps1")

$root = Get-ProjectRoot
$active = Get-ActiveFeature

if ($null -eq $active -or -not (Test-Path $active.feature_dir)) {
    # Check latest feature in specs/
    $specsDir = Join-Path $root "specs"
    $latest = Get-ChildItem -Path $specsDir -Directory | Sort-Object Name -Descending | Select-Object -First 1
    if ($null -ne $latest) {
        $active = Set-ActiveFeature -FeatureDir $latest.FullName -FeatureName ($latest.Name -replace '^\d{3}-', '') -SpecPath (Join-Path $latest.FullName "spec.md")
    } else {
        $err = [PSCustomObject]@{
            status = "error"
            message = "No active feature found. Please run create-new-feature.ps1 first."
        }
        if ($Json) { $err | ConvertTo-Json; exit 1 } else { Write-Error $err.message; exit 1 }
    }
}

$planFile = Join-Path $active.feature_dir "plan.md"
$templatePath = Join-Path $root ".specify\templates\plan-template.md"

if (-not $SkipTemplate -and -not (Test-Path $planFile)) {
    if (Test-Path $templatePath) {
        $content = Get-Content $templatePath -Raw
        $content = $content.Replace("[FEATURE_NAME]", $active.feature_name)
        $dirName = Split-Path $active.feature_dir -Leaf
        $content = $content.Replace("[FEATURE_DIR]", $dirName)
        $content = $content.Replace("[YYYY-MM-DD]", (Get-Date -Format "yyyy-MM-dd"))
        Set-Content -Path $planFile -Value $content -Force
    }
}

$result = [PSCustomObject]@{
    status = "success"
    feature_dir = $active.feature_dir
    feature_name = $active.feature_name
    spec_file = $active.spec_path
    plan_file = $planFile
    relative_plan_file = (Resolve-Path $planFile -Relative)
}

if ($Json) {
    $result | ConvertTo-Json -Depth 5
} else {
    Write-Output "Plan configured for feature: $($active.feature_name)"
    Write-Output "Plan file: $planFile"
}
