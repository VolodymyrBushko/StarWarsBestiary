import React from 'react';
import ItemDetails from '../item-details';
import Record from '../record';

import withSwapiService from '../hoc/with-swapi-service';

const PersonDetails = ({selectedItem, ...props}) => {
  return (
    <ItemDetails itemId={selectedItem} {...props}>
      <Record field="gender" label="Gander"/>
      <Record field="birthYear" label="Birth year"/>
      <Record field="eyeColor" label="Eye color"/>
    </ItemDetails>
  );
}

const mapMethodsToProps = ({getPerson, getPersonImage}) => {
  return {
    getData: getPerson,
    getImageUrl: getPersonImage
  };
}

export default withSwapiService(PersonDetails, mapMethodsToProps);
