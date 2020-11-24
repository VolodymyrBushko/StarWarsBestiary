import React, {Component} from 'react';
import './people-page.css';

import {PersonList, PersonDetails} from '../sw-components';
import ErrorIndicator from '../error-indicator';
import SwapiService from '../../services/swapi-service';
import ErrorBoundry from '../error-boundry';
import Row from '../row';

export default class PeoplePage extends Component {

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

    const itemList = <PersonList
      onItemSelect={this.onItemSelect}>
      {({name, birthYear}) => `${name} (${birthYear})`}
    </PersonList>

    const personDetails =
      <PersonDetails selectedItem={this.state.selectedItem}/>

    return (
      <ErrorBoundry>
        <Row left={itemList} right={personDetails}/>
      </ErrorBoundry>
    );
  }

}
