---
title: Git Notes
---

## Repositories

- Clone a remote repository to a local repository:

    ```shell frame="none"
    git clone <remote-repository-url> <optional-dir>
    
    git clone https://github.com/Ross-Thanscheidt/Notes.git
    cd Notes
    
    git clone https://github.com/Ross-Thanscheidt/Example.git MyExample
    cd MyExample
    ```

- Clone a remote repository using GitHub CLI:

    ```shell frame="none"
    gh repo list
    gh repo clone Notes
    cd Notes
    ```

- Get URL of the remote repository in the local repository:

    ```shell frame="none"
    git remote get-url origin
    ```

- Update local repostiroy from remote repository

    - Safe - merge commits from remote repository with local master branch

        ```shell frame="none"
        git fetch
        git rebase
        ```

    - Aggressive - fetch and rebase without reviewing downloaded changes

        ```shell frame="none"
        git pull
        ```

## Resources

- [git/git: Git Source Code Mirror](https://github.com/git/git)
- [Git SCM (Source Code Management)](https://git-scm.com/)  
    - [Pro Git - Online Book](https://git-scm.com/book/en/v2)  
    - [git-worktree Documentation](https://git-scm.com/docs/git-worktree)
- [Experiment on your code freely with Git worktree](https://opensource.com/article/21/4/git-worktree)
- [Git Quick Reference](https://web.archive.org/web/20210128144642/http://jonas.nitro.dk/git/quick-reference.html)
- [Think Like (a) Git](https://think-like-a-git.net/)
- [The Thing About Git](https://tomayko.com/blog/2008/the-thing-about-git)
- [PeepCode Git Internals PDF by Scott Chacon](https://github.com/pluralsight/git-internals-pdf/releases/download/v2.0/peepcode-git.pdf)
- [Git for Windows](https://gitforwindows.org/) ([GitHub Repository](https://github.com/git-for-windows/git))
- [posh-git by Keith Dahlby - A PowerShell environment for Git](https://dahlbyk.github.io/posh-git/) ([GitHub Repository](https://github.com/dahlbyk/posh-git))
