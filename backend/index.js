const express = require('express');
const ip = require('ip');

const app = express();
const port = 5000;

app.get('/', (req, res) => {
  res.send("<h1>Mermuin-starter</h1>");
});

app.listen(port, () => {
  console.log(`[dev] app listening on port: ${ip.address()}:${port}`);
});
