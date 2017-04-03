var express = require('express');
var router = express.Router();

var elastiSvc = require('../models/elasticService');

module.exports = {
    elastiService : {
        search: function (req, res) {
            console.log("req.query.text " + req.query.text); 
            var result = elastiSvc.elasticlunr.search(req.query.text);
            res.send(JSON.stringify(result));
        }
    }
}