import sqlite3 from "sqlite3";
import { open } from "sqlite";
import dayjs from "dayjs";
import SQL from "sql-template-strings";

async function createDB() {
  const db = await open({
    filename: "database.db",
    driver: sqlite3.Database,
  });
  try {
    console.log(db);
    // 删除表
    // await db.exec("DROP TABLE record_group");
    // await db.exec(
    //   SQL`CREATE TABLE record_group (id INTEGER PRIMARY KEY  AUTOINCREMENT,name text,created_at text,description text,records text)`
    // );
    const records = {
      statement: "js Clash",
      description: "打开 Clash",
    };

    const rowData = {
      $name: "nginx",
      $created_at: dayjs().format("YYYY-MM-DD HH:mm:ss"),
      $description: "nginx 命令组",
      $records: JSON.stringify(records),
    };
    // 坑 数据插入不能直接 用方法param解析 需要使用prepare方法准备语句
    const stmt = await db.prepare(
      SQL`INSERT
      INTO record_group (name, created_at, description, records)
      VALUES ($name,$created_at,$description,$records)`
    );
    const data = await stmt.run(rowData);
    console.log(data);
    // await db.run("UPDATE record_group SET name = $name WHERE id = $id", {
    //   $id: 1,
    //   $name: "bar",
    // });
    // const tab1 = await db.get("select * from record_group");
    // console.log(tab1);
  } catch (e) {
    const error = e as Error;
    console.log(error);
  }
}
sqlite3.verbose();
createDB();
