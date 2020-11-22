import React, {Component} from 'react';
import './item-details.css';

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
    this.setState(() => {
      const {itemId, getData} = this.props;
      getData(itemId)
        .then(this.onData)
        .catch(this.onError);
      return {
        loading: true,
        error: false
      };
    });
  }

  render() {

    const {item, image, loading, error} = this.state;
    const spinner = loading ? <Spinner/> : null;
    const errorMessage = error ? <ErrorIndicator/> : null;
    const itemDetailsView = !(loading || error) ?
      <ItemDetailsView item={item} image={image} fields={this.props.children}/> : null;

    return (
      <div className="item-details-wrapper">
        {spinner}
        {errorMessage}
        {itemDetailsView}
      </div>
    );
  }

}

const ItemDetailsView = ({item, image, fields}) => {
  return (
    <div className="item-details card" style={{width: '20rem'}}>
      <img
        className="card-img-top icon"
        src={image}
        alt="person"/>
      <div className="card-body">
        <h4 className="card-title">{item.name}</h4>
        {React.Children.map(fields, field => {
          return React.cloneElement(field, {item});
        })}
      </div>
    </div>
  );
}
