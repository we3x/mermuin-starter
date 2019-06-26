const express = require('express');
const mongoose = require('mongoose');
const ip = require('ip');
const bodyParser = require("body-parser");

const app = express();
const port = 5000;

app.use(bodyParser.json())

mongoose
 .connect('mongodb://db:27017/db', {useNewUrlParser: true})
 .then(() => {
   console.log("[info] Successed connected with api")
 })
 .catch(error => {
   console.log("[error] Connected with db failed "+error)
 })


app.get('/', (req, res) => {
  res.send("<h1>Mermuin-starter</h1>");
});

app.listen(port, () => {
  console.log(`[dev] app listening on port: ${ip.address()}:${port}`);
});
