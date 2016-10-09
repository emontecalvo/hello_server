var express = require('express');

var app = express();

app.get('/', function(request, response) {
    response.send("Hello World");
});

app.get('/:firstname/:lastname', function(request, response) {
    var first = request.params.firstname;
    var last = request.params.lastname;
    response.send(["Hello", first, last].join(" "));
});

app.get('/jedi/:firstname/:lastname', function(request, response) {
    var first = request.params.firstname.substring(0, 2);
    var last = request.params.lastname.substring(0, 3);
    var jedi = last + first
    response.send(["Hello", jedi].join(" "));
});



// for c9.io:
// app.listen(process.env.PORT || 8080, process.env.IP);

app.listen(8080);

// visit http://localhost:8080/ in browser
