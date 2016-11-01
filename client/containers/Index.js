'use strict';

import React, {Component} from "react";
import Page from "./Page";
import DataBlock from "../components/DataBlock";

import {connect} from 'react-redux'
import {setCounter} from '../actions/main'

class Index extends Component {
  constructor (props) {
    super(props);

    this.state = {
    };
  }

  componentDidMount() {
    setInterval(()=>{
      this.props.dispatch(setCounter(this.props.main.counter+1));
    }, 300);
  }

  render() {
    return <Page pageName={"Dashboard"} style={styles.container}>
      <div style={styles.dataBlockHolder}>
        <DataBlock
          title="Total Users"
          value={this.props.main.counter}/>
        <DataBlock
          title="Total Meals"
          value="1,203"/>
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
    padding: 10
  },
  dataBlockHolder: {
    display: "flex",
    justifyContent: "space-between"
  }
};