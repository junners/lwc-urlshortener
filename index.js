const express = require('express');
const helmet = require('helmet');
const bodyParser = require('body-parser');

const app = express();
app.use(helmet());
app.use(bodyParser.json());

const PORT = process.env.PORT || 3000;

// TODO: Make route dictionary

// TODO: Separate app and express definition?

app.get('/:slug', (req, res) => {
  console.log('logged hello');
  console.log(JSON.stringify(req.params, null, 2));
  res.send('Hello World!');
});

app.post('/slugs/', (req, res) => {
  // respond with sucessful / unsuccessful slugs
  console.log('logged from slugs');
  console.log(JSON.stringify(req.body, null, 2));
  res.send('called slugs');
});

app.patch('/slugs/:slug', (req, res) => {
  // temporary disabled
  console.log('logged from patch', JSON.stringify(req.body, null, 2));
  res.status(500).send('not implemented');
});

/** handle not supported routes */
app.use(function (req, res, next) {
  res.status(404).send("Sorry can't find that!");
});

app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`);
});
