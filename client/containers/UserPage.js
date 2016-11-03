'use strict';

import React, {Component} from "react";
import Radium from "radium";
import {connect} from "react-redux";
import API from "../api";
import Page from "./Page";
import SectionTitle from "../components/SectionTitle";
import SwitchWithLabel from "../components/SwitchWithLabel";

const mapStateToProps = (state) => ({
  main: state.main
});

class UserPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userData: null,
      driverEnabled: false,
      restaurantEnabled: false,
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.loadUser()
    }, 10);
  }

  loadUser() {
    API.adminGetUser(this.props.params.id, (res) => {
      this.setState({
        userData: res.user,
        driverEnabled: res.user.local.driverEnabled,
        restaurantEnabled: res.user.local.restaurantEnabled,
      })
    });
  }

  handleDriverSwitch(val) {
    this.setState({
      driverEnabled: val
    });
  }

  handleRestaurantSwitch(val) {
    this.setState({
      restaurantEnabled: val
    });
  }

  getDriverEnabled() {
    if (!this.state.userData.local.restaurantEnabled) {
      return <SwitchWithLabel onChange={::this.handleDriverSwitch}
                              active={this.state.driverEnabled}
                              label={"Driver Enabled"}/>
    }
  }

  getRestaurantEnabled() {
    if (!this.state.userData.local.driverEnabled) {
      return <SwitchWithLabel onChange={::this.handleRestaurantSwitch}
                              active={this.state.restaurantEnabled}
                              label={"Restaurant Enabled"}/>
    }
  }

  render() {
    if (!this.state.userData) {
      return null;
    }

    return <Page pageName={"Users"} style={styles.container}>
      <div>
        <SectionTitle title={this.state.userData.local.username}/>

        {this.getDriverEnabled()}

        {this.getRestaurantEnabled()}
      </div>
    </Page>;
  }
}

export default connect(mapStateToProps)(Radium(UserPage));

const styles = {
  container: {
    padding: "10px 10px 20px 10px"
  }
};