
exports.up = function(knex, Promise) {
    return knex.schema.createTable('posts_users', function(table){
      table.integer('users_id').references('users.id');
      table.integer('posts_id').references('posts.id');
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('posts_users');
};
