import { Link } from 'react-router-dom';
import React, { Container, Form, Button, Breadcrumb } from 'react-bootstrap';
import './PayFailed.css';
import faildIcn from '../../images/faild-icn.svg';
const PayFailed = () => {
  return (
    <>
      <div className="payment-failed text-center">
        <Container>
          <div className="failed-content">
            <div className="failed-inner">
              <span className="faild-emoji">
                <img src={faildIcn} alt="icon" />
              </span>
              <h2>Payment Failed !</h2>
              <div className="desc-info">
                <p>We suggest you to try again or check with your bank.</p>
                <p>Any amount deducted will be reverted</p>
              </div>
              <Link to="/booking" className="btn sec-btn">
                Try Again
              </Link>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};
export default PayFailed;
