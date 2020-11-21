import React from 'react';
import './row.css';

const Row = ({left, right}) => {
  return (
    <div className="row-wrapper row">
      <div className="col-md-6">
        {left}
      </div>
      <div className="col-md-6">
        {right}
      </div>
    </div>
  );
}

export default Row;
