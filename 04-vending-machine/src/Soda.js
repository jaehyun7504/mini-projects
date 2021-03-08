import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './Soda.css';

class Soda extends Component {
  render() {
    return (
      <div className="Soda">
        <Link className="Soda-link" exact to="/">
          SODA! Go back!
        </Link>
      </div>
    );
  }
}

export default Soda;
