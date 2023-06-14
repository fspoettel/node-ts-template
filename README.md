# node-ts-template

Template for developing [Node.js](https://nodejs.org) projects with [TypeScript](https://www.typescriptlang.org).

Features:

- support for [ESM modules](https://nodejs.org/api/esm.html) and top-level `await`.
- [swc](https://swc.rs/) for faster reloads, tests and builds.
- [eslint](https://eslint.org) for linting.
- [jest](https://jestjs.io/) for testing.
- [prettier](https://prettier.io) for code formatting.
- [github actions](https://docs.github.com/en/actions) for continuous integration.
- [nodemon](https://github.com/remy/nodemon) + [ts-node](https://github.com/TypeStrong/ts-node) for development. [^1]

## Install

```
npm install
```

## Develop

```
npm run dev

# start with debugger exposed @ 127.0.0.1:9229
npm run dev:debug
```

## Check types

```
npm run check
```

## Build

```
npm run build
```

> **Note**  
> `swc` does not check for type errors when building. If you want type checks during build, run `npm run check` in conjunction.

## Run built code

```
npm run start
```

## Test

```
npm run test

# run jest in watch mode.
npm run test:watch
```

## Lint

```
npm run lint
```

## Format

```
npm run fmt
```

## Tips & Tricks

- Due to how ESM works, module imports from a relative path require a `.js` postfix.

[^1]: While ideally we could use `ts-node-dev`, it [does not currently work](https://github.com/wclr/ts-node-dev/issues/212#issuecomment-761418434) with ESM modules.
