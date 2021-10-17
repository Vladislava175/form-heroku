//Install express server
const express = require('express');
const https = require('https')
//cors
require('cors')({origin: true});
const cors = require('cors');
const app = express();
app.use(cors());
// Serve only the static files form the dist directory
app.use(express.static('./dist/client-heroku'));
var users = ''

const options = {
  hostname: 'random-data-api.com',
  path: '/api/users/random_user?size=10',
  method: 'GET'
}
function getUsers() {

  callback = function (response) {
    var str = ''
    response.on('data', function (chunk) {
      str += chunk;
    });

    response.on('end', function () {
      users = str;
    });
  }

  var req = https.request(options, callback);
//This is the data we are posting, it needs to be a string or a buffer
  req.write("hello world!");
  req.end();
  return users;
}

app.get('/*', (req, res) =>
  res.sendFile('index.html', {root: 'dist/client-heroku/'}),
);
app.get("/random-users", (req, res, next) => {
  var u = getUsers()
  res.json(u)
});

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);
