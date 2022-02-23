import React, { useState, useEffect } from 'react';
import { Tab, Form, Button, Nav } from 'react-bootstrap';
import { toast, ToastContainer } from 'react-toastify';
import { Link, useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { compose } from 'redux';
import axios from 'axios';
import * as actions from '../../redux/actions/auth';
import styles from './SignInUp.css';
import popupLogo from '../../images/popup-logo.png';
import Cookies from 'js-cookie';
import * as API from '../../constants/APIs';
import { setIsSubmitted, setIsLoading } from '../../redux/actions/profile';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import closeIcn from '../../images/close-icn.svg';
import { TextField, FormControlLabel, Checkbox } from '@material-ui/core';

export const SignInUp = (props) => {
  const history = useHistory();
  var token = localStorage.getItem('token');
  const [checked, setChecked] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [tabs, selectedTab] = useState('LOGIN');
  // const [username_ErMsg, setusername_ErMsg] = useState("");
  // const [password_ErMsg, setpassword_ErMsg] = useState("");
  // const [displaytext, setdisplaytext] = useState("hideBlock");
  // const [collapseLng, setLngCollapse] = useState(false);
  const [errors, setErros] = useState({});
  const [loading, setloading] = useState(false);
  const [state, setState] = useState({
    name: '',
    contactNumber: '',
    email: '',
    password: '',
    verifyPhone: true,
    postCode: '',
    passcode: '',
    type: '',
  });
  const [loginState, setLoginState] = useState(false);

  const GreenCheckbox = withStyles({
    root: {
      color: '#213d77',
      '&$checked': {
        color: '#213d77',
      },
    },
    checked: {},
  })((props) => <Checkbox color="default" {...props} />);

  const handleChange = (event) => {
    if (!event.target.checked) {
      Cookies.remove('email');
      Cookies.remove('password');
      Cookies.remove('checked');
    }
    setChecked(event.target.checked);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) {
      return;
    }
    if (tabs == 'LOGIN') {
      props.onAuth(state.email, state.password);
      // history.push("/Home")
    } else {
      props.signInupAuth(state);
    }
    state.type = tabs;
  };

  const validateForm = () => {
    var emailValid = state.email.match(
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
    var mobilenumbervalid = state.contactNumber
      .toString()
      .match(
        '(?:(?:\\+|0{0,2})91(\\s*[\\- ]\\s*)?|[0 ]?)?[789]\\d{9}|(\\d[ -]?){10}\\d',
        'g'
      );

    // <input type="text" pattern="[1-9][0-9]{5}" />
    console.log(state);

    var isValid = true;
    if (tabs == 'SIGNUP' && (state.name == '0' || state.name == '')) {
      errors.name = 'name is required';
      isValid = false;
    } else if (
      tabs == 'SIGNUP' &&
      (state.contactNumber.toString().trim() == '' || !mobilenumbervalid)
    ) {
      errors.contactNumber = 'phone number is required or invalid number';
      isValid = false;
    } else if (state.email.trim() == '' || !emailValid) {
      errors.email = 'invalid email address';
      isValid = false;
    } else if (state.password.trim() == '' || state.password == '0') {
      errors.password = 'Password is required';
      isValid = false;
    } else if (state.passcode.trim() == '' || state.passcode == '0') {
      errors.passcode = 'Please enter pin code';
    }
    if (checked) {
      Cookies.remove('email');
      Cookies.remove('password');
      Cookies.remove('checked');
      Cookies.set('email', { expires: 7 });
      Cookies.set('password', password, { expires: 7 });
      Cookies.set('checked', true, { expires: 7 });
    }
    // localStorage.setItem('rememberMe', checked);
    setErros({ ...errors, errors });
    return isValid;
  };

  const handleInputs = (event) => {
    console.log(event.target.name, event.target.value);
    setState({
      ...state,
      [event.target.name]:
        event.target.name == '' || event.target.name == ''
          ? event.target.value.trim()
          : event.target.value,
    });
    setErros({ errors, [event.target.name]: '' });
  };

  const onKeyPress = (event) => {
    const pattern = /[0-9-+ /b]/;
    let inputChar = String.fromCharCode(event.charCode);
    if (!pattern.test(inputChar)) {
      event.preventDefault();
    }
  };

  // change tab
  const changeTab = (e, tab) => {
    setState({
      name: '',
      contactNumber: '',
      email: '',
      password: '',
      verifyPhone: true,
      postCode: '',
      passcode: '',
      type: '',
    });
    selectedTab(tab);
    setErros({ errors: errors });
  };

  useEffect(() => {
    if (props.isSubmitted) {
      history.push('/home');
    }
  }, [props.isSubmitted]);

  useEffect(() => {
    localStorage.removeItem('email');
    localStorage.removeItem('password');
    // localStorage.removeItem('token');
    // localStorage.removeItem('rememberMe');
    // localStorage.removeItem('is_service_accepting');

    if (token == null) {
      history.push('/');
    }
    // else{
    //   let role = localStorage.getItem('userRole');
    //   if(role == 'Operator'){
    //     history.push('/dashboard-operator')
    //   } else {
    //     history.push('/dashboard')
    //   }
    // }
  }, [token]);

  return (

    <div
      className={
        loginState
          ? 'overlay-page align-items-center justify-content-center'
          : 'overlay-page align-items-center justify-content-center active-flex'
      }
    >
      <div className="signin-up-wrp">
        {/* <span className="close-icn" onClick={() => setLoginState(!loginState)}><img src={closeIcn} alt="close" /></span> */}
        <div className="text-center">
          <Link className="popup-logo" to="/">
            <img src={popupLogo} alt="" />
          </Link>
        </div>
        <Tab.Container className="tabs-wrap" defaultActiveKey="second">
          <Nav variant="pills" className="justify-content-between">
            <Nav.Item>
              <Nav.Link
                eventKey="first"
                onClick={(e) => {
                  changeTab(e, 'SIGNUP');
                }}
              >
                Sign Up
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                eventKey="second"
                onClick={(e) => {
                  changeTab(e, 'LOGIN');
                }}
              >
                Login
              </Nav.Link>
            </Nav.Item>
          </Nav>
          <Tab.Content>
            <Tab.Pane eventKey="first">
              <Form>
                <Form.Group controlId="formBasicName">
                  <Form.Control
                    type="name"
                    placeholder="name"
                    name="name"
                    value={state.name}
                    onChange={handleInputs}
                  />
                  <div className="error_message">{errors.name}</div>
                </Form.Group>

                <Form.Group controlId="formBasicNumber">
                  <Form.Control
                    type="name"
                    placeholder="mobile_number"
                    name="contactNumber"
                    value={state.contactNumber}
                    onChange={handleInputs}
                    onKeyPress={onKeyPress}
                  />
                  <div className="error_message">{errors.contactNumber}</div>
                </Form.Group>

                <Form.Group controlId="formBasicEmail">
                  <Form.Control
                    type="email"
                    placeholder="Email"
                    name="email"
                    value={state.email}
                    onChange={handleInputs}
                  />
                  <div className="error_message">{errors.email}</div>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                  <Form.Control
                    type="password"
                    placeholder="Password"
                    name="password"
                    value={state.password}
                    onChange={handleInputs}
                  />
                  <div className="error_message">{errors.password}</div>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                  <Form.Control
                    type="passcodee"
                    placeholder="Passcode"
                    name="passcode"
                    value={state.passcode}
                    onChange={handleInputs}
                  />
                  <div className="error_message">{errors.passcode}</div>
                </Form.Group>

                <div className={styles.forgotPwdDiv}>
                  <FormControlLabel
                    control={
                      <GreenCheckbox
                        icon={<RadioButtonUncheckedIcon />}
                        checkedIcon={<CheckCircleIcon />}
                        className={styles.checkBox}
                        checked={checked}
                        onChange={handleChange}
                        name="remember me"
                      />
                    }
                    label={
                      <span
                        style={{
                          color: '#272D3B',
                          font: 'normal normal 700 10px/12px Poppins',
                        }}
                      >
                        I Agree to the Privacy Policy and Terms & conditions
                      </span>
                    }
                  />
                </div>

                <div className="text-center">
                  <Link
                    to=""
                    onClick={handleSubmit}
                    className="btn btn-primary d-flex align-items-center justify-content-center"
                  >
                    Sign Up
                  </Link>
                </div>
              </Form>
            </Tab.Pane>

            <Tab.Pane eventKey="second">
              <Form>
                <Form.Group controlId="formBasicEmail">
                  <Form.Control
                    type="email"
                    placeholder="Enter email"
                    name="email"
                    value={state.email}
                    onChange={handleInputs}
                  />
                  <div className="error_message">{errors.email}</div>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                  <Form.Control
                    type="password"
                    placeholder="Password"
                    name="password"
                    value={state.password}
                    onChange={handleInputs}
                  />
                  <div className="error_message">{errors.password}</div>
                </Form.Group>
                {/* <div className="d-flex justify-content-end">
                                        <Link className="forget-pwd" to="#!">Forgot Password?</Link>
                                    </div>
                                    <p className="desc">Don’t have account? <Link to="#!">Sign Up</Link> </p> */}
                <div className="text-center">
                  <Link
                    to="/"
                    onClick={handleSubmit}
                    className="btn btn-primary d-flex align-items-center justify-content-center"
                  >
                    Login
                  </Link>
                </div>
              </Form>
            </Tab.Pane>
          </Tab.Content>
        </Tab.Container>
      </div>
    </div>

  );
};

const mapStateToProps = (state) => {
  return {
    loginMessage: state.Auth.loginMessage,
    token: state.Auth.tokenId,
    isSubmitted: state.Auth.isSubmitted,
    isLoading: state.Auth.isLoading,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onAuth: (email, password) => dispatch(actions.auth(email, password)),

    signInupAuth: (SignUpData) => dispatch(actions.signInupAuth(SignUpData)),
  };
};
export default compose(connect(mapStateToProps, mapDispatchToProps))(SignInUp);
