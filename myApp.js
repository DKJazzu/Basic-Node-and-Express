let express = require('express');
let app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.post("/name", function(req, res) {
  let string = req.body.first + " " + req.body.last;
  res.json({ name: string });
});

module.exports = app;