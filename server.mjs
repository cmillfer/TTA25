import { createServer } from "node:http";
import { readFile, stat } from "node:fs/promises";
import { existsSync, readdirSync } from "node:fs";
import { join, extname } from "node:path";
import { fileURLToPath } from "node:url";

const root = fileURLToPath(new URL(".", import.meta.url));
const distDir = join(root, "dist");
const port = Number(process.env.PORT) || 8080;

const MIME = {
  ".html": "text/html; charset=utf-8",
  ".js": "application/javascript; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".gif": "image/gif",
  ".webp": "image/webp",
  ".svg": "image/svg+xml",
  ".ico": "image/x-icon",
  ".woff": "font/woff",
  ".woff2": "font/woff2",
};

async function resolveFile(urlPath) {
  const safePath = decodeURIComponent(urlPath.split("?")[0]);
  const relative = safePath === "/" ? "/index.html" : safePath;
  const candidate = join(distDir, relative);

  try {
    const info = await stat(candidate);
    if (info.isFile()) return candidate;
  } catch {
    // try SPA fallback below
  }

  return join(distDir, "index.html");
}

console.log("Server root:", root);
console.log("Dist exists:", existsSync(distDir));
if (existsSync(distDir)) {
  console.log("Dist contents:", readdirSync(distDir));
}

createServer(async (req, res) => {
  try {
    const filePath = await resolveFile(req.url || "/");
    const data = await readFile(filePath);
    const ext = extname(filePath);
    res.writeHead(200, {
      "Content-Type": MIME[ext] || "application/octet-stream",
      "Cache-Control": ext === ".html" ? "no-cache" : "public, max-age=3600",
    });
    res.end(data);
  } catch (err) {
    console.error("Request failed:", req.url, err.message);
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("Not Found");
  }
}).listen(port, "0.0.0.0", () => {
  console.log(`Listening on 0.0.0.0:${port}`);
});