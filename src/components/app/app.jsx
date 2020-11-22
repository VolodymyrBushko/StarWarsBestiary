import React, {Component} from 'react';
import './app.css';

import Header from '../header';
import RandomPlanet from '../random-planet';
import PeoplePage from '../people-page';
import Row from '../row';
import ItemDetails from '../item-details';
import SwapiService from '../../services/swapi-service';

export default class App extends Component {

  constructor(props) {
    super(props);
    this.swapiService = new SwapiService();
  }

  render() {

    const {getPerson, getStarship, getPersonImage, getStarshipImage} = this.swapiService;

    const personDetails = (
      <ItemDetails
        itemId={11}
        getData={getPerson}
        getImageUrl={getPersonImage}
      />
    );

    const starshipDetails = (
      <ItemDetails
        itemId={5}
        getData={getStarship}
        getImageUrl={getStarshipImage}
      />
    );

    return (
      <div>
        <Header/>
        <div className="container">
          <div className="row mb-2">
            <div className="col-md-6">
              {/*<RandomPlanet/>*/}
            </div>
            <div className="col-md-6">
            </div>
          </div>
          {/*<PeoplePage/>*/}
          <Row
            left={personDetails}
            right={starshipDetails}
          />
        </div>
      </div>
    );
  }
}
