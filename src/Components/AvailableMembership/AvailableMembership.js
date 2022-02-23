import React, { useState, useEffect } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import './AvailableMembership.css';
import profImg from '../../images/small-prof-img.png';
//import callIcn from '../../images/call-icn.svg';
import starIcn from '../../images/star-icon.svg';
import SelectBox from '../SelectBox/SelectBox';
import locPin from '../../images/location-pin.svg';
import search from '../../images/search.svg';
import backArrow from '../../images/back-arrow.svg';
import { connect } from 'react-redux';
import { compose } from 'redux';
import * as API from '../../constants/APIs';
import * as actions from '../../redux/actions/profile';
//import arrowRight from '../../images/arrow-right.svg';
const AvailableMembership = (props) => {
  const [staffState, setStaffState] = useState(true);
  const { id } = useParams();
  const locOptions = [
    { value: 'India', label: 'India' },
    { value: 'USA', label: 'USA' },
    { value: 'UK', label: 'UK' },
  ];



  return (
    <div>
      <div className="center-head ongoing-head">
        <Container>
          <Form className="d-md-flex justify-content-between">
            <Form.Group>
              <span className="loc-icn">
                <img src={locPin} alt="icon" />
              </span>
              <SelectBox placeHolder="Street P…" options={locOptions} />
            </Form.Group>
            <Form.Group>
              <Form.Control
                type="text"
                placeholder="Search service or anything"
              />
              <Button className="search-btn" type="submit">
                <img src={search} alt="search" />
              </Button>
            </Form.Group>
          </Form>
          <div className="info d-flex align-items-center">
            <h2 className="info-title">Bookings</h2>
            <Link to="/available" className="btn">
              Available
            </Link>
            <Link to="/membership" className="btn history-btn">
              My Membership
            </Link>
          </div>
        </Container>
      </div>
      <div className="checkout-block ongoing-block available-membership">
        <Container>
          <div className="d-md-flex">
            <div className="finess-panel">
              <h2 className="ongoing-title d-block">Available Memberships</h2>
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
                      <p>Gym</p>
                    </div>
                  </div>
                  <Link to="#!" className="crd-price">
                    £120
                  </Link>
                </div>
                <p className="crd-txt">
                  You will get 2 hours zumba session with the top instructor.
                  Diet plan will be given to you for free.
                </p>
                <div className="btns-wrp">
                  <Link
                    to="#!"
                    onClick={() => setStaffState(!staffState)}
                    className="crd-btn w-100"
                  >
                    View
                  </Link>
                </div>
              </div>
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
                      <p>Gym</p>
                    </div>
                  </div>
                  <Link to="#!" className="crd-price">
                    £120
                  </Link>
                </div>
                <p className="crd-txt">
                  You will get 2 hours zumba session with the top instructor.
                  Diet plan will be given to you for free.
                </p>
                <div className="btns-wrp">
                  <Link
                    to="#!"
                    onClick={() => setStaffState(!staffState)}
                    className="crd-btn w-100"
                  >
                    View
                  </Link>
                </div>
              </div>
            </div>
            <div className="summary-panel ongoing-summary d-flex flex-column"></div>
          </div>
        </Container>
        <div
          className={
            staffState ? 'booking-staps d-none' : 'booking-staps d-block'
          }
        >
          <div className="wrap d-flex flex-column">
            <div>
              <h2 className="staff-title text-center">
                <Link
                  onClick={() => setStaffState(!staffState)}
                  to="#!"
                  className="back-arrow"
                >
                  <img src={backArrow} alt="arrow" />
                </Link>
                Family Membership (3+1)
              </h2>
              <h4 className="avail-quest">What’s Covered?</h4>
              <p className="avail-ans">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </p>
              <div className="avail-box text-center">
                <p className="validity">Validity</p>
                <p className="months">6 Months</p>
              </div>
            </div>
            <Link
              to="#!"
              className="continue-link mt-auto d-flex align-items-center justify-content-between"
            >
              <span className="info">
                <span className="total-txt d-block">Total</span>
                <span className="price">£120</span>
              </span>
              <span className="continue-order d-flex align-items-center">
                <span className=" continue-txt">Continue</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="16"
                  viewBox="0 0 20 16"
                >
                  <g
                    fill="none"
                    fill-rule="evenodd"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <g stroke="#FFF" stroke-width="2">
                      <g>
                        <g>
                          <g>
                            <g>
                              <path
                                d="M0 7h18m0 0l-7-7m7 7l-7 7"
                                transform="translate(-1191.000000, -1050.000000) translate(0.000000, 1006.000000) translate(840.000000, 8.000000) translate(258.000000, 32.000000) translate(94.000000, 5.000000)"
                              />
                            </g>
                          </g>
                        </g>
                      </g>
                    </g>
                  </g>
                </svg>
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
const mapStateToProps = (state) => {

  return {
    // categoryData: state.Auth.serviceDocs,
    centerData: state.Profile.centerDocs,
    staffData: state.Profile.staffDocs,
  };
};
const mapDispatchToProps = (dispatch) => {

  return {
    getAllCenters: (id) =>
      dispatch(actions.getAllCenters(id)),
    getAllStaff: (id) =>
      dispatch(actions.getAllStaff(id)),
  };

};
export default compose(connect(mapStateToProps, mapDispatchToProps))(
  AvailableMembership
);
