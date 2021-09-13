const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 8080;

// sendFile will go here
app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '/main.html'));
});
app.get("/chris", (req, res) => {
  res.sendFile(path.join(__dirname, '/chris.html'));
});
app.get("/will", (req, res) => {
  res.sendFile(path.join(__dirname, '/will.html'));
});
app.get("/jayson", (req, res) => {
  res.sendFile(path.join(__dirname, '/Jayson.html'));
});
app.get("/tyler", (req, res) => {
  res.sendFile(path.join(__dirname, '/tyler.html'));
});

app.listen(port);
console.log('Server started at http://localhost:' + port);
