import React, {Component} from 'react';
import './people-page.css';

import ItemList from '../item-list';
import ItemDetails from '../item-details';
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

    const itemList = (
      <ItemList
        onItemSelect={this.onItemSelect}
        getData={this.swapiService.getAllPeople}
      >
        {({name, birthYear}) => `${name} (${birthYear})`}
      </ItemList>
    );

    const personDetails = (
      <ItemDetails itemId={this.state.selectedItem}/>
    );

    return (
      <ErrorBoundry>
        <Row left={itemList} right={personDetails}/>
      </ErrorBoundry>
    );
  }

}
