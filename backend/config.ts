import dotenv from "dotenv";
import fs from "fs";

const env = process.env.NODE_ENV || "development";
const isProductionMode = env === "production";
const isDevelopmentMode = env === "development";

if (isProductionMode) {
  const envConfig = dotenv.parse(fs.readFileSync(".env.production"));
  Object.keys(envConfig).forEach(key => (process.env[key] = envConfig[key]));
}

if (isDevelopmentMode) {
  const envConfig = dotenv.parse(fs.readFileSync(".env.development"));
  Object.keys(envConfig).forEach(key => (process.env[key] = envConfig[key]));
}
