import dotenv from "dotenv";
dotenv.config();

import createLogger from "@/lib/logger.js";
import createConfig from "@/lib/config.js";

const config = createConfig();

const logger = createLogger({
  name: config.APP_ID,
  level: config.LOG_LEVEL,
});

// compiles to ESM, so top-level await works.
export async function main() {
  return true;
}

await main();

logger.info("hello world!");
