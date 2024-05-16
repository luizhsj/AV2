const Partida = require('../Models/Partida');

exports.createPartida = async (req, res) => {
  try {
    const partida = new Partida(req.body);
    await partida.save();
    res.status(201).send(partida);
  } catch (error) {
    res.status(400).send(error);
  }
};

exports.getPartidas = async (req, res) => {
  try {
    const partidas = await Partida.find();
    res.send(partidas);
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.getPartida = async (req, res) => {
  try {
    const partida = await Partida.findById(req.params.id);
    if (!partida) return res.status(404).send();
    res.send(partida);
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.updatePartida = async (req, res) => {
  try {
    const partida = await Partida.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!partida) return res.status(404).send();
    res.send(partida);
  } catch (error) {
    res.status(400).send(error);
  }
};

exports.deletePartida = async (req, res) => {
  try {
    const partida = await Partida.findByIdAndDelete(req.params.id);
    if (!partida) return res.status(404).send();
    res.send(partida);
  } catch (error) {
    res.status(500).send(error);
  }
};