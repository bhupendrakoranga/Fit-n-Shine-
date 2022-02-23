import React, { useState } from 'react';
import { Tab, Form, Button, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Location.css';
import popupLogo from '../../images/popup-logo.png';
import closeIcn from '../../images/close-icn.svg';

const SignInUp = (props) => {
  const [loginState, setLoginState] = useState(false);
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
          <span
            className="close-icn"
            onClick={() => setLoginState(!loginState)}
          >
            <img src={closeIcn} alt="close" />
          </span>
          <div className="text-center">
            <Link className="popup-logo" to="#!">
              <img src={popupLogo} alt="" />
            </Link>
          </div>
          <div className="Box1">
            <div className="location-text">Allow Location access</div>

            <div className="wrap">
              <p className="text">SKip for now</p>
              <button className="button4">Finish</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default SignInUp;
