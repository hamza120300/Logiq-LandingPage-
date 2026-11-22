# Common helper functions for Spec Kit PowerShell scripts

$ErrorActionPreference = 'Stop'

function Get-ProjectRoot {
    $current = $PSScriptRoot
    while ($current) {
        if (Test-Path (Join-Path $current ".specify")) {
            return $current
        }
        $parent = Split-Path -Parent $current
        if ($parent -eq $current) { break }
        $current = $parent
    }
    return (Get-Location).Path
}

function Get-FeatureConfigFile {
    $root = Get-ProjectRoot
    return Join-Path $root ".specify\feature.json"
}

function Get-ActiveFeature {
    $file = Get-FeatureConfigFile
    if (Test-Path $file) {
        try {
            $content = Get-Content $file -Raw | ConvertFrom-Json
            return $content
        } catch {
            return $null
        }
    }
    return $null
}

function Set-ActiveFeature {
    param (
        [string]$FeatureDir,
        [string]$FeatureName,
        [string]$SpecPath
    )
    $file = Get-FeatureConfigFile
    $obj = [PSCustomObject]@{
        feature_dir = $FeatureDir
        feature_name = $FeatureName
        spec_path = $SpecPath
        updated_at = (Get-Date -Format "yyyy-MM-ddTHH:mm:ssZ")
    }
    $json = $obj | ConvertTo-Json -Depth 5
    Set-Content -Path $file -Value $json -Force
    return $obj
}

function Get-NextFeatureNumber {
    param ([string]$SpecsDir)
    if (-not (Test-Path $SpecsDir)) {
        return "001"
    }
    $dirs = Get-ChildItem -Path $SpecsDir -Directory | Where-Object { $_.Name -match '^\d{3}-' }
    if ($dirs.Count -eq 0) {
        return "001"
    }
    $max = 0
    foreach ($d in $dirs) {
        if ($d.Name -match '^(\d{3})-') {
            $num = [int]$matches[1]
            if ($num -gt $max) { $max = $num }
        }
    }
    $next = $max + 1
    return ("{0:D3}" -f $next)
}
