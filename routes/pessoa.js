const express = require('express')
const router = express.Router()
const Pessoa = require('../models/pessoa.model')

const paging = function(result, page, perPage) {
  result.last_page = Math.ceil(result.total / perPage);
  result.per_page =  perPage;
  result.current_page =  page; 
  const offset = (page - 1) * perPage;   
  result.from = offset;
  result.to =  offset + result.results.length;
  return result;
};

router.get('/pessoas', async (req, res, next) => {  
  try {
    const page = req.query.page && req.query.page > 0  ? req.query.page : 1;  
    const perPage = 15;
    let result = await Pessoa
    .query()
    .withGraphFetched('departamento')
    .orderBy('nome')
    .page(page -1, perPage);
    res.json(paging(result, page, perPage));
  } catch (err) {    
    next(err);
  }
   
});
  
module.exports = router;