module.exports = {

  setStore: function (key, value) {
    localStorage.setItem(key, JSON.stringify(value));
  },
  getStore: function (key) {
    return localStorage.getItem(key);
  }

};

