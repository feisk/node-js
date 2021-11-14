const express = require('express');
const favicon = require('serve-favicon');
const path = require('path');

const PORT = 3006;

const app = express();

app.set('view engine', 'ejs');

const createPath = (page) => path.join(__dirname, 'ejs-views', `${page}.ejs`);

app.listen(PORT, (error, data) => {
  console.log(error || `listening port ${PORT}`);
});

app.use(favicon(path.resolve(__dirname, 'favicon.ico')));

app.get('/', (req, res) => {
  const title = 'Home';

  res.render(createPath('index'), { title });
});

app.get('/contacts', (req, res) => {
  const title = 'Contacts';

  const contacts = [
    { name: 'YouTube', link: 'http://youtube.com/YauhenKavalchuk' },
    { name: 'Twitter', link: 'http://twitter.com/YauhenKavalchuk' },
    { name: 'GitHub', link: 'http://github.com/YauhenKavalchuk' },
  ];
  res.render(createPath('contacts'), { contacts, title });
});

app.get('/about-us', (req, res) => {
  res.redirect('/contacts');
});

app.get('/posts', (req, res) => {
  const title = 'Posts';

  res.render(createPath('posts'), { title });
});

app.get('/posts/:id', (req, res) => {
  const title = 'Post';

  res.render(createPath('post'), { title });
});

app.get('/add-post', (req, res) => {
  const title = 'Add post';

  res.render(createPath('add-post'), { title });
});

app.use((req, res) => {
  const title = 'Error';

  res.status(404).render(createPath('error'), { title });
});
