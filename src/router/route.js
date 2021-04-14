/**
 *
 * title: route.js
 *
 * description: react-router的控制路由功能组件；负责所有的页面跳转
 *
 * author: luli
 *
 * date: 2017/05/15
 */

import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

const helloWorld = require('containers/HelloWorld');
const NotFoundPage = require('component/Common/404');
const Chart = require('containers/Chart');
const PageOne = require('containers/pageOne');
const PageTwo = require('containers/pageTwo');
const HomePage = require('containers/HomePage');
const NewPage = require('containers/NewPage');
const AppRoute = () => (
    <Router history={browserHistory}>
        <Route path="/">
            <IndexRoute component={HomePage}/>
            <Route path="homePage" component={NewPage}/>
            <Route path="pageOne" component={PageOne}/>
            <Route path="pageTwo" component={PageTwo}/>
            <Route path="*" component={NotFoundPage} />
        </Route>
    </Router>
);

export default AppRoute;
