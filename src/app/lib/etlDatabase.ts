import sqlite3 from "sqlite3";
import { env } from "../config/env";

const DDL_SCRIPT = `
  CREATE TABLE IF NOT EXISTS Daily_Users (
    id INTEGER PRIMARY KEY NOT NULL,
    username TEXT NOT NULL,
    email TEXT UNIQUE NOT NULL,
    created_at TIMESTAMP NOT NULL
  );

  CREATE TABLE IF NOT EXISTS Daily_Stocks (
    id INTEGER PRIMARY KEY NOT NULL,
    companyName TEXT NOT NULL,
    symbol TEXT UNIQUE NOT NULL,
    initialPrice INTEGER NOT NULL,
    createdAt TIMESTAMP NOT NULL
  );

  CREATE TABLE IF NOT EXISTS Daily_Transactions (
    id INTEGER PRIMARY KEY NOT NULL,
    companyName TEXT NOT NULL,
    symbol TEXT NOT NULL,
    type TEXT CHECK(type IN ('BUY', 'SELL'))  NOT NULL,
    quantity INTEGER NOT NULL,
    pricePerStock INTEGER NOT NULL,
    createdAt TIMESTAMP NOT NULL
  );
`;

export const EtlDatabase = new sqlite3.Database("etl.sqlite", (err) => {
  if (err) {
    console.error(err.message);
    throw err;
  } else {
    EtlDatabase.exec(DDL_SCRIPT, (err) => {
      if (err) {
        throw err;
      }
    });
    if (env.NODE_ENV === "development") {
      console.log("ETL Database connected successfully");
    }
  }
});
