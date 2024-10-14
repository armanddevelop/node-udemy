const yargs = require("yargs/yargs");
const { hideBin } = require("yargs/helpers");

const argv = yargs(hideBin(process.argv))
  .options({
    b: {
      alias: "base",
      type: "number",
      demandOption: true,
      describe: "la base de la tabla de multiplicar",
    },
    l: {
      alias: "list",
      type: "boolean",
      default: false,
      demandOption: false,
      describe: "muestra la tabla en la consola",
    },
    t: {
      alias: "till",
      type: "number",
      default: false,
      demandOption: true,
      describe: "hasta le numero que parara la tabla de multiplicar",
    },
  })
  .check((argv, options) => {
    if (isNaN(argv.base) || isNaN(argv.till)) {
      throw new Error(
        "There is an error check your input or use the command app --help"
      );
    }
    return true;
  }).argv;
module.exports = argv;
