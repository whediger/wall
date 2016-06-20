
exports.up = function(knex, Promise) {
    return knex.schema.createTable('users', function(table){
      table.increments('users_id');
      table.string('name');
      table.string('email');
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('users');
};
