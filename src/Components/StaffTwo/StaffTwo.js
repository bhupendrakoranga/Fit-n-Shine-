import React, { useState, useEffect } from 'react';
import { Link, useParams, useHistory } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';
import CategoryHead from '../CenterDetails/CenterHead/CenterHead';
import CenterBlock from '../../Components/CenterDetails/CenterBlock/CenterBlock';
import './StaffTwo.css';
import backArrow from '../../images/back-arrow.svg'
import staffImg1 from '../../images/staff-img1.png';
import staffImg2 from '../../images/staff-img2.png';
import staffImg3 from '../../images/staff-img3.png';
import staffImg4 from '../../images/staff-img4.png';
import tickIcn from '../../images/tick-icn.svg';
import arrowRight from '../../images/arrow-right.svg';
import closeIcn from '../../images/close-icn.svg';
import { connect } from 'react-redux';
import { compose } from 'redux';
import * as actions from '../../redux/actions/profile';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
const StaffOne = (props) => {
  const [staffState, setStaffState] = useState(false);
  const { _id, id } = useParams();
  const history = useHistory();
  const [state, setState] = useState({
    staffId: "",
    serviceId: "",
    selectedDate: "",
    selectedTime: "",
    consentForm: "",
    delivery_date: "",
  })


  //Get PostCode
  useEffect(() => {
    props.getAllStaff(id);
  }, []);


  const submitStaff = () => {
    props.bookApoinment(state);
  }
  const closeFunction = () => {
    const businessId = localStorage.getItem('business_id')
    history.push(`/center-details/${businessId}`);
    props.getAllCenters()
  };

  const staffService = (e, id) => {
    e.preventDefault();
    return history.push(`/staff/${id}`)
  }

  return (
    <div className="staff-page">
      <CategoryHead />
      {/* <CenterBlock /> */}
      <div className="staff-block">
        <div className={staffState ? 'wrapp' : 'wrapp d-none'}>
          <h2 className="staff-title text-center">
            <Link to="#!" className="back-arrow">
              <img src={backArrow} alt="arrow" />
            </Link>{' '}
            Select Staff
          </h2>


          <div className="staff-package">
            <p className="staff-desc">Select professional for your</p>
            <strong className="sub-title d-block">Package 1</strong>
            <div className="staff-pics d-flex align-items-center">
              <Link
                to="#!"
                className="pic"
                onClick={() => setStaffState(!staffState)}
              >
                <span className="staff-img">
                  <img src={staffImg1} alt="arrow" />
                </span>
              </Link>
              <Link
                to="#!"
                className="pic"
                onClick={() => setStaffState(!staffState)}
              >
                <span className="staff-img">
                  <img src={staffImg2} alt="arrow" />
                </span>
              </Link>
              <Link
                to="#!"
                className="pic"
                onClick={() => setStaffState(!staffState)}
              >
                <span className="staff-img">
                  <img src={staffImg3} alt="arrow" />
                </span>
              </Link>
              <Link
                to="#!"
                className="pic"
                onClick={() => setStaffState(!staffState)}
              >
                <span className="staff-img">
                  <img src={staffImg4} alt="arrow" />
                </span>
              </Link>
              <Link to="#!" className="more-txt">
                +30 more
              </Link>
            </div>
            <div className="text-center">
              <Link to="#!" className="down-btn">
                <img src={backArrow} alt="arrow" />
              </Link>
            </div>
          </div>
          <span className="close-icn" onClick={() => closeFunction()}>
            <img src={closeIcn} alt="close" />
          </span>

          <div className="staff-package">
            <p className="staff-desc">Select professional for your</p>
            <strong className="sub-title d-block">Package 2</strong>
            <div className="staff-pics d-flex align-items-center">
              <Link
                to="#!"
                className="pic"
                onClick={() => setStaffState(!staffState)}
              >
                <span className="staff-img">
                  <img src={staffImg1} alt="arrow" />
                </span>
              </Link>
              <Link
                to="#!"
                className="pic"
                onClick={() => setStaffState(!staffState)}
              >
                <span className="staff-img">
                  <img src={staffImg4} alt="arrow" />
                </span>
              </Link>
              <Link to="#!" className="more-txt">
                +30 more
              </Link>
            </div>
            <div className="text-center">
              <Link to="#!" className="down-btn">
                <img src={backArrow} alt="arrow" />
              </Link>
            </div>
          </div>
        </div>
        <div
          className="wrap stf-dtl-wrp"
          className={
            staffState ? 'wrap stf-dtl-wrp' : 'wrap stf-dtl-wrp d-block'
          }
        >
          {/* <ArrowBackIosNewIcon/> */}
          <div className="add-sticky">

            <h2 className="staff-title text-center">
              <Link
                to="#!"
                onClick={() => setStaffState(!staffState)}
                className="back-arrow"
              >
                <img src={backArrow} alt="arrow" />
              </Link>{' '}
              Select Staff
            </h2>
            <div className="staff-package staff-detail">
              <p className="staff-desc desc2 text-center">
                Select Professional
              </p>
              <div className="staff-pics d-flex justify-content-between">
                {props.staffData.staffs && props.staffData.staffs.length > 0 && props.staffData.staffs.map(value =>
                (
                  <div className="pic">
                    <span className="staff-img">
                      <img src={value.image ? value.image : staffImg1} alt="Image"
                        onClick={(e) => staffService(e, value._id)}></img>
                    </span>
                    <span className="tick-icn">
                      <img src={tickIcn} alt="tick" />
                    </span>
                  </div>
                ))
                }
                {/* <Link to="staff" className={staffState ? 'pic' : 'pic active'}>
                  <span className="staff-img">
                    <img src={staffImg2}/>
                  </span>
                  <span className="tick-icn">
                    <img src={tickIcn} alt="tick" />
                  </span>
                </Link> */}

                {/* <div className="pic" >
                  <span className="staff-img">
                    <img src={staffImg3} alt="Image" onClick={(e) =>staffService(e, id._id)} />
                  </span>
                  <span className="tick-icn">
                    <img src={tickIcn} alt="tick" />
                  </span>
                </div>
                <Link to="/staff" className="pic">
                  <span className="staff-img">
                    <img src={staffImg4} alt="Image" />
                  </span>
                  <span className="tick-icn">
                    <img src={tickIcn} alt="tick" />
                  </span>
                </Link> */}
              </div>
              <p className="staff-desc desc2 text-center">
                When will you like the professional to serve you?
              </p>
              {/* <Form className="selection-form">
                <Form.Group>
                  <Form.Label>Select Date</Form.Label>
                  <Form.Control placeholderText='dd/mm/yyyy' type="date" />
                </Form.Group>

                <Form.Group>
                  <Form.Label>Select Time</Form.Label>
                  <Form.Control type="time" placeholder="Thursday, 17 June, 2020" />
                </Form.Group>
              </Form> */}
            </div>
          </div>
          {/* <Link
            to="/checkout"
            className="btn form-btn d-flex align-items-center justify-content-center"
          >
            <span onClick={() => submitStaff()} className="continue-txt">Save &amp; Continue </span>
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
          </Link> */}
        </div>
      </div>
    </div>
  );
};
const mapStateToProps = (state) => {

  return {
    // userData: state.Profile.profileDocs,
    staff: state.Profile.staff,
    staffData: state.Profile.staffDocs,
  };
};

const mapDispatchToProps = (dispatch) => {

  return {
    bookApoinment: (staff) =>
      dispatch(actions.bookApoinment(staff)),

    getAllStaff: (id) =>
      dispatch(actions.getAllStaff(id)),
      
    getAllCenters: (id) =>
      dispatch(actions.getAllCenters(id)),
  };
};

export default compose(connect(mapStateToProps, mapDispatchToProps))(StaffOne);
