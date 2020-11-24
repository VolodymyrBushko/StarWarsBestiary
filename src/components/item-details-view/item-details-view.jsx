import React from 'react';
import './item-details-view.css';

const ItemDetailsView = props => {
  const {item, image, fields} = props;
  return (
    <div className="item-details-view card" style={{width: '20rem'}}>
      <img
        className="card-img-top icon"
        src={image}
        alt="person"/>
      <div className="card-body">
        <h4 className="card-title">{item.name}</h4>
        {React.Children.map(fields, field => {
          return React.cloneElement(field, {item});
        })}
      </div>
    </div>
  );
}

export default ItemDetailsView;
