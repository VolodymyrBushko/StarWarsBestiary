import React from 'react';
import ItemDetails from '../item-details';
import Record from '../record';

import withSwapiService from '../hoc/with-swapi-service';

const PersonDetails = ({selectedItem, swapiService}) => {
  const {getPerson, getPersonImage} = swapiService;
  return (
    <ItemDetails
      itemId={selectedItem}
      getData={getPerson}
      getImageUrl={getPersonImage}>

      <Record field="gender" label="Gander"/>
      <Record field="birthYear" label="Birth year"/>
      <Record field="eyeColor" label="Eye color"/>
    </ItemDetails>
  );
}

export default withSwapiService(PersonDetails);
