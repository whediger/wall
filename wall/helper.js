module.exports = {
  findIdByName(list, name) {
    for (var i = 0; i < list.length; i++) {
      var thing = list[i]

      if (name === thing.name || name === thing.title ) {
        if (typeof thing.users_id != 'undefined')
          return thing.users_id;
        if (typeof thing.posts_id != 'undefined')
          return thing.posts_id;
      }
    }
  },
}
