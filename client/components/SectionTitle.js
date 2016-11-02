'use strict';

import React, { Component } from 'react';

class DataBlock extends Component {
  static propTypes = {
    title: React.PropTypes.string.isRequired
  };

  render() {
    return <div style={styles.container}>{this.props.title}</div>;
  }
}

export default DataBlock;

const styles = {
  container: {
    fontSize: 30,
    fontWeight: 200,
    color: "#666",
    fontFamily: "Roboto Slab",
    marginBottom: "10px",
    borderBottom: "1px solid #AAA",
    paddingBottom: 2
  },
};