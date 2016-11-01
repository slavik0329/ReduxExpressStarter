'use strict';

import React, { Component } from 'react';

import Toolbar from './Toolbar';
import {PageContainer} from 'slavik-component-library';

class Page extends Component {
  static propTypes = {
    children: React.PropTypes.node,
    pageName: React.PropTypes.string,
    style: React.PropTypes.object,
  };

  render() {
    return <div>
      <Toolbar
        selectedLink={this.props.pageName} />
      <PageContainer>
        <div {...this.props}>
          {this.props.children}
        </div>
      </PageContainer>
    </div>;
  }
}

export default Page;
