const mongodb = require('mongodb');

class DiaryItem {
  constructor(title, body, id) {
    this._id = id ? new mongodb.ObjectId(id) : null;
    this.title = title;
    this.body = body;
  }

  // CREATE OR UPDATE
  save() {}

  // GET
  fetchAll() {}

  // DELETE
  deleteById(id) {}
}

module.exports = DiaryItem;
