import dotenv from "dotenv";
dotenv.config();

// compiles to ESM, so top-level await works.
export async function main() {
  return true;
}

await main();
console.log("hello world!");
