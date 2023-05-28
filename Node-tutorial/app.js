const {readFile, writeFile} = require('fs');

readFile('./content/first.txt', (error, result) => {
  if(error){
    console.log(error);
    return
  }
  console.log(result);
});
