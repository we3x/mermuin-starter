import { register as loginRegister, reducer as loginReducer} from './loginReducer';

export const initialState = {}
export const actions = {}

loginRegister(initialState, actions)

export const reducer = (state, action) => ({
  login: loginReducer(state, action)
});
