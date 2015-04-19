var express = require('express');
var router = express.Router();

router.get('/', function (request, response) {
    var i = 100;
    var mockResponse = [
        {"johan": i++},
        {"Yunior": i++},
        {"Andres": i++},
        {"Yazaida": i++},
        {"Maca": i++},
        {"Julia": i++},
        {"Yra": i++},
        {"Ramclen": i++},
        {"Braulio": i++},
        {"Monica": i++}
    ];
    response.send(mockResponse);
});

module.exports = router;
