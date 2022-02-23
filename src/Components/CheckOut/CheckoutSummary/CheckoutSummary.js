import React from 'react-bootstrap';
import './CheckoutSummary.css';
const CheckoutSummary = () => {
  return (
    <>
      <div className="order-summary">
        <h2 className="summary-title">Order Summary</h2>
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
    </>
  );
};
export default CheckoutSummary;
