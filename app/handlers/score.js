var express = require('express');
var router = express.Router();
var JsonFile = require('jsonfile');
var Util = require('util');

router.get('/', function (request, response) {
    response.send(readScoreFile());
});

router.post('/', function(request, response) {
    updateScores(buildScoreObject(request.body.username, parseInt(request.body.score)));
    response.send('200');
});


function updateScores (score) {
    var file = '../public/resources/scores.json';
    var actualState = readScoreFile();
    actualState.push(score);
    actualState.sort(function(a, b){return a.score- b.score});
    JsonFile.writeFileSync(file,actualState);

}

function buildScoreObject (username, score)  {
    return {
        username : username,
        score : score
    }
}

function readScoreFile() {
    var file = '../public/resources/scores.json';
    return JsonFile.readFileSync(file);
}

module.exports = router;
