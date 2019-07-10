export const isAuth = () => {
  return Boolean(window.localStorage.getItem('token'))
}

export const logOut = () => {
  delete window.localStorage.token
}