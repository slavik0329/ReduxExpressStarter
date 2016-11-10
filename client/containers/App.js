import Radium from "radium";
import React, { PropTypes } from 'react'
import { connect } from 'react-redux'

import {checkLogin} from '../actions/main';

const mapStateToProps = (state) => ({
  main: state.main
});

export class App extends React.Component {

  componentWillMount() {
    this.props.dispatch(checkLogin());
  }

  render () {
    return (
      <div>
        {this.props.children}
      </div>
    )
  }
}

const styles = {
  container: {
  },

};

export default connect(mapStateToProps)(Radium(App))