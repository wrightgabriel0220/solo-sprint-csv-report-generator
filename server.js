const express = require('express');
const bodyParser = require('body-parser');
const app = express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', function(req, res) {
  res.sendFile('./index.html', {root: './'});
});

app.post('/', function(req, res) {
  console.log(`Got a POST request: ${req.body.jsonInput}`);
  res.redirect('/');
})

app.listen(3000);
console.log('LISTENING ON PORT 3000');

module.exports = app;