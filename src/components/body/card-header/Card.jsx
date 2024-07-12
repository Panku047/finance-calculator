import React from 'react';

import './Card.css';
import { Link } from 'react-router-dom';

const Card = ({path, title, page, details }) => {
  const clickedOnCard = () =>{
    sessionStorage.setItem("cardActive", page)
  }
  return (
      <div className="card"
        onClick={clickedOnCard}
      >
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
