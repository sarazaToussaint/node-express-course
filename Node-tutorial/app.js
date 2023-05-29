const http = require('http');

const server = http.createServer((req, res) => {
  if(req.url === '/'){
    res.end(`<h1>Home Page</h1>`);
  }else if(req.url === '/about'){
    res.end(`<h1>About Page</h1>`);
  }else{
    res.end(`
    <h4>Oops!</h4>

    <p>The page you are looking for seems to be anaccessible</p>

    <a href="/ ">Back</a>
    `)
  }
})

server.listen(5000);
