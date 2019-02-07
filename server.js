var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var path = require('path');
var router = express.Router();

app.use(express.static('public'))
app.use('/js', express.static(path.join(__dirname,'public')))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); 

app.post('/analyze', function(req,res) {
    console.log("Request ", req);
    console.log(req.body);
    // fetch("I need to get a loan");
    res.send("hello");
})

app.get('/getdata', function(req,res) {

    res.send({
        somedata: "data"
    })
})

router.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + "/index.html"));
})

app.get('/chequenfc', function(req,res) {
    res.sendFile(path.join(__dirname+"/depositbox.html"));
})

app.get('/users', function(req,res) {
    res.sendFile(path.join(__dirname+"/users.html"));
})

app.post('/customer-in', function (req, res) {
    console.log(req);
    // do shit with req
    res.send("Send response or display webpage");
})

app.get('/', router);

app.set('port', 8080);
app.listen(app.get('port'), function () {
    console.log('Server up: http://localhost:' + app.get('port'));
});