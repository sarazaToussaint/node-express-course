const express = require('express');
const { products } = require('./data');

const app = express();

app.get('/', (req, res) => {
  res.end('<h1>Home Page</h1><a href="api/products">Products</a>');
});

app.get('/api/products', (req, res) => {
  const newProducts = products.map((product) => {
    const { id, name, image } = product;
    return { id, name, image };
  })

  res.send(newProducts);
});

app.get('/api/products/:productID', (req, res) => {
  const { productID } = req.params;
  console.log(req.params);
  const singleProduct = products.find((product) => product.id === Number(productID));
  
  if(!singleProduct){
    return res.status(404).send('<h3>The product with this id does not exist</h3>');
  }

  res.send(singleProduct);
})

app.listen(5000, () => {
  console.log('Server is listerning on port 5000...');
})