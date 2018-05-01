const express = require('express');

const app = express();

app.get('/',(req, res) => {
  res.send(req.connection.remoteAddress);
});

app.listen(8080);
