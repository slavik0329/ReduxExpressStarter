module.exports = {

  setStore: function (key, value) {
    if ( value == null ) {
      localStorage.removeItem(key);
    } else {
      localStorage.setItem(key, JSON.stringify(value));
    }
  },
  getStore: function (key) {
    return JSON.parse(localStorage.getItem(key));
  }

};

