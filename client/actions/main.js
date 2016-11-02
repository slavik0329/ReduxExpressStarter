import API from '../api';
import Utils from '../utils';

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
    });
  }
}

export function checkLogin() {
  return (dispatch, getState) => {
    const account = Utils.getStore("account");
    if ( account ) {
      console.log("Found in store")
      dispatch(setAccount(account));
    } else {
      console.log("Not found");
    }
  }
}