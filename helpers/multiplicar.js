const fs = require("node:fs");
const createFile = async (base = 0, list, till = 10) => {
  try {
    let exit = "";

    for (let i = 0; i <= till; i++) {
      exit += `${base} X ${i} = ${i * base}\n`;
    }
    if (list) {
      console.log(`====Table of number ${base}====`);
      console.log(exit);
    }
    fs.writeFileSync(`./output/tabla-${base}.txt`, exit);

    return `./output/tabla-${base}.txt`;
  } catch (error) {
    throw error;
  }
};
module.exports = { createFile };
