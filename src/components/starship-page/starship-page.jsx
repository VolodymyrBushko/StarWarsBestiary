import React, {Component} from 'react';
import './starship-page.css';

import {StarshipDetails, StarshipList} from '../sw-components';
import ErrorIndicator from '../error-indicator';
import SwapiService from '../../services/swapi-service';
import ErrorBoundry from '../error-boundry';
import Row from '../row';

export default class StarshipPage extends Component {

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

    const itemList = <StarshipList onItemSelect={this.onItemSelect}/>

    const starshipDetails =
      <StarshipDetails selectedItem={this.state.selectedItem}/>

    return (
      <ErrorBoundry>
        <Row left={itemList} right={starshipDetails}/>
      </ErrorBoundry>
    );
  }

}
