'use strict';

import React, {Component} from "react";
import Page from "./Page";
import DataBlock from "../components/DataBlock";
import SectionTitle from "../components/SectionTitle";

import {connect} from 'react-redux'

class Index extends Component {
  constructor (props) {
    super(props);

    this.state = {
    };
  }

  componentDidMount() {

  }

  componentWillUnmount() {
  }

  render() {
    return <Page pageName={"Dashboard"} style={styles.container}>
      <SectionTitle title={"Dashboard"}/>

      <div style={styles.dataBlockHolder}>
        <DataBlock
          title="Total Users"
          value={this.props.main.counter.toLocaleString()}/>
        <DataBlock
          title="Total Meals"
          value="1,203"/>
        <DataBlock
          title="Today's Posts"
          value="239"/>
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