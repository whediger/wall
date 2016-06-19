
exports.up = function(knex, Promise) {
    return knex.schema.createTable('posts', function(table){
      table.increments();
      table.timestamp('date').defaultTo(knex.fn.now());
      table.string('title');
      table.string('image_url');
      table.text('article');
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('posts');
};
