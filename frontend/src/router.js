import React from 'react'
import { Router as ReactRouter, hashHistory } from 'react-router';

import Login from './pages/Login';

const Dashboard = () => {
  return (
    <div>
      Dashboard
    </div>
  )
}

const routes = {
  component: () => (<div></div>),
  childRoutes: [
    {
      path: '/',
      component: Dashboard,
      childRoutes: []
    },
    {
      path: '/login',
      component: Login
    }
  ]
}

const Router = () => {
  return (
    <ReactRouter history={hashHistory} routes={routes} /> 
  )
}

export default Router;
  