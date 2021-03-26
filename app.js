const express = require('express');
const app = express();
const { pool } = require('./config');
const ejs = require('ejs');

app.set('view engine', 'ejs');
app.use(express.static('public'));

app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
  res.render('index');
});

app.get('/users/register', (req, res) => {
  res.render('register.ejs');
});
app.get('/users/login', (req, res) => {
  res.render('login.ejs');
});

app.get('/users/userpanel', (req, res) => {
  res.render('userpanel.ejs');
});

app.post('/users/register', (req, res) => {
  let { name, email, password, password_confirm } = req.body;
  console.log({
    name,
    email,
    password,
    password_confirm,
  });
  let errors = [];
});

let port = process.env.PORT;
if (port == null || port == '') {
  port = 5000;
}
app.listen(port, function () {
  console.log(`Server has started successfully at ${port}`);
});
