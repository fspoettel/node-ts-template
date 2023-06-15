import dotenv from "dotenv";
dotenv.config();

import logger from "./lib/logger.js";

// compiles to ESM, so top-level await works.
export async function main() {
  return true;
}

await main();

logger.info("hello world!");
