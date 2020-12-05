import React from 'react';
import './starship-page.css';

import {StarshipList} from '../sw-components';
import ErrorBoundry from '../error-boundry';
import {withRouter} from 'react-router-dom';

const StarshipPage = ({history}) => {
  return (
    <ErrorBoundry>
      <StarshipList onItemSelect={itemId => {
        history.push(`/starships/${itemId}`);
      }}/>
    </ErrorBoundry>
  );
}

export default withRouter(StarshipPage);
