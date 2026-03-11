---
title: PowerShell Notes
---

## Delete Empty Files

- Delete all empty files in the current directory:

    ```powershell
    dir -file | where {$_.Length -eq 0} | del [-WhatIf]
    ```

## Find Hotkey Files

- Find all files with Hotkeys (Shortcut Keys):

    ```powershell
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

    ```powershell
    Get-ChildItem -Recurse -File -Path 'C:\Your\Folder' | select -ExpandProperty FullName
    dir -Recurse *.txt | select FullName
    ```

- List Files by Modified Date:

    ```powershell
    dir | sort LastWriteTime
    ```

## File Checksum

- Validate File with Checksum:

    ```powershell
    (Get-FileHash -Algorithm SHA512 filename).Hash -eq "checksum-value"
    (Get-FileHash -Algorithm SHA512 .\dotnet-sdk-11.0.100-preview.2.26159.112-win-x64.exe).Hash -eq "6811b9e4d225d1de5f200a950cd663966b1d809bf171f458a02087d58fa9a95ae61fa3022a8f21cdd4769867f53d2ff4b47bae8c6edd16b403d230d413f7a3cb"
    ```

## PSModulePath

- `[Environment]::GetEnvironmentVariable("PSModulePath", "User")`:
    - `$env:UserProfile\Documents\PowerShell\Modules`
- `[Environment]::GetEnvironmentVariable("PSModulePath", "Machine")`:
    - `C:\Program Files\WindowsPowerShell\Modules`
    - `C:\WINDOWS\system32\WindowsPowerShell\v1.0\Modules`
    - `C:\Program Files (x86)\Microsoft SQL Server\110\Tools\PowerShell\Modules\`
