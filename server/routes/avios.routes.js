const express = require('express');
const router = express.Router();

const avio =require('../controllers/avios.controller');  

router.get('/', avio.getAvios);
router.post('/', avio.createAvio);
router.get('/:id', avio.getAvio);
router.put('/:id', avio.editAvio);
router.delete('/:id', avio.deleteAvio);

module.exports = router;

