import React, {Component} from 'react';
import './planet-page.css';

import {PlanetList, PlanetDetails} from '../sw-components';
import ErrorIndicator from '../error-indicator';
import SwapiService from '../../services/swapi-service';
import ErrorBoundry from '../error-boundry';
import Row from '../row';

export default class PlanetPage extends Component {

  constructor(props) {
    super(props);
    this.swapiService = new SwapiService();
    this.state = {
      selectedItem: 1
    };
  }

  onItemSelect = id => {
    this.setState({selectedItem: id});
  }

  render() {

    if (this.state.error) {
      return <ErrorIndicator/>;
    }

    const itemList = <PlanetList onItemSelect={this.onItemSelect}/>

    const planetDetails =
      <PlanetDetails selectedItem={this.state.selectedItem}/>

    return (
      <ErrorBoundry>
        <Row left={itemList} right={planetDetails}/>
      </ErrorBoundry>
    );
  }

}
