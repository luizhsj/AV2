const Time = require('../Models/Time');

exports.createTime = async (req, res) => {
  try {
    const time = new Time(req.body);
    await time.save();
    res.status(201).send(time);
  } catch (error) {
    res.status(400).send(error);
  }
};

exports.getTimes = async (req, res) => {
  try {
    const times = await Time.find();
    res.send(times);
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.getTime = async (req, res) => {
  try {
    const time = await Time.findById(req.params.id);
    if (!time) return res.status(404).send();
    res.send(time);
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.updateTime = async (req, res) => {
  try {
    const time = await Time.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!time) return res.status(404).send();
    res.send(time);
  } catch (error) {
    res.status(400).send(error);
  }
};

exports.deleteTime = async (req, res) => {
  try {
    const time = await Time.findByIdAndDelete(req.params.id);
    if (!time) return res.status(404).send();
    res.send(time);
  } catch (error) {
    res.status(500).send(error);
  }
};