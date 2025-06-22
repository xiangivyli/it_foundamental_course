const express = require('express');
const app = express();

app.use(express.json());   
app.use('/', express.static(__dirname + '/dist'));

app.get('/get-profile', function(req, res) {
  // Get data from the database
  const response = {
    name: "Ivy Li",
    email: "xiangivyli@gmail.com",
    position: "Data Engineer with full stack experience",
    location: "Bristol, UK",
    skills: "Problem Solving"
  }
  res.send(response);
});

app.listen(3000, function(){
  console.log('Server is running on http://localhost:3000');
});