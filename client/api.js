import Config from './config';

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
    }).catch((err)=> {
      callback(err)
    })
  },
  logout: function (callback) {
    fetch('http://' + Config.url + '/logout').then((res) => res.json()).then((res) => {
      callback(res);
    }).catch((err) => {
      callback(err)
    })
  }
};

/**
 * @return {string}
 */
function Serialize(obj) {
  const str = [];
  for(let p in obj)
    if (obj.hasOwnProperty(p)) {
      str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
    }
  return str.join("&");
}