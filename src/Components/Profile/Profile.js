import React, { useState, useEffect } from 'react';
import { Container, Form, Accordion, Card, Button } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';
import AccordionContext from 'react-bootstrap/AccordionContext';
import { useAccordionToggle } from 'react-bootstrap/AccordionToggle';
import { useContext } from 'react';
import './Profile.css';
import * as actions from '../../redux/actions/profile';
import * as API from '../../constants/APIs';
import axios from 'axios';
import { toast } from 'react-toastify';
//Images
import profImg from '../../images/profile-img2.jpg';
import SelectBox from '../SelectBox/SelectBox';
import locPin from '../../images/location-pin.svg';
import search from '../../images/search.svg';
import { connect } from 'react-redux';
import { compose } from 'redux';
// import { compose } from '@material-ui/system';
const Profile = (props) => {
  const [state, setState] = useState({
    name: '',
    contactNumber: '',
    address: '',
    email: '',
    profImg: '',
    image_icon: '',
  });

  // Profile
  const [open_Profile, setOpenProfile] = React.useState(false);
  const anchorRef = React.useRef(null);
  const history = useHistory();
  const email = localStorage.getItem('email');
  var userDataLS = JSON.parse(localStorage.getItem('userDataLS'));
  const [arrayDetails, setArrayDetails] = useState([]);
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
            ? 'active card-header d-flex flex-wrap align-items-center'
            : 'card-header flex-wrap d-flex align-items-center'
        }
        onClick={decoratedOnClick}
      >
        {children}
        <i
          className={isCurrentEventKey ? 'icon-caretdown up' : 'icon-caretdown'}
        ></i>
      </button>
    );
  }
  const locOptions = [
    { value: 'India', label: 'India' },
    { value: 'USA', label: 'USA' },
    { value: 'UK', label: 'UK' },
  ];

  const verifyEmail = () => {
    // let data = data
    let config = {
      url: `${API.Verification}`,
      method: 'POST',
      headers: {
        // 'Accept-Language': 'hi',
        accept: 'application/json',
        Authorization: 'Bearer ' + localStorage.getItem('token'),
      },
      // data:data
    };
    axios(config)
      .then((response) => {
        if (response.data.success) {
          toast.success(response.data.message);
          //   history.push('/Asset')
        }
      })
      .catch((err) => {
        toast.error(err.response.data.message);
        props.setIsLoading(false);
      });
  };

  useEffect(() => {
    props.getProfile();
  }, []);

  const handleClose = async (event, type) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }
    setOpenProfile(false);
    if (type == 'profile') {
      history.push('/profile');
    }

    if (type == 'logout') {
      localStorage.removeItem('token');
      localStorage.removeItem('email');
      localStorage.removeItem('password');
      //   localStorage.removeItem('userDataLS');
      history.push('/');
    }
  };

  React.useEffect(() => {
    //
    let token = localStorage.getItem('token');
    if (token == null) {
      history.push('/');
    }
  }, []);

  return (
    <div>
      <div className="center-head ongoing-head">
        <Container>
          <Form className="d-md-flex justify-content-between">
            <Form.Group>
              <span className="loc-icn">
                <img src={locPin} alt="icon" />
              </span>
              <SelectBox placeHolder="Street P…" options={locOptions} />
            </Form.Group>
            <Form.Group>
              <Form.Control
                type="text"
                placeholder="Search service or anything"
              />
              <Button className="search-btn" type="submit">
                <img src={search} alt="search" />
              </Button>
            </Form.Group>
          </Form>
          <div className="info">
            <h2 className="info-title">Profile</h2>
          </div>
        </Container>
      </div>
      <div className="checkout-block ongoing-block available-membership">
        <Container>
          <div className="d-md-flex">
            <div className="finess-panel profile-panel">
              <div className="profile-box text-center">
                <figure className="profile-picc">
                  <img
                    src={props.userData.image ? props.userData.image : profImg}
                    alt="profile"
                    style={{ marginTop: 14 }}
                  />
                </figure>
                <p className="prof-desc">{props.userData.name}</p>
                <Link to="/edit-profile" className="edit-link">
                  Edit Profile
                </Link>
              </div>
              <Accordion className="menu-accordian">
                <Card>
                  <div>
                    <ContextAwareToggle
                      eventKey="0"
                      className="accordion-header"
                    >
                      <p className="w-100">Name</p>
                      {props.userData.name}
                    </ContextAwareToggle>
                  </div>

                  <Accordion.Collapse eventKey="0">
                    <div className="accordion-card accordion-card-first card-body">
                      <p>Vestibulum leo sapien, hendrerit mattis sodales et,</p>
                    </div>
                  </Accordion.Collapse>
                </Card>
                <Card>
                  <div>
                    <ContextAwareToggle
                      eventKey="1"
                      className="accordion-header"
                    >
                      <p className="w-100">Contact Number</p>
                      {props.userData.contactNumber}
                    </ContextAwareToggle>
                  </div>

                  <Accordion.Collapse eventKey="1">
                    <div className="accordion-card accordion-card-first card-body">
                      <p>Vestibulum leo sapien, hendrerit mattis sodales et,</p>
                    </div>
                  </Accordion.Collapse>
                </Card>
                <Card>
                  <div>
                    <ContextAwareToggle
                      eventKey="2"
                      className="accordion-header"
                    >
                      <p className="w-100">Saved Address</p>
                      {props.userData.postCode}
                    </ContextAwareToggle>
                  </div>

                  <Accordion.Collapse eventKey="2">
                    <div className="accordion-card accordion-card-first card-body">
                      <p>Vestibulum leo sapien, hendrerit mattis sodales et,</p>
                    </div>
                  </Accordion.Collapse>
                </Card>
                <Card>
                  <div>
                    <ContextAwareToggle
                      eventKey="3"
                      className="accordion-header"
                    >
                      <p className="w-100">Email</p>
                      {props.userData.emailId}
                    </ContextAwareToggle>
                  </div>

                  <Accordion.Collapse eventKey="3">
                    <div className="accordion-card accordion-card-first card-body">
                      {props.userData.emailId && (
                        <button
                          className="verify-link"
                          onClick={() => verifyEmail()}
                        >
                          Verify
                        </button>
                      )}
                      <div className="help-btn text-center">
                        <Link to="#!" className="btn sec-btn">
                          Help
                        </Link>
                      </div>
                      <div className="text-center">
                        <Link
                          to="/#"
                          className="logout-link"
                          onClick={(e) => handleClose(e, 'logout')}
                        >
                          Log Out
                        </Link>
                      </div>
                    </div>
                  </Accordion.Collapse>
                </Card>
              </Accordion>
              <Link to="/reset-password">
                {' '}
                <div className="reset-word">Reset password</div>
              </Link>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

const mapStateToProps = (state, docs) => {
  return {
    userData: state.Profile.profileDocs,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getProfile: () => dispatch(actions.getProfile()),
  };
};

export default compose(connect(mapStateToProps, mapDispatchToProps))(Profile);
