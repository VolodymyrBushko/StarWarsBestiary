import React, {Component} from 'react';
import './error-boundry.css';

import ErrorIndicator from '../error-indicator';

export default class ErrorBoundry extends Component {

  constructor(props) {
    super(props);
    this.state = {
      error: false
    };
  }

  componentDidCatch() {
    this.setState({error: true});
  }

  render() {
    if (this.state.error) {
      return <ErrorIndicator/>;
    }
    return this.props.children;
  }

}
