const http = require('http');

http.createServer( (req, res) => {
  res.end('Work it!')
}).listen(8081);

// Console will print the message
console.log('Server running at http://127.0.0.1:8081/');
