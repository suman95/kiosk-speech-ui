var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var path = require('path');
var router = express.Router();
app.use(express.static('public'))
app.use(bodyParser.json());

router.get('/', function(req,res) {
    res.sendFile(path.join(__dirname +"/index.html"));
})

router.post('/customer-in', function(req, res){
    console.log(req);
    // do shit with req
    res.send("Send response or display webpage");
})

app.get('/', router);

app.set('port', 8080);
app.listen(app.get('port'), function() {
    console.log('Server up: http://localhost:' + app.get('port'));
});