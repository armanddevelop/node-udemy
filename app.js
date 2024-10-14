const fs = require("node:fs");
const { createFile } = require("./helpers/multiplicar");
const argv = require("./config/yargs");
console.clear();

//process.argsv es donde uno puede recibir en node los argumentos desde la consola
//console.log("hola desde process.argv", process.argv);
//const [, , arg3 = "base=1"] = process.argv;

createFile(argv.base, argv.list, argv.till)
  .then((data) => fs.readFileSync(data, "utf-8"))
  .catch((e) => console.error(e));
// fs.writeFile(`tabla-${base}.txt`, exit, (err) => {
//   if (err) throw err;
//   console.log("Success!!!");
// });
