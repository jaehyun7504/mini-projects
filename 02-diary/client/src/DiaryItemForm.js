import React, { Component } from 'react';

import './DiaryItemForm.css';

class DiaryItemForm extends Component {
  constructor(props) {
    super(props);
    this.state = { title: '', body: '' };
    this.handleChange = this.handleChange.bind(this);
    this.handleCreateItem = this.handleCreateItem.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleCreateItem(e) {
    e.preventDefault();
    const newDiaryItem = { ...this.state };
    this.props.createItem(newDiaryItem);
    this.setState({ title: '', body: '' });
  }

  render() {
    return (
      <form className="DiaryItemForm" onSubmit={this.handleCreateItem}>
        <div className="DiaryItemForm-container">
          <label className="DiaryItemForm-label" htmlFor="title">
            Title:{' '}
          </label>
          <input
            className="DiaryItemForm-title"
            type="text"
            placeholder="Title"
            value={this.state.title}
            id="title"
            name="title"
            onChange={this.handleChange}
          />
          <label className="DiaryItemForm-label" htmlFor="body">
            Body:{' '}
          </label>
          <textarea
            className="DiaryItemForm-body"
            placeholder="Body"
            value={this.state.body}
            id="body"
            name="body"
            onChange={this.handleChange}
          />
        </div>
        <button className="DiaryItemForm-button" type="submit">
          Submit
        </button>
      </form>
    );
  }
}

export default DiaryItemForm;
