import Database from "./config/db.js";

const db = new Database("test.db");

const t = db.getDatabase();
console.log({ t }, 'test');