import { readdir } from "fs";

const a = 1;

export default class HandleThemes {
  public getFolderFiles(path: string): void {
    readdir(path, (errStatus, fileList) => {
      if (errStatus !== null) {
        console.warn("文件读取失败, 错误原因: ", errStatus);
        return;
      }
      console.warn("文件读取成功", fileList);
    });
  }
}
