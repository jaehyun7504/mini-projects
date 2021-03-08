import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './Chips.css';

class Chips extends Component {
  constructor(props) {
    super(props);
    this.state = { bags: [] };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(state => {
      const x = Math.floor(Math.random() * (window.innerWidth - 200)) + 1;
      const y = Math.floor(Math.random() * (window.innerHeight - 200)) + 1;
      return { bags: [...state.bags, { x: x, y: y }] };
    });
  }

  render() {
    const bags = this.state.bags.map(bag => (
      <img
        src="https://images-na.ssl-images-amazon.com/images/I/81vJyb43URL._SL1500_.jpg"
        alt={`Bag (${bag.x}, ${bag.y})`}
        style={{
          height: '200px',
          position: 'absolute',
          top: bag.y,
          left: bag.x,
        }}
      />
    ));

    return (
      <div className="Chips">
        <div className="Chips-container">
          <h1 className="Chips-number">{this.state.bags.length}</h1>
          <button className="Chips-button" onClick={this.handleClick}>
            EAT!
          </button>
          <Link className="Chips-link" exact to="/">
            CHIPS! Go back!
          </Link>
        </div>
        <div className="Chips-bags">{bags}</div>
      </div>
    );
  }
}

export default Chips;
