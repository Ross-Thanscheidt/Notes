---
title: Oh My Posh Notes
---

## Resources

- [Oh My Posh](https://ohmyposh.dev/)
- [JanDeDobbeleer/oh-my-posh](https://github.com/jandedobbeleer/oh-my-posh)
- [My Ultimate PowerShell prompt with Oh My Posh and the Windows Terminal](https://www.hanselman.com/blog/my-ultimate-powershell-prompt-with-oh-my-posh-and-the-windows-terminal)

## Windows Installation

- Install/Update:

    ```powershell
    PS> Set-ExecutionPolicy Bypass -Scope Process -Force; Invoke-Expression ((New-Object System.Net.WebClient).DownloadString('https://ohmyposh.dev/install.ps1'))
    ```

- Install a [Nerd Font](https://www.nerdfonts.com/):

    ```powershell
    PS> oh-my-posh font install meslo
    ```

- Windows Terminal settings (`profiles:defaults:font:face = "MesloLGM NerdFont"`)

- Copy [.mytheme.omp.json](https://github.com/Ross-Thanscheidt/Notes/blob/main/configurations/oh-my-posh/.mytheme.omp.json) to `$env:UserProfile`
    - Alternatively [ohmyposhv3_v2.json](https://gist.github.com/shanselman/1f69b28bfcc4f7716e49eb5bb34d7b2c?WT.mc_id=-blog-scottha) by Scott Hanselman

- Add this line to `$env:UserProfile\Documents\PowerShell\profile.ps1`:

    ```powershell
    PS> oh-my-posh init pwsh --config "~/.mytheme.omp.json" | Invoke-Expression
    ```

- Enable the reload feature to immediately see changes made to `~/.mytheme.omp.json`:

    ```powershell
    PS> oh-my-posh enable reload
    ```

## Linux Installation

- Make sure these tools are installed - curl, unzip, realpath, dirname:

    ```bash
    sudo apt install curl
    sudo dnf install curl
    ```

- Install the latest version for your system:

    ```bash
    curl -s https://ohmyposh.dev/install.sh | bash -s
    ```

- If it warns that `~/.local/bin` is not in the PATH, add this to `.bashrc`:

    ```bash
    export PATH=$PATH:/home/<username>/.local/bin
    ```

- Install Nerd Fonts:

    ```bash
    oh-my-posh font install meslo
    ```

- Configure the terminal to use MesloLGM Nerd Font:

    - Gnome:
        - Right-Click Terminal in Dash → Preferences → "Unnamed" Profile → Text → check "Custom font" → select "MesloLGM Nerd Font"
    - KDE (Konsole):
        - `Ctrl-Shift-,` → Profiles → New... → General → "Oh My Posh Profile" → check "Default profile" → Apply → Appearance → Font Choose → "MesloLGM Nerd Font" → OK → OK → restart Konsole

- Add this to ~/.bashrc:

    ```bash
    eval "$(oh-my-posh init bash --config '~/.mytheme.omp.json')"
    ```

- (optional) Enable live reloading:

    ```bash
    oh-my-posh enable reload
    ```
