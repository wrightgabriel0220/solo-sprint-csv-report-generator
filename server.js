const express = require('express');
const app = express();

app.get('/', function(req, res) {
  res.sendFile('./index.html', {root: './'});
});

app.listen(3000);
console.log('LISTENING ON PORT 3000');

module.exports = app;