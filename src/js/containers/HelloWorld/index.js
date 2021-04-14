/**
 *
 * title: HelloWorld/index.js
 *
 * description: HelloWorld示例组件
 *
 * author: liyang
 *
 * date: 2017/05/15
 */

import React from 'react';
import {browserHistory } from 'react-router'
import Data from '../../component/Common/Data/data'

export default class HelloWorld extends React.Component {
  click(){
    browserHistory.push({
      pathname:"/chart"
    })
  }
  render() {
    return (
      <div>
        <p onClick={this.click.bind(this)}>hello world!</p>
          <Data/>
        <div>
          {this.props.children}
        </div>
      </div>
    );
  }
}
