import { createServer } from 'node:http';

createServer((_req, res) => {
  res.writeHead(200, { 'content-type': 'text/html' });
  res.end('<!doctype html><title>repro</title><h1>Hello</h1>');
}).listen(4173, '127.0.0.1');
