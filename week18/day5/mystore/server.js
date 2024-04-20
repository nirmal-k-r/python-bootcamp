//import your libraries
const express = require('express');
const db=require('./database'); //this links the database


//define server
const server = express();


//define routes
server.get('/', (request, response) => {
  response.json({message: 'Hello World!'});
});


//start server
port=3000;
server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});