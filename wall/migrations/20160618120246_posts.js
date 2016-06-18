
exports.up = function(knex, Promise) {
    return knex.schema.createTable('posts', function(table){
      table.increments();
      table.string('date');
      table.string('title');
      table.string('image_url');
      table.string('article');
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('posts');
};
