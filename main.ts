import { Command } from "commander";

const program = new Command();

program.name("aims").description("一些常用的shell使用").version("0.1.0");

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

program.parse();
