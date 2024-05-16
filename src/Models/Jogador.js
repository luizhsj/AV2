const mongoose = require('mongoose');

const jogadorSchema = new mongoose.Schema({
  nome: String,
  idade: Number,
  posicao: String,
  nacionalidade: String,
  time: { type: mongoose.Schema.Types.ObjectId, ref: 'Time' }
});

const Jogador = mongoose.model('Jogador', jogadorSchema);

module.exports = Jogador;