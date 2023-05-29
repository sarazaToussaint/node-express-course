const http = require('http');

const server = http.createServer((req, res) => {
  if(req.url === '/'){
    res.end('Home page');
  }else if(req.url === '/about'){
    res.end('This is our about page')
  }else{
    res.end(`
    <h1>Oops!<h1>
    <p>The page you are looking for seems to be an accessible</p>

    <a href='/'>Back Home</a>
    `)
  }
})

server.listen(5000);
