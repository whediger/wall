module.exports = {
  findIdByName(list, name) {
    for (var i = 0; i < list.length; i++) {
      var thing = list[i]
      if (name === thing.name || name === thing.title ) {
        return thing.id
      }
    }
  },
}
