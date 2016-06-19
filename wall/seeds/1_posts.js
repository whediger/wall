
exports.seed = function(knex, Promise) {
  return knex('posts').del()
  .then(function(){
    return Promise.join(
      // Inserts seed entries
      knex('posts').insert({title: "great stuff",
      image_url: 'https://cdn.hackaday.io/images/7228921435486579635.gif',
      article: 'Photo booth occupy bitters seitan tofu paleo. Swag whatever +1, single-origin coffee etsy raw denim semiotics 3 wolf moon narwhal heirloom forage tilde offal affogato. Lumbersexual gentrify readymade church-key, art party meggings wayfarers cardigan tousled.'}),
      knex('posts').insert({title: "more stuff",
      image_url: 'http://img.gifmagazine.net/gifmagazine/images/704479/original.gif',
      article: 'Echo park schlitz bushwick pitchfork. Actually crucifix PBR&B, godard raw denim lo-fi celiac mustache before they sold out cardigan small batch cred. Flexitarian fanny pack offal VHS freegan, raw denim locavore disrupt hammock. Lo-fi blue bottle food truck, pabst before they sold out waistcoat tilde synth quinoa tacos brunch selvage wayfarers ramps next level. Street art poutine four loko put a bird on it, venmo synth slow-carb echo park listicle small batch heirloom meggings.'}),
      knex('posts').insert({title: "My thoughts on things",
      image_url: 'https://media.giphy.com/media/p2tZwsSzh924o/giphy.gif',
      article:'Sriracha salvia yuccie bushwick, mumblecore chillwave banjo paleo. Brunch street art iPhone, bushwick normcore gochujang flexitarian. Offal seitan PBR&B chartreuse green juice cornhole, pinterest stumptown butcher distillery polaroid banh mi. Tilde narwhal raw denim forage selfies gochujang artisan cliche, vinyl sustainable migas asymmetrical celiac. Kitsch affogato schlitz DIY, tote bag +1 lumbersexual mixtape master cleanse banjo gluten-free tattooed sartorial YOLO organic.'})
    );
  });
};
