/**
 *
 * title: entry.js
 *
 * description: 项目启动访问的主文件
 *
 * author: liyang
 *
 * date: 2017/05/15
 */

/**
 * CANNOT use `import` to import `es5-shim`,
 * because `import` will be transformed to `Object.defineProperty` by babel,
 * `Object.defineProperty` doesn't exists in IE8,
 * (but will be polyfilled after `require('es5-shim')` executed).
 */

require('es5-shim');
require('es5-shim/es5-sham');
require('console-polyfill');
require('es6-promise');
require('fetch-ie8');

/**
 * CANNOT use `import` to import `react` or `react-dom`,
 * because `import` will run `react` before `require('es5-shim')`.
 */
// import React from 'react';
// import ReactDOM from 'react-dom';

const React = require('react');
const ReactDOM = require('react-dom');

const Root = require('./router/route');
import { browserHistory } from 'react-router';
ReactDOM.render(
        <Root history={browserHistory} />,
  document.getElementById('app')
);

// 组件重复渲染检测
/*
if (process.env.NODE_ENV !== 'production') {
 const {whyDidYouUpdate} = require('why-did-you-update')
 whyDidYouUpdate(React)
 }*/
