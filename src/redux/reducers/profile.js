import * as actionTypes from '../actions/actionTypes';

const initialState = {
  profileDocs: {},
  isSubmitted: false,
  isLoading: false,
  centerDocs: {},
  staffDocs: {},
  staffDate: [],
  staffTime: [],
};

const profile = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.PROFILE_SUCCESS:
      return {
        ...state,
        profileDocs: action.data,
        isSubmitted: false,
      };
    case actionTypes.IS_SUBMITTED:
      return {
        ...state,
        isSubmitted: action.isSubmitted,
      };
    case actionTypes.SET_ISLOADING:
      return {
        ...state,
        isLoading: action.isLoading,
      };
    case actionTypes.CENTER_SUCCESS:
      return {
        ...state,
        centerDocs: action.data,
        // isSubmitted: false,
      };
    case actionTypes.STAFF_SUCCESS:

      return {
        ...state,
        staffDocs: action.data,
        // isSubmitted: false,
      };
    case actionTypes.GET_ALL_DATE:
      return {
        ...state,
        staffDate: action.data,
      }
    case actionTypes.GET_TIME_FOR_AVAILABLE_DATE:
      return {
        ...state,
        staffTime: action.data,
      }
    default:
      return state;
  }
};

export default profile;
