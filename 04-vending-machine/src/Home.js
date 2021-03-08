import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './Home.css';

class Home extends Component {
  render() {
    return (
      <div className="Home">
        <ul className="Home-list">
          <li className="Home-item">
            <Link className="Home-link" exact to="/soda">
              Soda
            </Link>
          </li>
          <li className="Home-item">
            <Link className="Home-link" exact to="/chips">
              Chips
            </Link>
          </li>
          <li className="Home-item">
            <Link className="Home-link" exact to="/sardines">
              Sardines
            </Link>
          </li>
        </ul>
      </div>
    );
  }
}

export default Home;
