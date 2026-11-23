---
title: Joplin Notes
tableOfContents:
  maxHeadingLevel: 4
---

## Appearance

### Customize Vim Cursor Color

The default cursor color in Vim (Normal mode) is green.  
This is how you can change the color to the purple (`#744da9`) matching the Dracula Theme.

<details>
    <summary>Customize Vim Cursor Color</summary>

- Go to **Tools → Options → Appearance → Show Advanced Settings**
- Click on **Custom stylesheet for Joplin-wide app styles** to edit `userchrome.css`

```js title="~/.config/joplin-desktop/userchrome.css"
/* For styling the entire Joplin app (except the rendered Markdown, which is defined in `userstyle.css`) */

/* Vim Normal/Visual Mode Block Cursor (CodeMirror 6 - Modern Joplin) */
.cm-fat-cursor {
    background-color: #744da9 !important;
        color: #ffffff !important; /* Color of the text character inside the block */
}

/* Vim Insert Mode Thin Line Cursor (CodeMirror 6 - Modern Joplin) */
.cm-cursor {
    border-left-color: #744da9 !important;
}

/* Fallback for older Joplin versions (CodeMirror 5) */
.cm-fat-cursor .CodeMirror-cursor,
.cm-animate-fat-cursor {
    background-color: #744da9 !important;
}
```

- Fully restart Joplin to load custom CSS on startup  
  (go to **File → Quit** or `Ctrl`+`Q` in Windows)
</details>

## Joplin Plugins

### [CodeMirror Options](https://joplinapp.org/plugins/plugin/joplin.plugin.cmoptions/)

Adds some CodeMirror options to Joplin's settings, such as line numbers and line wrapping.

- By [FelisDiligens](https://joplinapp.org/plugins/plugin/joplin.plugin.cmoptions/?search=author%3D%22FelisDiligens%22%20max-results%3D20)

<details>
    <summary>My Plugin Settings Preferences</summary>

- Go to **Tools → Options → CodeMirror Options**
- Check **Show line numbers**
- Check **Relative line numbers**
</details>

### [Extra Markdown editor settings](https://joplinapp.org/plugins/plugin/io.github.personalizedrefrigerator.codemirror6-settings/)

Line numbers, code folding, space highlighting, word count, and other options for the CodeMirror 6 editor.

- By [Henry Heino](https://joplinapp.org/plugins/plugin/io.github.personalizedrefrigerator.codemirror6-settings/?search=author%3D%22Henry%20Heino%22%20max-results%3D20)

<details>
    <summary>My Plugin Settings Preferences</summary>

- Go to **Tools → Options → Extra editor settings**
- Uncheck **Show line numbers** (use **CodeMirror Options** for relative line numbers)
- Check **Highlight the gutter for the active line**
- Check **Highlight active line**
- Check **Highlight trailing spaces**
- Check **Highlight selection matches**
- Check **Highlight matching brackets**
</details>

### [Rich Tables](https://joplinapp.org/plugins/plugin/com.bwat47.rich-tables/?from-tab=editor)

A Joplin plugin to provide table rendering and table editing in the Markdown editor.

- By [bwat47](https://joplinapp.org/plugins/plugin/com.bwat47.rich-tables/?search=author%3D%22bwat47%22%20max-results%3D20)
- [GitHub Repository](https://github.com/bwat47/joplin-rich-tables)

<details>
    <summary>To Use This Plugin</summary>

- Go to **Tools → Options → Editor**
- Uncheck **Markdown editor: Interactive table editing**
- Go to **Tools → Options → Editor → Show Advanced Settings**
- Select **Default** for **Keyboard Mode**
</details>

<details>
    <summary>Keyboard Shortcuts</summary>

| Keyboard Shortcut            | Description |
| :---                         | :---|
| `Alt`+`Shift`+`T`            | Insert Table |
| `Alt`+`Shift`+ ↑ / ↓         | Insert Row Above/Below |
| `Alt`+`Shift`+ ←/→           | Insert Column Left/Right |
| `Alt`+`Shift`+`D`/`C`        | Delete/Clear Row |
| `Ctrl`+`Alt`+`Shift`+`D`/`C` | Delete/Clear Column |
| `Ctrl`+`Alt`+ ↑ / ↓          | Move Row Up/Down |
| `Ctrl`+`Alt`+ ←/→            | Move Column Left/Right |
| `Alt`+`Shift`+ `Q`/`W`/`E`   | Align Left/Center/Right |
| `Alt`+`Shift`+ `/`           | Toggle Table Source Mode<br />(**Tools → Options → Keyboard Shortcuts**) |
</details>

## Joplin Resources

- [JoplinApp.org](https://www.joplinapp.org/)
- [Joplin Plugins](https://www.joplinapp.org/plugins/)
- [Getting started with plugin development](https://joplinapp.org/help/api/get_started/plugins)
