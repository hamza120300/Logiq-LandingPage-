[CmdletBinding()]
param (
    [Parameter()]
    [switch]$Json,
    [Parameter()]
    [switch]$PathsOnly,
    [Parameter()]
    [switch]$RequireSpec,
    [Parameter()]
    [switch]$RequireTasks,
    [Parameter()]
    [switch]$IncludeTasks
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
    }
}

$hasFeature = ($null -ne $active)
$specExists = $false
$planExists = $false
$tasksExists = $false
$specFile = ""
$planFile = ""
$tasksFile = ""

if ($hasFeature) {
    $specFile = Join-Path $active.feature_dir "spec.md"
    $planFile = Join-Path $active.feature_dir "plan.md"
    $tasksFile = Join-Path $active.feature_dir "tasks.md"
    $specExists = Test-Path $specFile
    $planExists = Test-Path $planFile
    $tasksExists = Test-Path $tasksFile
}

$errors = @()
if ($RequireSpec -and -not $specExists) {
    $errors += "Missing spec.md in active feature directory."
}
if ($RequireTasks -and -not $tasksExists) {
    $errors += "Missing tasks.md in active feature directory."
}

$valid = ($errors.Count -eq 0)

$result = [PSCustomObject]@{
    valid = $valid
    errors = $errors
    has_active_feature = $hasFeature
    feature_dir = if ($hasFeature) { $active.feature_dir } else { "" }
    feature_name = if ($hasFeature) { $active.feature_name } else { "" }
    spec_file = $specFile
    spec_exists = $specExists
    plan_file = $planFile
    plan_exists = $planExists
    tasks_file = $tasksFile
    tasks_exists = $tasksExists
    constitution_file = (Join-Path $root ".specify\memory\constitution.md")
    constitution_exists = (Test-Path (Join-Path $root ".specify\memory\constitution.md"))
}

if ($Json) {
    $result | ConvertTo-Json -Depth 5
} else {
    Write-Output "Prerequisites valid: $valid"
    if ($errors.Count -gt 0) {
        Write-Output "Errors: $($errors -join ', ')"
    }
}
