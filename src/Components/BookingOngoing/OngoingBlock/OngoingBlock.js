import React, { useState } from 'react';
import { Container, Form, Accordion, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { compose } from 'redux';
import * as actions from '../../../redux/actions/auth';
import './OngoingBlock.css';
import profImg from '../../../images/small-prof-img.png';
import callIcn from '../../../images/call-icn.svg';
import starIcn from '../../../images/star-icon.svg';
import emptyStar from '../../../images/star-ratings-empty.svg';
import locIcn from '../../../images/location-pin-dark.svg';
import watchIcn from '../../../images/clock-time.svg';
import Rating from '@mui/material/Rating';
const OngoingBlock = (props) => {
  const [onState, setOnState] = useState(true);
  const [ratingValue, setRatingValue] = React.useState();
  const [state, setState] = useState({
    number: "",
    comment: "",
    staffId: "",
  });



  const handleSubmit = (e, ratingData) => {

    e.preventDefault();
    console.log(ratingData);
    props.giveRatingStaff(ratingData);
  };


  return (
    <>
      <div className="checkout-block ongoing-block">
        <Container>
          <div className="d-md-flex">
            <div className="finess-panel">
              <h2 className="ongoing-title d-block">Ongoing Bookings</h2>
              <div className="ongoing-card">
                <div className="ong-head d-flex align-items-center justify-content-between">
                  <div className="ong-profile d-flex align-items-center">
                    <span className="prof-img">
                      <img src={profImg} alt="profile" />
                    </span>
                    <div className="info">
                      <span className="review d-block">
                        3.9 <img src={starIcn} alt="star" />
                      </span>
                      <span className="serv-name d-block">Pumping House</span>
                    </div>
                  </div>
                  <Link to="#!">
                    <img src={callIcn} alt="icon" />
                  </Link>
                </div>
                <div className="premium-box text-center">
                  <p className="pre-txt">Zumba premium classes + Diet plan</p>
                  <p className="pre-desc">1st April. 2021 • 6:20 PM</p>
                </div>
                <p className="pending-txt text-center">Patch Test Pending</p>
                <div className="btns-wrp">
                  <Link to="#!" className="help-btn">
                    Help
                  </Link>
                  <Link
                    to="#!"
                    onClick={() => setOnState(!onState)}
                    className="crd-btn"
                  >
                    View Details
                  </Link>
                </div>
              </div>
              <div
                className={onState ? 'ongoing-card' : 'ongoing-card active-crd'}
              >
                <div className="ong-head d-flex align-items-center justify-content-between">
                  <div className="ong-profile d-flex align-items-center">
                    <span className="prof-img">
                      <img src={profImg} alt="profile" />
                    </span>
                    <div className="info">
                      <span className="review d-block">
                        3.9 <img src={starIcn} alt="star" />
                      </span>
                      <span className="serv-name d-block">Pumping House</span>
                    </div>
                  </div>
                  <Link to="#!">
                    <img src={callIcn} alt="icon" />
                  </Link>
                </div>
                <div className="premium-box text-center">
                  <p className="pre-txt">Zumba premium classes + Diet plan</p>
                  <p className="pre-desc">1st April. 2021 • 6:20 PM</p>
                </div>
                <p className="pending-txt text-center">Patch Test Pending</p>

                <p className="pending-txt activepend text-center d-none">
                  Patch Test Pending
                </p>
                <div className="btns-wrp">
                  <Link to="#!" className="help-btn">
                    Help
                  </Link>
                  <Link
                    to="#!"
                    onClick={() => setOnState(!onState)}
                    className="crd-btn"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            </div>
            <div
              className={
                onState
                  ? 'summary-panel ongoing-summary d-none flex-column'
                  : 'summary-panel ongoing-summary d-flex flex-column'
              }
            >
              <h4 className="summary-title">Bookings Details</h4>
              <div className="order-summary">
                <div className="schedule">
                  <div className="sch-list d-flex justify-content-between">
                    <span className="icn loc-icn">
                      <img src={locIcn} alt="icn" />
                    </span>
                    <div className="info">
                      <span className="sch-title">Service Location</span>
                      <p className="sch-desc">Home - Flowrence Road, NY</p>
                    </div>
                  </div>
                  <div className="sch-list d-flex justify-content-between">
                    <span className="icn">
                      <img src={watchIcn} alt="icn" />
                    </span>
                    <div className="info">
                      <span className="sch-title">Timings</span>
                      <p className="sch-desc">1st April. 2021 • 6:20 PM</p>
                    </div>
                  </div>
                </div>
                <div className="onging-tags">
                  <span className="tag">Invoice</span>
                  <span className="tag item">Item</span>
                </div>
                <div className="wrap">
                  <div className="summary d-flex justify-content-between align-items-center">
                    <div className="txt">Item Total</div>
                    <div className="value">£120</div>
                  </div>
                  <div className="summary d-flex justify-content-between align-items-center">
                    <div className="txt">Tax</div>
                    <div className="value">£1.2</div>
                  </div>
                  <div className="summary total d-flex justify-content-between align-items-center">
                    <div className="txt">Total</div>
                    <div className="value">£121.2</div>
                  </div>
                </div>
              </div>
              <div className="summary-rates text-center">
                <figure className="profile-pic">
                  <img src={profImg} alt="profile" />
                </figure>
                <p className="prof-desc">Rate Jphn Sander’s Service</p>
                <div className="stars">
                  <Rating className="star" name="simple-controlled" value={ratingValue} onChange={(e, rating) => { handleSubmit(e, rating) }} />
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};
const mapStateToProps = (state) => {

  return {
    AddRating: state.AddRating,
  };
};


const mapDispatchToProps = (dispatch) => {

  return {
    giveRatingStaff: (ratingData) =>
      dispatch(actions.giveRatingStaff(ratingData)),
  };
};


export default compose(connect(mapStateToProps, mapDispatchToProps))(OngoingBlock);
