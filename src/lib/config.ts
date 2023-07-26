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
    /** application identifier. used e.g. to scope the logger. */
    APP_ID: "com.node-ts-template",
    /** (optional) minimum log level. defaults to `info`. */
    LOG_LEVEL: process.env["LOG_LEVEL"] ?? "info",
    PORT: process.env["PORT"] ?? 3000
  };
}

export type Config = ReturnType<typeof createConfig>;

export default createConfig;
