/**
 * Returns an env variable if present, errors otherwise.
 */
export function ensureEnv(key: string): string {
  const val = process.env[key];

  if (!val) {
    throw new TypeError(`process.env is missing required key: ${key}`);
  }

  return val;
}

/* c8 ignore start */
function getConfig() {
  return {
    /** application identifier. used e.g. to scope the logger. */
    APP_ID: "com.node-ts-template",
    /** (optional) minimum log level. defaults to `info`. */
    LOG_LEVEL: process.env["LOG_LEVEL"] ?? "info",
    PORT: process.env["PORT"] ?? 3000,
  };
}
/* c8 ignore stop */

export type Config = ReturnType<typeof getConfig>;

export default getConfig;
