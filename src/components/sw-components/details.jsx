import React from 'react';
import ItemDetails from '../item-details';
import Record from '../record';
import SwapiService from '../../services/swapi-service';

const {
  getPerson,
  getPlanet,
  getStarship,
  getPersonImage,
  getPlanetImage,
  getStarshipImage
} = new SwapiService();

const PersonDetails = ({selectedItem}) => {
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

const PlanetDetails = ({selectedItem}) => {
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

const StarshipDetails = ({selectedItem}) => {
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

export {
  PersonDetails,
  PlanetDetails,
  StarshipDetails
};
