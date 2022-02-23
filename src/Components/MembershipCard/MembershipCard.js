import * as React from 'react';
import { Link } from 'react-router-dom';
import './MembershipCard.css';

const MembershipCard = (props) => {
  return (
    <div className="membership-card">
      <div className="cardhead d-flex align-items-start justify-content-between">
        <span className="crdimg">
          <img src={props.cardImg} alt="img" />
        </span>
        <span className="crdtitle d-block">{props.crdTitle}</span>
      </div>
      <p className="crd-desc">{props.crdDesc}</p>
      <div className="crdfoot d-flex align-items-end justify-content-between">
        <span className="crdprice">£{props.crdPrice}</span>
        <button onClick={(e) => { props.onClick(e, props.id) }} className={`btn d-block ${props.adCls}`}>
          {props.crdBtn}
        </button>
      </div>
    </div >
  );
};

export default MembershipCard;
