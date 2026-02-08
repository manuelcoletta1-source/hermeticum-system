const fs = require("fs");
const crypto = require("crypto");

const file = process.argv[2];
if (!file) {
  console.log("Usage: node hash.js <file>");
  process.exit(2);
}

const data = fs.readFileSync(file);
const h = crypto.createHash("sha256").update(data).digest("hex");
console.log(h);
