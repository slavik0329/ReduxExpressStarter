import API from '../api';
import Utils from '../utils';
import { browserHistory } from 'react-router'

function setAccount(account) {
  return {
    type: "SET_ACCOUNT",
    account: account
  }
}

export function login(email, password) {
  return (dispatch) => {
    API.login(email, password, res=>{
      dispatch(setAccount(res.user));
      Utils.setStore("account", res.user);
      browserHistory.push('/')
    });
  }
}

export function logout() {
  return (dispatch) => {
    dispatch(setAccount(null));
    Utils.setStore("account", null);
    browserHistory.push('/login')
  }
}

export function checkLogin() {
  return (dispatch, getState) => {
    const account = Utils.getStore("account");
    if ( account ) {
      dispatch(setAccount(account));
    }
  }
}