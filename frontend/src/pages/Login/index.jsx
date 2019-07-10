import React, { useEffect } from 'react'
import { Redirect } from 'react-router-dom'
import { useLogin } from '../../hooks/useLogin';
import { isAuth } from '../../utils';

const LoginPage = (props) => {
  const { state, login, reset } = useLogin();
  const { status } = state;

  useEffect(() => {
    if(status === 'success'){
      props.history.push('/')
    }

    return reset()
  }, [status, props, reset])

  if(isAuth()){
    return <Redirect to='/' />
  }
  return (
    <div>
      Login Page
      <button onClick={() => login("user@fourity.com", "test1234")}> Log In</button>
      <div>
        {state.status}
      </div>
    </div>
  )
}

export default LoginPage