const express = require('express');
const partidaController = require('../controllers/partidaController');
const router = express.Router();

router.post('/partidas', partidaController.createPartida);
router.get('/partidas', partidaController.getPartidas);
router.get('/partidas/:id', partidaController.getPartida);
router.put('/partidas/:id', partidaController.updatePartida);
router.delete('/partidas/:id', partidaController.deletePartida);

module.exports = router;