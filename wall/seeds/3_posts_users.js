var _ = require('lodash')
var findIdByName = require("../helper")

//see 3_host_parasite file for an example

exports.seed = function(knex, Promise) {
  return knex('posts_users').del()
  .then(function(){
    return Promise.all([
      knex('users'),
      knex('posts')
    ])
  })
  .then(function(data){

    var users = data[0];
    var posts = data[1];
    
    return Promise.all([
      knex('posts_users').insert({user_id: findIdByName.findIdByName(users, "Joe Blow"), post_id: findIdByName.findIdByName(posts, "great stuff")}),
      knex('posts_users').insert({user_id: findIdByName.findIdByName(users, "Sally Mae"), post_id: findIdByName.findIdByName(posts, "more stuff")}),
      knex('posts_users').insert({user_id: findIdByName.findIdByName(users, "Hector Rodreges"), post_id: findIdByName.findIdByName(posts, "My thoughts on things")})
    ]);
  })
  .then(function(){
    return knex("posts")
      .select(["users.name as User", "posts.title as Posts"])
      .join("posts_users", function () {
        this.on("posts_users.post_id", "=", "posts.id")
      })
      .join("users", function () {
        this.on("posts_users.user_id", "=", "users.id")
      })
      // .where("host.name", "=", "cat")
      .then(function (joinedTable) {
        console.log(_.groupBy(joinedTable, "Post"))
      })
  })
};
