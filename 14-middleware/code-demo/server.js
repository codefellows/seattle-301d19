'use strict';

const express = require('express');
const app = express();

app.use(express.static('./public'));

app.get('*', (req, res) => {
  res.sendFile('index.html', {root: './public'});
});

app.listen(3000, () => {
  console.log('ooga booga on port 3000');
});
