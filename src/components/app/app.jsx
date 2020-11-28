import React, {Component} from 'react';
import './app.css';

import Header from '../header';
import RandomPlanet from '../random-planet';
import PeoplePage from '../people-page';

import SwapiService from '../../services/swapi-service';
import {SwapiServiceProvider} from '../swapi-service-context';

export default class App extends Component {

  constructor(props) {
    super(props);
    this.swapiService = new SwapiService();
  }

  render() {
    return (
      <SwapiServiceProvider value={this.swapiService}>
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
      </SwapiServiceProvider>
    );
  }

}
