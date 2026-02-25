# Oh My Posh Notes

- [Oh My Posh](https://ohmyposh.dev/)
- [JanDeDobbeleer/oh-my-posh](https://github.com/jandedobbeleer/oh-my-posh)
- [My Ultimate PowerShell prompt with Oh My Posh and the Windows Terminal](https://www.hanselman.com/blog/my-ultimate-powershell-prompt-with-oh-my-posh-and-the-windows-terminal)

## Installation

- Install/Update:

    ```PowerShell
    PS> Set-ExecutionPolicy Bypass -Scope Process -Force; Invoke-Expression ((New-Object System.Net.WebClient).DownloadString('https://ohmyposh.dev/install.ps1'))
    ```

- Install a [Nerd Font](https://www.nerdfonts.com/):

    ```PowerShell
    PS> oh-my-posh font install meslo
    ```

- Windows Terminal settings (`profiles:defaults:font:face = "MesloLGM NerdFont"`)

- Copy [.mytheme.omp.json](746aee74abb715e037aaf2d99b9fb876#file-mytheme-omp-json) to `$env:UserProfile`
    - Alternatively [ohmyposhv3_v2.json](https://gist.github.com/shanselman/1f69b28bfcc4f7716e49eb5bb34d7b2c?WT.mc_id=-blog-scottha) by Scott Hanselman

- Add this line to `$env:UserProfile\Documents\PowerShell\profile.ps1`:

    ```PowerShell
    PS> oh-my-posh init pwsh --config "~/.mytheme.omp.json" | Invoke-Expression
    ```

- Enable the reload feature to immediately see changes made to `~/.mytheme.omp.json`:

    ```PowerShell
    PS> oh-my-posh enable reload
    ```
