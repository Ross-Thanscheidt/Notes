# Vim

## Current Line (Left-Right) Motions
- `f{char}` - move the cursor to the `{char}` to the right
- `F{char}` - move the cursor to the `{char}` to the left
- `t{char}` - move the cursor to before the `{char}` to the right
- `T{char}` - move the cursor to after the `{char}` to the left
- `;` - repeat the latest `f`, `F`, `t`, or `T` move
- `,` - repeat the latest `f`, `F`, `t`, or `T` move in the opposite direction

## Copy/Paste within Vim

Pasting the word once

- `yiw` - Yank the current word
- `viwp` - Replace the current word (move cursor before pasting)

Pasting the same word multiple times (does not work in VsVim)

- `yiw` - Yank the current word
- `cw<C-r>0<ESC>` - Paste the word in Insert Mode using `<C-r>0`

## Copy/Paste to the Clipboard

- `"+yiw` - Yank the current word to the Clipboard - `"` register `+` clipboard `y`ank `i`nner `w`ord
- `"+p` - Paste from the Clipboard - `"` register `+` clipboard `p`ut
- `:%y+` - Copy the entire buffer to the Clipboard

## Normal Mode
- `<C-g>` - Prints current filename (`Go To Line` in VsVim)
- `1<C-g>` - Prints current filename with full path (`Go To Line` in VsVim)
- `2<C-g>` - Prints current filename with full path and buffer number (`Go To Line` in VsVim)
- `g<C-g>` - Prints column, line, word, and byte counts (`Go To Line` in VsVim)
- `gx` - Opens the URL under the cursor using the web browser

## Normal Mode to Visual Mode
- `v` - Enable character-wise Visual Mode
- `V` - Enable line-wise Visual Mode
- `<C-v>` - Supposed to enable block-wise Visual Mode (`Paste` in VsVim)
- `gv` - Reselect the last visual selection

## Normal Mode to Command-Line Window
- `q/` - Open the Command-Line Window with history of searches
- `q:` - Open the Command-Line Window with history of Ex commands

## Visual Mode
- `<C-g>` - Toggle between Visual Mode and Select Mode (`Go To Line` in VsVim)
- `o` - Go to other end of highlighted text

## Insert Mode

- `<C-h>` - Delete back one character (backspace) (does not work in VsVim)
- `<C-w>` - Delete back one word (does not work in VsVim)
- `<C-u>` - Delete back to start of line (does not work in VsVim)
- `<Esc>` - Switch to Normal mode
- `<C-[>` - Switch to Normal mode (does not work in VsVim)
- `<C-o>` - Switch to Insert Normal mode for a single command (does not work in VsVim)
- `<C-r>{register}` - Paste text from register (does not work in VsVim)
- `<C-r><C-p>{register}` - Paste text from register & fix any unintended indentation (!VsVim)
- `<C-r>={expression}<CR>` - Paste result of expression (does not work in VsVim)

### Digraphs

