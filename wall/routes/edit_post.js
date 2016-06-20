var express = require('express');
var router = express.Router();
var knex = require('../db/knex');


router.get('/:id', function(req, res, next){
  return knex('posts')
    .join('posts_users', 'posts.posts_id', '=', 'posts_users.post_id')
    .join('users', 'posts_users.user_id', '=', 'users.users_id')
    .where('post_id', '=', req.params.id).then(function(posts){
      res.render('edit_post', posts[0]);
  })
});

router.post('/:id', function(req, res, next){
  return knex('posts')
    .where('posts_id', '=', req.params.id)
    .update(req.body)
      .then(function(){
        console.log(req.params.id);
        res.redirect('/')
      })
})

module.exports = router;
