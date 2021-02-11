const express = require('express')
const router = express.Router()

const Departamento = require('../models/departamento.model')

router.get('/departamentos', async (req, res, next) => {  
    try {
        Departamento.query()
        .then(departamentos => {
            res.json(departamentos)
        })
    } catch (err) {    
      next(err);
    }
   
});
  
module.exports = router;