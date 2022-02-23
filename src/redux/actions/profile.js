import axios from 'axios';
// import * as API from '../../constants/APIs';
import * as API from '../../constants/APIs';
import * as myConstClass from '../../Components/constants/constants';
import * as actionTypes from './actionTypes';
import { ToastContainer, toast } from 'react-toastify';

export function setIsSubmitted(success) {
  return {
    type: actionTypes.IS_SUBMITTED,
    isSubmitted: success,
  };
}
export function setIsLoading(loading) {
  return {
    type: actionTypes.SET_ISLOADING,
    isLoading: loading,
  };
}

export function getProfile() {
  return async (dispatch) => {
    // let station_id = localStorage.getItem('station_id');
    axios({
      method: 'GET',
      url: `${API.getProfileAPI}`,
      headers: {
        accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + localStorage.getItem('token'),
      },
    })
      .then((response) => {
        if (response.data.success) {
          dispatch(profileSuccess(response.data.data));
          //  toast.success(response.data.message)
        } else {
        }
        // dispatch(setIsLoading(false))
      })
      .catch((response) => {
        dispatch(profileSuccess([], 0));
        // dispatch(setIsSubmitted(false))
        // dispatch(setIsLoading(false))
      });
  };
}

//DATA
export function profileSuccess(data) {
  return {
    type: actionTypes.PROFILE_SUCCESS,
    data: data,
  };
}

export function updateProfile(profile) {
  ;
  return async (dispatch) => {
    ;
    console.log(profile);
    // let a = await dispatch(setIsLoading(true))
    var data = {
      name: profile.name,
      emailId: profile.email,
      contactNumber: profile.contact_number,
      postCode: profile.address,
      // "image":profile.image_icon
    };
    axios({
      method: 'PATCH',
      url: `${API.updateProfileAPI}`,
      headers: {
        //  'Accept-Language': 'hi',
        accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + localStorage.getItem('token'),
      },
      data: JSON.stringify(data),
    })
      .then((response) => {
        if (response.data.code == '200') {
          dispatch(setIsSubmitted(true));
          toast.success('Updated');

          // history.push('./profile')
          // dispatch(profileSuccess(response.data.data))
        } else {
          dispatch(setIsSubmitted(false));
        }
      })
      .then((data) => console.log(data))
      .catch((response) => {
        toast.error(response.response.data.message);
        dispatch(setIsSubmitted(false));
        dispatch(setIsLoading(false));
      });
  };
}

export function getAllCenters(id) {
  return async (dispatch) => {
    // let station_id = localStorage.getItem('station_id');
    axios({
      method: 'GET',
      url: `${API.getCentersAPI}/${id}`,
      headers: {
        accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + localStorage.getItem('token'),
      },
    })
      .then((response) => {
        if (response.data.success) {
          dispatch(centerSuccess(response.data.data));
          // toast.success(response.data.message)
        } else {
        }
        // dispatch(setIsLoading(false))
      })
      .catch((response) => {
        dispatch(centerSuccess([], 0));
        // dispatch(setIsSubmitted(false))
        // dispatch(setIsLoading(false))
      });
  };
}

//DATA
export function centerSuccess(data) {
  return {
    type: actionTypes.CENTER_SUCCESS,
    data: data,
  };
}

//Book Apoinment 
export function bookApoinment(staff) {

  let method = 'POST';
  return async (dispatch) => {
    const data = {
      "serviceId": localStorage.getItem("service_id"),
      "staffId": localStorage.getItem('staff_id'),
      "selectedDate": staff.service_date,
      "selectedTime": staff.service_time,
      "consentForm": staff.consentForm[
        {}
      ]
    };
    axios({
      method: method,
      url: API.bookApoinment,
      headers: {
        'Content-Type': 'Application/json',
        Accept: 'Application/json',
        Authorization: 'Bearer ' + localStorage.getItem('token'),
      },
      data: data,
    })
      .then((response) => {

        if (response.data.success) {
          dispatch(setIsSubmitted(true));
          toast.success(response.data.message)
          // dispatch(bookingStatus())
        }
      })
      .catch((response) => {
        toast.error(response.response.data.message);
      });
  };
}


export function getAllStaff(_id) {

  return async (dispatch) => {
    let staff_id = localStorage.getItem('staff_id');
    axios({
      method: 'GET',
      url: `${API.getStaffID}/${_id}`,
      headers: {
        accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + localStorage.getItem('token'),
      },
    })
      .then((response) => {

        if (response.data.success) {
          dispatch(staffSuccess(response.data.data));
          //  toast.success(response.data.message)
        }
      })
      .catch((response) => {
        dispatch(staffSuccess([], 0));
      });
  };
}

//DATA
export function staffSuccess(data) {

  return {
    type: actionTypes.STAFF_SUCCESS,
    data: data,
  };
}


export function customersGetAllDate(date) {

  return async dispatch => {

    let staff_id = localStorage.getItem('staff_id');
    let service_id = localStorage.getItem('service_id');
    // let selectedDate = localStorage.getItem('selectedDate')

    axios({
      method: 'GET',
      url: `${API.GetAllAvilableDate}/${staff_id}?date=${date}`,
      headers: {
        "accept": "application/json",
        "Content-Type": "application/json",
        'Authorization': 'Bearer ' + localStorage.getItem('token'),
      },
    }).then(response => {
      if (response.data.success) {
        dispatch(setIsSubmitted(false))
        dispatch(getAllServiceDateAction(response.data.data))

      }
    }).catch((response) => {
      dispatch(getAllServiceDateAction([], 0))
      toast.error(response.response.data.message)
      dispatch(setIsLoading(false))
    })

  }
}

export function getAllServiceDateAction(data) {

  return {
    type: actionTypes.GET_ALL_DATE,
    data: data,
  }
}

export function customersGetAllAvilable(date) {
  return async dispatch => {
    let staff_id = localStorage.getItem('staff_id');
    let service_id = localStorage.getItem('service_id');
    axios({
      method: 'GET',
      url: `${API.GetAllDate}/${staff_id}/${service_id}/${date}`,
      headers: {
        "accept": "application/json",
        "Content-Type": "application/json",
        'Authorization': 'Bearer ' + localStorage.getItem('token'),
      },
    }).then(response => {
      if (response.data.success) {
        dispatch(getAllAvilableDateAction(response.data.data))
      }
    }).catch((response) => {
      dispatch(getAllAvilableDateAction([], 0))
      toast.error(response.response.data.message)
    })
  }
}

export function getAllAvilableDateAction(data) {

  return {
    type: actionTypes.GET_TIME_FOR_AVAILABLE_DATE,
    data: data,
  }
}