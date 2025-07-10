const express = require('express');
const mysql = require('mysql2/promise');

const app = express();
const port = 3000;

app.set('view engine', 'ejs');


// Middleware to parse JSON
//app.use(express.json());




// Sample route


//Home Route
app.get('/', (req, res) => {
    res.send('Home Page');
});

//Product List Route
app.get('/products', async (req, res) => {
    
    
    // Create a connection to the database
    const connection = await mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '1234', // update with your password
        database: 'node_ecom' // update with your database name
    });

    var rows;
    // Query the products table
    var output = await connection.query('SELECT * FROM products');
    connection.end();
    
    //res.send('Product Fetched ' + JSON.stringify( output[0] ) );

    res.render('products',{data: output[0] })
});

//Product List Route
app.get('/product/:productSlug', async (req, res) => 
{
 // Create a connection to the database
    const connection = await mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '1234', // update with your password
        database: 'node_ecom' // update with your database name
    });

    var rows;
    // Query the products table
    var output = await connection.query("SELECT * FROM products where slug = '" + req.params.productSlug +"'" );
    connection.end();


    res.render('product',{data:output[0] });
});

//Product List Route
app.get('/checkout', (req, res) => 
    {
    res.send('Product checkout');
});

//Product List Route
app.get('/information/:pageSlug', (req, res) => 
    {
    res.send('Information Page');
});













// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});