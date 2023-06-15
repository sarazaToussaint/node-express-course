const express = require('express');
const { products } = require('./data');

const app = express();

app.get('/', (req, res) => {
  res.send('<h1>Home Page</h1><a href="/api/products">Product</a>')
});

app.get('/api/products', (req, res) => {
 const newProducts = products.map((product) => {
    const {id, name, image} = product;
    return {id, name, image};
 })
 res.json(newProducts);
});

app.get('/api/products/:id', (req, res) => {
  const {id} = req.params;
  const singleProduct = products.find((product) => (
    product.id === Number(id)
))

if(!singleProduct){
  return res.status(404).send('The product does not exist');
}

 return res.json(singleProduct)
})


app.listen(5000, () => {
   console.log('Server is listening on port 5000...'); 
});