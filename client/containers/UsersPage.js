'use strict';

import React, { Component } from 'react';

import Page from './Page';
import SectionTitle from "../components/SectionTitle";

class UsersPage extends Component {
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