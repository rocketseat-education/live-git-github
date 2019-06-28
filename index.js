const express = require('express');

const app = express()

app.get('/teste3', (req, res) => {
  return res.json({ hello: 'world 3' })
});

app.get('/hello', (_, res) => {
  return res.json({"hello": "folks!"})
});

app.listen(3333);