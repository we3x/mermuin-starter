import React from 'react'

import { useLogin } from '../../hooks/useLogin';

const LoginPage = (props) => {
  const { login } = useLogin();
  return (
    <div>
      Login Page
      <button onClick={() => login("test", "test")}> Log In</button>
    </div>
  )
}

export default LoginPage