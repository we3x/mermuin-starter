import React from 'react'
import { Router as ReactRouter, Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history'

import Login from './pages/Login';
import Dashboard from './pages/Dashboard'

import AuthRoute from './components/AuthRoute'
import Header from './components/Header';

const hist = createBrowserHistory()

const routes = [
  { path: "/", name: "Dashboard", component: Dashboard, auth: true},
  { path: "/login", name: "Login", component: Login},
]


const Router = () => {
  return (
    <ReactRouter history={hist}>
      <Header history={hist} />
      <Switch>
        {routes.map((prop, key) => {
          let Page = prop.component
          return (
            <Route 
              exact
              path={prop.path}
              render={(matchProps) => {
                if(prop.auth)
                  return (
                    <AuthRoute>
                      <Page {...matchProps}/>
                    </AuthRoute>
                  )
                else 
                  return <Page {...matchProps} />
              }}
              key={key}
            />
          )}
        )}
      </Switch>
    </ReactRouter>
  )
}

export default Router;
  