import Database from "./config/db";

const db = new Database("test.db");

const t = db.getDatabase();
console.log({ t });