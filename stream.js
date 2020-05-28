const fs = require("fs");
let buf = "";
const rdStr = fs.createReadStream("1.txt", { highWaterMark: 1 });

rdStr.on("data", data => {
  buf = buf + (+data + 1);
});

rdStr.on("end", () => fs.createWriteStream("1.txt").write(buf));
