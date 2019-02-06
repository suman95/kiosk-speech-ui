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
app.get('/', router);

app.set('port', 8080);
app.listen(app.get('port'), function() {
    console.log('Server up: http://localhost:' + app.get('port'));
});