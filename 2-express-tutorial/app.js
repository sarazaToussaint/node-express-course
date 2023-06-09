const http = require('http');

const routes = {
    '/': function home(req, res){
         res.writeHead(200, {'Content-Type': 'text/plain'});
         res.end('Welcome to the Home Page');
    },

    '/about': function about(req, res){
          res.writeHead(200);
          res.end('Server is listening to About page');
    }
};

http.createServer((req, res) => {
  if(req.url in routes){
    return routes[req.url](req, res)
  }

  res.writeHead(404);
  res.end(http.STATUS_CODES[404]);
}).listen(process.env.PORT || 5000);

