const express = require('express');
const app = express();

app.use(express.json());   
app.use('/', express.static(__dirname + '/dist'));

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});