# Visual Studio Notes

## Adding Color to Bracket Pairs

Mads Kristensen wrote a [Visual Studio Blog article](https://devblogs.microsoft.com/visualstudio/adding-color-to-bracket-pairs/) to announce his [Rainbow Braces Visual Studio extension](https://marketplace.visualstudio.com/items?itemName=MadsKristensen.RainbowBraces) that cycles through 4 unique customizable colors for matching curly brackets, square brackets, and parentheses.  He also mentioned the [Viasfora Visual Studio extension](https://marketplace.visualstudio.com/items?itemName=TomasRestrepo.Viasfora) also provides this feature, although it does it in a different way and may provide additional features and options.

## Breaking for CLR Exceptions

If you see exceptions in the Output > Debug window in Visual Studio when debugging an application, you can go to Debug > Windows > Exception Settings and check the box next to **Common Language Runtime Exceptions** so that it will break when any CLR exception is thrown.  By default the only **Common Language Runtime Exceptions** checked are:

* Microsoft.UI.Xaml.Markup.XamlParseException
* System.NullReferenceException
* System.Reflection.MissingMetadataException
* System.Reflection.MissingRuntimeArtifactException
* System.Windows.Markup.XamlParseException

## Detect Dead Code

Use `.editorconfig` (Solution > Add > New EditorConfig) to define Code Analysis rules to detect dead code when building ([link](https://stackoverflow.com/questions/30974433/get-list-of-zero-reference-codes-in-visual-studio)).

```
[*.cs]
dotnet_diagnostic.CA1801.severity = warning  # Unused parameters
dotnet_diagnostic.CA1804.severity = warning  # Unused local variables
dotnet_diagnostic.CA1811.severity = warning  # Private methods that are not called from any other code
dotnet_diagnostic.CA1812.severity = warning  # Internal classes that are not instantiated from any other code
dotnet_diagnostic.CA1823.severity = warning  # Unused private fields
dotnet_diagnostic.C6259.severity = warning   # Dead code in bitwise-OR limited switch
```

## Custom Visual Studio Windows Title

Install the [Customize Visual Studio Window Title](https://github.com/mayerwin/vs-customize-window-title) extension to be able to customize the Window Title that shows up at the top of the Visual Studio windows and on the taskbar.  There are a number of special tags that can be used, including solution file parent directory name, git branch name, git repository name, and environment variable values.

* Install the extension in [Visual Studio 2019](https://marketplace.visualstudio.com/items?itemName=mayerwin.RenameVisualStudioWindowTitle) or [Visual Studio 2022](https://github.com/mayerwin/vs-customize-window-title/releases/tag/5.0.1)
* Go to **Tools > Options > Environment > General** and check **Use compact menu and search bar (requires restart)**
* Go to **Tools > Options > Customize VS Window Title > Global rules**
  * Solution in break mode: **[gitRepositoryName] (Debugging) - [ideName]**
  * Solution in design mode: **[gitRepositoryName] - [ideName]**
  * Solution in running mode: **[gitRepositoryName] (Running) - [ideName]**
* Go to **Tools > Options > Customize VS Window Title > Solution-specific overrides**
      * Enable solution-specific overrides: **True**

So now when I open `C:\Users\username\Code\MySampleSolution.READONLY\MySampleSolution.sln` my Visual Studio window has **MySampleSolution.READONLY** as its Windows Title.

If the VS solution is not in a GIT repository, the Windows title will be blank since `gitRepositoryName` is blank.  If you want a non-blank Windows title, then create a *SolutionName*.sln.rn.xml file in the same directory as the *SolutionName*.sln file with this content:

```xml
<CustomizeVSWindowTitle>
  <SettingsSet
    PatternIfBreakMode="[parentPath] (Debugging) - [ideName]"
    PatternIfDesignMode="[parentPath] - [ideName]"
    PatternIfRunningMode="[parentPath] (Running) - [ideName]" />
</CustomizeVSWindowTitle>
```

## Enclose Text in Statement

Enclose the selected text in a block surrounded by curly braces in an if/while/for statement.

* Select lines of text
* Type **Ctrl-K Ctrl-S** (Edit > IntelliSense > Surround With...)
* Select **if** (or whichever statement is desired)

## Git - Undo Last Local Commit

If you entered a Git Commit message and then forgot to stage any changed files before clicking on the Commit button,
thereby accidentally clicking on **Commit All** instead of **Commit Staged**, and you want to undo the last local commit
(**local** meaning that the commit has not been Pushed and is still listed under **Outgoing** in the **Git Repository** window):

 * Go to **View > Git Repository**
 * Right-click on the the latest commit that you want to keep (either in **Outgoing** or the top commit in **Local History**)
 * Click on **Reset** > **Keep Changes (--mixed)**

This will delete any commits under **Outgoing** that were committed after the selected commit
and will show the files with their changes from the deleted local commits under **Changes** in the **Git Changes** window.

Use **Reset** > **Delete Changes (--hard)** if you want to delete the local commits and discard their changes.

**Moral:** Never click on **Commit All** (only **Commit Staged**)

## GitHub - Re-Enter Credentials Issue

After clicking on **Re-Enter Credentials** when trying to clone a repository from GitHub, a browser window opens up trying to open a port on localhost resulting in an error page that says **localhost refused to connect**:

 * Browse to chrome://net-internals/#hsts
 * Enter **localhost** for Domain under **Delete domain security policies**
 * Click the **Delete** button next to it
 * Try clicking on **Re-Enter Credentials** again

Reference: [Stack Overflow - localhost refused to connect Error in visual studio](https://stackoverflow.com/questions/37352603/localhost-refused-to-connect-error-in-visual-studio)

## Go to the Next Error, Search Result, or Reference

Use **F8** and **Shift-F8** to navigate errors, warnings, and messages in the **Error List** window (Edit.GoToNextLocation).
Select the **Current Document** filter in the **Error List** window if you only want to navigate within the current document.
**F8** and **Shift-F8** also work for **Search Results** and **Find All References**.
**Ctrl-Shift-F12** can also be used to view the next error (View.NextError).

See Tools > Options > Environment > Keyboard to map commands to keyboard shortcuts.

## Keyboard Shortcuts

| Keyboard Shortcut                                          | Description |
| :---                                                       | :---|
| `Ctrl` + `D`                                               | Duplicate Lines |
| `Shift` + `Alt` + `E`                                      | Select Whole Line |
| `Alt` + `Up`<br /> `Alt` + `Down`                          | Move Selected Lines Up<br />Move Selected Lines Down |
| `Ctrl` + `Shift` + `L`                                     | Delete Whole Line |
| `Ctrl` + `Shift` + `U`<br /> `Ctrl` + `U`                  | Make Uppercase<br />Make Lowercase |
| `Shift` + `Alt` + `.`                                      | Select Next Occurrence |
| `Shift` + `Alt` + `Up`<br /> `Shift` + `Alt` + `Down`      | Vertical (box) Selection Up<br /> Vertical (box) Selection Down |
| `Ctrl` + `Alt` + *mouse-click*                             | Insert Multiple Cursors |
| `Shift` + `Alt` + `-`<br /> `Shift` + `Alt` + `=`          | Contract Selection<br />Expand Selection |
| `Ctrl` + `R`,<br /> `Ctrl` + `W`                           | View / Hide White Space |
| `Shift` + `Alt` + `L`,<br /> `Shift` + `Alt` + `S`         | Lines Sort |
| `Shift` + `Alt` + `L`,<br /> `Shift` + `Alt` + `J`         | Lines Join |
| `Ctrl` + `M`, `Ctrl` + `E`<br />`Ctrl` + `M`, `Ctrl` + `S` | Expand Current Region<br />Collapse Current Region |
| `Ctrl` + `M`, `Ctrl` + `L`<br />`Ctrl` + `M`, `Ctrl` + `O` | Expand All<br />Collapse All |
| `Ctrl` + `M`, `Ctrl` + `M`                                 | Toggle Outlining Expansion - Expand/Collapse Current Section |

Source: [Visual Studio Blog](https://devblogs.microsoft.com/visualstudio/the-visual-studio-editor-can-do-that/)  
See also [Visual Studio Keyboard Shortcuts](https://learn.microsoft.com/en-us/visualstudio/ide/default-keyboard-shortcuts-in-visual-studio)

## My Visual Studio Configuration

These are my configuration tasks after installing or repairing Visual Studio 2022:

* **Tools > Import and Export Settings > Import selected environment settings**
    * \\\\server\\userfiles\\*username*\\Backups\\Visual Studio\\team-settings.vssettings
* Check **Colorize document tabs by Project** in **Tools > Options > Environment > Tabs and Windows**
* Check **Place 'System' directives first when sorting usings** in **Tools > Options > Text Editor > C# > Advanced**
* Install Extensions:
    * [Add New File (64-bit)](https://marketplace.visualstudio.com/items?itemName=MadsKristensen.AddNewFile64)
    * [Extensibility Essentials 2022](https://marketplace.visualstudio.com/items?itemName=MadsKristensen.ExtensibilityEssentials2022)
    * [File Differ](https://marketplace.visualstudio.com/items?itemName=MadsKristensen.FileDiffer)
    * [Markdown Editor v2](https://marketplace.visualstudio.com/items?itemName=MadsKristensen.MarkdownEditor2)
    * [Rainbow Braces](https://marketplace.visualstudio.com/items?itemName=MadsKristensen.RainbowBraces)
    * [Roslynator 2022](https://marketplace.visualstudio.com/items?itemName=josefpihrt.Roslynator2022)
    * [SonarLint for Visual Studio 2022](https://marketplace.visualstudio.com/items?itemName=SonarSource.SonarLintforVisualStudio2022)
    * [VSColorOutput64](https://marketplace.visualstudio.com/items?itemName=MikeWard-AnnArbor.VSColorOutput64)
    * [Visual Studio Color Theme Designer 2022](https://marketplace.visualstudio.com/items?itemName=idex.colorthemedesigner2022)
    * [Customize Visual Studio Window Title](https://marketplace.visualstudio.com/items?itemName=mayerwin.RenameVisualStudioWindowTitle)
        * Check **Use compact menu and search bar (requires restart)** in **Tools > Options > Environment > General**
        * Go to **Tools > Options > Customize VS Window Title > Global rules**
            * Solution in break mode: **[gitRepositoryName] (Debugging) - [ideName]**
            * Solution in design mode: **[gitRepositoryName] - [ideName]**
            * Solution in running mode: **[gitRepositoryName] (Running) - [ideName]**
        * Go to **Tools > Options > Customize VS Window Title > Solution-specific overrides**
            * Enable solution-specific overrides: **True**
* Install Themes:
    * [Marvel Theme](https://marketplace.visualstudio.com/items?itemName=GuvenSezginKurt.marvel239)
    * [MarvelFixed](https://githubserver/username/MarvelFixed)
        * Build and run **bin\Debug\MarvelFixed.vsix**
* **Tools > Import and Export Settings > Export selected environment settings**
    * \\\\server\\userfiles\\*username*\\Backups\\Visual Studio\\2022-10-19-Export.vssettings

## Option - Color Tabs by Project

When checked, each document open has a tab with a color indicating its project.

* Tools > Options > Environment > Tabs and Windows
    * Check **Colorize document tabs by project**

## Option - Sort using Statements with System First

When checked, the using statements will be sorted with System first when sorting usings with Edit > IntelliSense > Sort Using (Ctrl-K Ctrl-E).

* Tools > Options > Text Editor > C# > Advanced
    * Check **Place 'System' directives first when sorting usings** in the **Using Directives** section

## Option - Track Active Document in Solution Explorer

When checked, Solution Explorer will show the location (project/folder) of the currently viewed document and will change as different documents are viewed.

* Tools > Options > Projects and Solutions > General
    * Check **Track Active Item in Solution Explorer**

## Regular Expressions for Find

| Regular Expression | Description |
| :--- | :--- |
| `(^\|[^:/])//[^/]` | Find commented line |
  
## Use WinMerge as Diff/Merge Tool

This is how you configure Git in Windows to use [WinMerge](https://winmerge.org/) as your Diff/Merge tool.

* Download and install [WinMerge](https://winmerge.org/downloads/?lang=en)
* Edit the global .gitconfig (typically in %USERPROFILE%\\.gitconfig aka C:\\Users\\username\\.gitconfig)
* Use this command to find the location of the global .gitconfig:
    * `git config --global --list --show-origin --show-scope`
* Use this command to edit the global .gitconfig wherever it is:
    * `git config --global --edit`
    * (Warning: If you end up in the VIM text editor, use `:q!` to exit without saving)
* Add these sections:
```
[difftool "winmerge"]
    name = WinMerge
    trustExitCode = true
    cmd = \"C:\\Program Files\\WinMerge\\WinMergeU.exe\" /e /u /wl /wr /dl \"$LOCAL\" /dr \"$REMOTE\" $LOCAL $REMOTE

[mergetool "winmerge"]
    name = WinMerge
    trustExitCode = true
    cmd = \"C:\\Program Files\\WinMerge\\WinMergeU.exe\" /e /u /wl /dl \"Incoming: $LOCAL\" /dr \"Current $REMOTE\" $LOCAL $REMOTE /o $MERGED

[mergetool]
    keepBackup = false
```
* Update these sections:
```
[diff]
    tool = WinMerge
 
[merge]
    tool = WinMerge
```
* When merging, make changes to the right side and save when done.
