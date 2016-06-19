
exports.seed = function(knex, Promise) {
  return knex('users').del()
  .then(function(){
    return Promise.join(
      // Inserts seed entries
      knex('users').insert({name: 'Joe Blow', email: 'joeblow@aol.com'}),
      knex('users').insert({name: 'Sally Mae', email: 'sally@businesswoman.com'}),
      knex('users').insert({name: 'Hector Rodreges', email: 'hector@dontspamme.com'})
    );
  });
};
