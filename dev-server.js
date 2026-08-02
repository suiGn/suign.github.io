const http = require('http');
const fs = require('fs');
const path = require('path');

const ROOT = __dirname;
const PORT = process.env.PORT || 4400;

const MIME = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.md': 'text/plain; charset=utf-8',
  '.txt': 'text/plain; charset=utf-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.svg': 'image/svg+xml',
  '.mp4': 'video/mp4',
  '.ico': 'image/x-icon',
};

function resolveIncludes(html) {
  return html.replace(/\{%\s*include\s+([^\s%]+)\s*%\}/g, (match, includePath) => {
    const filePath = path.join(ROOT, '_includes', includePath);
    if (!fs.existsSync(filePath)) return match;
    return resolveIncludes(fs.readFileSync(filePath, 'utf8'));
  });
}

function stripFrontMatter(content) {
  if (content.startsWith('---')) {
    const end = content.indexOf('---', 3);
    if (end !== -1) return content.slice(end + 3);
  }
  return content;
}

const server = http.createServer((req, res) => {
  let reqPath = decodeURIComponent(req.url.split('?')[0]);
  if (reqPath === '/') reqPath = '/index.html';

  let filePath = path.join(ROOT, reqPath);
  if (!fs.existsSync(filePath)) {
    res.writeHead(404);
    res.end('Not found: ' + reqPath);
    return;
  }

  const ext = path.extname(filePath);
  let content = fs.readFileSync(filePath);

  if (ext === '.html') {
    let html = content.toString('utf8');
    html = stripFrontMatter(html);
    html = resolveIncludes(html);
    content = html;
  }

  res.writeHead(200, { 'Content-Type': MIME[ext] || 'application/octet-stream' });
  res.end(content);
});

server.listen(PORT, () => console.log(`suign.github.io dev server (Jekyll includes resolved) on http://localhost:${PORT}`));
