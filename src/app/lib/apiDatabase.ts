import path from "path";
import sqlite3, { OPEN_READONLY } from "sqlite3";
import { env } from "../config/env";

const API_DB_PATH = path.resolve(__dirname, env.API_DB_URL);

export const ApiDatabase = new sqlite3.Database(
  API_DB_PATH,
  OPEN_READONLY,
  (err) => {
    if (err) {
      console.error(err.message);
      throw err;
    } else {
      if (env.NODE_ENV === "development") {
        console.log("API Database connected successfully");
      }
    }
  },
);
