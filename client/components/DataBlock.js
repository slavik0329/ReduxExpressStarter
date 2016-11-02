'use strict';

import React, { Component } from 'react';

class DataBlock extends Component {
  static propTypes = {
    title: React.PropTypes.string,
    value: React.PropTypes.any
  };

  render() {
    return <div style={styles.container}>
      <div style={styles.title}>{this.props.title}</div>
      <div style={styles.value}>{this.props.value}</div>
    </div>;
  }
}

export default DataBlock;

const styles = {
  container: {
    // width: 160,
    flexGrow: 1,
    height: 80,
    padding: 20,
    borderRadius: 4,
    margin: "6px 3px",
    backgroundColor: "#FFF"
  },
  title: {
    textAlign: "center",
    fontSize: 20,
    fontWeight: 300,
    color: "#666",
    marginTop: 6,
    fontFamily: "Roboto Slab",
  },
  value: {
    textAlign: "center",
    fontSize: 28,
    fontWeight: 200,
    marginTop: 10,
    color: "#666"
  }
};