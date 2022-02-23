import React, { useState, useEffect } from 'react';
import { Container, Form, Button, Breadcrumb } from 'react-bootstrap';
import { Link, useHistory, useParams } from 'react-router-dom';
import MembershipCard from '../../MembershipCard/MembershipCard';
import AddedOrders from '../AddedOrders/AddedOrders';
import './CenterBlock.css';
import memberImg1 from '../../../images/member-img1.png';
import memberImg2 from '../../../images/member-img2.png';
import arrowUp from '../../../images/arrow-up.svg';
import arrowRight from '../../../images/arrow-right.svg';
import closeIcn from '../../../images/close-icn.svg';
import { connect } from 'react-redux';
import { compose } from 'redux';
import * as API from '../../../constants/APIs';
import * as actions from '../../../redux/actions/profile';
import { toast, ToastContainer } from 'react-toastify';
import { Satellite, Sync } from '@material-ui/icons';
import style from '../../CenterDetails/CenterBlock/CenterBlock.css';
import axios from 'axios';

const CenterBlock = (props) => {
  const [curState, setCurState] = useState(true);
  const { id } = useParams();
  const history = useHistory();
  const [state, setState] = useState({
    staff_id: "",
  })



  //Get PostCode
  useEffect(() => {
    props.getAllCenters(id);
    localStorage.setItem('business_id', id);
    // props.getAllStaff(id);
  }, []);

  //View Service
  const staffId = (e, id) => {

    // history.push(`center-details/${staff_id}`)
    // props.getAllStaff(_id)
    localStorage.setItem("service_id", id._id)
    return history.push(`/staffTwo/${id._id}`)

    // return props.getAllStaff(id._id)
  };

  return (
    <>
      <div className="center-block">
        <Container>
          <h2 className="block-title">Treatments</h2>
          <div className="d-md-flex">
            <div className="finess-panel">
              <span className="sub-title d-block">Fitness</span>
              <div className="scrollBar" style={{ overflowY: "scroll", background: "transparent" }}>
                <div className="panel-wrp d-xl-flex flex-wrap">
                  <div className="panel-item-fitness">
                    {props.centerData.appointmentBasedServices && props.centerData
                      .appointmentBasedServices.length > 0 && props.centerData.appointmentBasedServices.map(value => {
                        return (
                          <MembershipCard
                            cardImg={value.images}
                            crdTitle={value.name}
                            crdDesc={
                              'You will get 2 hours zumba session with the top instructor. Diet plan will be given to you for free.'
                            }
                            crdPrice={value.amount}
                            onClick={() => staffId(id)}
                            crdBtn={'Added'}
                            adCls={'sec-btn'}
                          />
                        )
                      })}
                  </div>
                </div>
                <span className="sub-title d-block">Yoga</span>
                <div className="panel-wrp d-xl-flex flex-wrap">
                  <div className="panel-item">
                    {props.centerData.groupClassBasedServices && props.centerData
                      .groupClassBasedServices.length > 0 && props.centerData.groupClassBasedServices.map(value => {
                        return (
                          <MembershipCard
                            cardImg={value.images}
                            crdTitle={value.name}
                            crdDesc={
                              'You will get 2 hours zumba session with the top instructor. Diet plan will be given to you for free.'
                            }
                            id={value}
                            crdPrice={value.amount}
                            onClick={staffId}
                            crdBtn={'+Add'}
                          />)
                      })}
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="member-panel">
                <h2>Membership</h2>
                {/* <h2>{props.centerData.memberships[0].name}</h2> */}
                <p className="desc">Pay for one time and enjoy</p>
                <div className="scrollBar" style={{ overflowY: "scroll", background: "transparent" }}>
                  <div className="plan-wrp" >
                    {props.centerData.memberships && props.centerData.memberships.length > 0 && props.centerData.memberships.map(value => {
                      return (
                        <MembershipCard
                          crdTitle={value.name}
                          // crdDesc={'Enjoy 12 months of free access to every plan'}
                          crdDesc={value.duration + "Months"}
                          crdPrice={value.amount}
                          crdBtn={'+Add'}
                        />
                      )
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
        <div
          className={curState ? 'overlay-page' : 'overlay-page active'}
        ></div>
        <div className="orders-panel d-flex align-items-center">
          <div
            className={
              curState ? 'added-order-wrap ' : 'added-order-wrap active'
            }
          >
            <Container>
              <div className="popup-head d-flex align-items-center justify-content-between">
                <h2 className="order-title">Your Orders</h2>
                <span
                  className="close-icn"
                  onClick={() => setCurState(!curState)}
                >
                  <img src={closeIcn} alt="close" />
                </span>
              </div>
              <AddedOrders />
            </Container>
          </div>
          <Container>
            <div className="order-manag d-md-flex align-items-center justify-content-between">
              <Link
                className={
                  curState ? 'view-link d-flex ' : 'view-link d-flex active'
                }
                onClick={() => setCurState(!curState)}
                to="#!"
              >
                <span className="arrow-icn">
                  <img src={arrowUp} alt="arrow" />
                </span>
                <span className="info">
                  <span className="info-title d-block">Your Order</span>
                  <span className="info-desc d-block">
                    3 X Services Selected
                  </span>
                </span>
              </Link>
              <Link
                to="/staff"
                className="continue-link d-flex align-items-center justify-content-between"
              >
                <span className="info">
                  <span className="total-txt d-block">Total</span>
                  <span className="price">£120</span>
                </span>
                <span className="continue-order d-flex align-items-center">
                  <span className=" continue-txt" onclick>Continue</span>
                  <span className="arrow-icn">
                    <img src={arrowRight} alt="arrow" />
                  </span>
                </span>
              </Link>
            </div>
          </Container>
        </div>
      </div>
    </>
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
    getAllStaff: (_id) =>
      dispatch(actions.getAllStaff(_id)),
  };

};
export default compose(connect(mapStateToProps, mapDispatchToProps))(
  CenterBlock
);
