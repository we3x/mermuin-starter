import React from 'react';
import { Redirect } from 'react-router-dom'
import { isAuth } from '../../utils'

const AuthRoute = ({ children }) => {
  if(isAuth()){
    return children
  } else {
    return <Redirect to="/login" />
  }
}

export default AuthRoute;