/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: "ts-jest",
  setupFiles: ["./src/jest_env.ts"],
  testEnvironment: "node",
};
