//Basic Node Web Server

//Importing HTTP Module
const httpInstance = require("http");


//Creating sample Server of HTTP Module
const server = httpInstance.createServer(
    (req, res) => {
    res.writeHead(200, {"Content-Type": "text/plain"});
    res.end("Hello from Node server!");
    }
);

//Listing Requests from Client
server.listen(3000, () => {
  console.log("Server is running on port 3000");
});



