import sqlite3 from "sqlite3";
import { open, Database } from "sqlite";

let db = {} as Database;

async function connect(): Promise<Database> {
  db = await open({
    filename: "database.db",
    driver: sqlite3.Database,
  });
  sqlite3.verbose();
  return db;
}

async function createSchema() {
  db = await open({
    filename: "database.db",
    driver: sqlite3.Database,
  });
  // await db.exec("DROP TABLE record_group");
  await db.exec(
    "CREATE TABLE record_group (id INTEGER PRIMARY KEY  AUTOINCREMENT,name text,created_at text,description text,records text)"
  );
}

export default { connect, createSchema, db };
