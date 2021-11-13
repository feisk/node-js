const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 3005;

const server = http.createServer((req, res) => {
  console.log('server request :>>');

  res.setHeader('Content-Type', 'text/html');

  const createPath = (page) => path.resolve('views', `${page}.html`);

  let basePath = '';

  switch (req.url) {
    case '/':
    case '/index':
    case '/home':
      basePath = createPath('index');
      res.statusCode = 200;
      break;
    case '/contacts':
      basePath = createPath('contacts');
      res.statusCode = 200;
      break;
    case '/about-us':
      res.statusCode = 301;
      res.setHeader('Location', '/contacts');
      res.end();
      break;
    default:
      basePath = createPath('error');
      res.statusCode = 404;
  }

  fs.readFile(basePath, (error, data) => {
    if (error) {
      console.log('error :>> ', error);
      res.statusCode = 500;
      return res.end();
    }

    console.log('data page ok :>> ', basePath);
    // res.write('<head><link rel="stylesheet" type="text/css" href="./style.css"></head>');
    return res.end(data);
  });
});

server.listen(PORT, 'localhost', (error) => {
  console.log(error || `listening port ${PORT}`);
});
