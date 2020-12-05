import React, {Component} from 'react';
import './app.css';

import Header from '../header';
import RandomPlanet from '../random-planet';
import PeoplePage from '../people-page';
import PlanetPage from '../planet-page';
import StarshipPage from '../starship-page';

import SwapiService from '../../services/swapi-service';
import {SwapiServiceProvider} from '../swapi-service-context';

import {BrowserRouter as Router, Route} from 'react-router-dom';

export default class App extends Component {

  constructor(props) {
    super(props);
    this.swapiService = new SwapiService();
  }

  render() {
    return (
      <SwapiServiceProvider value={this.swapiService}>
        <Router>
          <Header/>
          <div className="container">
            <div className="row mb-2">
              <div className="col-md-6">
                <RandomPlanet/>
              </div>
              <div className="col-md-6">
              </div>
            </div>

            <Route path="/people" component={PeoplePage}/>
            <Route path="/planets" component={PlanetPage}/>
            <Route path="/starships" component={StarshipPage}/>

          </div>
        </Router>
      </SwapiServiceProvider>
    );
  }

}
