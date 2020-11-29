import React from 'react';
import ItemList from '../item-list';
import withData from '../hoc/with-data';
import withSwapiService from '../hoc/with-swapi-service';

const withChild = (Wrapped, fn) => {
  return (props) => {
    return <Wrapped {...props}>{fn}</Wrapped>
  }
}

const renderPerson = ({name, birthYear}) => <span>{name} ({birthYear})</span>;
const renderPlanet = ({name, population}) => <span>{name} ({population})</span>
const renderStarship = ({name, model}) => <span>{name} ({model})</span>;

const mapPersonMethodsToProps = ({getAllPeople}) => ({getData: getAllPeople});
const mapPlanetMethodsToProps = ({getAllPlanets}) => ({getData: getAllPlanets});
const mapStarshipMethodsToProps = ({getAllStarships}) => ({getData: getAllStarships});

const PersonList = withSwapiService(withData(withChild(ItemList, renderPerson)), mapPersonMethodsToProps);
const PlanetList = withSwapiService(withData(withChild(ItemList, renderPlanet)), mapPlanetMethodsToProps);
const StarshipList = withSwapiService(withData(withChild(ItemList, renderStarship)), mapStarshipMethodsToProps);

export {
  PersonList,
  PlanetList,
  StarshipList
};
