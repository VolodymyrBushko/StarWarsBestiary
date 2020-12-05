import React, {Component} from 'react';
import './item-details.css';

import ItemDetailsView from '../item-details-view';
import ErrorIndicator from '../error-indicator';
import Spinner from '../spinner';

export default class ItemDetails extends Component {

  constructor(props) {
    super(props);
    this.state = {
      item: null,
      image: null,
      loading: true,
      error: false
    };
  }

  componentDidMount() {
    this.updateItem();
  }

  componentDidUpdate(prevProps) {
    if (+this.props.itemId !== +prevProps.itemId) {
      this.updateItem();
    }
  }

  onData = item => {
    this.setState({
      item,
      image: this.props.getImageUrl(item),
      loading: false,
      error: false
    });
  }

  onError = () => {
    this.setState({
      loading: false,
      error: true
    });
  }

  updateItem = () => {
    const {itemId, getData} = this.props;
    getData(itemId)
      .then(this.onData)
      .catch(this.onError);
  }

  render() {

    const {item, image, loading, error} = this.state;
    const spinner = loading ? <Spinner/> : null;
    const errorMessage = error ? <ErrorIndicator/> : null;
    const itemDetailsView = !(loading || error) ?
      <ItemDetailsView item={item} image={image} fields={this.props.children}/> : null;

    return (
      <div className="item-details">
        {spinner}
        {errorMessage}
        {itemDetailsView}
      </div>
    );
  }

}
