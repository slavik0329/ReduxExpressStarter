'use strict';

import React, { Component } from 'react';

class LoadingPage extends Component {
  // static propTypes = {
  // };

  render() {
    return <div style={styles.container}>Loading...</div>;
  }
}

export default LoadingPage;

const styles = {
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    textAlign: "center",
    marginTop: 260,
    fontWeight: 200,
    fontSize: 24,
    color: "#333"
  },
};