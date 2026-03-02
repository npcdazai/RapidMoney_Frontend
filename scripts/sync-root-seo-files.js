const fs = require("fs");
const path = require("path");

const rootDir = process.cwd();
const publicDir = path.join(rootDir, "public");

const filesToSync = ["sitemap.xml", "llms.txt"];

for (const fileName of filesToSync) {
  const sourcePath = path.join(rootDir, fileName);
  const targetPath = path.join(publicDir, fileName);

  if (!fs.existsSync(sourcePath)) {
    console.warn(`[sync:root-seo-files] Skipping missing file: ${fileName}`);
    continue;
  }

  fs.mkdirSync(publicDir, { recursive: true });
  fs.copyFileSync(sourcePath, targetPath);
  console.log(`[sync:root-seo-files] Synced ${fileName} -> public/${fileName}`);
}
