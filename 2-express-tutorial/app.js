const http = require('http');

 http.createServer((req, res) => {
  const url = req.url;

  if(url === '/'){
    res.writeHead(200, {'content-type': 'text/html'});
    res.write('<h1>Home Page</h1>');
    res.end();
  }else if(url === '/about'){
    res.writeHead(200, {'content-type': 'text/html'});
    res.write('<h1>About Page</h1>');
    res.end();
  }else{
    res.writeHead(404, {'content-type': 'text/html'});
    res.write('<h3>Page not found</h3>');
    res.end();
  }


}).listen(5000, () => {
  console.log('Server is listerning on port 5000...');
})
