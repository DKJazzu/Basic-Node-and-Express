let express = require('express');
let app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.post('/name', function(req, res) {
  const firstName = req.body.first;
  const lastName = req.body.last;
  res.json({ name: firstName + " " + lastName });
});

module.exports = app;