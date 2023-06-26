require('dotenv').config();

const express = require('express');
const app = express();
const port = 8081;
const env = process.env.ENV;
console.log('env', env);

// This responds 'Hello World' on the homepage

app.get('/', function (req, res) {
  res.send('je suis en ' + env)
})

// Start server
app.listen(port, () => {
  console.log('Server is running on port ' + port);
});


