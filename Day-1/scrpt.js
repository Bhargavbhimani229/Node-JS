// console.log("Welcome To My Page !");

// setTimeout(myFun,100);

// function myFun () {
//   console.log("Hello World");
// }

// console.log(__filename);
// console.log(__dirname);

var http = require('http');

const server = http.createServer((req, res) => {
    // Set the response header
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    
    // Respond with a message
    res.end('Hello, World!\n');
});

// Specify the port and start the server
const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});


// core Model : http,fs,path,querystring,url
// local model : http,fs,path,querystring,url 
// third party model



