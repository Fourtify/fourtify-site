var express = require('express');
var router = express.Router();

/*
*   VIEWS
*/
// GET - signup
router.get('/signup', function (req, res) {
    res.render("signup");
});

// GET - Index
router.get('/*', function (req, res) {
    res.render("index");
});

module.exports = router;
