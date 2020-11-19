import React from 'react';
import './random-planet.css';

const RandomPlanet = () => {
  return (
    <div className="random-planet">
      <div className="planet-image">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrPPh9aAZqY9h8-JGKlGd9QJgDal_VlG3y_g&usqp=CAU"
             alt="planet"/>
      </div>
      <div className="planet-info">
        <h4 className="planet-title">Planet Name</h4>
        <ul className="planet-info-list">
          <li className="planet-info-item">
            Population: 123
          </li>
          <li className="planet-info-item">
              Rotation Period: 321
          </li>
          <li className="planet-info-item">
            Diameter: 100
          </li>
        </ul>
      </div>
    </div>
  );
}

export default RandomPlanet;
