import React, { Component } from 'react';
import classes from './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Countdown from './containers/countdown/countdown';
import CoinFlip from './containers/coinFlip/coinFlip';
import Header from './layout/header/header';
import user from './assets/img/nacho.jpg';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Header />
          <div className={classes.App}>
            <Route path="/" exact render={() => (
              <div>
                <h1>AIMS MEXICO TEST</h1>
                <img src={user} alt="nacho" />
                <p><i className="fas fa-user"></i> - Ignacio Sainz Guerra</p>
                <p><i className="fas fa-phone"></i> - 3336763002</p>
                <p><i className="fas fa-at"></i> - ignacio.sguerra@gmail.com</p>
              </div>
            )} />
            <Route path="/ex1" exact component={Countdown}/>
            <Route path="/ex2" exact component={CoinFlip}/>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
