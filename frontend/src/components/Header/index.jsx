import React, { useContext } from 'react'
import { logOut, isAuth } from '../../utils'
import { StoreContext } from '../../Store';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'



const Header = (props) => {
  const { state, dispatch, actions } = useContext(StoreContext);
  const { auth } = Boolean(state.token);
  const handleLogOut = ({ push }) => {
    logOut();
    push('/login')
  }
  return (
    <AppBar position="static" color="secondary">
      <Toolbar>
        <Typography variant="h6">
            Mermuin starter
        </Typography>
        {isAuth() && <Button onClick={() => handleLogOut(props.history)} color="inherit">Log Out</Button>}
      </Toolbar>
    </AppBar>
  )
}

export default Header;
