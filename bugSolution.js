const http = require('http');

const server = http.createServer((req, res) => {
  // Handle requests here
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello, World!');
});

const port = 3000;

let isClosed = false;

const closeServer = () => {
  isClosed = true;
  server.close(() => {
    console.log('Server closed');
  });
};

const handleRequest = (req, res) => {
    if(isClosed) {
        res.writeHead(503, { 'Content-Type': 'text/plain' });
        res.end('Server is closed');
        return;
    }
  // Handle requests here
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello, World!');
};

server.on('request', handleRequest);

server.listen(port, () => {
  console.log(`Server listening on port ${port}`);
  setTimeout(closeServer, 5000); // Close the server after 5 seconds
});
