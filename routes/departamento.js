const express = require('express')
const router = express.Router()
const paging = require('../util/paging')
const Departamento = require('../models/departamento.model')

router.get('/departamentos', async (req, res, next) => {  
  try {
    const page = req.query.page && req.query.page > 0  ? req.query.page : 1;  
    const perPage = 15;
    let result = await Departamento
    .query()
    .orderBy('departamento')
    .page(page -1, perPage);
    res.json(paging(result, page, perPage));
  } catch (err) {    
    next(err);
  }
   
});

router.post('/departamentos', async (req, res, next) => {  
  try {
    const data = {...req.body};
    const departamento = await Departamento.query().insert(data);
    res.location(`/api/departamentos/${departamento.id}`)
    .status(201).json(departamento);
  } catch (err) {    
    next(err);
  }
 
});
  
module.exports = router;