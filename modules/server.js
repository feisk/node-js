const http = require('http');

const PORT = 3005;

const server = http.createServer((req, res) => {
  console.log('req.url :>> ', req.url);
  console.log('req.method :>> ', req.method);

  // res.setHeader('Content-Type', 'text/html');

  // res.write('<head><link rel="stylesheet" type="text/css" href="./style.css"></head>')
  // res.write('<h1>Hello, world!</h1>');
  // res.write('<p>Lol, kek!</p>');
  // res.end();

    res.setHeader('Content-Type', 'application/json');

    const data = JSON.stringify([{name: "Fedor", age: 28}])
    res.end(data);
})

server.listen(PORT, 'localhost',  (error) => {
  console.log(error || `listening port ${PORT}`);
}) 