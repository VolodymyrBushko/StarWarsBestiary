import React, {Component} from 'react';

import ErrorIndicator from '../../error-indicator';
import Spinner from '../../spinner';

const withData = View => {
  return class extends Component {

    constructor(props) {
      super(props);
      this.state = {
        itemList: {},
        loading: true,
        error: false,
        selectedItem: 1
      };
    }

    componentDidMount() {
      this.props.getData()
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

    onItemClick = id => {
      this.setState({selectedItem: id});
      this.props.onItemSelect(id);
    }

    render() {

      const {itemList, selectedItem, loading, error} = this.state;
      const errorMessage = error ? <ErrorIndicator/> : null;
      const spinner = loading ? <Spinner/> : null;

      const elementList = !(loading || error) ?
        <View
          {...this.props}
          itemList={itemList}
          selectedItem={selectedItem}
          onItemClick={this.onItemClick}
        /> : null;

      return (
        <div className="item-list-wrapper">
          {spinner}
          {elementList}
          {errorMessage}
        </div>
      );
    }
  }
}

export default withData;
