const http = require('http');

const routes = {
    '/': function home(req, res){
         res.writeHead(200, {'Content-Type': 'text/html'});
         res.end('<h1>Welcome to the Home Page</h1>');
    },

    '/about': function about(req, res){
          res.writeHead(200, {'Content-Type': 'text/html'});
          res.end('<h1>Server is listening to About page</h1>');
    }
};

http.createServer((req, res) => {
  if(req.url in routes){
    return routes[req.url](req, res)
  }

  res.writeHead(404);
  res.end(http.STATUS_CODES[404]);
}).listen(process.env.PORT || 5000);

