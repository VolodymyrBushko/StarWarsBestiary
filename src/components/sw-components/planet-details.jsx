import ItemDetails from '../item-details';
import Record from '../record';
import React from 'react';

import withSwapiService from '../hoc/with-swapi-service';

const PlanetDetails = ({selectedItem, swapiService}) => {
  const {getPlanet, getPlanetImage} = swapiService;
  return (
    <ItemDetails
      itemId={selectedItem}
      getData={getPlanet}
      getImageUrl={getPlanetImage}>

      <Record field="population" label="Population"/>
      <Record field="rotationPeriod" label="Rotation Period"/>
      <Record field="diameter" label="Diameter"/>
    </ItemDetails>
  );
}

export default withSwapiService(PlanetDetails);
