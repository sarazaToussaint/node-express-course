const express = require('express');
const products = require('./data');

const app = express();

app.get('/', (req, res) => {
  console.log(req.url);
  res.send('<h1>Home Page</h1><a href="/api/products">Product</a>')
});

app.get('/api/products', (req, res) => {
   

 res.status(200).send();
});


app.listen(5000, () => {
   console.log('Server is listening on port 5000...'); 
})