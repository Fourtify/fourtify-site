var express = require('express');
var router = express.Router();

/*
*   VIEWS
*/
// GET - Index
router.get('/*', function (req, res) {
    res.render("index");
});

module.exports = router;
