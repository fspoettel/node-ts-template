# node-ts-template

Template for developing [Node.js](https://nodejs.org) projects with [TypeScript](https://www.typescriptlang.org).

Features:

- support for [ESM modules](https://nodejs.org/api/esm.html) and top-level `await`.
- [swc](https://swc.rs/) for faster builds and `tsconfig.paths` support.
- [tsx](https://github.com/esbuild-kit/tsx) for development.
- [vitest](https://vitest.dev/) for testing.
- [eslint](https://eslint.org) for linting.
- [prettier](https://prettier.io/) + [lint-staged](https://github.com/okonet/lint-staged) hook for code formatting.
- [github actions](https://docs.github.com/en/actions) for continuous integration.
- pre-configured [Dockerfile](https://docker.com).

## Install

```
npm install
```

## Develop

```
npm run dev

# start with debugger exposed
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

# run in watch mode.
npm run test:watch

# generate coverage report.
npm run test:coverage
```

## Lint

```
npm run lint
```

## Format

```
npm run fmt
```

## Docker

The included `Dockerfile` uses a multi-stage build to reduce the size of the final container. Build dependencies are pruned. Code is executed as non-root user.

To run the container, use:

```
docker build -t node-ts-template .
docker run --env-file .env -p 3000:3000 node-ts-template
```

## Caveats

- Due to how ESM works, module imports from a relative path require a `.js` postfix.
