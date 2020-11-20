import React, {Component} from 'react';
import './item-list.css';

import SwapiService from '../../services/swapi-service';
import Spinner from '../spinner';
import ErrorIndicator from '../error-indicator';

export default class ItemList extends Component {

  constructor(props) {
    super(props);
    this.swapiService = new SwapiService();
    this.state = {
      itemList: {},
      loading: true,
      error: false,
      selectedItem: null
    };
  }

  componentDidMount() {
    this.swapiService
      .getAllPeople()
      .then(this.onPeopleListReceive)
      .catch(this.onError);
  }

  onPeopleListReceive = itemList => {
    const firstItem = itemList[0].id;
    this.setState({
      itemList,
      error: false,
      loading: false,
      selectedItem: firstItem
    });
    this.props.onItemSelect(firstItem);
  }

  onError = () => {
    this.setState({error: true, loading: false});
  }

  renderList = itemList => {
    const items = itemList.map(this.renderItem);
    return <ul className="item-list list-group">{items}</ul>;
  }

  renderItem = ({id, name}) => {
    const isActive = +id === +this.state.selectedItem;
    return (
      <li
        key={id}
        className={`list-group-item ${isActive ? 'active' : ''}`}
        onClick={() => this.onItemClick(id)}
      >
        {name}
      </li>
    );
  }

  onItemClick = id => {
    this.setState({selectedItem: id});
    this.props.onItemSelect(id);
  }

  render() {

    const {itemList, loading, error} = this.state;
    const errorMessage = error ? <ErrorIndicator/> : null;
    const spinner = loading ? <Spinner/> : null;
    const elementList = !(loading || error) ? this.renderList(itemList) : null;

    return (
      <div className="item-list-wrapper">
        {spinner}
        {elementList}
        {errorMessage}
      </div>
    );
  }

}
