# GitHub Notes

## GitHub CLI

[GitHub CLI Repository](https://github.com/cli/cli)  
[GitHub CLI Manual](https://cli.github.com/manual/)  
[GitHub REST API Documentation](https://docs.github.com/en/rest)

- `gh config list`
- `gh config set editor vim`
- `gh auth status`
- `gh auth login`
- `gh repo list`
- `gh release list --repo vim/vim-win32-installer`
- `gh release view --repo vim/vim-win32-installer --json body --jq ".body"`
- Set `GH_HOST` environment variable to `github.com` or FQDN of GitHub Enterprise server

## GitHub Markdown

```
> [!NOTE]
> This is a note alert.
```

> [!NOTE]
> This is a note alert.

```
> [!TIP]
> This is a tip.
```

> [!TIP]
> This is a tip.

```
> [!IMPORTANT]
> This is important.
```

> [!IMPORTANT]
> This is important.

```
> [!WARNING]
> This is a warning.
```

> [!WARNING]
> This is a warning.

```
> [!CAUTION]
> Proceed with caution.
```

> [!CAUTION]
> Proceed with caution.
