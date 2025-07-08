
//Sample Application in Express.js
const express = require('express'); //Import


const app = express();
const PORT = 3000;

app.get('/', (req, res) => {

  res.send('Hello, Express!');

});

app.get('/aboutus', (req, res) => {

  res.send('Hello, About Us!');
  
});

app.get('/contactus', (req, res) => {

  res.send('Hello, Contact Us!');
  
});

app.get('/products', (req, res) => {

  res.send('Hello, Products ');
  
});

app.get('/product/:productname', (req, res) => {

  res.send('Hello, Product ' +  req.params.productname );
  
});



app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
