import { Command } from "commander";

const program = new Command();

program.name("aims").description("一些常用的shell使用").version("0.1.0");

program
  .description("查看应用列表")
  .argument("[group name]", "应用名称")
  .action((str, options) => {
    console.warn(str);
    console.warn(options);
  });

program
  .command("split")
  .description("Split a string into substrings and display as an array")
  .argument("<string>", "string to split")
  .option("--first", "display just the first substring")
  .option("-s, --separator <char>", "separator character", ",")
  .action((str, options) => {
    const limit = options.first ? 1 : undefined;
    console.warn(str.split(options.separator, limit));
  });

program
  .command("ls")
  .description("查看应用列表")
  .argument("[string]", "应用名称")
  .action((str, options) => {
    console.warn(str);
    console.warn(options);
  });

program.parse();
