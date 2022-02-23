import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import { Container, Form, Button, Breadcrumb } from 'react-bootstrap';
import './BookingConfirmed.css';
import finderIcn from '../../images/iconfinder.svg';
import backArrow from '../../images/back-arrow.svg';
import secureArrow from '../../images/security-shield-arrow.svg';

const BookingConfirm = () => {
  const [staffState, setStaffState] = useState(true);
  const [bookState, setBookState] = useState(true);
  const [bookedState, setBookedState] = useState(true);
  const clearState = () => {
    setStaffState(!staffState);
    setBookState(!bookState);
  };
  return (
    <>
      <div className="book-confirmed text-center">
        <Container>
          <div className="failed-content">
            <div className="failed-inner">
              <span className="faild-emoji">
                <img src={finderIcn} alt="icon" />
              </span>
              <h2>Bookin Confirmed !</h2>
              <div className="desc-info">
                <p>
                  Your booking at Pumping house <br /> has been confirmed
                </p>
                <p>See you soon</p>
              </div>
              <div
                className={
                  bookedState ? 'booking-services' : 'booking-services booked'
                }
              >
                <h3 className="serv-titlte">
                  Your service 1 requires approval of consent form
                </h3>
                <Link
                  onClick={() => setStaffState(!staffState)}
                  to="#!"
                  className={bookedState ? 'btn' : 'btn sec-btn'}
                >
                  <img src={secureArrow} alt="arrow" />
                  Complete Consent Form
                </Link>
              </div>
              <div
                className={
                  bookedState
                    ? 'booking-services mb-0'
                    : 'booking-services mb-0 booked'
                }
              >
                <h3 className="serv-titlte">
                  Your service 2 requires approval of consent form
                </h3>
                <Link to="#!" className={bookedState ? 'btn' : 'btn sec-btn'}>
                  <img src={secureArrow} alt="arrow" />
                  Complete Consent Form
                </Link>
              </div>
            </div>
          </div>
          <Link to="/ongoing" className="btn check-booking ">
            Check Your Bookings
          </Link>
        </Container>
        <div
          className={
            staffState ? 'booking-staps d-none' : 'booking-staps d-block'
          }
        >
          <div className="wrap">
            <h2 className="staff-title text-center">
              <Link onClick={clearState} to="#!" className="back-arrow">
                <img src={backArrow} alt="arrow" />
              </Link>{' '}
              Consent Form
            </h2>
            <div
              className={
                bookState
                  ? 'd-flex flex-column manage-ht'
                  : 'd-flex flex-column manage-ht d-none'
              }
            >
              <div className="text-box">
                <p className="desc">
                  I hereby consent the term and policy of the service Lorem
                  Ipsum is simply dummy text of the printing and typesetting
                  industry.
                </p>
                <p className="desc">
                  Lorem Ipsum has been the industry's standard dummy text ever
                  since the 1500s, when an unknown printer took a galley of type
                  and scrambled it to make a type specimen book
                </p>
              </div>
              <div className="btn-wrap">
                <div className="text-center">
                  <Link
                    to="#!"
                    onClick={() => setBookState(!bookState)}
                    className="btn sec-btn"
                  >
                    Yes, Agree
                  </Link>
                </div>
                <Link to="#" className="dis-link">
                  Disagree
                </Link>
              </div>
            </div>
            <Form
              className={
                bookState
                  ? 'd-flex flex-column manage-ht d-none'
                  : 'd-flex flex-column manage-ht d-block'
              }
            >
              <div>
                <div className="plan-box text-center">
                  <p className="desc">Zumba premium classes + Diet plan</p>
                  <p className="date">1st April. 2021 • 6:20 PM</p>
                </div>
                <p className="diet-desc">Zumba premium classes + Diet plan</p>
                <Form.Group
                  className="check-box tex-left"
                  controlId="formBasicCheckbox"
                >
                  <input
                    type="checkbox"
                    id="checkfld1"
                    name="chekcfld1"
                    class="form-check-input"
                  />
                  <label title="" for="checkfld1" class="form-check-label">
                    Do you have heart disease?
                  </label>
                  <div className="question-box">
                    <div className="box text-left">
                      <p className="question">What do you know about HIIT?</p>
                      <input type="text" />
                    </div>
                    <div className="box text-left">
                      <p className="question">
                        Are you aware of the treatment?
                      </p>
                      <input type="text" />
                    </div>
                  </div>
                </Form.Group>
                <Form.Group
                  className="check-box tex-left"
                  controlId="formBasicCheckbox"
                >
                  <input
                    type="checkbox"
                    id="checkfld2"
                    name="chekcfld2"
                    class="form-check-input"
                  />
                  <label title="" for="checkfld2" class="form-check-label">
                    Do you smoke?
                  </label>
                  <div className="question-box">
                    <div className="box text-left">
                      <p className="question">What do you know about HIIT?</p>
                      <input type="text" />
                    </div>
                    <div className="box text-left">
                      <p className="question">
                        Are you aware of the treatment?
                      </p>
                      <input type="text" />
                    </div>
                  </div>
                </Form.Group>
              </div>
              <div className="btn-wrap text-center">
                <Link
                  to="#!"
                  onClick={() => setBookedState(!bookedState)}
                  className="btn sec-btn"
                >
                  Submit
                </Link>
              </div>
            </Form>
          </div>
        </div>
      </div>
    </>
  );
};
export default BookingConfirm;
