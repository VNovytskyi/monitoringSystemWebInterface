const fs = require('fs');
const url = require('url');
const http = require('http');

http.createServer(function (req, res) {
  const baseURL =  req.protocol + '://' + req.headers.host + '/';
  const reqUrl = new URL(req.url, baseURL);

  switch(reqUrl.pathname) {
    case "/": 
    case "/configuration.htm": {
      fs.readFile("configuration.htm", (err, data) => {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        return res.end();
      })
      break
    }

    case "/configuration.js": {
      fs.readFile("configuration.js", (err, data) => {
        res.writeHead(200, {'Content-Type': 'application/javascript'});
        res.write(data);
        return res.end();
      })
      break
    }

    default: {
      res.writeHead(404, {'Content-Type': 'text/html'})
      res.end('')

    }
  }

}).listen(8080);