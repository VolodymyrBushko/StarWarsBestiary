export default class SwapiService {

  _baseUrl = 'https://swapi.dev/api'

  getResource = async url => {
    const res = await fetch(`${this._baseUrl}${url}`);
    if (!res.ok)
      throw new Error(`Could not fetch: ${url}`);
    return await res.json();
  }

  getAllPeople = async () => {
    const {results: people} = await this.getResource('/people');
    return people.map(this._transformPerson);
  }

  getPerson = async id => {
    const person = await this.getResource(`/people/${id}`);
    return this._transformPerson(person);
  }

  getAllPlanets = async () => {
    const {results: planets} = await this.getResource('/planets');
    return planets.map(this._transformPlanet);
  }

  getPlanet = async id => {
    const planet = await this.getResource(`/planets/${id}`);
    return this._transformPlanet(planet);
  }

  getAllStarships = async () => {
    const {results: starships} = await this.getResource('/starships')
    return starships.map(this._transformStarship);
  }

  getStarships = async id => {
    const starship = await this.getResource(`/starships/${id}`);
    return this._transformStarship(starship);
  }

  _transformPlanet = planet => {
    return {
      id: this._getItemId(planet),
      name: planet.name,
      population: planet.population,
      rotationPeriod: planet.rotation_period,
      diameter: planet.diameter
    }
  }

  _transformStarship = starship => {
    return {
      id: this._getItemId(starship),
      name: starship.name,
      model: starship.model,
      menufacturer: starship.manufacturer,
      costInCredits: starship.costInCredits,
      length: starship.length,
      crew: starship.crew,
      passengers: starship.passengers,
      cargoCapacity: starship.cargoCapacity
    }
  }

  _transformPerson = person => {
    return {
      id: this._getItemId(person),
      name: person.name,
      gender: person.gender,
      birthYear: person.birth_year,
      eyeColor: person.eye_color
    }
  }

  _getItemId(item) {
    const idRegExp = /\/([0-9]*)\/$/;
    return item.url.match(idRegExp)[1];
  }

}
