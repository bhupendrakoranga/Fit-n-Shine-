import React, { useState, useEffect } from 'react';
import { Tab, Form, Button, Nav } from 'react-bootstrap';
import { Link, Redirect, useHistory } from 'react-router-dom';
import styles from './resetPassword.css';
import popupLogo from '../../images/popup-logo.png';
import closeIcn from '../../images/close-icn.svg';
import { toast } from 'react-toastify';
import * as API from '../../constants/APIs';
import axios from 'axios';
// import IconButton from "@material-ui/core/IconButton";
// import Visibility from "@material-ui/icons/Visibility";
// import VisibilityOff from "@material-ui/icons/VisibilityOff";
// import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
// import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import { TextField, FormControlLabel, Checkbox } from '@material-ui/core';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
// import { reset } from "redux-form";

const useStyles = makeStyles((theme) => ({
  root: {
    height: 300,
    '& checked': {
      color: 'green',
    },
    '& label.Mui-focused': {
      color: '#272D3B',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: '#272D3B',
    },
    '& .MuiTextField-root': {
      margin: theme.spacing(2),
      width: '25em',
      display: 'block',
      ['@media (max-width:320px)']: {
        width: '90%',
      },
      ['@media (min-width:321px) and (max-width:500px)']: {
        width: '19em',
      },
    },

    '& .MuiOutlinedInput-input': {
      padding: '16.5px 10px',
      ['@media (max-width:500px)']: {
        padding: '14px 10px 17px',
      },
    },

    '& .MuiFormLabel-root': {
      // fontSize:"1.1rem",
      ['@media (max-width:500px)']: {
        fontSize: '0.9rem',
      },
    },

    '& .MuiButton-root': {
      width: '90%',
      ['@media (max-width:500px)']: {
        width: '90%',
      },
    },
  },
  textfield1: {
    '& .MuiInputBase-root': {
      fontSize: 15,
      fontWeight: 'bold',
      fontFamily: 'Montserrat',
    },
    '& label.Mui-focused': {
      color: '#272D3B',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: '#272D3B',
    },
  },
  label: {
    color: 'red',
    ['@media (max-width:320px)']: {},
  },
}));

const ResetPassword = (props) => {
  const [loginState, setLoginState] = useState(false);
  const [values, setValues] = React.useState({
    password: '',
    showPassword: false,
  });

  const history = useHistory();
  const [values1, setValues1] = React.useState({
    password: '',
    showPassword1: false,
  });
  const handleClickShowPassword = (event) => {
    console.log(event);
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleClickShowPassword1 = (event) => {
    console.log(event);
    setValues1({ ...values1, showPassword1: !values1.showPassword1 });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleMouseDownPassword1 = (event) => {
    event.preventDefault();
  };
  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value.trim() });
    setErros({ errors, [e.target.name]: '' });
  };
  const [errors, setErros] = useState({});
  const classes = useStyles();
  const [state, setState] = useState({
    newPassword: '',
    confirmPassword: '',
  });

  const handleSubmit = (event, username) => {
    event.preventDefault();
    var isValid = true;
    if (state.newPassword == '') {
      errors.newPassword = 'password is required';
      setErros({ ...errors, errors: errors });
      return;
    } else if (state.confirmPassword == '') {
      errors.confirmPassword = 'password is required';
      setErros({ ...errors, errors: errors });
      return;
      isValid = false;
    } else if (state.confirmPassword !== state.newPassword) {
      errors.confirmPassword =
        'new password and confirm password does not match';
      setErros({ ...errors, errors: errors });
      return;
      isValid = false;
    }
    let data = {
      // value: localStorage.getItem('value', username),
      password: state.newPassword,
      confirm_password: state.confirmPassword,
    };
    axios({
      method: 'PATCH',
      url: `${API.resetPasswordAPI}`,
      data: data,
      headers: {
        accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + localStorage.getItem('token'),
      },
      data: data,
    })
      .then((response) => {
        if (response.data.success) {
          window.alert('Password Changed Successfully');
          history.push('/profile');
          toast.success(response.data.message);
        } else {
        }
      })
      .catch((err) => {
        toast.error(err.response.data.message);
      });
  };

  // useEffect(() => {
  //     let value = localStorage.getItem('value')
  //     if (!value) {
  //       history.push('/profile')
  //     }
  //   })
   const closeFunction = () => {
    history.push('/profile');
  };
  return (
    <>
      <div
        className={
          loginState
            ? 'overlay-page align-items-center justify-content-center'
            : 'overlay-page align-items-center justify-content-center active-flex'
        }
      >
        <div className="signin-up-wrp">
          {/* <span className="close-icn" onClick={()=> setLoginState(!loginState)}><img src={closeIcn} alt="close" /></span> */}
           <span className="close-icn" onClick={() => closeFunction()}>
            <img src={closeIcn} alt="close" />
          </span>
          <div className="text-center">
            <Link className="popup-logo" to="#!">
              <img src={popupLogo} alt="" />
            </Link>
          </div>
          <Tab.Container className="tabs-wrap" defaultActiveKey="second">
            <div className="reset-password">
              <h2 className="head">RESET PASSWORD</h2>
            </div>
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="formBasicEmail">
                <Form.Control
                  type="password"
                  placeholder="Enter New Password"
                  onChange={handleChange}
                  name="newPassword"
                  value={state.newPassword}
                />
                <div className="errors">{errors.newPassword}</div>
              </Form.Group>
              <Form.Group controlId="formBasicPassword">
                <Form.Control
                  type="password"
                  placeholder="Confirm New Password"
                  onChange={handleChange}
                  name="confirmPassword"
                  value={state.confirmPassword}
                  autoComplete="current-password"
                />
                <div className="errors">{errors.confirmPassword}</div>
              </Form.Group>
              <div className="button-wrap">
                <button className="password-button" onSubmit={handleSubmit}>
                  RESET MY PASSWORD
                </button>
              </div>
            </Form>
          </Tab.Container>
        </div>
      </div>
    </>
  );
};
export default ResetPassword;
