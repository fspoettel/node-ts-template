/**
 * Checks that an env variable is non-empty, errors otherwise.
 */

export function ensureEnv(key: string): string {
  const val = process.env[key];

  if (!val) {
    throw new TypeError(`process.env is missing required key: ${key}`);
  }

  return val;
}

function createConfig() {
  return {
    /** application identifier. used e.g. by the logger. */
    APP_ID: "com.qms-slack-bot",
    /** minimum log level. */
    LOG_LEVEL: process.env["LOG_LEVEL"] || "info",
  };
}

export type Config = ReturnType<typeof createConfig>;

export default createConfig;
