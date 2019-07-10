import { useContext } from 'react'
import { StoreContext } from '../Store'
import axios from 'axios'

export function useLogin() {
  const { state, actions, dispatch} = useContext(StoreContext)

  const login = (email, password) => {
    dispatch(actions.login.begin());
    axios.post('localhost:5000/api/auth/login', {email, password})
      .then(token => {
        dispatch(actions.login.success(token))
        window.localStorage.setItem('token', token)
      })
      .catch(error => {
        dispatch(actions.login.fail(error))
      })
  }

  const reset = () => {
    dispatch(actions.login.reset())
  }

  return {
    state: state.login,
    login,
    reset
  }
}