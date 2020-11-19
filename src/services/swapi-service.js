export default class SwapiService {

  _baseUrl = 'https://swapi.dev/api'

  async getResource(url) {
    const res = await fetch(`${this._baseUrl}${url}`);
    if (!res.ok)
      throw new Error(`Could not fetch: ${url}`);
    return await res.json();
  }

  async getAllPeople() {
    const {results} = await this.getResource('/people');
    return results;
  }

  getPerson(id) {
    return this.getResource(`/people/${id}`);
  }

  async getAllPlanets() {
    const {results} = await this.getResource('/planets')
    return results;
  }

  getPlanet(id) {
    return this.getResource(`planets/${id}`);
  }

  async getAllStarships() {
    const {results} = await this.getResource('/starships')
    return results;
  }

  getStarships(id) {
    return this.getResource(`starships/${id}`);
  }

}
