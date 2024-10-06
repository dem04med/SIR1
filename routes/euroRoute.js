const express = require('express');
const router = express.Router();
const euroController = require('../controllers/euroController');


// rota para gerar nova chave

router.get('/', (req, res) => {
    res.status(200).send({
        status: 'sucessfull'
    })
});

router.get('/key', euroController.getKey);  //endpoint para gerar uma nova chave


module.exports = router;