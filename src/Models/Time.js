const mongoose = require('mongoose');

const timeSchema = new mongoose.Schema({
  nome: String,
  anoFundacao: Number,
  pais: String,
  tecnico: String,
  jogadores: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Jogador' }]
});

const Time = mongoose.model('Time', timeSchema);

module.exports = Time;