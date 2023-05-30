const { readFile } = require('fs');
const { reject } = require('lodash');


const getText = (path) => {
  return new Promise((resolve, reject) => {
    readFile(path, 'utf8', (err, data) => {
        if(err){
          reject(err);
        }else{
          resolve(data);
        }
      })
  })
}

getText('./Node-tutorial/content/first.txt')
.then((result) => console.log(result))
.catch((err) => console.log(err))
