import { useContext } from 'react';
import { StoreContext } from '../Store';
import axios from 'axios';

export function useLogin() {
  const { state, actions, dispatch} = useContext(StoreContext);
  const context = useContext(StoreContext);

  const login = (email, password) => {
    dispatch(actions.login.begin());
    axios.post('http://localhost:5000/api/auth/login', {email, password})
      .then(data => {
        let { token } = data.data
        dispatch(actions.login.success(token))
        window.localStorage.setItem('token', token)
      })
      .catch(error => {
        window.localStorage.setItem('token', 'testToken')
        dispatch(actions.login.fail(error.data))
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
