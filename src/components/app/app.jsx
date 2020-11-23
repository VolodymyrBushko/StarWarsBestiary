import React, {Component} from 'react';
import './app.css';

import Header from '../header';
import RandomPlanet from '../random-planet';
import PeoplePage from '../people-page';

export default class App extends Component {

  render() {
    return (
      <div>
        <Header/>
        <div className="container">
          <div className="row mb-2">
            <div className="col-md-6">
              <RandomPlanet/>
            </div>
            <div className="col-md-6">
            </div>
          </div>
          <PeoplePage/>
        </div>
      </div>
    );
  }

}
