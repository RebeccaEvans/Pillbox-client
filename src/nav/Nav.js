import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Link as RouterLink } from 'react-router-dom';
import HomeIcon from '@material-ui/icons/Home';
import { Typography, Avatar, Box, Button, Toolbar, AppBar, IconButton , Grid} from '@material-ui/core';


// font-family: 'Fredoka One', cursive;
// font-family: 'Satisfy', cursive;
// font-family: 'Cantora One', sans-serif;

const Nav = props => {

  const style={
    height: '10vh',
    backgroundColor: '#fafafa',
  }

  const handleLogout = e => {
    e.preventDefault()
    // Remove the token from localstorage (or cookies)
    localStorage.removeItem('userToken')

    // Update the state of the App
    props.updateUser()
  }

  let links = (
    <span>
      <Button component={RouterLink} to="/login">LOGIN</Button>
      <Button component={RouterLink} to="/signup">SIGNUP</Button>
    </span>
  )

  // If the user is logged in, show profile page and logout links
  if (props.user) {
    links = (
      <span>
        <Button>Hello {props.user.firstname}!</Button>
        <Button component={RouterLink} to="/profile">PROFILE</Button>
        <Button component={RouterLink} to="/" onClick={handleLogout}>LOG OUT</Button>
      </span>
    )
  }

  return (
      <AppBar position="static" style={style}>
        <Grid container spacing={3}>
          <Grid item sm={6}>
          <Toolbar>
            <IconButton>
                <Avatar src="/images/logo.png" style={{backgroundColor: '#007849'}}>picture</Avatar>
              </IconButton>
              <Typography color='primary' style={{fontFamily:'Fredoka One', fontSize: '2em'}}>PillBox</Typography>
          </Toolbar>
          </Grid>
          <Grid item sm={6}>
            <Toolbar style={{justifyContent: 'flex-end'}}>
              {links}
              <IconButton component={RouterLink} to="/">
                <HomeIcon></HomeIcon>
              </IconButton>
            </Toolbar>
          </Grid>
          </Grid>
      </AppBar>
  )
}

export default Nav
