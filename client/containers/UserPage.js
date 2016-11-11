'use strict';

import React, { Component } from 'react';
import Radium from 'radium';
import { connect } from 'react-redux';
import API from '../api';
import Page from './Page';
import SectionTitle from '../components/SectionTitle';
import SwitchWithLabel from '../components/SwitchWithLabel';
import LoadingPage from '../components/LoadingPage';

const mapStateToProps = (state) => ({
  main: state.main,
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
    this.loadUser();
  }

  loadUser() {
    API.adminGetUser(this.props.params.id, ({ user }) => {
      this.setState({
        userData: user,
        driverEnabled: user.local.driverEnabled,
        restaurantEnabled: user.local.restaurantEnabled,
      });
    });
  }

  handleDriverSwitch(val) {
    API.adminSetUserFeature(this.props.params.id, "driverEnabled", val, res=>{
      if (!res.error) {
        this.loadUser();
      }
    });
  }

  handleRestaurantSwitch(val) {
    API.adminSetUserFeature(this.props.params.id, "restaurantEnabled", val, res=>{
      if (!res.error) {
        this.loadUser();
      }
    });
  }

  getDriverEnabled() {
    if (!this.state.userData.local.restaurantEnabled) {
      return <SwitchWithLabel onChange={::this.handleDriverSwitch}
                              active={this.state.driverEnabled}
                              label={'Driver Enabled'}/>;
    }
  }

  getRestaurantEnabled() {
    if (!this.state.userData.local.driverEnabled) {
      return <SwitchWithLabel onChange={::this.handleRestaurantSwitch}
                              active={this.state.restaurantEnabled}
                              label={'Restaurant Enabled'}/>;
    }
  }

  render() {
    if (!this.state.userData) {
      return <LoadingPage/>;
    }

    return <Page pageName={'Users'} style={styles.container}>
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
    padding: '10px 10px 20px 10px',
  },
};
