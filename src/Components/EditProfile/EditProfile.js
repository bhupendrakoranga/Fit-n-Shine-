import React, { useState, useEffect } from 'react';
import { Tab, Form, Button, Nav } from 'react-bootstrap';
import { Link, useParams, useHistory } from 'react-router-dom';
import styles from './EditProfile.css';
import popupLogo from '../../images/popup-logo.png';
import closeIcn from '../../images/close-icn.svg';
import profImg from './profile-img2.jpg';
import delete_icon from '../EditProfile/delete_icon.svg';
import image_icon from './image_icon.png';
// import { toast } from 'react-toastify';
import { toast } from 'react-toastify';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { setIsSubmitted, setIsLoading } from '../../redux/actions/profile';
import * as actions from '../../redux/actions/profile';
import * as API from '../../constants/APIs';
// import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import axios from 'axios';
// import DeleteIcon from '@mui/icons-material/Delete';
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
import { red } from '@material-ui/core/colors';
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

const EditProfile = (props) => {
  const [loginState, setLoginState] = useState(false);
  // const [values, setValues] = React.useState({
  //     name: "",
  //     contactNumber: "",
  //     address: "",
  //     email: "",
  // });

  const [modal, setModal] = useState({
    changeModel: false,
  });
  const [arrayDetails, setArrayDetails] = useState([]);
  const { user_id } = useParams();
  const [changeStatus, setChangeStatus] = useState(false);
  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
    setErros({ errors, [e.target.name]: '' });
  };
  const [errors, setErros] = useState({});
  const classes = useStyles();
  const history = useHistory();
  const [state, setState] = useState({
    name: '',
    contact_number: '',
    address: '',
    email: '',
    image_icon: '',
    profImg: '',
  });

  //VALIDATION WORK
  const validateForm = () => {
    ;
    var emailValid = state.email.match(
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
    // var mobileValid = state.contact_number.toString().match(/^[0-9]?[6789]\d{9}$/);
    // console.log(state)
    // event.preventDefault();
    var isValid = true;
    if (state.name.trim() == '') {
      errors.name = 'name is required';
      isValid = false;
    } else if (state.contact_number.trim() == '') {
      errors.contact_number = 'contact is required or invalid number';
      isValid = false;
    } else if (state.address.trim() == '') {
      errors.address = 'address is required';
      isValid = false;
    } else if (state.email.trim() == '') {
      errors.email = 'enter email';
      isValid = false;
    }
    setErros({ ...errors, errors: errors });
    return isValid;
  };

  const uploadFile = (e, data) => {
    if (e.target.files && e.target.files.length > 0) {
      var a = e.target.files[0].size;
      const fsize = Math.round(a / 1024);
      var validExtensions = ['jpg', 'png', 'PNG', 'JPG', 'jpeg', 'JPEG'];
      var isValid = true;
      let file_name = e.target.files[0].name;
      let fileExt = file_name.substr(file_name.lastIndexOf('.') + 1);
      console.log(e.target.files[0]);
      if (e.target.files[0]) {
        if (e.target.files[0].size > 1048576 * 0.5) {
          e.target.value = '';
          isValid = false;
          toast.error(`file size should less than 500KB`);
          return;
        }
      }

      let n = validExtensions.includes(fileExt);

      if (!n) {
        toast.error(`please select image file`);
        return;
      }
      if (isValid) {
        var fileName = e.target.files[0].name;
        var fileNameExt = fileName.substr(fileName.lastIndexOf('.') + 1);
      }
      let reader = new FileReader();
      reader.onloadend = (e) => {
        setState({
          ...state,
          image_change: true,
          file_name: fileNameExt,
          image_icon: reader.result,
        });
      };
      reader.readAsDataURL(e.target.files[0], fileNameExt);
    }
    setErros({ errors, image: '' });
    let formData = new FormData();
    formData.append('profile', e.target.files[0]);
    let config = {
      url: `${API.uploadImage}`,
      method: 'POST',
      headers: {
        // 'Accept-Language': 'hi',
        accept: 'application/json',
        Authorization: 'Bearer ' + localStorage.getItem('token'),
      },
      data: formData,
    };
    axios(config)
      .then((response) => {
        if (response.data.success) {
          // toast.success(response.data.message)
          //   props.assetAdd(page, limit, search);
        }
      })
      .catch((response) => {
        toast.error(response.response.data.message);
      });
  };

  useEffect(() => {
    setUserData(props.userData);
    return () => { };
  }, []);

  const setUserData = () => {
    setState({
      ...state,
      name: props.userData.name,
      contact_number: props.userData.contactNumber,
      address: props.userData.postCode,
      email: props.userData.emailId,
      profImg: props.userData.image,
      // image_icon: props.userData.image
    });
  };

  // Handle Submit Station
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) {
      return;
    }
    console.log(state);
    props.updateProfile(state);
  };
  useEffect(() => {
    if (props.isSubmitted) {
      history.push('/profile');
    }
  }, [props.isSubmitted]);

  //Delete Profile
  const deleteProfile = async () => {
    // console.log(data)
    let config = {
      url: `${API.deleteProfile}`,
      method: 'DELETE',
      headers: {
        // 'Accept-Language': 'hi',
        accept: 'application/json',
        Authorization: 'Bearer ' + localStorage.getItem('token'),
      },
      // data: data,
    };
    axios(config)
      .then((response) => {
        if (response.data.success) {
          // toast.success(response.data.message)
          history.push('./profile');
        }
      })
      .catch((err) => {
        toast.error(err.response.data.message);
        props.setIsLoading(false);
      });
  };
  //   useEffect(() => {
  //     props.updateProfile()
  //    },[])
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
        <div className="edit-profile">
          <span className="close-icn" onClick={() => closeFunction()}>
            <img src={closeIcn} alt="close" />
          </span>
          {/* <div className="text-center">
                        <figure className="profile-pic" for="file-input" type="name"><img src={{state.profImg}} alt="profile" /></figure>
                        <input id="file-input" type="file" style={{ display: 'none' }} onChange={uploadFile} className="upload_image" accept="image/*" />
                    </div> */}
          <div className="textfield">
            {/* <label style={{color: ' soloid #535763'}}>Upload Service Icon</label> */}
            <div className={styles.image_upload}>
              <label
                className={
                  state.image_icon
                    ? classes.show_image_true
                    : state.profImg
                      ? classes.show_image_true
                      : classes.show_image
                }
                for="file-input"
              >
                <img
                  style={{ marginTop: '7px', borderRadius: 30, height: 70 }}
                  // src= {state.profImg ? state.profImg : (state.image_icon ? state.image_icon : profImg)} />
                  src={
                    state.image_icon
                      ? state.image_icon
                      : state.profImg
                        ? state.profImg
                        : image_icon
                  }
                />
              </label>
            </div>
            <input
              id="file-input"
              type="file"
              style={{ display: 'none' }}
              onChange={uploadFile}
              className={styles.upload_image}
              accept="image/*"
            />
            <div className={styles.error_message}>{errors.image}</div>
          </div>
          <Tab.Container className="tabs-wrap" defaultActiveKey="second">
            {/* <DeleteIcon /> */}
            {/* {props.userData.image_icon?props.userData.image_icon:(state.profImg) && (
                        <div className="delete-profile" onClick={(e) => deleteProfile(e, 'delete')} >
                            <button className="head" style={{ color: "red", backgroundColor: "transparent", border: "none" }}>Delete Profile Image</button>                                               
                        </div>)} */}
            {(props.userData.image || state.image_icon) && (
              <div className="delete-profile" onClick={(e) => deleteProfile(e)}>
                <button
                  className="head"
                  style={{
                    color: 'red',
                    backgroundColor: 'transparent',
                    border: 'none',
                  }}
                >
                  Delete Profile Image
                </button>
              </div>
            )}
            {!(props.userData.image || state.image_icon) && (
              <div className="add-profile-image">
                <button
                  className="head"
                  style={{
                    color: 'green',
                    backgroundColor: 'transparent',
                    border: 'none',
                    marginLeft: 125,
                  }}
                >
                  Add Profile Image
                </button>
              </div>
            )}
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="formBasicEmail">
                <Form.Control
                  type="name"
                  placeholder="Enter Name"
                  onChange={handleChange}
                  name="name"
                  value={state.name}
                />
                <div className="errors">{errors.name}</div>
              </Form.Group>
              <Form.Group controlId="formBasicEmail">
                <Form.Control
                  type="name"
                  placeholder="Enter contact Number"
                  onChange={handleChange}
                  name="contact_number"
                  value={state.contact_number}
                />
                <div className="errors">{errors.contact_number}</div>
              </Form.Group>
              <Form.Group controlId="formBasicEmail">
                <Form.Control
                  type="name"
                  placeholder="Enter Address"
                  onChange={handleChange}
                  name="address"
                  value={state.address}
                />
                <div className="errors">{errors.address}</div>
              </Form.Group>
              <Form.Group controlId="formBasicPassword">
                <Form.Control
                  type="name"
                  placeholder="Enter Email"
                  onChange={handleChange}
                  name="email"
                  value={state.email}
                  autoComplete="current-password"
                />
                <div className="errors">{errors.email}</div>
              </Form.Group>
              <div className="edit-buttonn">
                <button className="edit-button" onSubmit={handleSubmit}>
                  Save
                </button>
              </div>
            </Form>
          </Tab.Container>
        </div>
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    userData: state.Profile.profileDocs,
    isSubmitted: state.Profile.isSubmitted,
    isLoading: state.Profile.isLoading,
  };
};

const mapDispatchToProps = (dispatch) => {
  ;
  return {
    setIsLoading: (value) => dispatch(setIsLoading(value)),
    updateProfile: (userData) => dispatch(actions.updateProfile(userData)),
    setIsSubmitted: (flag) => {
      dispatch(setIsSubmitted(flag));
    },
  };
};
export default compose(connect(mapStateToProps, mapDispatchToProps))(
  EditProfile
);
