const mongoose = require('mongoose');

const partidaSchema = new mongoose.Schema({
  data: String,
  local: String,
  placar: String,
  timeCasa: { type: mongoose.Schema.Types.ObjectId, ref: 'Time' },
  timeVisitante: { type: mongoose.Schema.Types.ObjectId, ref: 'Time' }
});

const Partida = mongoose.model('Partida', partidaSchema);

module.exports = Partida;