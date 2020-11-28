import ItemDetails from '../item-details';
import Record from '../record';
import React from 'react';

import withSwapiService from '../hoc/with-swapi-service';

const PlanetDetails = ({selectedItem, ...props}) => {
  return (
    <ItemDetails itemId={selectedItem} {...props}>
      <Record field="population" label="Population"/>
      <Record field="rotationPeriod" label="Rotation Period"/>
      <Record field="diameter" label="Diameter"/>
    </ItemDetails>
  );
}

const mapMethodsToProps = ({getPlanet, getPlanetImage}) => {
  return {
    getData: getPlanet,
    getImageUrl: getPlanetImage
  };
}

export default withSwapiService(PlanetDetails, mapMethodsToProps);
