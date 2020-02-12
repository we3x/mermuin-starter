const types = {
  LOGIN: 'LOGIN',
  PENDING: 'LOGIN_PENDING',
  SUCCESS: 'LOGIN_SUCCESS',
  ERROR: 'LOGIN_ERROR'
}

export const initialState = {
  status: 'initial'
}

export const actions = {
  reset: () => ({ type: types.LOGIN }),
  begin: () => ({ type: types.PENDING }),
  success: (token) => ({ type: types.SUCCESS, token}),
  fail: (error) => ({type: types.ERROR, error})
}

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.LOGIN:
      return { ...initialState }

    case types.PENDING:
      return { status: 'pending'}

    case types.SUCCESS:
      return { status: 'success', token: action.token}

    case types.ERROR:
      return { status: 'error', error: action.error}
  
    default:
      return state
  }
}

export const register = (globalState, globalActions) => {
  globalState.login = initialState
  globalActions.login = actions
}