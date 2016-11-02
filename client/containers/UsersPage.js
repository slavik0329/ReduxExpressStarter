'use strict';

import React, { Component } from 'react';

import Page from './Page';
import SectionTitle from "../components/SectionTitle";
import API from "../api";

class UsersPage extends Component {
  componentDidMount () {
    setTimeout(()=>{
      API.adminGetUsers(res=>{
        console.log(res);
      })
    }, 100);

  }

  render() {
    return <Page pageName={"Users"} style={styles.container}>
      <SectionTitle title={"Manage Users"}/>
    </Page>;
  }
}

export default UsersPage;

const styles = {
  container: {
    padding: 10
  }
}