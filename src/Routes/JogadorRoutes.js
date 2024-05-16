const express = require('express');
const jogadorController = require('../controllers/jogadorController');
const router = express.Router();

router.post('/jogadores', jogadorController.createJogador);
router.get('/jogadores', jogadorController.getJogadores);
router.get('/jogadores/:id', jogadorController.getJogador);
router.put('/jogadores/:id', jogadorController.updateJogador);
router.delete('/jogadores/:id', jogadorController.deleteJogador);

module.exports = router;