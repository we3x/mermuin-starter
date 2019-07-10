import React from 'react'
import { logOut } from '../../utils'

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'



const Header = (props) => {
  const handleLogOut = ({ push }) => {
    logOut();
    push('/login')
  }
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6">
            News
        </Typography>
        <Button onClick={() => handleLogOut(props.history)} color="inherit">Log Out</Button>
      </Toolbar>
    </AppBar>
  )
}

export default Header;