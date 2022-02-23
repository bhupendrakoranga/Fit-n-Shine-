import React, { useState } from 'react';
import { Container, Form, Button, Breadcrumb } from 'react-bootstrap';
import CheckoutSummary from '../CheckoutSummary/CheckoutSummary';
import { Link } from 'react-router-dom';
import MembershipCard from '../../MembershipCard/MembershipCard';
import SignInUp from '../../SignInUp/SignInUp';
import './CheckoutBlock.css';
import memberImg1 from '../../../images/member-img1.png';
import memberImg2 from '../../../images/member-img2.png';

const CheckoutBlock = () => {
  return (
    <>
      <div className="checkout-block">
        <SignInUp sloginState="true" />
        <Container>
          <div className="d-md-flex">
            <div className="finess-panel">
              <span className="sub-title d-block">Selected Package</span>
              <div className="panel-wrp d-xl-flex flex-wrap">
                <div className="panel-item">
                  <MembershipCard
                    cardImg={memberImg1}
                    crdTitle={'Zumba premium classes + Diet plan'}
                    crdDesc={
                      'You will get 2 hours zumba session with the top instructor. Diet plan will be given to you for free.'
                    }
                    crdPrice={120}
                    crdBtn={'Added'}
                    adCls={'sec-btn'}
                  />
                </div>
                <div className="panel-item">
                  <MembershipCard
                    cardImg={memberImg2}
                    crdTitle={'Calisthenics classes + Diet plan'}
                    crdDesc={
                      'You will get 2 hours zumba session with the top instructor. Diet plan will be given to you for free.'
                    }
                    crdPrice={120}
                    crdBtn={'+Add'}
                  />
                </div>
              </div>
              <span className="sub-title d-block">Yoga</span>
              <div className="panel-wrp d-xl-flex flex-wrap">
                <div className="panel-item">
                  <MembershipCard
                    cardImg={memberImg2}
                    crdTitle={'Calisthenics classes + Diet plan'}
                    crdDesc={
                      'You will get 2 hours zumba session with the top instructor. Diet plan will be given to you for free.'
                    }
                    crdPrice={120}
                    crdBtn={'+Add'}
                  />
                </div>
              </div>
            </div>
            <div className="summary-panel d-flex flex-column">
              <CheckoutSummary />
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
        </Container>
      </div>
    </>
  );
};
export default CheckoutBlock;
