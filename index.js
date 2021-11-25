const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({
  extended: false
}));

app.use(bodyParser.json());

app.set('view engine', 'pug');

app.get('/', (req, res) => {
  res.render('bmi');
});

app.use(express.static(__dirname + '/styles'));

app.post("/bmi", (req, res) => {
  let height = req.body.height / 100;
  let weight = req.body.weight;
  let bmi = weight / (height * height);
  res.render('bmi', { bmi: bmi });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}.`);
});