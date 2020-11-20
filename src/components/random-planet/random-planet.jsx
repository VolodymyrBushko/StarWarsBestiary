import React, {Component} from 'react';
import './random-planet.css';

import SwapiService from '../../services/swapi-service';
import Spinner from '../spinner';

export default class RandomPlanet extends Component {

  constructor(props) {
    super(props);
    this.swapiService = new SwapiService();
    this.state = {
      planet: {},
      loading: true
    };
    this.updatePlanet();
  }

  onPlanetLoaded = planet => {
    this.setState({planet, loading: false});
  }

  updatePlanet() {
    const id = Math.floor(Math.random() * 25) + 2;
    this.swapiService
      .getPlanet(id)
      .then(this.onPlanetLoaded);
  }

  render() {
    const {planet, loading} = this.state;
    const spinner = loading ? <Spinner/> : null;
    const planetView = !loading ? <PlanetView planet={planet}/> : null;
    return (
      <div className="random-planet">
        {spinner}
        {planetView}
      </div>
    );
  }
}

const PlanetView = ({planet}) => {
  const {id, name, population, rotationPeriod, diameter} = planet;
  return (
    <React.Fragment>
      <div className="planet-image">
        <img src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`} alt="planet"/>
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
    </React.Fragment>
  );
}
