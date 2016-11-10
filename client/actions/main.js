import API from '../api';
import Utils from '../utils';
import { browserHistory } from 'react-router'

function setAccount(account) {
  return {
    type: "SET_ACCOUNT",
    account: account
  }
}

export function fetchDashboard () {
  return (dispatch) =>{
    setTimeout(()=>{
      API.adminGetDashboard(res=>{
        dispatch({
          type: "SET_DASHBOARD",
          dashboard: res.dashboard
        })
      })
    }, 10);
  }
}

export function fetchUsersList () {
  return (dispatch) =>{
    setTimeout(()=>{
      API.adminGetUsers(res=>{
        dispatch({
          type: "SET_USERS_LIST",
          usersList: res.users
        })
      })
    }, 10);
  }
}

export function login(email, password) {
  return (dispatch) => {
    API.login(email, password, res=>{
      if ( res.user.admin ) {
        dispatch(setAccount(res.user));
        Utils.setStore("account", res.user);
        browserHistory.push('/')
      }
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
  return (dispatch) => {
    const account = Utils.getStore("account");

    dispatch(setAccount(account)); // Temporarily use cache data

    if ( account ) {
      API.checkToken(account.token, res=>{
        if ( res.tokenValid ) {
          dispatch(setAccount(account));
        } else {
          dispatch(logout());
        }
      });
    } else {
      dispatch(logout());
    }

  }
}