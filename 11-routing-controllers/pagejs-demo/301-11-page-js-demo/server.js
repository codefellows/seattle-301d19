'use strict';

const express = require('express');
const app = express();
const fs = require('fs');
const PORT = process.env.PORT || 5000;

app.use(express.static('./public'));

app.get('/contact-list', (request, response) => {
  fs.readFile('./public/scripts/models/contact.json', (err, fd) => {
    let data = JSON.parse(fd.toString());
    response.send(data);
  })
});

app.get('*', (req, res) => {
  res.sendFile('index.html', { root: './public' });
});

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
