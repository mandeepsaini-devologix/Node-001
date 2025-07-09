//Basic Node Web Server with Paging

//Importing HTTP Module
const httpInstance = require("http");


//Creating sample Server of HTTP Module
const server = httpInstance.createServer(
    (req, res) => {
        
        res.writeHead(200, {"Content-Type": "text/plain"});

        if( req.url == '/')
        {
            res.end("Home Page");
        }
        else if( req.url == '/aboutus')
        {
            res.end("About Us Page");
        }
        else if( req.url == '/contactus')
        {
            res.end("Contact Us Page");
        }
        else
        {
            res.end("Unknown Page " + req.url);
        }

    }
);

//Listing Requests from Client
server.listen(3000, () => {
  console.log("Server is running on port 3000");
});
