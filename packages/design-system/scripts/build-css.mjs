import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { fileURLToPath } from "node:url";
import path from "node:path";

const root = path.dirname(fileURLToPath(import.meta.url));
const srcDir = path.join(root, "..", "src", "styles");
const distDir = path.join(root, "..", "dist");

mkdirSync(distDir, { recursive: true });

const tokens = readFileSync(path.join(srcDir, "tokens.css"), "utf8");
const components = readFileSync(path.join(srcDir, "components.css"), "utf8");

const banner = "/* @laban405/design-system — generated, do not edit directly */\n\n";

writeFileSync(path.join(distDir, "styles.css"), banner + tokens + "\n" + components);

console.log("Built dist/styles.css");
