import dotenv from "dotenv";

dotenv.config({ path: ".env.test" });

console.log("called", process.env);
