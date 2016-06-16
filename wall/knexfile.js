// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection: {
      filename: 'postgress://localhost/wall_db'
    }
  },

  production: {
    client: 'postgresql',
    connection: DATABASE_URL<<<<<<<bla bla>>>>>>>>>>>>
  }

};
