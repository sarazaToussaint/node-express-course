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
});

app.get('/api/products/:productID/views/:viewID', (req, res) => {
  console.log(req.params);
  res.send("Hello, World!");
});


app.get('/api/v1/query', (req, res) => {
  // console.log(req.query);

  const { search, limit } = req.query;
  let sortedProducts = [...products];

  if(search){
    sortedProducts = sortedProducts.filter((product) => {
      return product.name.startsWith(search);
    });
  }

  if(limit){
   return sortedProducts = sortedProducts.slice(0, Number(limit));
  }

  if(sortedProducts < 1){
    // res.status(200).send('No such product matched with your search');
    return res.status(200).json({ success: true, data: [] });
  }

  res.status(200).json(sortedProducts);
})


app.listen(5000, () => {
  console.log('Server is listerning on port 5000...');
})