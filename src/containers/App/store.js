import { combineReducers, createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { reducer as reduxFormReducer } from 'redux-form';
import jwt_decode from 'jwt-decode';
import { auth, profile } from '../../redux/reducers/index';

const checkTokenExpirationMiddleware = (store) => (next) => (action) => {
  // const history = useHistory()
  // let token1 = localStorage.getItem('token')
  let token = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.
    eyJ1c2VySWQiOiI2MGU1MTkwZjEzOTc0ZjM3NzAxYjAwNjgiL
    CJyb2xlIjoiQ1VTVE9NRVIiLCJuYW1lIjoiUmFqZXNoIiwiaWF0I
    joxNjI5MTcwNDM1LCJleHAiOjI0MTc1NzA0MzV9.vkhn8Sm7P-2c9x
    4iKQP49spZtzKtCWeaYvtJr2jCH3w`;
  let token1 = localStorage.getItem('token');

  if (token1) {
    if (jwt_decode(token1).exp < Date.now() / 1000) {
      next(action);
      localStorage.clear();
    }
  }
  next(action);
};

const reducer = combineReducers({
  Auth: auth,
  Profile: profile,
  form: reduxFormReducer, // mounted under "form",
});
const composeEnhancers =
  (process.env.NODE_ENV === 'development'
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : null) || compose;
const store = createStore(
  reducer,
  composeEnhancers(applyMiddleware(thunk, checkTokenExpirationMiddleware))
);
export default store;
