
exports.seed = function(knex, Promise) {
  return knex('posts').del()
  .then(function(){
    return Promise.join(
      // Inserts seed entries
      knex('posts').insert({title: "great stuff", date: '4/5/2016',
      image: 'https://cdn.hackaday.io/images/7228921435486579635.gif'}),
      knex('posts').insert({title: "more stuff", date: '3/4/2015',
      image: 'http://img.gifmagazine.net/gifmagazine/images/704479/original.gif'}),
      knex('posts').insert({title: "great stuff", date: '4/5/2016',
      image: 'https://media.giphy.com/media/p2tZwsSzh924o/giphy.gif'})
    );
  });
};
