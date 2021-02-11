const knex = require('knex')({
    client: 'mysql2',
    connection: {
      host : 'localhost',
      user : 'root',
      password : 'admin',
      database : 'test'
    },
    pool: { min: 0, max: 7 }
  });

module.exports = knex;