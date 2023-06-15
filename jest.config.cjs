// eslint-disable-next-line @typescript-eslint/no-var-requires
const fs = require("fs");

// workaround until @swc/cli `--ignore` works, see https://github.com/swc-project/cli/issues/20
const swcConfig = JSON.parse(fs.readFileSync(`${__dirname}/.swcrc`));

module.exports = {
  extensionsToTreatAsEsm: [".ts"],
  moduleNameMapper: {
    "^(\\.{1,2}/.*)\\.js$": "$1",
  },
  transform: {
    "^.+\\.(t|j)s$": [
      "@swc/jest",
      {
        ...swcConfig,
        exclude: [],
        swcrc: false,
      },
    ],
  },
  setupFiles: ["./jest.env.ts"],
  testEnvironment: "node",
};
