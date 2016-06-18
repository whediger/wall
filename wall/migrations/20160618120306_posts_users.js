
exports.up = function(knex, Promise) {
    return knex.schema.createTable('posts_users', function(table){
      table.integer('user_id');
      table.integer('post_id');
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('posts_users');
};
