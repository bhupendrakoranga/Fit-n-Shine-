import React from 'react';
import CheckoutHead from '../Components/CheckOut/CheckoutHead/CheckoutHead';
import PaymentMethods from '../Components/SelectPayment/PaymentMethods/PaymentMethods';
const SelectPayment = () => {
  return (
    <div>
      <CheckoutHead />
      <PaymentMethods />
    </div>
  );
};

export default SelectPayment;
