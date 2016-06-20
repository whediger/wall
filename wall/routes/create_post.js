var express = require('express');
var router = express.Router();
var knex = require('../db/knex');

/* GET home page. */
router.get('/', function(req, res, next){
    res.render('index');

});

router.post('/', function(req, res, next){
  //console.log(req.body.title);
  Promise.all([
    knex('posts')
    .returning('posts_id')
    .insert({ title: req.body.title, image_url: req.body.image_url, article: req.body.article }),
    knex('posts_users')
    .returning('posts_users_id')
    .insert({ user_id: req.body.users_id })
  ])
  .then(function(data){
    console.log(data[0][0]);
    console.log(data[1][0]);
    return knex('posts_users')
    .where( 'posts_users_id', '=', data[1][0] )
    .update({ post_id: data[0][0] })
  })
  .then(function(data){
    //console.log(data);
    res.redirect('/');
  })
});



module.exports = router;
