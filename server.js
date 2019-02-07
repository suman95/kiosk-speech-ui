var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var path = require('path');
var router = express.Router();
const request = require('request')
app.use(express.static('public'))
app.use(bodyParser.json());

function fetch(queryString) {
    request.post('https://api.dialogflow.com/v1/query?v=20150910', {
        json: {
            contexts: [],
            lang: "en",
            query: queryString,
            sessionId: "12345",
            timezone: "America/New_York"
        },
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer 56a88de7f0b8456bbdbe6d8bd696708e'
        }
    }, (error, res, body) => {
        if (error) {
            console.error(error)
            return
        }
        console.log(`statusCode: ${res.statusCode}`)
        console.log(body)
    })
}
app.post('/clicked', function(req,res) {
    console.log(req.body);
    console.log("called this...");
    //fetch("I need to get a loan");
    res.send("hello");
})

router.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + "/index.html"));
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