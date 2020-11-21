import React, {Component} from 'react';
import './person-details.css';

import SwapiService from '../../services/swapi-service';
import ErrorIndicator from '../error-indicator';
import Spinner from '../spinner';

export default class PersonDetails extends Component {

  constructor(props) {
    super(props);
    this.swapiService = new SwapiService();
    this.state = {
      person: null,
      loading: true,
      error: false
    };
  }

  componentDidMount() {
    this.updatePerson();
  }

  componentDidUpdate(prevProps) {
    if (+this.props.itemId !== +prevProps.itemId) {
      this.updatePerson();
    }
  }

  onPersonReceive = person => {
    this.setState({
      person,
      loading: false,
      error: false
    });
  }

  onError = () => {
    this.setState({
      loading: false,
      error: true
    });
    console.log('error');
  }

  updatePerson = () => {
    this.setState(() => {
      const {itemId} = this.props;
      this.swapiService
        .getPerson(itemId)
        .then(this.onPersonReceive)
        .catch(this.onError);
      return {
        loading: true,
        error: false
      };
    });
  }

  render() {

    const {person, loading, error} = this.state;
    const spinner = loading ? <Spinner/> : null;
    const errorMessage = error ? <ErrorIndicator/> : null;
    const personDetailsView = !(loading || error) ? <PersonDetailsView person={person}/> : null;

    return (
      <div className="person-details-wrapper">
        {spinner}
        {errorMessage}
        {personDetailsView}
      </div>
    );
  }

}

const PersonDetailsView = ({person}) => {
  const {id, name, gender, birthYear, eyeColor} = person;
  return (
    <div className="person-details card" style={{width: '20rem'}}>
      <img className="card-img-top icon"
           src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`} alt="person"/>
      <div className="card-body">
        <h4 className="card-title">{name}</h4>
        <p className="card-text">Gender: {gender}</p>
        <p className="card-text">Birth year: {birthYear}</p>
        <p className="card-text">Eye color: {eyeColor}</p>
      </div>
    </div>
  );
}
