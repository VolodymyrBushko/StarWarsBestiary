import React, {Component} from 'react';
import './people-page.css';

import ItemList from '../item-list';
import PersonDetails from '../person-details';
import ErrorIndicator from '../error-indicator';
import SwapiService from '../../services/swapi-service';
import Row from '../row';

export default class PeoplePage extends Component {

  constructor(props) {
    super(props);
    this.swapiService = new SwapiService();
    this.state = {
      selectedItem: 1,
      error: false
    };
  }

  componentDidCatch() {
    this.setState({error: true});
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
        renderItem={({name, gender, birthYear}) => `${name} (${gender}, ${birthYear})`}
      />
    );

    const personDetails = (
      <PersonDetails itemId={this.state.selectedItem}/>
    );

    return (
      <Row left={itemList} right={personDetails}/>
    );
  }

}
