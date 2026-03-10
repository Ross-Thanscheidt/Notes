# PowerShell Notes

## Delete Files

### Empty Files

Delete all empty files in the current directory

```PowerShell
dir -file | where {$_.Length -eq 0} | del [-WhatIf]
```

## Find Files

### Shortcut Keys

Find all files with Hotkeys (Shortcut Keys)

```PowerShell
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

### Recursively

```PowerShell
dir -Path 'C:\Your\Folder' -Recurse -File | select -ExpandProperty FullName
dir -Path . -Filter "*.txt" -Recurse -File | select -ExpandProperty FullName
```

### Sort by Modified Date

```PowerShell
dir | sort LastWriteTime
```

## PSModulePath

- `[Environment]::GetEnvironmentVariable("PSModulePath", "User")`:
    - `$env:UserProfile\Documents\PowerShell\Modules`
- `[Environment]::GetEnvironmentVariable("PSModulePath", "Machine")`:
    - `C:\Program Files\WindowsPowerShell\Modules`
    - `C:\WINDOWS\system32\WindowsPowerShell\v1.0\Modules`
    - `C:\Program Files (x86)\Microsoft SQL Server\110\Tools\PowerShell\Modules\`
