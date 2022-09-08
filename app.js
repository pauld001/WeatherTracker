console.log ("hello world")

const express = require('express');
const index = express();

const http = require("http");

const hostname = "127.0.0.1";
const port = 8080;

// Create HTTP server
const server = http.createServer(function(req, res) {

   // Set the response HTTP header with HTTP status and Content type
   res.writeHead(200, {'Content-Type': 'text/plain'});
   //hosted
   console.log ('hosted on http://localhost:8080/')
   // Send the response body "Hello World"
   res.end('Hello World\n');
});

// Prints a log once the server starts listening
server.listen(port, hostname, function() {
   console.log(`Server running at http://${hostname}:${port}/`);
})