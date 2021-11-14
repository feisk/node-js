const express = require('express');
const favicon = require('serve-favicon');
const path = require('path');

const app = express();

const PORT = 3006;

const createPath = (page) => path.join(__dirname, 'views', `${page}.html`);

app.listen(PORT, (error, data) => {
  console.log(error || `listening port ${PORT}`);
});

app.use(favicon(path.resolve(__dirname, 'favicon.ico')));

app.get('/', (req, res) => {
  res.sendFile(createPath('index'));
});

app.get('/contacts', (req, res) => {
  res.sendFile(createPath('contacts'));
});

app.get('/about-us', (req, res) => {
  res.redirect('/contacts');
});

app.use((req, res) => {
  res.status(404).sendFile(createPath('error'));
});
