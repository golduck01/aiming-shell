import { Command } from "commander";

const program = new Command();

program.name("aims").description("一些常用的shell使用").version("1.0.0");

program
  .command("split")
  .description("Split a string into substrings and display as an array")
  .argument("<string>", "string to split")
  .option("--first", "display just the first substring")
  .option("-s, --separator <char>", "separator character", ",")
  .action((str, options, command) => {
    console.log(str);
    console.log(options);
    console.log(command);
    // const limit = options.first ? 1 : undefined;
    // console.warn(str.split(options.separator, limit));
  });

program
  .command("add")
  .description("Split a string into substrings and display as an array");

program.parse();
