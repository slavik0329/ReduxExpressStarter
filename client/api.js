import Config from "./config";
import { browserHistory } from 'react-router'

const API = {

  login (email, password, callback) {
    if (!email || !password) {
      return false;
    }

    email = email.toLowerCase().trim();

    fetch('http://' + Config.url + '/login', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: Serialize({ // Serialize urlencodes the form data
        email,
        password
      })
    }).then((res) => res.json()).then((res) => {
      callback(res);
    }).catch(() => {
      callback({error: "Issues with connecting to Unsung"})
    })
  },
  getLoginStatus (callback) {
    fetch('http://' + Config.url + '/getLoginStatus').then((res) => res.json()).then((res) => {
      callback(res);
    }).catch((err) => {
      callback(err)
    })
  },
  checkToken (token, callback) {
    fetch('http://' + Config.url + '/checkToken', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: Serialize({ // Serialize urlencodes the form data
        token,
      })
    }).then((res) => res.json()).then((res) => {
      callback(res);
    }).catch(() => {
      callback({error: "Issues with connecting to Unsung"})
    })
  },
  logout (callback) {
    fetch('http://' + Config.url + '/logout').then((res) => res.json()).then((res) => {
      callback(res);
    }).catch((err) => {
      callback(err)
    })
  },
  adminGetUsers (callback) {
    const state = window.store.getState();

    if ( !state.main.account) {
      return;
    }

    fetch('http://' + Config.url + '/adminGetUsers', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: Serialize({ // Serialize urlencodes the form data
        token: state.main.account.token,
      })
    }).then((res) => res.json()).then((res) => {
      if ( res.error && res.error == "TOKEN" ) {
        browserHistory.push("/logout");

        return;
      }

      callback(res);
    }).catch(() => {
      callback({error: "Issues with connecting to Unsung"})
    })
  },
  adminGetDashboard (callback) {
    const state = window.store.getState();
    if ( !state.main.account) {
      return;
    }

    fetch('http://' + Config.url + '/adminGetDashboard', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: Serialize({ // Serialize urlencodes the form data
        token: state.main.account.token,
      })
    }).then((res) => res.json()).then((res) => {
      callback(res);
    }).catch(() => {
      callback({error: "Issues with connecting to Unsung"})
    })
  },
  adminGetUser (userId, callback) {
    const state = window.store.getState();

    if ( !state.main.account) {
      return;
    }

    fetch('http://' + Config.url + '/adminGetUser', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: Serialize({ // Serialize urlencodes the form data
        token: state.main.account.token,
        userId
      })
    }).then((res) => res.json()).then((res) => {
      if ( res.error && res.error == "TOKEN" ) {
        browserHistory.push("/logout");

        return;
      }

      callback(res);
    }).catch(() => {
      callback({error: "Issues with connecting to Unsung"})
    })
  },
};

export default API;

/**
 * @return {string}
 */
function Serialize(obj) {
  const str = [];
  for (let p in obj)
    if (obj.hasOwnProperty(p)) {
      str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
    }
  return str.join("&");
}