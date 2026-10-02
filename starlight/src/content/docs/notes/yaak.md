---
title: Yaak Notes
tableOfContents:
  maxHeadingLevel: 4
---

## Yaak Plugins

### Use Docker Container to Build Plugin

Normally you would use `yaak plugin build` to build the plugin and create the `build` subdirectory.

Due to a [known issue](https://github.com/nodejs/node/issues/61165) with Node.js v22 and higher, I get this error when running `yaak plugin build` on Windows:

```
INFO     Building plugin \\?\C:\Users\<username>\Code\Testing\Yaak\yielding-yoga...
ERROR    Failed to generate plugin metadata: node:fs:2734
    const out = binding.lstat(base, false, undefined, true /* throwIfNoEntry */);
                            ^

Error: EISDIR: illegal operation on a directory, lstat 'C:'
    at Object.realpathSync (node:fs:2734:25)
    at toRealPath (node:internal/modules/helpers:63:13)
    at Module._findPath (node:internal/modules/cjs/loader:768:24)
    at Module._resolveFilename (node:internal/modules/cjs/loader:1461:27)
    at wrapResolveFilename (node:internal/modules/cjs/loader:1049:27)
    at defaultResolveImplForCJSLoading (node:internal/modules/cjs/loader:1073:10)
    at resolveForCJSWithHooks (node:internal/modules/cjs/loader:1094:12)
    at Module._load (node:internal/modules/cjs/loader:1262:25)
    at wrapModuleLoad (node:internal/modules/cjs/loader:255:19)
    at Module.require (node:internal/modules/cjs/loader:1576:12) {
  errno: -4068,
  code: 'EISDIR',
  syscall: 'lstat',
  path: 'C:'
}

Node.js v24.15.0
```

<details>
<summary>Files to Add to Yaak Plugin Directory</summary>

```dockerfile
# Dockerfile
FROM node:26

RUN apt-get update && apt-get install -y libdbus-1-3 && rm -rf /var/lib/apt/lists/*

# Install the Yaak CLI globally
RUN npm config set allow-scripts=@yaakapp/cli --location=user
RUN npm install -g @yaakapp/cli

# Set working directory inside container
WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install

# Output or default command (adjust based on whether you want an artifact or running dev mode)
CMD ["yaak", "plugin", "build"]
```

```powershell
# build-image.ps1
docker rmi -f yaak-plugin-builder
docker build -t yaak-plugin-builder .
```

```powershell
# yaak-plugin-build.ps1
docker run --rm -v .:/app:Z yaak-plugin-builder
```
</details>

## Yaak Resources

- [Yaak.app](https://yaak.app/)
- [Keyboard Shortcuts](https://yaak.app/docs/getting-started/keyboard-shortcuts)
- [Yaak Plugins](https://yaak.app/plugins)
- [Yaak Plugin Development](https://yaak.app/docs/plugin-development/plugins-quick-start)
