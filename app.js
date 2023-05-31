const { createReadStream } = require('fs');

const stream = createReadStream('./Node-tutorial/content/big.txt');

stream.on('data', (result) => {
  console.log(result);
})
