import React, { useState, useEffect } from 'react';
import { Link, useHistory, useParams } from 'react-router-dom';
import "./FitnessCard.css"
import heartIcn from '../../images/heart-icon.svg'
import starImg from '../../images/star-ratings.svg'
import FavoriteIcon from '@mui/icons-material/Favorite';

const FitnessCard = (props) => {
  const { id, postCode } = useParams();

  const styles = {
    heart: {
      color: 'red'
    },
    remove: {
      color: 'white'
    },

  }

  return (
    <div className="fitness-card card-effect">
      <figure>
        <img className="card-img" src={props.cardImg} alt="img" />
        <span className="wishlist-icn">< FavoriteIcon style={props.myFavourite ? styles.heart : styles.remove} onClick={(e) => { props.handleClick(e, props.myFavourite, props.id, props.index) }} /></span>
      </figure>

      <div className="info">
        <span className="card-rate">
          {props.cardRate}{' '}
          <span className="star">
            <img src={starImg} alt="img" />
          </span>
        </span>
        <h4 className="card-title w-100">{props.cardTitle}</h4>
      </div>
    </div>
  );
};

export default FitnessCard;
