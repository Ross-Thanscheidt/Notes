---
title: PowerShell Notes
---

## Delete Empty Files

- Delete all empty files in the current directory:

    ```powershell frame="none"
    dir -file | where {$_.Length -eq 0} | del [-WhatIf]
    ```

## Find Hotkey Files

- Find all files with Hotkeys (Shortcut Keys):

    ```powershell frame="none"
    $sh = New-Object -ComObject WScript.Shell
    ls -Path `
        $Env:USERPROFILE\Desktop,
        $Env:PUBLIC\Desktop,
        $Env:APPDATA\Microsoft\Windows\"Start Menu",
        $Env:ALLUSERSPROFILE\Microsoft\Windows\"Start Menu",
        $Env:APPDATA\Microsoft\"Internet Explorer"\"Quick Launch" `
        -Recurse -Force -Include *.lnk,*.url,*.pif |
        Foreach-Object { 
            $link = $sh.CreateShortcut($_.FullName);
            if ( $link.Hotkey ) { echo $link } 
        }
    ```

    Source: [SuperUser Question](https://superuser.com/questions/1064417/how-do-i-find-the-shortcut-that-is-using-a-specific-keyboard-shortcut)

## List Files

- List Files Recursively:

    ```powershell frame="none"
    Get-ChildItem -Recurse -File -Path 'C:\Your\Folder' | select -ExpandProperty FullName
    ```

    ```powershell frame="none"
    dir -Recurse *.txt | select FullName
    ```

- List Files by Modified Date:

    ```powershell frame="none"
    dir | sort LastWriteTime
    ```

## File Checksum

- Validate File with Checksum:

    ```powershell frame="none"
    (Get-FileHash -Algorithm SHA512 filename).Hash -eq "checksum-value"
    ```

- Example:

    ```powershell frame="none"
    (Get-FileHash -Algorithm SHA512 .\dotnet-sdk-11.0.100-preview.3.26207.106-win-x64.exe).Hash -eq "3e839e2d28797bb77e0e8a5859b03441c87d578efe5ec3d713aa58d1f6dbfcd22e8393cb1c0ba6417a0397c09d68a299a8afe5ef1f545e1d57c21e4ae1dc7ca3"
    ```

## PSModulePath Environment Variable

- `[Environment]::GetEnvironmentVariable("PSModulePath", "User")`:
    - `$env:UserProfile\Documents\PowerShell\Modules`
- `[Environment]::GetEnvironmentVariable("PSModulePath", "Machine")`:
    - `C:\Program Files\WindowsPowerShell\Modules`
    - `C:\WINDOWS\system32\WindowsPowerShell\v1.0\Modules`
    - `C:\Program Files (x86)\Microsoft SQL Server\110\Tools\PowerShell\Modules\`
