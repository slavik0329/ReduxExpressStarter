'use strict';

import React, { Component } from 'react';
import Radium from "radium";
import { browserHistory } from 'react-router'

class UserRow extends Component {
  static propTypes = {
    data: React.PropTypes.object.isRequired
  };

  getUserType() {
    if ( this.props.data.local.restaurantEnabled ) {
      return "Restaurant";
    } else if ( this.props.data.local.driverEnabled ) {
      return "Driver";
    } else {
      return "Regular";
    }
  }

  openUser() {
    browserHistory.push("/user/" + this.props.data._id);
  }

  render() {
    return <div style={styles.container}>
      <div
        style={styles.username}
        onClick={::this.openUser}>{this.props.data.local.username}</div>
      <div style={styles.email}>{this.props.data.local.email}</div>
      <div style={styles.userType}>{this.getUserType()}</div>
    </div>;
  }
}

export default Radium(UserRow);

const styles = {
  container: {
    display: "flex",
    justifyContent: "space-between",
    padding: 6,
    color: "#333",
    cursor: "pointer",
    ":hover": {
      backgroundColor: "#333",
      color: "#FFF"
    }
  },

};