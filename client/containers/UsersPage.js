'use strict';

import React, { Component } from 'react';
import Radium from 'radium';

import { connect } from 'react-redux'
import { fetchUsersList } from '../actions/main';

import Page from './Page';
import SectionTitle from "../components/SectionTitle";
import UserRow from "../components/UserRow";

const mapStateToProps = (state) => ({
  main: state.main
});

class UsersPage extends Component {
  componentDidMount () {
    this.props.dispatch(fetchUsersList());
  }

  getUsers() {
    if ( !this.props.main.usersList ) {
      return null;
    }

    return this.props.main.usersList.map((user, i)=><UserRow data={user} key={i} />)
  }

  render() {
    return <Page pageName={"Users"} style={styles.container}>
      <SectionTitle title={"Manage Users"}/>

      {this.getUsers()}
    </Page>;
  }
}

export default connect(mapStateToProps)(Radium(UsersPage));

const styles = {
  container: {
    padding: 10
  }
};