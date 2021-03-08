import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './Sardines.css';

class Sardines extends Component {
  render() {
    return (
      <div className="Sardines">
        <Link className="Sardines-link" exact to="/">
          SARDINES! Go back!
        </Link>
      </div>
    );
  }
}

export default Sardines;
