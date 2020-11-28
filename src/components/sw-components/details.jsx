import React from 'react';
import ItemDetails from '../item-details';
import Record from '../record';

import {SwapiServiceConsumer} from '../swapi-service-context';

const PersonDetails = ({selectedItem}) => {
  return (
    <SwapiServiceConsumer>
      {
        ({getPerson, getPersonImage}) =>
          <ItemDetails
            itemId={selectedItem}
            getData={getPerson}
            getImageUrl={getPersonImage}>

            <Record field="gender" label="Gander"/>
            <Record field="birthYear" label="Birth year"/>
            <Record field="eyeColor" label="Eye color"/>
          </ItemDetails>
      }
    </SwapiServiceConsumer>
  );
}

const PlanetDetails = ({selectedItem}) => {
  return (
    <SwapiServiceConsumer>
      {
        ({getPlanet, getPlanetImage}) =>
          <ItemDetails
            itemId={selectedItem}
            getData={getPlanet}
            getImageUrl={getPlanetImage}>

            <Record field="population" label="Population"/>
            <Record field="rotationPeriod" label="Rotation Period"/>
            <Record field="diameter" label="Diameter"/>
          </ItemDetails>
      }
    </SwapiServiceConsumer>
  );
}

const StarshipDetails = ({selectedItem}) => {
  return (
    <SwapiServiceConsumer>
      {
        ({getStarship, getStarshipImage}) =>
          <ItemDetails
            itemId={selectedItem}
            getData={getStarship}
            getImageUrl={getStarshipImage}>

            <Record field="model" label="Model"/>
            <Record field="length" label="Length"/>
            <Record field="costInCredits" label="Cost"/>
          </ItemDetails>
      }
    </SwapiServiceConsumer>
  );
}

export {
  PersonDetails,
  PlanetDetails,
  StarshipDetails
};
