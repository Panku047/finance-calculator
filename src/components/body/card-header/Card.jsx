import React, { useEffect, useState } from 'react';

import './Card.css';
import { Link } from 'react-router-dom';

const Card = ({path, longTitle, title, details }) => {
  return (
      <div className="card">
        <Link style={{textDecoration: 'none'}} to={{ pathname: path}}>
        <div className="card-header">
          <h4>{title}</h4>
        </div>
        <div className="card-body">
          <p>{details}</p>
        </div>
        </Link>
      </div>
  );
};

export default Card;
