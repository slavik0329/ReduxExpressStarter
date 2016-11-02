'use strict';

import React, { Component } from 'react';

import Switch from 'react-ios-switch';

class SwitchWithLabel extends Component {
  static propTypes = {
    label: React.PropTypes.string,
    active: React.PropTypes.bool,
    onChange: React.PropTypes.func
  };

  render() {
    return <div style={styles.container}>
      {this.props.label}
      <span style={styles.switchHolder}>
        <Switch onChange={this.props.onChange}
                checked={this.props.active}/>
      </span>
    </div>;
  }
}

export default SwitchWithLabel;

const styles = {
  container: {
    fontWeight: 200,
    color: "#333"
  },
  switchHolder: {
    position: "relative",
    top: 8,
    left: 10
  }
};