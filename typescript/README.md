# TypeScript

> TODO: article Link

This repo shows how to setup aliases using TypeScript.

To run without any compilation and the alias working, I made a setup with [`ts-node`](https://github.com/TypeStrong/ts-node) (allow us running ts files directly) and [`tsconfig-paths`](https://github.com/dividab/tsconfig-paths), which resolves our `tsconfig.json` paths for `ts-node`.

Ideally you won't have to do this setup because you'll use webpack/babel/rollup to transpile your code down.

## How to run

1. Install all dependencies `yarn install`;
1. run the command `yarn start`.

TS node will run `src/index.ts` file.
