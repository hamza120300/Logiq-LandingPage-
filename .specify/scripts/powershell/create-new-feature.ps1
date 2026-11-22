[CmdletBinding()]
param (
    [Parameter(Position=0)]
    [string]$ShortName = "",
    [Parameter()]
    [string]$Description = "",
    [Parameter()]
    [switch]$Json
)

$ErrorActionPreference = 'Stop'
. (Join-Path $PSScriptRoot "common.ps1")

$root = Get-ProjectRoot
$specsDir = Join-Path $root "specs"
if (-not (Test-Path $specsDir)) {
    New-Item -ItemType Directory -Path $specsDir -Force | Out-Null
}

if ([string]::IsNullOrWhiteSpace($ShortName)) {
    if (-not [string]::IsNullOrWhiteSpace($Description)) {
        # Generate slug from description (first 3-4 words)
        $clean = $Description -replace '[^a-zA-Z0-9\s-]', ''
        $words = ($clean -split '\s+') | Where-Object { $_ -ne '' } | Select-Object -First 3
        $ShortName = ($words -join '-').ToLower()
    }
    if ([string]::IsNullOrWhiteSpace($ShortName)) {
        $ShortName = "feature"
    }
} else {
    $ShortName = ($ShortName.Trim() -replace '[^a-zA-Z0-9-]', '-').ToLower()
}

$num = Get-NextFeatureNumber -SpecsDir $specsDir
$dirName = "${num}-${ShortName}"
$featDir = Join-Path $specsDir $dirName
New-Item -ItemType Directory -Path $featDir -Force | Out-Null

$templatePath = Join-Path $root ".specify\templates\spec-template.md"
$targetSpec = Join-Path $featDir "spec.md"

if (Test-Path $templatePath) {
    $content = Get-Content $templatePath -Raw
    $content = $content.Replace("[FEATURE_NAME]", $ShortName)
    if (-not [string]::IsNullOrWhiteSpace($Description)) {
        $content = $content.Replace("[Brief description of what is being built and why it is needed]", $Description)
    }
    Set-Content -Path $targetSpec -Value $content -Force
} else {
    Set-Content -Path $targetSpec -Value "# Feature Specification: $ShortName`n`n## Summary`n$Description`n" -Force
}

$active = Set-ActiveFeature -FeatureDir $featDir -FeatureName $ShortName -SpecPath $targetSpec

$result = [PSCustomObject]@{
    status = "success"
    feature_number = $num
    feature_name = $ShortName
    feature_dir = $featDir
    spec_file = $targetSpec
    relative_spec_file = (Resolve-Path $targetSpec -Relative)
}

if ($Json) {
    $result | ConvertTo-Json -Depth 5
} else {
    Write-Output "Created feature: $dirName"
    Write-Output "Spec file: $targetSpec"
}
