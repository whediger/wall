var express = require('express');
var router = express.Router();
var knex = require('../db/knex');

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index');
});

router.get('/create_post', function(req, res, next){
    res.render('create_post');
});

router.get('/new_user', function(req, res, next){
    res.render('new_user');
});

module.exports = router;
