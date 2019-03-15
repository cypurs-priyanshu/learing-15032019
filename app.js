 
 
// import express from 'express';

var express = require("express");
var app = express();
var PORT = 6001;
var dataSet = []
dataSet.push({ name: "prithvi", city: "Iceland" });
app.get('/user', function (req, res) {
    console.log("You requested for a user");
    res.json(dataSet)
    res.send(dataSet);
    // res.sendStatus(200);
})

app.post('/', (req, res) => {
  return res.send('Received a POST HTTP method');
});

app.put('/', (req, res) => {
  return res.send('Received a PUT HTTP method');
});

app.delete('/', (req, res) => {
  return res.send('Received a DELETE HTTP method');
});
app.listen(PORT, function () {
    console.log("Server running...")
})
app.listen(process.env.PORT, () =>
  console.log(`Example app listening on port ${process.env.PORT}!`),
);