import React, { Container, Form, Button, Breadcrumb } from 'react-bootstrap';
import './CheckoutHead.css';
import backArrow from '../../../images/back-arrow.svg';
const CheckoutHead = () => {
  return (
    <>
      <div className="checkout-head">
        <Container>
          <div className="info">
            <span className="backto-prev d-flex align-items-center">
              <span className="arrow">
                <img src={backArrow} alt="star" />
              </span>
              <span className="text">Go Back</span>
            </span>
            <h2 className="info-title">Checkout</h2>
          </div>
        </Container>
      </div>
    </>
  );
};
export default CheckoutHead;
