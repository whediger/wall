
exports.up = function(knex, Promise) {
    return knex.schema.createTable('posts_users', function(table){
      table.integer('user_id').references('users.users_id').onDelete('CASCADE');
      table.integer('post_id').references('posts.posts_id').onDelete('CASCADE');
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('posts_users');
};
