import { createServer } from 'node:http';

// Tailwind's `sr-only` utility, as Flowbite's toggle and many component kits use it.
const page = `<!doctype html>
<title>sr-only toggle</title>
<style>
  .sr-only { position: absolute; width: 1px; height: 1px; padding: 0; margin: -1px; overflow: hidden; clip: rect(0, 0, 0, 0); white-space: nowrap; border-width: 0; }
  label { display: inline-flex; align-items: center; gap: 8px; margin: 20px; cursor: pointer; }
  .track { width: 44px; height: 24px; border-radius: 12px; background: #ccc; }
  input:checked + .track { background: #2563eb; }
</style>
<label><input type="checkbox" class="sr-only"><div class="track"></div><span>Email notifications</span></label>
<br>
<label><input type="checkbox" class="sr-only"><span>Plain label</span></label>`;

createServer((_req, res) => {
  res.writeHead(200, { 'content-type': 'text/html' });
  res.end(page);
}).listen(4173, '127.0.0.1');
