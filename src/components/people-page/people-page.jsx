import React, {Component} from 'react';
import './people-page.css';

import ItemList from '../item-list';
import ItemDetails from '../item-details';
import ErrorIndicator from '../error-indicator';
import SwapiService from '../../services/swapi-service';
import ErrorBoundry from '../error-boundry';
import Row from '../row';
import Record from '../record';

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

    const {getPerson, getPersonImage} = this.swapiService;

    const itemList = (
      <ItemList
        onItemSelect={this.onItemSelect}
        getData={this.swapiService.getAllPeople}
      >
        {({name, birthYear}) => `${name} (${birthYear})`}
      </ItemList>
    );

    const personDetails = (
      <ItemDetails
        itemId={this.state.selectedItem}
        getData={getPerson}
        getImageUrl={getPersonImage}>
        <Record field="gender" label="Gander"/>
        <Record field="birthYear" label="Birth year"/>
        <Record field="eyeColor" label="Eye color"/>
      </ItemDetails>
    );

    return (
      <ErrorBoundry>
        <Row left={itemList} right={personDetails}/>
      </ErrorBoundry>
    );
  }

}
