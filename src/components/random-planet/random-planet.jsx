import React, {Component} from 'react';
import './random-planet.css';

import SwapiService from '../../services/swapi-service';

export default class RandomPlanet extends Component {

  constructor(props) {
    super(props);
    this.swapiService = new SwapiService();
    this.state = {planet: {}};
    this.updatePlanet();
  }

  onPlanetLoaded = planet => {
    this.setState({planet});
  }

  updatePlanet() {
    const id = Math.floor(Math.random() * 25) + 2;
    this.swapiService
      .getPlanet(id)
      .then(this.onPlanetLoaded);
  }

  render() {
    const {planet: {id, name, population, rotationPeriod, diameter}} = this.state;
    return (
      <div className="random-planet">
        <div className="planet-image">
          <img src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`}
               alt="planet"/>
        </div>
        <div className="planet-info">
          <h4 className="planet-title">{name}</h4>
          <ul className="planet-info-list">
            <li className="planet-info-item">
              Population: {population}
            </li>
            <li className="planet-info-item">
              Rotation Period: {rotationPeriod}
            </li>
            <li className="planet-info-item">
              Diameter: {diameter}
            </li>
          </ul>
        </div>
      </div>
    );
  }

}
