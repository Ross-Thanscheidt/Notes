---
title: Starlight Notes
---

## Installing Starlight

- Install [node](https://nodejs.org/en/download) to get `npm`

    ```
    node -v
    ```

- Update `npm` to the [latest version](https://www.npmjs.com/package/npm)

    ```
    npm -v
    npm install -g npm@latest
    ```

- Create a new Astro + Starlight project

    ```
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

```
npx @astrojs/upgrade
```

## Deploy to GitHub Pages (gh-pages branch)

- Configure Starlight for GitHub Pages

    - Before building. add `site` and `base` settings to `astro.config.mjs`:

        ```json
        // @ts-check
        import { defineConfig } from 'astro/config';
        import starlight from '@astrojs/starlight';

        // https://astro.build/config
        export default defineConfig({
            site: 'https://username.github.io',
            base: '/my-repo',
            integrations: [
                starlight({
                    title: 'My Docs',
                    social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/withastro/starlight' }],
                    sidebar: [
                        {
                            label: 'Guides',
                            items: [
                                // Each item here is one entry in the navigation menu.
                                { label: 'Example Guide', slug: 'guides/example' },
                            ],
                        },
                        {
                            label: 'Reference',
                            autogenerate: { directory: 'reference' },
                        },
                    ],
                }),
            ],
        });
        ```

- Manual Build and Preparation

    - Run `npm run build` to generate the `dist/` folder

    - Create an empty file named `.nojekyll` in the `dist/` folder  
      (this tells GitHub Pages not to use Jekyll, which can break Astro/Starlight's asset paths)

- Deploy the Build Files

    - Move the contents of the `dist/` folder to a separate GitHub branch

        - Option A
            - Remove `dist/` from `.gitignore`
            - `git add dist && git commit -m "Update dist for deployment"`
            - `git subtree push --prefix dist origin gh-pages`  
              (this pushes only the `dist/` folder to your `gh-pages` branch)
        - Option B
            - Create a new `gh-pages` branch
            - Delete all of its content
            - Copy the contents of your local `dist/` folder into it
            - Commit and push these files

- Update GitHub Settings

    - Go to GitHub > repository > Setting > Pages
    - Under **Build and deployment** > **Source**, ensure **Deploy from a branch** is selected
    - Set the **Branch** to `gh-pages` and the folder to `/(root)`

## Resources

- [Astro](https://astro.build/)
    - [Getting Started](https://docs.astro.build/en/getting-started/)
    - [Configuration Reference](https://docs.astro.build/en/reference/configuration-reference/)
    - [Tutorial](https://docs.astro.build/en/tutorial/0-introduction/)
- [Starlight](https://starlight.astro.build/)
    - [Getting Started](https://starlight.astro.build/getting-started/)
    - [Frontmatter Reference](https://starlight.astro.build/reference/frontmatter/)
