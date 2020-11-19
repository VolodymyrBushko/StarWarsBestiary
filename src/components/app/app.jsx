import React, {Component} from 'react';
import './app.css';

import Header from '../header';
import RandomPlanet from '../random-planet';
import ItemList from '../item-list';
import PersonDetails from '../person-details';

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
          <div className="row mb-2">
            <div className="col-md-6">
              <ItemList/>
            </div>
            <div className="col-md-6">
              <PersonDetails/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
