const express = require('express');
const firebase = require('firebase');
const app = express();
const PORT = process.env.PORT || 3000;

const requestProxy = require('express-request-proxy');

app.use(express.static('./public'));
app.get('/', function(request, response){
  response.sendFile('public/index.html', {root: '.'});
});

function proxyGitHub(request, response) {
  console.log('Routing GitHub request for', request.params[0]);
  console.log(request.params);
  (requestProxy({
    url: `https://api.github.com/${request.params[0]}`,
    headers: {
      Authorization: `token ${process.env.GITHUB_TOKEN}`
    }
  }))(request, response);
}

app.get('/github/*', proxyGitHub);

app.listen(PORT, function(){
  console.log(`Server is running on port: ${PORT}`);
});
