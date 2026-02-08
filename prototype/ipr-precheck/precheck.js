// Minimal IPR precheck prototype (ex-ante).
// Rule: sha256(payload) MUST match manifest.sha256, else BLOCK.

const fs = require("fs");
const crypto = require("crypto");

function sha256File(path) {
  const data = fs.readFileSync(path);
  return crypto.createHash("sha256").update(data).digest("hex");
}

function main() {
  const [payloadPath, manifestPath] = process.argv.slice(2);
  if (!payloadPath || !manifestPath) {
    console.log("Usage: node precheck.js <payload.json> <manifest.json>");
    process.exit(2);
  }

  let manifest;
  try {
    manifest = JSON.parse(fs.readFileSync(manifestPath, "utf8"));
  } catch (e) {
    console.log("BLOCK (invalid manifest JSON)");
    process.exit(1);
  }

  const expected = manifest?.payload?.sha256;
  if (!expected || typeof expected !== "string") {
    console.log("BLOCK (manifest missing payload.sha256)");
    process.exit(1);
  }

  const computed = sha256File(payloadPath);

  if (computed === expected) {
    console.log("ALLOW");
    process.exit(0);
  } else {
    console.log("BLOCK");
    console.log("expected:", expected);
    console.log("computed:", computed);
    process.exit(1);
  }
}

main();
