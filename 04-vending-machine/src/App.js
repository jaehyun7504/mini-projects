import React, { Component } from 'react';
import { NavLink, Switch, Route } from 'react-router-dom';

import './App.css';

import Home from './Home';
import Soda from './Soda';
import Chips from './Chips';
import Sardines from './Sardines';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <nav className="App-navigation">
            <ul className="App-list">
              <li className="App-item">
                <NavLink
                  className="App-link"
                  activeClassName="App-link-active"
                  exact
                  to="/"
                >
                  Home
                </NavLink>
              </li>
              <li className="App-item">
                <NavLink
                  className="App-link"
                  activeClassName="App-link-active"
                  exact
                  to="/soda"
                >
                  Soda
                </NavLink>
              </li>
              <li className="App-item">
                <NavLink
                  className="App-link"
                  activeClassName="App-link-active"
                  exact
                  to="/chips"
                >
                  Chips
                </NavLink>
              </li>
              <li className="App-item">
                <NavLink
                  className="App-link"
                  activeClassName="App-link-active"
                  exact
                  to="/sardines"
                >
                  Sardines
                </NavLink>
              </li>
            </ul>
          </nav>
        </header>
        <main className="App-main">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/soda" component={Soda} />
            <Route exact path="/chips" component={Chips} />
            <Route exact path="/sardines" component={Sardines} />
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;
