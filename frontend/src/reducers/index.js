import { register as loginRegister, reducer as loginReducer } from './loginReducer';

export const initialState = {
  token: '',
  theme: 'DARK'
};

const types = {
  SET_THEME: 'SET_THEME',
  SET_TOKEN: 'SET_TOKEN',
};
export const actions = {
  setTheme: () => ({}),
  setAuth: (value) => ({ type: types.SET_AUTH, value }),
  setToken: (token) => ({ type: types.SET_TOKEN, token}),
};

loginRegister(initialState, actions);

const userReducer = (state, action) => {
  switch(action.type){
    case types.SET_TOKEN:
      return { ...state, token: action.token };
    case types.SET_THEME:
      return { ...state, theme: action.theme};
    default:
      return state;
  }
};

export const reducer = (state, action) => ({
  login: loginReducer(state, action),
  user: userReducer(state, action)
});
