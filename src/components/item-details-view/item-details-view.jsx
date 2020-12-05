import React from 'react';
import './item-details-view.css';

const ItemDetailsView = props => {
  const {item, image, fields} = props;
  return (
    <div className="item-details-view card flex-row flex-wrap">
      <div className="card-header border-0 p-0">
        <img className="icon" src={image} alt="item card"/>
      </div>
      <div className="card-content card-block pl-5">
        <h4 className="card-title">{item.name}</h4>
        {React.Children.map(fields, field => {
          return React.cloneElement(field, {item});
        })}
      </div>
    </div>
  );
}

export default ItemDetailsView;