- `<C-k>{char}{char}` - Insert character using a digraph (`:digraphs` to list digraphs) (!VsVim)
    - `12` for ½
    - `.P`, `.M`, `Ob`, `0m`, `sB`, `Db`, `Dw`, `*2`, `*1` for ⋅ · ∘ ○ ▪ ◆ ◇ ★ ☆
    - `OK`, `XX` for ✓ ✗
    - `!=`, `/\`, `-:` for ≠ × ÷
    - `A*`, `a*`, `B*`, `b*` for Α α Β β (generate Greek letters with letter followed by `*`)
    - `2s`, `2S` for ₂ ²
    - `>>` for »
    - `<-`, `->`, `-!`, `-v`, `UD`, `<>` for ← → ↑ ↓ ↕ ↔
    - `<=`, `=>`, `==` for ⇐ ⇒ ⇔
    - `UT`, `Dt`, `PR`, `PL` for ▲ ▼ ▶ ◀
    - `uT`, `dT`, `Tr`, `Tl` for △ ▽ ▷ ◁
- [Vim Digraphs Cheatsheet](https://devhints.io/vim-digraphs)

## Formatting
- `:set expandtab` - Insert space characters whenever the tab key is pressed  
(use `<C-v><Tab>` to insert a tab character)
- `:set tabstop=4` - Number of spaces to be inserted when the tab key is pressed
- `:set shiftwidth=4` - Number of space characters inserted for indentation
- `:retab` - Change all the existing tab characters to match the current tab settings

## Display
- `:set listchars=eol:$,space:-,tab:>#,trail:~` - Use in `list` mode & `:list` command
- `:set listchars=multispace:---+` - Characters to show for multiple consecutive spaces
- `:set [no|inv]list` - Turn on `list mode` to display listchar strings (show spaces, tabs, etc)
- `:set [no|inv]wrap` - Turn on wrap to display a long line on multiple lines
- `:set textwidth=0` - Turn off automatic line wrapping
- `:set [no|inv]number` - Show the line number for each line
- `:set [no|inv]relativenumber` - Show the line number for each line relative to the cursor

## Spell Check
- `set [no|inv]spell` - Turn on spell checking
- `setlocal spell spelllang=en_us` - Turn on spell checking for U.S. English
- `]s` - Go to the next misspelled word
- `[s` - Go to the previous mispelled word
- `]S` - Go to the next bad word (not rare words or words for another region)
- `[S` - Go to the previous bad word (not rare words or words for another region)
- `z=` - Suggest replacements for the current word
- `zg` - **G**ood Word - Add the current word to the dictionary
- `zug` / `zuw` - **U**ndo **G**ood / **U**ndo **W**ord - Remove the word from the dictionary
- `zw` - **W**oops! - Mark the word as a wrong (bad) word
- `:set ft=text` - Force text-like spell checking by setting the filetype to text

## Complex Repeat (Macro)
- `q{register}{characters}q` - Records typed characters into the register  
(use uppercase register to append)
- `@{register}` - Execute the contents of the register
- `@@` - Repeat the previous `@{register}`
- `:source {file}` - Read Ex commands from `{file}`
- `:[range]source` - Read Ex commands from lines in current buffer (all lines if no `[range]`)
- `:source! {file}` - Read Vim commands from `{file}`  
(these are executed from Normal mode, like you type them)
- `:args` - Print the argument list with the current file in square brackets
- `:argdo source {file}` - Execute the Ex commands from `{file}` for each argument list file

## Command-Line Mode
- `:[range]delete {register}` - Delete specified lines into register `{register}`
- `:[range]yank {register}` - Yank specified lines into register `{register}`
- `:[line]put {register}` - Put the text from register `{register}` after the specified line
- `:[range]copy {address}` - Copy the specified lines to below the line specified by {address}
- `:[range]t {address}` - `t` is an alias for `copy` (think of it as *copy* **to**)
- `:[range]move {address}` - Move the specified lines to below the line specified by {address}
- `:[range]join` - Join the specified lines
- `:[range]normal {commands}` - Execute Normal mode `{commands}` on each specified line
- `:[range]substitute/{pattern}/{string}/[flags]` - Replace occurrences of `{pattern}` with `{string}` on each line
- `:[range]global/{pattern}/[cmd]` - Execute the Ex command `[cmd]` on all specified lines where the `{pattern}` matches
- `<C-f>` - Switch to the Command-Line Window (move to line and hit `<CR>` to execute command, `:q` to quit)

## Command-Line Completion
- `:{pattern}<C-d>` - List names that match the pattern in front of the cursor
- `:set wildmode=longest,list` - Complete to longest common substring, list all multiple matches
- `:set wildmode=full` - Complete the next full match, cycles through all matches
- `:set wildmenu` - Provide navigable list of suggestions

