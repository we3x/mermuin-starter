import React from 'react'
import { Redirect } from 'react-router-dom';
import { logOut } from '../../utils'

const Header = (props) => {
  const handleLogOut = ({ push }) => {
    logOut();
    push('/login')
  }
  return (
    <div>
      <button onClick={() => handleLogOut(props.history)}>Log Out</button>
    </div>
  )
}

export default Header;