import ItemDetails from '../item-details';
import Record from '../record';
import React from 'react';

import withSwapiService from '../hoc/with-swapi-service';

const StarshipDetails = ({selectedItem, swapiService}) => {
  const {getStarship, getStarshipImage} = swapiService;
  return (
    <ItemDetails
      itemId={selectedItem}
      getData={getStarship}
      getImageUrl={getStarshipImage}>

      <Record field="model" label="Model"/>
      <Record field="length" label="Length"/>
      <Record field="costInCredits" label="Cost"/>
    </ItemDetails>
  );
}

export default withSwapiService(StarshipDetails);
