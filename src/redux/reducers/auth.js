import * as actionTypes from '../actions/actionTypes';

const initialState = {
  tokenId: null,
  authData: null,
  error: null,
  loginMessage: '',
  data: [],
  favourite: [],
  serviceDocs: [],
  isSubmitted: false,
  isLoading: false,
  AddRating: [],
};

const auth = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.AUTH_SUCCESS:
      return {
        ...state,
        tokenId: action.idToken,
        authData: action.authData,
        error: null,
        loginMessage: action.message,
      };

    case actionTypes.AUTH_FAIL:
      return {
        ...state,
        error: action.error,
        loginMessage: action.message,
      };
    case actionTypes.GET_SERVICE_ACTION:
      return {
        ...state,
        data: action.data,
      };
    case actionTypes.GET_FAVOURITE_ACTION:
      return {
        ...state,
        favourite: action.data,
      };
    case actionTypes.GET_ALL_SERVICE:
      return {
        ...state,
        serviceDocs: action.data,
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
    case actionTypes.ADD_FAVOURITE_STATUS:

      return {
        ...state,
        addID: action.addID,
      }
    case actionTypes.REMOVE_FAVOURITE_STATUS:

      return {
        ...state,
        removeID: action.removeID,
      }
    //giving Rating Data
    case actionTypes.GIVING_ADD_RATING:

      return {
        ...state,
        AddRating: action.AddRating,
      }
    default:
      return state;
  }
};

export default auth;
