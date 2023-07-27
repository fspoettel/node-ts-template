import dotenv from "dotenv";
dotenv.config();

import makeLogger from "@/lib/logger.js";
import makeConfig from "@/lib/config.js";

const config = makeConfig();

const logger = makeLogger({
  name: config.APP_ID,
  level: config.LOG_LEVEL,
});

// compiles to ESM, so top-level await works.
export async function main() {
  return true;
}

await main();

logger.info("hello world!");
