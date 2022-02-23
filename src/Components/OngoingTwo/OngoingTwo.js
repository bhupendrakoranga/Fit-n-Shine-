import React from 'react';
import OngoingHead from '../BookingOngoing/OngoingHead/OngoingHead';
import { Container, Form, Accordion, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './OngoingTwo.css';
import profImg from '../../images/small-prof-img.png';
import callIcn from '../../images/call-icn.svg';
import starIcn from '../../images/star-icon.svg';
import locIcn from '../../images/location-pin-dark.svg';
import watchIcn from '../../images/clock-time.svg';

const OngoingTwo = () => {
  return (
    <div>
      <OngoingHead />
      <div className="checkout-block ongoing-block ongoing-two">
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
                  <Link to="#!" className="crd-btn">
                    View Details
                  </Link>
                </div>
              </div>
              <div className="ongoing-card active-crd">
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
                  <Link to="#!" className="crd-btn">
                    View Details
                  </Link>
                </div>
              </div>
            </div>
            <div className="summary-panel ongoing-summary d-flex flex-column">
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
              <div className="ongoing-card approval-consent">
                <p className="pending-txt text-center">
                  Your service 1 requires approval of consent form
                </p>
                <Link to="#!" className="btn">
                  Complete Consent Form
                </Link>
                <div class="btns-wrp">
                  <Link class="help-btn" to="#!">
                    Help
                  </Link>
                  <Link class="crd-btn" to="#!">
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default OngoingTwo;
