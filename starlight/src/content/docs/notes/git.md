---
title: Git Notes
---

## Repositories

### Cloning

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

### Get Remote URL

- Get the URL of the remote repository in the local repository:

    ```shell frame="none"
    git remote get-url origin
    ```

### Updating Local Repository

- Update the local repository from its remote repository

    - Safe - merge commits from remote repository with local master branch:

        ```shell frame="none"
        git fetch
        git rebase
        ```

    - Aggressive - fetch and rebase without reviewing downloaded changes:

        ```shell frame="none"
        git pull
        ```

## Branches

### List Branches

- List local branches:

  ```shell frame="none"
  git branch
  ```

- List remote branches:

  ```shell frame="none"
  git branch -r
  ```

- List local and remote branches:

  ```shell frame="none"
  git branch -a
  ```

### List Branches by Last Commit

- List each branch along with the date of its last commit

    - Local branches (relative dates):

      ```shell frame="none"
      git branch --sort=-committerdate --format="%(committerdate:relative) - %(refname:short)"
      ```

    - Local branches (exact timestamps):

      ```shell frame="none"
      git branch --sort=-committerdate --format="%(committerdate:iso8601) %(refname:short)"
      ```

    - Remote branches (relative dates):

      ```shell frame="none"
      git branch -r --sort=-committerdate --format="%(committerdate:relative) - %(refname:short)"
      ```

    - Remote branches (exact timestamps):

      ```shell frame="none"
      git branch -r --sort=-committerdate --format="%(committerdate:iso8601) %(refname:short)"
      ```

### Create Branch

- Create and check out a new branch locally:

  ```shell frame="none"
  git checkout -b new-branch-name
  ```

- Push a new branch to the remote repository:

  ```shell frame="none"
  git push -u origin new-branch-name
  ```

### Rename Branch

- Rename a local branch:

  ```shell frame="none"
  git switch old-branch-name
  git branch -m new-branch-name
  ```

- If the old branch exists in the remote repository:

  ```shell frame="none"
  git push -u origin new-branch-name
  git push origin -d old-branch-name
  ```

### Delete Branch

- Delete a local branch (you cannot delete the branch you're currently on):

  ```shell frame="none"
  git switch main
  git branch -d branch-name
  ```

- Force a delete for a local branch that has unmerged changes:

  ```shell frame="none"
  git branch -D branch-name
  ```

- Delete a remote branch:

  ```shell frame="none"
  git push origin -d branch-name
  ```

### Prune Branches

- To remove the remote-tracking branches for branches that have been deleted remotely:

  ```shell frame="none"
  git fetch -p
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
