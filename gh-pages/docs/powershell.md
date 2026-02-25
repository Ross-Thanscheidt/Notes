# PowerShell Notes

## Environment Variables

- `[Environment]::GetEnvironmentVariable("PSModulePath", "User")`:
    - `$env:UserProfile\Documents\PowerShell\Modules`
- `[Environment]::GetEnvironmentVariable("PSModulePath", "Machine")`:
    - `C:\Program Files\WindowsPowerShell\Modules`
    - `C:\WINDOWS\system32\WindowsPowerShell\v1.0\Modules`
    - `C:\Program Files (x86)\Microsoft SQL Server\110\Tools\PowerShell\Modules\`
