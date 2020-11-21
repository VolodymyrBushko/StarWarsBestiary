import React, {Component} from 'react';
import './app.css';

import Header from '../header';
import RandomPlanet from '../random-planet';
import ItemList from '../item-list';
import PersonDetails from '../person-details';

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedItem: 1
    };
  }

  onItemSelect = id => {
    this.setState({selectedItem: id});
  }

  render() {
    return (
      <div>
        <Header/>
        <div className="container">
          <div className="row mb-2">
            <div className="col-md-6">
              <RandomPlanet/>
            </div>
            <div className="col-md-6">

            </div>
          </div>
          <div className="row mb-2">
            <div className="col-md-6">
              <ItemList onItemSelect={this.onItemSelect}/>
            </div>
            <div className="col-md-6">
              <PersonDetails itemId={this.state.selectedItem}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
