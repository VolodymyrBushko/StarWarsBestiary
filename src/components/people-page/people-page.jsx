import React from 'react';
import './people-page.css';

import {PersonList, PersonDetails} from '../sw-components';
import {withRouter} from 'react-router-dom';
import ErrorBoundry from '../error-boundry';
import Row from '../row';

const PeoplePage = ({history, match}) => {
  return (
    <ErrorBoundry>
      <Row left={<PersonList onItemSelect={(id) => history.push(id)}/>}
           right={<PersonDetails selectedItem={match.params.id || 1}/>}/>
    </ErrorBoundry>
  );
}

export default withRouter(PeoplePage);
