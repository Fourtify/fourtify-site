var environment = process.env.NODE_ENV;
var express = require('express');
var router = express.Router();

var request = require('request');

var config = require('../config/config.json')[environment];
var API_URL = config.apiUrl;

/*
*   VIEWS
*/
// GET - signup
router.get('/signup', function (req, res) {
    res.render("signup");
});

// POST - signup
router.post('/signup', function (req, res) {
    request({
            method: "POST",
            uri: API_URL+"/providers",
            json: {
                provider:{
                    name: req.body.company,
                    domain: req.body.domain
                },
                employee:{
                    name:{
                        first: req.body.fname,
                        last: req.body.lname
                    },
                    title: "owner",
                    email: req.body.email,
                    password:req.body.password
                }
            }
        },
        function (error, response, body) {
            if (error) {
                return res.status(500).send({_code:"SITE002", _msg:"Connection to API failed. Please try again later."});
            }
            else if(response.statusCode == 500){
                res.status(response.statusCode).send(body);
            }
            else{
                body.success = "success";
                res.status(200).send(body);
            }
        });

});

// GET - Index
router.get('/*', function (req, res) {
    res.render("index");
});

module.exports = router;
