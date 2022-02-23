import * as React from 'react';
import './ServiceCard.css';

const ServiceCard = (props) => {
  return (
    <div className="service-card card-effect">
      <img src={props.cardImg} alt="img" />
      <div className="info">
        <h4 className="card-title w-100">{props.cardTitle}</h4>
        <p className="card-desc">{props.cardDesc}</p>
      </div>
    </div>
  );
};

export default ServiceCard;
