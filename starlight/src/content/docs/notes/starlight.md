---
title: Starlight Notes
---

## Installation

- Install [node](https://nodejs.org/en/download) to get `npm`

    ```shell frame="none"
    node -v
    ```

- Update `npm` to the [latest version](https://www.npmjs.com/package/npm)

    ```shell frame="none"
    npm -v
    npm install -g npm@latest
    ```

- Create a new Astro + Starlight project

    ```shell frame="none"
    npm create astro@latest -- --template starlight
    npm warn "starlight" is being parsed as a normal command line argument.
    npm warn Unknown cli config "--template". This will stop working in the next major version of npm.
    Need to install the following packages:
    create-astro@5.0.5
    Ok to proceed? (y)
    > npx
    > create-astro starlight
    dir Using starlight as project directory
    How would you like to start your new project?
    - A basic, helpful starter project (recommended)
    - Use blog template
    - Use docs (Starlight) template
    - Use minimal (empty) template Unable to fetch latest astro version from the npm registry.  Using 6.1.2 instead.
    Install dependencies? (recommended)
    Initialize a new git repository? (optional)

    cd ./starlight
    npm run dev (q + Enter to stop)
    Use astro add to add frameworks like react or tailwind
    ```

## Updating Starlight

    ```shell frame="none"
    npx @astrojs/upgrade
    ```
