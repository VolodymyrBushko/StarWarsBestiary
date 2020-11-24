import React from 'react';
import './item-list.css';

import withData from '../hoc/with-data';
import SwapiService from '../../services/swapi-service';

const {getAllPeople} = new SwapiService();

const ItemList = props => {

  const {selectedItem, onItemClick, children, itemList: data} = props;

  const itemList = data.map(({id, ...item}) => {
    const isActive = +id === +selectedItem;
    return (
      <li
        key={id}
        className={`list-group-item ${isActive ? 'active' : ''}`}
        onClick={() => onItemClick(id)}
      >
        {children({id, ...item})}
      </li>
    );
  });

  return (
    <ul className="item-list list-group"
    >
      {itemList}
    </ul>
  );
}

export default withData(ItemList, getAllPeople);
