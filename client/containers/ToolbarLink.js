import React, { PropTypes } from 'react'
import { Link } from 'react-router'
import Radium from "radium";

const Link2 = Radium(Link);

export class ToolbarLink extends React.Component {
  static propTypes = {
    anchor: React.PropTypes.string, // anchor to go to instead of regular link
    dest: React.PropTypes.string,
    name: React.PropTypes.string.isRequired,
    selectedLink: React.PropTypes.string,
    type: React.PropTypes.string // Display type
  };

  static defaultProps = {
    type: "inline-block"
  };

  handleAnchorClick() {
    document.getElementById(this.props.anchor).scrollIntoView();
  }

  render () {
    let linkStyle;

    if ( this.props.selectedLink == this.props.name ) {
      linkStyle = styles.selectedLink
    }

    let containerStyle = {
      display: this.props.type
    };

    if ( this.props.type == "block" ) {
      containerStyle = {
        ...containerStyle,
        textAlign: "center",
        margin: 10
      }
    }

    let inner;

    if ( !this.props.anchor ) {
      inner = <Link2
        to={this.props.dest}
        style={[styles.link, linkStyle]}>{this.props.name}</Link2>
    } else {
      inner = <div
        style={[styles.link, linkStyle]}
        onClick={this.handleAnchorClick.bind(this)}>{this.props.name}</div>
    }

    return (
      <div style={[styles.linkContainer, containerStyle]}>
        {inner}
      </div>

    )
  }
}

const styles={

  link: {
    color: "#FFF",
    marginLeft: 18,
    fontWeight: 100,
    letterSpacing: 1,
    cursor: "pointer",
    ":hover": {
      color: "#28ADE8"
    }
  },
  selectedLink: {
    borderBottom: "1px solid #FFF",
    paddingBottom: 4
  },
  linkContainer: {
  }

};

export default Radium(ToolbarLink)
/**
 * Created by stevendakh on 11/1/16.
 */
