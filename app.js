const http = require('http');
const r = require('rethinkdb');

r.connect( {host: 'localhost', port: 28015}, function(err, conn) {
    if (err) throw err;
    // connection = conn;
    console.log(conn);
})


// http.createServer( (req, res) => {
//   res.end('Work it!')
// }).listen(8081);

// Console will print the message
// console.log('Server running at http://127.0.0.1:8081/');
