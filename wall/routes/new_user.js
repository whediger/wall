var express = require('express');
var router = express.Router();
var knex = require('../db/knex');

/* GET home page. */
router.get('/', function(req, res, next){
  res.render('index');
});

router.post('/', function(req, res, next){
  knex('users').insert(req.body).then(function(){
    res.redirect('/');
  })
});

module.exports = router;
