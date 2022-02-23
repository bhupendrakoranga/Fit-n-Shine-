import React, { useState, useEffect } from 'react';
import { Link, useParams, useHistory } from 'react-router-dom';
import DatePicker from "react-datepicker";
import moment from 'moment';
import "react-datepicker/dist/react-datepicker.css";
import { Form, Button } from 'react-bootstrap';
import CategoryHead from '../../CenterDetails/CenterHead/CenterHead';
import CenterBlock from '../../CenterDetails/CenterBlock/CenterBlock';
import './StaffOne.css';
import backArrow from '../../../images/back-arrow.svg';
import staffImg1 from '../../../images/staff-img1.png';
import staffImg2 from '../../../images/staff-img2.png';
import staffImg3 from '../../../images/staff-img3.png';
import staffImg4 from '../../../images/staff-img4.png';
import tickIcn from '../../../images/tick-icn.svg';
import arrowRight from '../../../images/arrow-right.svg';
import { connect } from 'react-redux';
import { compose } from 'redux';
import * as actions from '../../../redux/actions/profile';
import { setIsSubmitted, setIsLoading } from '../../../redux/actions/profile';
const StaffOne = (props) => {
  const [staffState, setStaffState] = useState(false);
  const { id } = useParams();
  const [errors, setErros] = useState({})
  const history = useHistory();
  const [startDate, setStartDate] = useState(new Date());
  const [date, setDate] = useState({
    service_date: "",
    service_time: "",
  })
  const [maxMinDate, setMaxMinDate] = useState({
    maxDate: "",
    minDate: "",
  })

  const [state, setState] = useState({
    service_date: "",
    service_time: "",
    staffId: "",
    serviceId: "",
    consentForm: "",
  })



  const disableCelendarDate = (data) => {
    let minDate = data[0].date
    let maxDate = data[data.length - 1].date
    setMaxMinDate({ minDate: minDate, maxDate: maxDate })
  }

  const handleSubmit = (e, staff) => {

    e.preventDefault();
    if (!validateForm()) {
      return;
    }
    console.log(state);
    props.bookApoinment(state)
  }
  useEffect(() => {
    if (props.isSubmitted) {
      history.push('/payment');
    }
  }, [props.isSubmitted]);


  //  validate form
  const validateForm = () => {

    console.log(state)

    var isValid = true
    if (state.service_date.trim() == '') {
      errors.service_date = "Date is required";
      isValid = false;
    }
    else if (state.service_time.trim() == '' || state.service_time == '0') {
      errors.service_time = "Time is required";
      isValid = false;
    }
    setErros({ ...errors, errors })
    return isValid
  }

  const handleDateChange = (e, type) => {

    let name = e.target.name;
    let value = moment(e.target.value).format("YYYY-MM-DD")
    console.log(date)
    setState({
      ...state,
      [name]: value
    })


    // //datepicker validation clear
    setErros({ errors, service_date: "" });
    props.customersGetAllDate(value);
  }





  //Get PostCode
  useEffect(() => {

    localStorage.setItem("staff_id", id);
    props.customersGetAllDate(date.service_date)
  }, []);
  useEffect(() => {

    if (props.staffDate.length > 0) { disableCelendarDate(props.staffDate) }
  }, [props.staffDate])


  // const submitStaff = () => {
  //   props.bookApoinment(state);
  // }

  const handleInputs = (event) => {

    setErros({ errors, [event.target.name]: "" })
    if (event.target.name == 'service_time') {
      var ts = event.target.value;
      var H = +ts.substr(0, 2);
      var h = (H % 12) || 12;
      h = (h < 10) ? ("0" + h) : h;
      var ampm = H < 12 ? " AM" : " PM";
      ts = h + ts.substr(2, 3) + ampm;
      console.log(ts)

      setState({
        ...state,
        [event.target.name]: event.target.value,
      })
    }
  }
  //TIME CHANGES
  const handleChangeTime = (event) => {
    setState({
      ...state, service_time: event.target.value
    })
  }
  //DATE CHANGES
  const handleChangeStatus = (event) => {
    setState({ ...state, service_date: event.target.value })
    props.customersGetAllAvilable(event.target.value)
  }

  return (
    <div className="staff-page">
      <CategoryHead />
      <div className="staff-block">
        <div className={staffState ? 'wrap' : 'wrap d-none'}>
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
        </div>
        <div
          className="wrap stf-dtl-wrp"
          className={
            staffState ? 'wrap stf-dtl-wrp' : 'wrap stf-dtl-wrp d-block'
          }
        >
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
                <Link to="#!" className="pic">
                  <span className="staff-img">
                    <img src={staffImg1} alt="Image" />
                  </span>
                  <span className="tick-icn">
                    <img src={props.staffData.image ? props.staffData.image : tickIcn} alt="tick" />
                  </span>
                </Link>
              </div>
              <p className="staff-desc desc2 text-center">
                When will you like the professional to serve you?
              </p>
              <Form className="selection-form">
                <Form.Group>
                  <Form.Label>Select Date</Form.Label>
                  {/* <Form.Control placeholder='yyyy/dd/mm/' name="service_date" min={maxMinDate.minDate} max={maxMinDate.maxDate} value={state.service_date} onChange={(e) => handleDateChange(e)} type="date" />
                  <div className="error_message" >{errors.service_date}</div> */}
                  <div style={{ display: 'flex', width: "100%", justifyContent: 'center' }} className="selectDiv3">
                    <select onChange={handleChangeStatus} name="service_date" value={state.service_date} className="select3">
                      {props.staffDate.length > 0 && props.staffDate.map((row, i) =>
                        <option key={row.date} value={row.date} >{row.date}  ({row.day})</option>)}
                    </select>
                  </div>
                </Form.Group>
                <Form.Group>
                  <Form.Label>Select Time</Form.Label>
                  <div style={{ display: 'flex', width: "100%", justifyContent: 'center' }} className="selectDiv3">
                    <select onChange={handleChangeTime} name="service_time" value={state.service_time} className="select3">
                      {props.staffTime.length > 0 && props.staffTime.map((row, i) => <option key={row.time} value={row.time}>{row.time} ({row.slot})</option>)}
                    </select>
                  </div>
                  {/* <Form.Control placeholder='HH:mm' name="service_time" onChange={handleInputs} value={state.service_time} type="time" />
                  <div className="error_message" >{errors.service_time}</div> */}
                </Form.Group>
              </Form>
            </div>
          </div>
          <div
            to="/checkout"
            className="btn form-btn d-flex align-items-center justify-content-center"
          >
            <span onClick={handleSubmit} className="continue-txt">Save &amp; Continue </span>
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
          </div>
        </div>
      </div>
    </div>
  );
};
const mapStateToProps = (state) => {

  return {
    staff: state.Profile.staff,
    staffData: state.Profile.staffDocs,
    staffDate: state.Profile.staffDate,
    staffTime: state.Profile.staffTime,
    isSubmitted: state.Profile.isSubmitted,
  };
};


const mapDispatchToProps = (dispatch) => {

  return {
    bookApoinment: (staff) =>
      dispatch(actions.bookApoinment(staff)),

    getAllStaff: (id) =>
      dispatch(actions.getAllStaff(id)),

    customersGetAllDate: (date) =>
      dispatch(actions.customersGetAllDate(date)),

    customersGetAllAvilable: (date) =>
      dispatch(actions.customersGetAllAvilable(date)),
    setIsSubmitted: (flag) =>
      dispatch(setIsSubmitted(flag))
  }
};


export default compose(connect(mapStateToProps, mapDispatchToProps))(StaffOne);
