import React from 'react';
import ItemList from '../item-list';
import withData from '../hoc/with-data';
import SwapiService from '../../services/swapi-service';

const {
  getAllPeople,
  getAllPlanets,
  getAllStarships
} = new SwapiService();

const withChild = (Wrapped, fn) => {
  return (props) => {
    return <Wrapped {...props}>{fn}</Wrapped>
  }
}

const renderPerson = ({name, birthYear}) => <span>{name} ({birthYear})</span>;
const renderPlanet = ({name, population}) => <span>{name} ({population})</span>
const renderStarship = ({name, model}) => <span>{name} ({model})</span>;

const PersonList = withData(withChild(ItemList, renderPerson), getAllPeople);
const PlanetList = withData(withChild(ItemList, renderPlanet), getAllPlanets);
const StarshipList = withData(withChild(ItemList, renderStarship), getAllStarships);

export {
  PersonList,
  PlanetList,
  StarshipList
};
