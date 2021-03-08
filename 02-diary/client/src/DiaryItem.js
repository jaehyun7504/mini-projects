import React, { Component } from 'react';

import './DiaryItem.css';

class DiaryItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isEditing: false,
      title: this.props.title,
      body: this.props.body,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleDeleteItem = this.handleDeleteItem.bind(this);
    this.handleUpdateItem = this.handleUpdateItem.bind(this);
    this.toggleIsEditing = this.toggleIsEditing.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleDeleteItem() {
    this.props.deleteItem(this.props.id);
  }

  handleUpdateItem(e) {
    e.preventDefault();
    this.props.updateItem(this.props.id, {
      title: this.state.title,
      body: this.state.body,
    });
    this.setState({ isEditing: false });
  }

  toggleIsEditing() {
    this.setState(state => ({ isEditing: !state.isEditing }));
  }

  render() {
    const DiaryItem = this.state.isEditing ? (
      <form className="DiaryItem" onSubmit={this.handleUpdateItem}>
        <div className="DiaryItem-inputBox">
          <label className="DiaryItem-label" htmlFor="title">
            Title:{' '}
          </label>
          <input
            className="DiaryItem-titleForm"
            type="text"
            placeholder="Title"
            value={this.state.title}
            id="title"
            name="title"
            onChange={this.handleChange}
          />
          <label className="DiaryItem-label" htmlFor="body">
            Body:{' '}
          </label>
          <textarea
            className="DiaryItem-bodyForm"
            placeholder="Body"
            value={this.state.body}
            id="body"
            name="body"
            onChange={this.handleChange}
          />
        </div>
        <button className="DiaryItem-button" type="submit">
          Submit
        </button>
      </form>
    ) : (
      <div className="DiaryItem">
        <div className="DiaryItem-diaryBox">
          <h3 className="DiaryItem-title">{this.props.title}</h3>
          <p className="DiaryItem-body">{this.props.body}</p>
        </div>
        <div className="DiaryItem-buttonBox">
          <button
            className="DiaryItem-button"
            type="button"
            onClick={this.toggleIsEditing}
          >
            Update
          </button>
          <button
            className="DiaryItem-button"
            type="button"
            onClick={this.handleDeleteItem}
          >
            Delete
          </button>
        </div>
      </div>
    );

    return DiaryItem;
  }
}

export default DiaryItem;
