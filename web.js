var express = require('express');
var app = express();
var content = "Alex";
fs = require('fs');
fs.readFile('/etc/hosts', 'utf8', function (err,data) {
  if (err) {
    //return console.log(err);
 content = err;

  }
  //console.log(data);
content=data;
});

app.use(express.logger());

app.get('/', function(request, response) {
 // response.send('Hello World! 2 Alejandro you are awsom.. You are failing. vio te amoe');
response.send(content);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
