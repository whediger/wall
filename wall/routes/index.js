var express = require('express');
var router = express.Router();
var knex = require('../db/knex');

/* GET home page. */
router.get('/', function(req, res, next) {
  knex('posts')
  .join('posts_users', 'posts.posts_id', '=', 'posts_users.post_id')
  .join('users', 'posts_users.user_id', '=', 'users.users_id')
  .select().then(function(posts){
    res.render('index', { list:posts });
  })
});

router.post('/', function(req, res, next) {
  knex('posts')
  .join('posts_users', 'posts.posts_id', '=', 'posts_users.post_id')
  .join('users', 'posts_users.user_id', '=', 'users.users_id')
  .select().then(function(posts){
    res.render('index', { list:posts });
  })
});

router.get('/:id/edit_post', function(req, res, next) {
  res.render('edit_post');
  // knex('posts')
  // .where('post_id', '=', req.body.post_id )
  // .then(funciton())
});

router.get('/create_post', function(req, res, next){
  knex('users')
  .select()
  .then(function(users){
    res.render('create_post', { list:users });
  })
});

router.get('/new_user', function(req, res, next){
    res.render('new_user');
});

module.exports = router;
