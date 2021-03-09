const express = require('express');

const diaryItemController = require('../controllers/diaryItem');

const router = express.Router();

router.get('/get', diaryItemController.getDiaryItems);

router.post('/create', diaryItemController.createDiaryItem);

router.post('/update', diaryItemController.updateDiaryItem);

router.post('/delete', diaryItemController.deleteDiaryItem);

module.exports = router;
