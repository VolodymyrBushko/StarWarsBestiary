import React, {Component} from 'react';
import './planets-page.css';
import ItemList from '../item-list';
import PersonDetails from '../person-details';
import ErrorIndicator from '../error-indicator';
import SwapiService from '../../services/swapi-service';

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

    return (
      <div className="people-page row mb-2">
        <div className="col-md-6">
          <ItemList
            onItemSelect={this.onItemSelect}
            getData={this.swapiService.getAllPeople}
            renderItem={({name, gender, birthYear}) => `${name} (${gender}, ${birthYear})`}
          />
        </div>
        <div className="col-md-6">
          <PersonDetails itemId={this.state.selectedItem}/>
        </div>
      </div>
    );
  }

}
