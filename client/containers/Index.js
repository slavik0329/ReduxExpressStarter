'use strict';

import React, {Component} from "react";
import Page from "./Page";
import DataBlock from "../components/DataBlock";
import SectionTitle from "../components/SectionTitle";
import {BtcTicker} from 'slavik-component-library';
import { browserHistory } from 'react-router'

import {connect} from 'react-redux'
import {fetchDashboard} from '../actions/main';

class Index extends Component {
  constructor (props) {
    super(props);

    this.state = {
    };
  }

  componentDidMount() {
    this.props.dispatch(fetchDashboard());

    setTimeout(()=>{ // Wait for account load
      if ( !this.props.main.account ) {
        browserHistory.push("/login");
      }
    }, 50);
  }

  componentWillUnmount() {
  }

  render() {
    return <Page pageName={"Dashboard"} style={styles.container}>
      <SectionTitle title={"Dashboard"}/>

      <div style={styles.dataBlockHolder}>
        <DataBlock
          title="Total Users"
          value={this.props.main.dashboard.userCount}/>
        <DataBlock
          title="Total Meals"
          value="1,203"/>
        <DataBlock
          title="BTC Price"
          value={<BtcTicker currency={"CNY"}/>} />
      </div>

    </Page>;
  }
}

function mapStateToProps(state) {
  return {
    main: state.main
  }
}

export default connect(mapStateToProps)(Index);

const styles = {
  container: {
    padding: 10,
  },
  dataBlockHolder: {
    display: "flex",
    justifyContent: "space-around",
    backgroundColor: "#c1d8e2",
    borderRadius: 4,
    padding: "0 4px"
  }
};