const express = require('express');
let { people } = require('./data');

const app = express();

app.use(express.static('./methods-public'));
app.use(express.urlencoded({extended: false}));

app.get('/api/people', (req, res) => {
  res.status(200).json({success:true, data: people});
});

app.post('/login', (req, res) => {
  const { name } = req.body;

  if(name){
   return res.status(200).send(`Welcome ${name}`);
  }

  res.status(401).send('Please Provide Credentials');
});


app.listen(5000, () => {
    console.log('Server is listening on port 5000...');
});
