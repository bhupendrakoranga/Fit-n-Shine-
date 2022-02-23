import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import store from './store';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Router from '../../../src/App';

const App = () => {
  return (
    <Provider store={store}>
      <ToastContainer hideProgressBar />
      <HashRouter basename="/">
        <Router></Router>
      </HashRouter>
    </Provider>
  );
};

export default App;
