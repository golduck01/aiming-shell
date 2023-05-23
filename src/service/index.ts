import sqlite3 from "sqlite3";
import { open } from "sqlite";
import dayjs from "dayjs";

async function createDB() {
  const db = await open({
    filename: "database.db",
    driver: sqlite3.Database,
  });
  try {
    console.log(db);
    await db.exec(`
    CREATE TABLE record_group
    (id INTEGER PRIMARY KEY   AUTOINCREMENT),
    (name text),
    (created_at text),
    (description text),
    (records text),
    (alias text),
    (description text),
    `);
    const records = {
      statement: "",
      description: "",
    };
    await db.exec(
      `INSERT INTO record_group VALUES (
        "nginx",
        "${dayjs().format("YYYY-MM-DD HH:mm:ss")}",
        "nginx 命令组",
        "${records}"
        )`,
      {}
    );
    await db.exec("delete from tbl");
    const tab1 = await db.get("select * from record_group");
    console.log(tab1);
  } catch (e) {
    const error = e as Error;
    console.log(error);
  }
}
sqlite3.verbose();
createDB();
