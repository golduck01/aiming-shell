import sqlite3 from "sqlite3";
import { open } from "sqlite";

// const database = new sqlite3.Database("mydatebase.db", function (err) {
//   console.log(err);
//   console.log(database);
// });
async function createDB() {
  const db = await open({
    filename: "database.db",
    driver: sqlite3.Database,
  });
  try {
    console.log(db);
    await db.exec("CREATE TABLE tbl (col TEXT)");
    await db.exec('INSERT INTO tbl VALUES ("test")');
    const tab1 = await db.get("select * from tbl");
    console.log(tab1);
  } catch (e) {
    const error = e as Error;
    console.log(error.message);
  }
}
sqlite3.verbose();
createDB();
