// Production server for GoDaddy Node.js Hosting (started with `npm start`).
// No dependencies: serves the Vite build in ./dist and sends unknown routes to
// index.html so React Router can handle them.
import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
import zlib from 'node:zlib';
import { fileURLToPath } from 'node:url';

const ROOT = path.join(path.dirname(fileURLToPath(import.meta.url)), 'dist');
const INDEX = path.join(ROOT, 'index.html');
const PORT = process.env.PORT || 3000;

const TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.mjs': 'text/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.map': 'application/json; charset=utf-8',
  '.txt': 'text/plain; charset=utf-8',
  '.xml': 'application/xml; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif': 'image/gif',
  '.webp': 'image/webp',
  '.avif': 'image/avif',
  '.ico': 'image/x-icon',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
  '.ttf': 'font/ttf',
  '.otf': 'font/otf',
  '.eot': 'application/vnd.ms-fontobject',
  '.mp4': 'video/mp4',
  '.webm': 'video/webm',
  '.pdf': 'application/pdf',
};

const COMPRESSIBLE = new Set(['.html', '.js', '.mjs', '.css', '.json', '.map', '.txt', '.xml', '.svg', '.ttf', '.otf', '.eot']);

// Vite adds a content hash to bundled files (index-BYQsP_WI.js), so they never change.
const HASHED = /-[A-Za-z0-9_-]{8}\.[a-z0-9]+$/;

function cacheControl(filePath) {
  if (filePath === INDEX) return 'no-cache';
  if (HASHED.test(filePath)) return 'public, max-age=31536000, immutable';
  return 'public, max-age=3600';
}

function sendFile(req, res, filePath, stat) {
  const ext = path.extname(filePath).toLowerCase();
  const headers = {
    'Content-Type': TYPES[ext] || 'application/octet-stream',
    'Cache-Control': cacheControl(filePath),
    'Last-Modified': stat.mtime.toUTCString(),
    'X-Content-Type-Options': 'nosniff',
  };

  const gzip = COMPRESSIBLE.has(ext) && /\bgzip\b/.test(req.headers['accept-encoding'] || '');
  if (gzip) {
    headers['Content-Encoding'] = 'gzip';
    headers['Vary'] = 'Accept-Encoding';
  } else {
    headers['Content-Length'] = stat.size;
  }

  res.writeHead(200, headers);
  if (req.method === 'HEAD') return res.end();

  const stream = fs.createReadStream(filePath);
  stream.on('error', () => res.destroy());
  if (gzip) stream.pipe(zlib.createGzip()).pipe(res);
  else stream.pipe(res);
}

function sendText(res, status, text) {
  res.writeHead(status, { 'Content-Type': 'text/plain; charset=utf-8' });
  res.end(text);
}

const server = http.createServer((req, res) => {
  if (req.method !== 'GET' && req.method !== 'HEAD') {
    res.setHeader('Allow', 'GET, HEAD');
    return sendText(res, 405, 'Method Not Allowed');
  }

  let pathname;
  try {
    pathname = decodeURIComponent(new URL(req.url, 'http://localhost').pathname);
  } catch {
    return sendText(res, 400, 'Bad Request');
  }

  // Hidden files such as .htaccess are config for other hosts, not site content.
  if (pathname.split('/').some((part) => part.startsWith('.'))) {
    return sendText(res, 404, 'Not Found');
  }

  const filePath = path.join(ROOT, path.normalize(pathname));
  if (filePath !== ROOT && !filePath.startsWith(ROOT + path.sep)) {
    return sendText(res, 403, 'Forbidden');
  }

  fs.stat(filePath, (err, stat) => {
    if (!err && stat.isFile()) return sendFile(req, res, filePath, stat);

    // A missing file with an extension (a script, style or image) is a real 404.
    // Answering it with index.html would make the browser reject the script and show a blank page.
    if (path.extname(pathname)) return sendText(res, 404, 'Not Found');

    fs.stat(INDEX, (indexErr, indexStat) => {
      if (indexErr) return sendText(res, 500, 'dist/index.html is missing. Run `npm run build` before `npm start`.');
      sendFile(req, res, INDEX, indexStat);
    });
  });
});

server.listen(PORT, () => {
  console.log(`MB Universal Home is running on port ${PORT}`);
});
