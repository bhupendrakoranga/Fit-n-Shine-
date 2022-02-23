import React, { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './MyMembership.css';
import profImg from '../../images/small-prof-img.png';
import starIcn from '../../images/star-icon.svg';
import SelectBox from '../SelectBox/SelectBox';
import locPin from '../../images/location-pin.svg';
import search from '../../images/search.svg';
import backArrow from '../../images/back-arrow.svg';
const MyMembership = () => {
  const [staffState, setStaffState] = useState(true);
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
            <Link to="available" className="btn history-btn">
              Available
            </Link>
            <Link to="membership" className="btn">
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
              <h2 className="ongoing-title expired-title d-block">
                Expired Memberships
              </h2>
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
                <p className="validity">Expiry</p>
                <p className="months">12th April, 2021</p>
              </div>
            </div>
            <div className="btn-wrap text-center mt-auto">
              <Link to="/profile" className="btn sec-btn">
                Renew
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyMembership;
