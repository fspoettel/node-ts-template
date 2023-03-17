module.exports = {
  extensionsToTreatAsEsm: [".ts"],
  moduleNameMapper: {
    "^(\\.{1,2}/.*)\\.js$": "$1",
  },
  transform: {
    "^.+\\.(t|j)s$": "@swc/jest",
  },
  setupFiles: ["./src/jest_env.ts"],
  testEnvironment: "node",
};
