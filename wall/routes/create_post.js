var express = require('express');
var router = express.Router();
var knex = require('../db/knex');

/* GET home page. */
router.get('/', function(req, res, next){
    res.render('index');

});

router.post('/', function(req, res, next){
  knex('posts')
  .insert(req.body)
  .then(function(data){
    console.log(data);

  })
      res.redirect('/');

});

module.exports = router;
