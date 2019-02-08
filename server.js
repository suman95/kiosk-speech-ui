var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var path = require('path');
var router = express.Router();
var multer  = require('multer');

var upload = multer({ dest: __dirname + '/public/uploads/' });
var type = upload.single('upl');

app.use(express.static('public'))
// app.use('/js', express.static(path.join(__dirname,'public')))
app.use(bodyParser.json());

app.set('views', path.join(__dirname+"/views"));
app.set('view engine','ejs');
app.post('/analyze', function(req,res) {
    console.log("Request ", req);
    console.log(req.body.text);
    res.render("analyze", { title: 'Hey', message: req.body.text });
    res.send("hello");
});

app.post('/api/test', type, function (req, res) {
    console.log(req.body);
    console.log(req.file);
    // do stuff with file
    res.send({"status": 200})
 });

app.post('/api/test', type, function (req, res) {
    console.log(req.body);
    console.log(req.file);
    // do stuff with file
    res.send({"status": 200})
 });

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

app.get('/userprofile', function(req,res) {
    res.sendFile(path.join(__dirname+"/userprofile.html"))
})

app.get('/', router);

app.set('port', 8080);
app.listen(app.get('port'), function () {
    console.log('Server up: http://localhost:' + app.get('port'));
});
