const http = require('http');
const port = 8000;
const host = '127.0.0.1';

// creating a server
const server = http.createServer((req, res) => {
    const path = req.url;
    
    if (path === '/' || path === '/overview')
        res.end('This is the OVERVIEW');
    else if (path === '/product')
        res.end('This is the PRODUCT');
    else {
        res.writeHead(404, 'This page cannot be found', {
            'Content-Type': 'text/html'
        });
        res.end('<h1>Page cannot be found</h1>');
    }
});

server.listen(port, host, () => {
    console.log(`listening on port ${port}`);
});