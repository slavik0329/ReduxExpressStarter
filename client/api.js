import Config from "./config";

module.exports = {

  login: function (email, password, callback) {
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
  getLoginStatus: function (callback) {
    fetch('http://' + Config.url + '/getLoginStatus').then((res) => res.json()).then((res) => {
      callback(res);
    }).catch((err) => {
      callback(err)
    })
  },
  logout: function (callback) {
    fetch('http://' + Config.url + '/logout').then((res) => res.json()).then((res) => {
      callback(res);
    }).catch((err) => {
      callback(err)
    })
  },
  adminGetUsers: function (callback) {
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
      callback(res);
    }).catch(() => {
      callback({error: "Issues with connecting to Unsung"})
    })
  },
  adminGetDashboard: function (callback) {
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
  adminGetUser: function (userId, callback) {
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
      callback(res);
    }).catch(() => {
      callback({error: "Issues with connecting to Unsung"})
    })
  },
};

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