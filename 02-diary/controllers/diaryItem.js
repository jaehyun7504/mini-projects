const DiaryItem = require('../models/diaryItem');

exports.getDiaryItems = async (req, res, next) => {
  try {
    const diaryItems = await DiaryItem.fetchAll();
    res.json(diaryItems);
  } catch (error) {
    throw error;
  }
};

exports.createDiaryItem = async (req, res, next) => {
  try {
    const diaryItem = new DiaryItem(req.body.title, req.body.body);
    await diaryItem.save();
    res.json(diaryItem);
  } catch (error) {
    throw error;
  }
};

exports.updateDiaryItem = async (req, res, next) => {
  try {
    const diaryItem = new DiaryItem(
      req.body.title,
      req.body.body,
      req.body._id
    );
    await diaryItem.save();
    res.json(diaryItem);
  } catch (error) {
    throw error;
  }
};

exports.deleteDiaryItem = async (req, res, next) => {
  try {
    await DiaryItem.deleteById(req.body._id);
    res.json({
      message: 'deleted',
    });
  } catch (error) {
    throw error;
  }
};
