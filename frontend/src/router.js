import React from 'react'
import { Router as ReactRouter, Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history'

import Login from './pages/Login';

const Dashboard = () => {
  return (
    <div>
      Dashboard
    </div>
  )
}

const hist = createBrowserHistory()

const routes = [
  { path: "/", name: "Dashboard", component: Dashboard},
  { path: "/login", name: "Login", component: Login},
]


const Router = () => {
  return (
    <ReactRouter history={hist}>
      <Switch>
        {routes.map((prop, key) => {
          const Page = prop.component
          return (
            <Route 
              exact
              path={prop.path}
              render={(matchProps) => <Page {...matchProps} />}
              key={key}
            />
          )}
        )}
      </Switch>
    </ReactRouter>
  )
}

export default Router;
  