const { Model } = require('objection');
const knex = require('../config/knex');

Model.knex(knex)

class Departamento extends Model {
    static get tableName() {
      return 'departamentos';
    }

}
  
module.exports = Departamento;