const Jogador = require('../models/jogador');

exports.createJogador = async (req, res) => {
  try {
    const jogador = new Jogador(req.body);
    await jogador.save();
    res.status(201).send(jogador);
  } catch (error) {
    console.error('Error creating jogador:', error);
    res.status(400).send(error);
  }
};

exports.getJogadores = async (req, res) => {
  try {
    const jogadores = await Jogador.find();
    res.send(jogadores);
  } catch (error) {
    console.error('Error fetching jogadores:', error);
    res.status(500).send(error);
  }
};

exports.getJogador = async (req, res) => {
  try {
    const jogador = await Jogador.findById(req.params.id);
    if (!jogador) {
      console.error('Jogador not found:', req.params.id);
      return res.status(404).send();
    }
    res.send(jogador);
  } catch (error) {
    console.error('Error fetching jogador:', error);
    res.status(500).send(error);
  }
};

exports.updateJogador = async (req, res) => {
  try {
    const jogador = await Jogador.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!jogador) {
      console.error('Jogador not found for update:', req.params.id);
      return res.status(404).send();
    }
    res.send(jogador);
  } catch (error) {
    console.error('Error updating jogador:', error);
    res.status(400).send(error);
  }
};

exports.deleteJogador = async (req, res) => {
  try {
    const jogador = await Jogador.findByIdAndDelete(req.params.id);
    if (!jogador) {
      console.error('Jogador not found for deletion:', req.params.id);
      return res.status(404).send();
    }
    res.send(jogador);
  } catch (error) {
    console.error('Error deleting jogador:', error);
    res.status(500).send(error);
  }
};