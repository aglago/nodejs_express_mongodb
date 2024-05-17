const http = require('http');
const fs = require('fs');

// Top level codes that only run once
const port = 8000;
const host = '127.0.0.1';
const jsondata = fs.readFileSync(__dirname + '/jsonfile.txt');

// creating server
const server = http.createServer((req, res) => {
    const path = req.url;

    if (path === '/api') {
        res.writeHead(200, {
            'Content-type': 'application/json'
        })
        res.end(jsondata);
    }
});

// server listening for requests
server.listen(port, host, () => {
    console.log(`server listening on port ${port}`);
})