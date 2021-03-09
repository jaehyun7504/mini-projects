const mongodb = require('mongodb');
const getDb = require('../utils/database').getDb;

class DiaryItem {
  constructor(title, body, id) {
    this.title = title;
    this.body = body;
    this._id = id ? new mongodb.ObjectId(id) : null;
  }

  // CREATE OR UPDATE
  save() {
    const db = getDb();
    const dbOp = this._id
      ? db
          .collection('diary-items')
          .updateOne({ _id: this._id }, { $set: this })
      : db.collection('diary-items').insertOne(this);
    return dbOp.catch(error => console.error(error));
  }

  // GET
  static fetchAll() {
    const db = getDb();
    return db
      .collection('diary-items')
      .find()
      .toArray()
      .catch(error => console.error(error));
  }

  // DELETE
  static deleteById(id) {
    const db = getDb();
    return db
      .collection('diary-items')
      .deleteOne({ _id: new mongodb.ObjectId(id) })
      .catch(error => console.error(error));
  }
}

module.exports = DiaryItem;
