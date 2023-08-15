const exp = require('constants');
const express = require('express');
const app = express();
const port = 3000;

const path = require('path');

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/contact', (req, res) => {
  res.sendFile(path.join(__dirname, '/public/html/contact.html'));
});

app.get('/shopMen', (req, res) => {
  res.sendFile(path.join(__dirname, '/public/html/shopMen.html'));
});

app.get('/shopWomen', (req, res) => {
  res.sendFile(path.join(__dirname, '/public/html/shopWomen.html'));
});

app.get('/cart', (req, res) => {
  res.sendFile(path.join(__dirname, '/public/html/cart.html'));
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
