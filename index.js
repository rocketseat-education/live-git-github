const express = require('express');

const app = express()

app.get('/', (_, res) => {
  return res.json({ hello: 'root' })
});

app.get('/teste', (req, res) => {
  return res.json({ hello: 'world 2' })
});

app.listen(3333);