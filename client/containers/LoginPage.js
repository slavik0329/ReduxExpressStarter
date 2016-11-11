import Radium from "radium";
import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { login } from '../actions/main';
import { browserHistory } from 'react-router'

import Toolbar from './Toolbar'

const mapStateToProps = (state) => ({
  main: state.main
});

export class LoginPage extends React.Component {
  // static propTypes = {
  // };
  constructor(props) {
    super(props);

    this.state = {
      email: "slavik0329@gmail.com ",
      password: ""
    }
  }

  componentDidMount() {
    setTimeout(()=>{ // Wait for account load
      if ( this.props.main.account ) {
        browserHistory.push("/");
      }
    }, 50);
  }

  handleLoginPress() {
    this.props.dispatch(login(this.state.email, this.state.password));
  }

  checkPasswordEnter (evt) {
    if ( evt.which == 13 ) {
      this.handleLoginPress();
    }
  }

  render () {
    return (
      <div>
        <Toolbar
          selectedLink={"Login"}/>

        <div style={styles.loginBox}>
          <input
            type="text"
            style={styles.input}
            placeholder={"E-mail Address"}
            value={this.state.email}
            onChange={event=>this.setState({email:event.target.value})}/>
          <div style={styles.spacer} />
          <input
            style={styles.input}
            type="password"
            placeholder={"Password"}
            value={this.state.password}
            onKeyDown={::this.checkPasswordEnter}
            onChange={event=>this.setState({password:event.target.value})}/>

          <div
            style={styles.button}
            onClick={::this.handleLoginPress}>Login</div>
        </div>

      </div>
    )
  }
}

const styles = {
  container: {
    backgroundColor: "#1b7eaa",
  },
  loginBox: {
    margin: "100px auto 0 auto",
    maxWidth: 360,
    padding: 15,
    backgroundColor: "#166182",
    borderRadius: 4
  },
  input: {
    display: "block",
    width: 340,
    padding: 10,
    backgroundColor: "#FFF",
    borderRadius: 2,
    border: 0,
    fontWeight: 300
  },
  spacer: {
    height: 10
  },
  button: {
    marginTop: 10,
    backgroundColor: "#328FB9",
    color: "#FFF",
    textAlign: "center",
    height: 50,
    lineHeight: "46px",
    fontSize: 20,
    fontWeight: 400,
    fontFamily: "Roboto Slab",
    borderRadius: 2,
    cursor: "pointer",
    userSelect: "none"
  }
};

export default connect(mapStateToProps)(Radium(LoginPage))