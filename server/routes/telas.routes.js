const express = require('express');
const router = express.Router();

const tela =require('../controllers/telas.controller');  

router.get('/', tela.getTelas);
router.post('/', tela.createTela);
router.get('/:id', tela.getTela);
router.put('/:id', tela.editTela);
router.delete('/:id', tela.deleteTela);

module.exports = router;

