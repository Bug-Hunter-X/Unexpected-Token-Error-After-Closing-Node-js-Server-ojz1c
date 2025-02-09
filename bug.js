const http = require('http');

const server = http.createServer((req, res) => {
  // Handle requests here
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello, World!');
});

const port = 3000;
server.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

//Uncommon Error:  Unexpected token error after server is closed.

// This error is uncommon because it's not a direct result of improper code syntax but arises from asynchronous operations and improper cleanup.
// This usually happens when an event listener is still active after server.close() is called.