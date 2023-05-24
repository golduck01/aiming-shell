import dayjs from "dayjs";
import SQL from "sql-template-strings";
import Repository from "./repository";

interface RecordDto {
  name: string;
  description: string;
}

async function getRecord(): Promise<unknown> {
  const { db } = Repository;
  const data = await db.get("select * from record_group");
  return data;
}

async function createRecord(): Promise<unknown> {
  const { db } = Repository;
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
  return data;
}
/**
 * @description
 * @author Golduck
 * @date 24/05/2023
 * @param {*} { id:number, name:string }
 */
async function deleteRecord(param: any): Promise<void> {
  const { id, name } = param;
  const { db } = Repository;
  const stmt = await db.prepare(
    SQL`delete from record_group where id=$id or name=$name)`
  );
  await stmt.run({ id, name });
}

export default { getRecord, createRecord, deleteRecord };
