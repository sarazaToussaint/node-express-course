const {readFile, writeFile} = require('fs');

readFile('./content/first.txt','utf8', (error, result) => {
  if(error){
    console.log(error);
    return
  }
  const first = result;
  readFile('./content/secont.txt', 'utf8', (error, re) => {

  })

});
