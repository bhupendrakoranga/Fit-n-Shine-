import React from 'react';
import { Container, Form, Accordion, Card } from 'react-bootstrap';
import CheckoutSummary from '../../CheckOut/CheckoutSummary/CheckoutSummary';
import { Link } from 'react-router-dom';
import AccordionContext from 'react-bootstrap/AccordionContext';
import { useAccordionToggle } from 'react-bootstrap/AccordionToggle';
import { useContext } from 'react';
import './PaymentMethods.css';
import visaIcn from '../../../images/visa-icn.png';
import masterIcn from '../../../images/master-icn.png';

const PaymentMethods = () => {
  function ContextAwareToggle({ children, eventKey, callback }) {
    const currentEventKey = useContext(AccordionContext);

    const decoratedOnClick = useAccordionToggle(
      eventKey,
      () => callback && callback(eventKey)
    );

    const isCurrentEventKey = currentEventKey === eventKey;

    return (
      <button
        type="button"
        className={
          isCurrentEventKey
            ? 'active card-header d-flex align-items-center'
            : 'card-header d-flex align-items-center'
        }
        onClick={decoratedOnClick}
      >
        <i className="head-icon"></i>
        {children}
        <i
          className={isCurrentEventKey ? 'icon-caretdown up' : 'icon-caretdown'}
        ></i>
      </button>
    );
  }
  return (
    <>
      <div className="checkout-block payment-method">
        <Container>
          <div className="d-md-flex">
            <Form className="finess-panel">
              <h2 className="addr-title d-block">Select Address</h2>
              <div className="addr-card">
                <Link to="#!" className="add-lnk">
                  +Add Address
                </Link>
                <Form.Group className="check-box" controlId="formBasicCheckbox">
                  <Form.Check type="checkbox" label="Home" />
                  <p className="desc">
                    Santa Monica community park, C 251, Block C, Sushant Lok
                    III, Sector 57, Gurugram, Haryana 122003, India
                  </p>
                </Form.Group>
              </div>
              <h2 className="addr-title d-block">Payment Option</h2>
              <div className="method-card">
                <Accordion className="menu-accordian">
                  <Card>
                    <div>
                      <ContextAwareToggle
                        eventKey="0"
                        className="accordion-header"
                      >
                        Credit, Debit &amp; ATM Cards
                      </ContextAwareToggle>
                    </div>

                    <Accordion.Collapse eventKey="0">
                      <div className="accordion-card accordion-card-first card-body">
                        <div className="addr-card pay-card">
                          <Form.Group
                            className="check-box"
                            controlId="formBasicCheckbox"
                          >
                            <div class="form-check">
                              <input
                                type="radio"
                                id="method1"
                                name="paymethod"
                                class="form-check-input"
                              />
                              <label
                                title=""
                                for="method1"
                                class="form-check-label"
                              >
                                Vishnu Basnet
                                <span className="card-num">
                                  414767XXXXXX3999
                                </span>
                                <i className="money-card">
                                  <img src={visaIcn} alt="visa" />{' '}
                                </i>
                              </label>
                              <div className="cvv-code align-items-center">
                                <span className="cvv-txt">Enter CVV</span>
                                <Form.Control type="text" placeholder="CVV" />
                              </div>
                            </div>
                          </Form.Group>
                          <Form.Group
                            className="check-box"
                            controlId="formBasicCheckbox2"
                          >
                            <div class="form-check">
                              <input
                                type="radio"
                                id="method2"
                                name="paymethod"
                                class="form-check-input"
                              />
                              <label
                                title=""
                                for="method2"
                                class="form-check-label"
                              >
                                Vishnu Basnet
                                <span className="card-num">
                                  414767XXXXXX3999
                                </span>
                                <i className="money-card">
                                  <img src={masterIcn} alt="visa" />{' '}
                                </i>
                              </label>
                              <div className="cvv-code align-items-center">
                                <span className="cvv-txt">Enter CVV</span>
                                <Form.Control type="text" placeholder="CVV" />
                              </div>
                            </div>
                          </Form.Group>
                          <Form.Group
                            className="check-box"
                            controlId="formBasicCheckbox3"
                          >
                            <div class="form-check">
                              <input
                                type="radio"
                                id="method3"
                                name="paymethod"
                                class="form-check-input"
                              />
                              <label
                                title=""
                                for="method3"
                                class="form-check-label"
                              >
                                Vishnu Basnet
                                <span className="card-num">
                                  414767XXXXXX3999
                                </span>
                                <i className="money-card">
                                  <img src={masterIcn} alt="visa" />{' '}
                                </i>
                              </label>
                              <div className="cvv-code align-items-center">
                                <span className="cvv-txt">Enter CVV</span>
                                <Form.Control type="text" placeholder="CVV" />
                              </div>
                            </div>
                          </Form.Group>
                          <Link to="#!" className="add-lnk">
                            +Add New Card
                          </Link>
                        </div>
                      </div>
                    </Accordion.Collapse>
                  </Card>
                  <Card>
                    <div>
                      <ContextAwareToggle
                        eventKey="1"
                        className="accordion-header"
                      >
                        Wallet
                      </ContextAwareToggle>
                    </div>

                    <Accordion.Collapse eventKey="1">
                      <div className="accordion-card accordion-card-first card-body">
                        <p>
                          Vestibulum leo sapien, hendrerit mattis sodales et,
                        </p>
                      </div>
                    </Accordion.Collapse>
                  </Card>
                  <Card>
                    <div>
                      <ContextAwareToggle
                        eventKey="2"
                        className="accordion-header"
                      >
                        Netbanking
                      </ContextAwareToggle>
                    </div>

                    <Accordion.Collapse eventKey="2">
                      <div className="accordion-card accordion-card-first card-body">
                        <p>
                          Vestibulum leo sapien, hendrerit mattis sodales et,
                        </p>
                      </div>
                    </Accordion.Collapse>
                  </Card>
                  <Card>
                    <div>
                      <ContextAwareToggle
                        eventKey="3"
                        className="accordion-header"
                      >
                        Pay After Service
                      </ContextAwareToggle>
                    </div>

                    <Accordion.Collapse eventKey="3">
                      <div className="accordion-card accordion-card-first card-body">
                        <p>
                          Vestibulum leo sapien, hendrerit mattis sodales et,
                        </p>
                      </div>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
            </Form>
            <div className="summary-panel d-flex flex-column">
              <CheckoutSummary />
              <Link
                to="/failed"
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
export default PaymentMethods;
