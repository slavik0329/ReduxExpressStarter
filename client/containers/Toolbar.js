import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'

import ToolbarLink from './ToolbarLink'
import FaBars from 'react-icons/lib/fa/bars';

const Radium = require('radium');

const mapStateToProps = (state) => ({
  // main: state.main
});

export class Toolbar extends React.Component {
  static propTypes = {
    selectedLink: React.PropTypes.string
  };

  constructor (props) {
    super(props);

    this.state = {
      mobileMenuOpen: false
    };

  }

  handleMobileMenuClick() {
    this.setState({
      mobileMenuOpen: !this.state.mobileMenuOpen
    })
  }

  render () {
    const links = [
      {
        name: "Dashboard",
        link: "/"
      },
      {
        name: "Users",
        link: "/users"
      }
    ];

    return (
      <div style={styles.container}>
        <div style={styles.inner}>
          <div style={styles.logo}>
            <Link to='/'>
              <img
                style={styles.logoImage}
                src="icon.png" />
              <span
                style={styles.logoText}>Unsung (admin)</span>
            </Link>
          </div>


          <div
            style={styles.tools}>

            <div style={styles.links}>
              {links.map(link=><ToolbarLink
                selectedLink={this.props.selectedLink}
                key={link.name}
                name={link.name}
                anchor={link.anchor}
                dest={link.link}/>)}
            </div>

            <div
              style={styles.burgerButton}
              onClick={this.handleMobileMenuClick.bind(this)}>
              <FaBars />
            </div>

          </div>

          <div
            style={[styles.mobileMenu, {
              display: this.state.mobileMenuOpen?"block":"none"
            }]}>
            {links.map(link=><ToolbarLink
              type="block"
              selectedLink={this.props.selectedLink}
              key={link.name}
              name={link.name}
              dest={link.link}/>)}
          </div>
        </div>
      </div>
    )
  }
}

const styles={
  container: {
    position: "relative",
    backgroundColor: "#1b7eaa",
    height: 60,
    transition: "1s linear"
  },
  logo: {
    position: "absolute",
    left:10,
    top:14,
  },
  logoImage: {
    width:30,
    height:30
  },
  logoText: {
    position: "relative",
    top: -6,
    fontFamily: "Roboto Slab",
    color: "#FFF",
    fontSize: 22,
    fontWeight: 300,
  },
  tools: {
    position: "absolute",
    right: 30,
    top: 20,
    '@media (max-width: 536px)': {
      right: 15,
    },
  },
  inner: {
    position: "relative",
    margin: "0 auto",
  },
  links: {
    '@media (max-width: 536px)': {
      display: 'none',
    },
  },
  burgerButton: {
    color: "#FFF",
    fontSize: 26,
    display: "none",
    lineHeight: "22px",
    transform: "translateY(-3px)",
    '@media (max-width: 536px)': {
      display: 'block',
    },
  },
  mobileMenu: {
    position: "absolute",
    top: 50,
    width: "100%",
    zIndex: 9000,
    backgroundColor: "#1b7eaa",
    '@media (min-width: 536px)': {
      display: 'none',
    },
  }
};

export default connect(mapStateToProps)(Radium(Toolbar))
