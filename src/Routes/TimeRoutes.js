const express = require('express');
const timeController = require('../controllers/timeController');
const router = express.Router();

router.post('/times', timeController.createTime);
router.get('/times', timeController.getTimes);
router.get('/times/:id', timeController.getTime);
router.put('/times/:id', timeController.updateTime);
router.delete('/times/:id', timeController.deleteTime);

module.exports = router;