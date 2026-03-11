---
title: Git Notes
---

## Repositories

```batchfile title="Clone a remote repository to a local repository"
git clone <remote-repository-url> <optional-dir>

git clone https://github.com/Ross-Thanscheidt/Notes.git
cd Notes

git clone https://github.com/Ross-Thanscheidt/Example.git MyExample
cd MyExample
```

```batchfile title="Clone a remote repository using GitHub CLI"
gh repo list
gh repo clone Notes
cd Notes
```

## Resources

- [git/git: Git Source Code Mirror](https://github.com/git/git)
- [Git SCM (Source Code Management)](https://git-scm.com/)  
    - [Pro Git - Online Book](https://git-scm.com/book/en/v2)  
    - [git-worktree Documentation](https://git-scm.com/docs/git-worktree)
- [Experiment on your code freely with Git worktree](https://opensource.com/article/21/4/git-worktree)
- [Git Quick Reference](https://web.archive.org/web/20210128144642/http://jonas.nitro.dk/git/quick-reference.html)
- [Think Like (a) Git](https://github.com/dahlbyk/posh-git)
- [The Thing About Git](https://tomayko.com/blog/2008/the-thing-about-git)
- [PeepCode Git Internals PDF by Scott Chacon](https://github.com/pluralsight/git-internals-pdf/releases)
- [Git for Windows](https://gitforwindows.org/) ([GitHub Repository](https://github.com/git-for-windows/git))
- [posh-git by Keith Dahlby - A PowerShell environment for Git](https://dahlbyk.github.io/posh-git/) ([GitHub repository](https://github.com/dahlbyk/posh-git))