## Range
- `1` - The first line
- `$` - The last line
- `0` - Virtual line above the first line
- `.` - Line where the cursor is placed
- `'m` - Line containing mark `m`
- `'<` - Start of visual selection
- `'>` - End of visual selection
- `%` - The entire file (same as `1,$`)

## Substitute
- `:s/old/new/` - Replace the first occurrence on the current line
- `:s/old/new/{flags}` - Substitute Flags:
    - `:s/old/new/i` - Ignore case for the pattern search
    - `:s/old/new/c` - Confirm each substitution  
    (yes, no, all, quit, last, `<C-e>` to scroll up, `<C-y>` to scroll down)
    - `:s/old/new/g` - Global (replace all occurrences) on the current line
    - `:%s/old/new/gn` - Number of matches (reports without actual substitution)
    - `:s/old/new/&` - Use same flags from previous substitute command - must be first flag
- `:%s/old/new/g` - All lines (`%` is equivalent to `1,$`)
- `:5,10s/old/new/g` - Lines 5 through 10
- `:&` - Repeat the last `:s` without the flags
- `:&&` - Repeat the last `:s` with the flags

## Shell
- `:shell` - Start a shell (return to Vim with `exit`)
- `:!{cmd}` - Execute `{cmd}` with the shell
- `:read !{cmd}` - Execute `{cmd}` in the shell and insert its standard output below the cursor
- `:[range]write !{cmd}` - Execute `{cmd}` in the shell with `[range]` lines as standard input
- `:[range]!{filter}` - Filter the specified `[range]` through the external program `{filter}`

## Arguments
- `:args` - Display the current files in the argument list, with the current file in square brackets.
- `:next` - Edit the next file in the argument list
- `:previous` - Edit the previous file in the argument list
- `:first` - Edit the first file in the argument list (same as `:rewind`)
- `:last` - Edit the last file in the argument list
- `:argdo {cmd}` - Execute the `{cmd}` Ex command for each file in the argument list

## Buffers
- `:ls` - List all of the buffers that have been loaded into memory
    - `%` - Buffer in the current window
    - `#` - Alternate buffer for `:e #` and `<CTRL-^>`
    - `a` - Active buffer (loaded and visible)
    - `h` - Hidden buffer (loaded but currently not displayed in a window)
    - `=` - Readonly buffer
    - `+` - Modified buffer
- `:bprevious` - Go to the previous buffer in the buffer list
- `:bnext` - Go to the next buffer in the buffer list
- `:bfirst` - Go to the first buffer in the buffer list (same as `:brewind`)
- `:blast` - Go to the last buffer in the buffer list
- `:bdelete` - Unload current buffer and delete from buffer list (does not affect associated file)
- `:bufdo {cmd}` - Execute the `{cmd}` Ex command for each buffer in the buffer list
- `:write` - Write the whole buffer to the current file
- `:edit!` - Discard changes to current buffer & read file from disk into buffer (revert changes)
- `:qall!` - Exit Vim, discarding changes to all buffers without warning or confirmation
- `:wall` - Write all modified buffers to disk (same as `:argdo write`)
- `:set hidden` - A buffer becomes hidden when abandoned (`:argdo`, `:bufdo`, `:cfdo`)
- `:set nohidden` - A buffer is unloaded when it is abandoned

## Windows
- `<C-w>s` - Split the current window horizontally
- `<C-w>v` - Split the current window vertically
- `:split {file}` - Split the current window horizontally, loading `{file}` into the new window
- `:vsplit {file}` - Split the current window vertically, loading `{file}` into the new window
- `<C-w>w` - Cycle between open windows
- `<C-w>h` - Focus the window to the left
- `<C-w>j` - Focus the window below
- `<C-w>k` - Focus the window above
- `<C-w>l` - Focus the window to the right
- `<C-w>c` / `:close` - Close the active window
- `<C-w>o` / `:only` - Keep only the active window, closing all others
- `<C-w>=` - Equalize width and height of all windows
- `<C-w>_` - Maximize height of the active window
- `<C-w>|` - Maximize width of the active window
- `[N]<C-w>_` - Set active window height to `[N]` rows
- `[N]<C-w>|` - Set active window width to `[N]` columns

