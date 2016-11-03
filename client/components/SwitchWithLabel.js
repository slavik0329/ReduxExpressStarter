'use strict';

import React, { Component } from 'react';

import Switch from 'react-ios-switch';

class SwitchWithLabel extends Component {
  static propTypes = {
    label: React.PropTypes.string,
    active: React.PropTypes.bool,
    onChange: React.PropTypes.func,
    labelWidth: React.PropTypes.number
  };

  static defaultProps = {
    labelWidth: 160
  };

  render() {
    return <div style={styles.container}>
      <div style={{width:this.props.labelWidth, display: "inline-block"}}>{this.props.label}</div>
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
    top: 10,
    left: 10
  }
};