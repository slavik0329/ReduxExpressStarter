'use strict';

import React, { Component } from 'react';
import Radium from 'radium';

class PageContainer extends Component {
  render() {
    return <div style={styles.outer}>
      <div style={styles.container}>
        {this.props.children}
      </div>
    </div>
  }
}

export default Radium(PageContainer);

const styles = {
  container: {
    width: 800,
    backgroundColor: "#FFF",
    margin: "0 auto",
    '@media (max-width: 600px)': {
      width: "auto"
    },
  },
  outer: {
  }
};