## Vim Plugins
- [CycleColor](https://github.com/vim-scripts/CycleColor) by Marvin Renich - Cycle through available colorschemes
    - [Vim.org](https://www.vim.org/scripts/script.php?script_id=1457)
    - [Windows Fix](https://github.com/xdhmoore/CycleColor/blob/patch-1/plugin/cyclecolor.vim) by Daniel Moore
    - `<F3>` - Cycle Backward
    - `<F4>` - Cycle Forward

- [Sparkup](https://github.com/rstacruz/sparkup) by Rico Sta. Cruz - A parser to let you write HTML code faster

- [vim-surround](https://github.com/tpope/vim-surround) by Tim Pope - Easily delete/change/add surroundings
    - [Documentation](https://github.com/tpope/vim-surround/blob/master/doc/surround.txt)
    - `ds{char}` - Delete Surroundings - `{char}` can be `"')b}B]r>a` or `t` for tag
    - `cs{char}{replacement}` - Change Surrounding `{char}` with `{replacement}`  
    (could be tag)
    - `ys{motion}{char}` - You Surround `{motion}` with `{char}` (could be tag)
    - `yss{char}` - You Surround - operates on current line (ignores leading whitespace)
    - `yS{motion}{char}` - You Surround - indents the text and places it on a line of its own
    - `ySS{char}` - You Surround - indents the current line and places it on a line of its own
    - `v{motions}S{char}` - wraps the visual selection with `{char}`
    - `v{motions}gS{char}` - wraps the visual selection on a line of its own with `{char}`

- [vim-unimpaired](https://github.com/tpope/vim-unimpaired) by Tim Pope - Pairs of handy bracket mappings
    - [Documentation](https://github.com/tpope/vim-unimpaired/blob/master/doc/unimpaired.txt)
    - `[a` / `]a` (`:previous` / `:next`) - edit previous / next file in the argument list (fails for unsaved changes)
    - `[A` / `]A` (`:first` / `:last`) - edit the first / last file in the argument list
    - `[b` / `]b` (`:bprevious` / `:bnext`) - go to the previous / next buffer in the buffer list
    - `[B` / `]B` (`:bfirst` / `:blast`) - go to the first / last buffer in the buffer list
    - `[<Space>` / `]<Space>` - add blank lines above / below the cursor
    - `[e` / `]e` - exchange the current line with the line above / below it
    - `[oh` / `]oh` / `yoh` - on/off/toggle `hlsearch`
    - `[oi` / `]oi` / `yoi` - on/off/toggle `ignorecase`
    - `[ol` / `]ol` / `yol` - on/off/toggle `list`
    - `[on` / `]on` / `yon` - on/off/toggle `number`
    - `[or` / `]or` / `yor` - on/off/toggle `relativenumber`
    - `[os` / `]os` / `yos` - on/off/toggle `spell`
    - `[ow` / `]ow` / `yow` - on/off/toggle `wrap`

## Vim Resources
- [Vim.org](https://www.vim.org/)
- [The official Vim repository](https://github.com/vim/vim)
- [Vim Help Files](https://vimhelp.org/)
- [Practical Vim, Second Edition: Edit Text at the Speed of Thought - by Drew Neil](https://www.pragprog.com/titles/dnvim2/practical-vim-second-edition/)
- [Vim Commands - by Hansraj Das](https://gist.github.com/hansrajdas/6520d74ac3251552e66a76f2f32b4bdd)
- [Vim Cheat Sheet - by Richard Torruellas](https://vim.rtorr.com/)
- [Learn Vimscript in Y Minutes](https://learnxinyminutes.com/vimscript/)
- [Vim Digraphs Cheatsheet](https://devhints.io/vim-digraphs)
