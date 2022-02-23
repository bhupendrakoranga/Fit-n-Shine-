import React, { useState, useRef, useEffect } from 'react';
import { Tab, Form, Button, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import styles from '../OTP/OTP.css';
import popupLogo from '../../images/popup-logo.png';
import closeIcn from '../../images/close-icn.svg';
import { TextField, FormControlLabel, Checkbox } from '@material-ui/core';
import { makeStyles, withStyles } from '@material-ui/core/styles';

const GreenCheckbox = withStyles({
  root: {
    color: '#B22222',
    '&$checked': {
      color: '#B22222',
    },
  },
  checked: {},
})((props) => <Checkbox color="default" {...props} />);

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: 20,
    height: 220,
    '& label.Mui-focused': {
      fontSize: '14px',
      fontFamily: 'Montserrat',
      fontWeight: 'normal',
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
      fontSize: '1.1rem',
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
  label: {
    color: 'red',
    ['@media (max-width:320px)']: {},
  },
}));

const SignInUp = (props) => {
  const [loginState, setLoginState] = useState(false);
  const [otpForm, setotpForm] = useState({
    text1: '',
    text2: '',
    text3: '',
    text4: '',
    isExpired: false,
    time: {},
    breakRemainingSeconds: 10,
  });
  const inputRef1 = useRef('input_1');
  const inputRef2 = useRef('input_2');
  const inputRef3 = useRef('input_3');
  const inputRef4 = useRef('input_4');

  const handleOTP = (event) => {
    event.preventDefault();
    const name = event.target.name;
    setotpForm({
      ...otpForm,
      [name]: event.target.value.trim(),
    });

    if (event.target.name == 'text1' && event.target.value.trim() !== '') {
      inputRef2.current.focus();
    } else if (
      event.target.name == 'text2' &&
      event.target.value.trim() !== ''
    ) {
      inputRef3.current.focus();
    } else if (
      event.target.name == 'text3' &&
      event.target.value.trim() !== ''
    ) {
      inputRef4.current.focus();
    }
    //this.refs.input_2.focus();
  };

  //Prevent to eneter alphabets
  const onKeyPress = (event) => {
    const pattern = /[0-9-+ /b]/;
    let inputChar = String.fromCharCode(event.charCode);
    if (!pattern.test(inputChar)) {
      event.preventDefault();
    }
  };

  const onKeyDown = (e) => {
    if (e.key === 'Backspace') {
      if (e.target.name == 'text1') {
        //inputRef2.current.focus();
      } else if (e.target.name == 'text2') {
        inputRef1.current.focus();
      } else if (e.target.name == 'text3') {
        inputRef2.current.focus();
      } else if (e.target.name == 'text4') {
        inputRef3.current.focus();
      }
      setotpForm({
        ...otpForm,
        [e.target.name]: '',
      });
      e.preventDefault();
    }
  };
  //submit OTP
  const handleSubmit = () => {
    // alert("OTP submit")
    console.log('OTP verified');
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
        <div className="otp-up-wrp">
          <div className="Box">
            {/* <span className="close-icn" onClick={()=> setLoginState(!loginState)}><img src={closeIcn} alt="close" /></span> */}
            {/* <div className="text-center">
                        <Link className="popup-logo" to="#!"><img src={popupLogo} alt="" /></Link>
                    </div> */}

            <div className="otp-text">Enter OTP</div>
            <div className="mid-text">
              Please Enter the one time password that was sent on your Email
              account
            </div>
            <div className="textField">
              <form className="form" noValidate autoComplete="off">
                <input
                  value={otpForm.text1}
                  onChange={handleOTP}
                  onKeyPress={onKeyPress}
                  onKeyDown={onKeyDown}
                  name="text1"
                  maxLength="1"
                  ref={inputRef1}
                />
                <input
                  value={otpForm.text2}
                  onChange={handleOTP}
                  onKeyPress={onKeyPress}
                  onKeyDown={onKeyDown}
                  maxLength="1"
                  name="text2"
                  ref={inputRef2}
                />
                <input
                  value={otpForm.text3}
                  onChange={handleOTP}
                  onKeyPress={onKeyPress}
                  onKeyDown={onKeyDown}
                  maxLength="1"
                  name="text3"
                  ref={inputRef3}
                />
                <input
                  value={otpForm.text4}
                  onChange={handleOTP}
                  onKeyPress={onKeyPress}
                  onKeyDown={onKeyDown}
                  maxLength="1"
                  ref={inputRef4}
                  name="text4"
                />
              </form>
            </div>
            <div className="wrap">
              <button onClick={handleSubmit} className="button4">
                Enter
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default SignInUp;
