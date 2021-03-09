import React, { Component } from 'react';
import axios from 'axios';

import './Diary.css';

import DiaryItem from './DiaryItem';
import DiaryItemForm from './DiaryItemForm';

axios.defaults.baseURL = 'http://localhost:5000/api/';
axios.defaults.headers.post['Content-Type'] = 'application/json';

class Diary extends Component {
  constructor(props) {
    super(props);
    this.state = { diaryItems: [] };
    this.createItem = this.createItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    this.updateItem = this.updateItem.bind(this);
  }

  async getDiary() {
    const response = await axios.get('/get/');
    const data = response.data;
    this.setState({ diaryItems: data });
  }

  async componentDidMount() {
    await this.getDiary();
  }

  async createItem(diaryItem) {
    await axios.post(
      'http://localhost:5000/api/create/',
      JSON.stringify(diaryItem)
    );
    await this.getDiary();
  }

  async deleteItem(id) {
    this.setState(state => ({
      diaryItems: state.diaryItems.filter(diaryItem => diaryItem.id !== id),
    }));
  }

  async updateItem(id, updatedItem) {
    this.setState(state => ({
      diaryItems: state.diaryItems.map(diaryItem => {
        if (diaryItem.id === id) return { ...updatedItem, id: diaryItem.id };
        return diaryItem;
      }),
    }));
  }

  render() {
    const diaryItems =
      this.state.diaryItems.length > 0 ? (
        this.state.diaryItems.map(diaryItem => (
          <DiaryItem
            key={diaryItem._id}
            id={diaryItem._id}
            title={diaryItem.title}
            body={diaryItem.body}
            deleteItem={this.deleteItem}
            updateItem={this.updateItem}
          />
        ))
      ) : (
        <h3 className="Diary-empty">There is no written diary...</h3>
      );

    return (
      <div className="Diary">
        <h1 className="Diary-title">My Diary</h1>
        <div className="Diary-container">
          <DiaryItemForm createItem={this.createItem} />
          <div className="Diary-diaryItems">{diaryItems}</div>
        </div>
      </div>
    );
  }
}

export default Diary;
