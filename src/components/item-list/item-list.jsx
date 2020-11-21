import React, {Component} from 'react';
import './item-list.css';

import Spinner from '../spinner';
import ErrorIndicator from '../error-indicator';

export default class ItemList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      itemList: {},
      loading: true,
      error: false
    };
  }

  componentDidMount() {
    const {getData} = this.props;
    getData()
      .then(this.onData)
      .catch(this.onError);
  }

  onData = itemList => {
    this.setState({
      itemList,
      error: false,
      loading: false,
    });
    this.props.onItemSelect(itemList[0].id);
  }

  onError = () => {
    this.setState({error: true, loading: false});
  }

  renderItemList = itemList => {
    const items = itemList.map(this.renderItem);
    return <ul className="item-list list-group">{items}</ul>;
  }

  renderItem = (item) => {
    const {id} = item;
    const isActive = +id === +this.state.selectedItem;
    return (
      <li
        key={id}
        className={`list-group-item ${isActive ? 'active' : ''}`}
        onClick={() => this.onItemClick(id)}
      >
        {this.props.children(item)}
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
    const elementList = !(loading || error) ? this.renderItemList(itemList) : null;

    return (
      <div className="item-list-wrapper">
        {spinner}
        {elementList}
        {errorMessage}
      </div>
    );
  }

}
