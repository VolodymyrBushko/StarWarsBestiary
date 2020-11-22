import React from 'react';
import './record.css';

const Record = ({item, field, label}) => {
  return (
    <p className="card-text">{label}: {item[field]}</p>
  );
}

export default Record;
