import ItemDetails from '../item-details';
import Record from '../record';
import React from 'react';

import withSwapiService from '../hoc/with-swapi-service';

const StarshipDetails = ({selectedItem, ...props}) => {
  return (
    <ItemDetails itemId={selectedItem} {...props}>
      <Record field="model" label="Model"/>
      <Record field="length" label="Length"/>
      <Record field="costInCredits" label="Cost"/>
    </ItemDetails>
  );
}

const mapMethodsToProps = ({getStarship, getStarshipImage}) => {
  return {
    getData: getStarship,
    getImageUrl: getStarshipImage
  };
}

export default withSwapiService(StarshipDetails, mapMethodsToProps);
