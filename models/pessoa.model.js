const { Model } = require('objection');
const knex = require('../config/knex');

Model.knex(knex)

class Pessoa extends Model {
    static get tableName() {
      return 'pessoas';
    }

    static get relationMappings() {      
      const Departamento = require('./departamento.model');
		return {
			departamento: {
				relation: Model.BelongsToOneRelation,
				modelClass: Departamento,
				join: {
                    from: 'pessoas.departamento_id',
                    to: 'departamentos.id'
				},
			},
		};
    }

}
  
module.exports = Pessoa;