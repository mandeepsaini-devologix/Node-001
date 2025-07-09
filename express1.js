
//Sample Application in Express.js
const express = require('express'); //Import
const fs = require('fs');


const app = express();
const PORT = 3000;

app.set('view engine', 'ejs');

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


//Dynamic path handle
app.get('/id/:rollno', (req, res) => {


  //Data---------------------------------------------
  const data = fs.readFileSync('students.json', 'utf8');
  const students = JSON.parse(data);

  // students = [
  //   { "name":"Asees", "rollno":1, "batch":"2022" },
  //   { "name":"Loveneet", "rollno":2 , "batch":"2022"}
  // ];  


  //Control Logic ---------------------------------------------
  //var selName = "Unknown";
  //var selIndex = -1;
  var selStudent = {};


  for(i = 0; i < students.length ; i++)
  {
    if( students[i].id == req.params.rollno )
    {
      //selName = students[i].name;
      selStudent = students[i]; //Object
      //selIndex = i;
    }

  }

  selStudent.temp = '<span>HTMLCODE</span>';

  //Ejs
  res.render('student', { data: selStudent });

  //Template---------------------------------------------
  // res.send(
  //   'Hello, '+ '<br>' + 
  //   'Student Roll no is : ' +  req.params.rollno + '<br>' + 
  //    ' Student Name is :' +   selStudent.name + '<br>' +
  //    ' Student Age is :' +   selStudent.age+ '<br>' +
  //    ' Student Gender is :' +   selStudent.gender + '<br>' +
  //    ' Student Email is :' +   selStudent.email + '<br>' +
  //    ' Student Grade is :' +   selStudent.grade + '<br>'
    
  //   );
  
});



app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
