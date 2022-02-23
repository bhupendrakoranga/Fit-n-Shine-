import axios from 'axios';
import * as API from '../../constants/APIs';
import * as myConstClass from '../../Components/constants/constants';
import * as actionTypes from './actionTypes';
import { ToastContainer, toast } from 'react-toastify';

const api_url = myConstClass.apiUrl;

export const authStart = () => {
  return {
    type: actionTypes.AUTH_START,
  };
};
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

export const authSuccess = (token, user_data, message) => {
  return {
    type: actionTypes.AUTH_SUCCESS,
    idToken: token,
    authData: user_data,
    message: message,
  };
};

export const authFail = (error) => {
  return {
    type: actionTypes.AUTH_FAIL,
    error: error,
  };
};

export const auth = (email, password) => {
  return async (dispatch) => {
    var qs = require('qs');

    const authData = {
      email: email,
      password: password,
    };

    var data = qs.stringify(authData);
    var config = {
      method: 'post',
      url: API.LoginAPI,
      headers: {
        'Content-Type': 'Application/json',
        Accept: 'Application/json',
      },
      data: authData,
    };

    axios(config)
      .then((response) => {
        if (response.data.success) {
          localStorage.setItem('token', response.data.token);
          localStorage.setItem('user_data', JSON.stringify(response.data.data));

          dispatch(
            authSuccess(
              response.data.token,
              response.data.data,
              response.data.message
            )
          );
          dispatch(setIsSubmitted(true));
          // toast.success(response.data.message)
        } else {
        }
      })
      .then(() => { })
      .catch((err) => {
        toast.error(err.response.data.message);
        dispatch(setIsSubmitted(false));
      });
  };
};


//SignUp Page API Integration
export function signInupAuth(SignUpData) {
  let method = 'POST';
  return async (dispatch) => {
    const data = {
      name: SignUpData.name,
      emailId: SignUpData.email,
      contactNumber: SignUpData.contactNumber,
      verifyPhone: true,
      password: SignUpData.password,
      postCode: SignUpData.passcode,
    };

    axios({
      method: method,
      url: API.SignInUp,
      headers: {
        'Content-Type': 'Application/json',
        Accept: 'Application/json',
      },
      data: JSON.stringify(data),
    })
      .then((response) => {
        if (response.data.success) {
        } else {
        }
      })
      .catch((response) => {
        toast.error(response.response.data.message);
      });
  };
}

export function complainTypeStatus(addStatus) {
  return {
    type: actionTypes.SIGNUP_STATUS,
    addStatus: addStatus,
  };
}


//Service Card GET API
export function getService() {
  return async (dispatch) => {
    let station_id = localStorage.getItem('station_id');
    axios({
      method: 'GET',
      url: `${API.ServiceCardAPI}`,
      headers: {
        accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + localStorage.getItem('token'),
      },
    })
      .then((response) => {
        if (response.data.success) {
          dispatch(getServiceAction(response.data.data));
          // toast.success(response.data.message)
        } else {
        }
      })
      .catch((response) => {
        dispatch(getServiceAction([], 0));
        toast.error(response.response.data.message);
      });
  };
}

export function getServiceAction(data) {
  return {
    type: actionTypes.GET_SERVICE_ACTION,
    data: data,
  };
}


//My Favourite Card Get API
export function getFavourite() {
  return async (dispatch) => {
    axios({
      method: 'GET',
      url: `${API.FavouriteCardAPI}`,
      headers: {
        accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + localStorage.getItem('token'),
      },
    })
      .then((response) => {

        if (response.data.success) {
          dispatch(getFavouriteAction(response.data.data));
          // toast.success(response.data.message)
        } else {
        }
      })
      .catch((response) => {
        dispatch(getFavouriteAction([], 0));
        toast.error(response.response.data.message);
      });
  };
}

export function getFavouriteAction(data) {
  return {
    type: actionTypes.GET_FAVOURITE_ACTION,
    data: data,
  };
}


//Get All Service Cards
export function getAllServiceCard(id, postCode) {

  return async (dispatch) => {
    axios({
      method: 'GET',
      url: `${API.GetAllServiceAPI}/${id}/${postCode}`,
      headers: {
        accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + localStorage.getItem('token'),
      },
    })
      .then((response) => {
        ;
        if (response.data.success) {
          dispatch(getAllServiceAction(response.data.data));
          // toast.success(response.data.message)
        } else {
        }
      })
      .catch((response) => {
        dispatch(getAllServiceAction([], 0));
        toast.error(response.response.data.message);
      });
  };
}

export function getAllServiceAction(data) {
  return {
    type: actionTypes.GET_ALL_SERVICE,
    data: data,
  };
}


//Remove My Favourite API
export function removeFavourite(favourite) {

  let method = "POST";
  return async dispatch => {
    const data = {
      "businessId": favourite,
    }


    axios({
      method: method,
      url: API.RemoveFavourite,
      headers: {
        "accept": "application/json",
        "Content-Type": "application/json",
        'Authorization': 'Bearer ' + localStorage.getItem('token'),
      },
      data: data
    }).then(response => {

      if (response.data.success) {
        toast.success(response.data.message)
        dispatch(removeFavouriteStatus())
      } else {
      }
    }).catch((response) => {
      toast.error(response.response.data.message)
    })
  }
}


export function removeFavouriteStatus(removeID) {

  return {
    type: actionTypes.REMOVE_FAVOURITE_STATUS,
    removeID: removeID,
  }
}


//Add My Favourite API
export function submitAllFavourite(favourite) {

  let method = "POST";
  return async dispatch => {
    const data = {
      "businessId": favourite,
    }
    axios({
      method: method,
      url: API.AddFavourite,
      headers: {
        "accept": "application/json",
        "Content-Type": "application/json",
        'Authorization': 'Bearer ' + localStorage.getItem('token'),
      },
      data: data
    }).then(response => {

      if (response.data.success) {
        toast.success(response.data.message)
        dispatch(addFavouriteStatus())
      } else {
      }
    }).catch((response) => {
      toast.error(response.response.data.message)
    })
  }
}


export function addFavouriteStatus(addID) {

  return {
    type: actionTypes.ADD_FAVOURITE_STATUS,
    addID: addID,
  }
}


//Give Rating To Staff 
export function giveRatingStaff(ratingData) {

  let method = "POST";
  return async dispatch => {
    const data = {
      "staffId": '61adbeb6911f43001607fd20',
      "rating": ratingData.toString(),

    }

    axios({
      method: method,
      url: API.AddRating,
      headers: {
        "accept": "application/json",
        "Content-Type": "application/json",
        'Authorization': 'Bearer ' + localStorage.getItem('token'),
      },
      data: data
    }).then(response => {

      if (response.data.success) {
        toast.success(response.data.message)
        dispatch(giveRatingStatus())
      } else {
      }
    }).catch((response) => {
      toast.error(response.response.data.message)
    })
  }
}

export function giveRatingStatus(AddRating) {

  return {
    type: actionTypes.GIVING_ADD_RATING,
    AddRating: AddRating,
  }
}
