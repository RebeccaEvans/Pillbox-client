// Packages
import React from 'react'
import { Route } from 'react-router-dom'
import {Grid} from '@material-ui/core'

// Custom componentd
import Home from './pages/Home'
import Login from './pages/Login'
import Profile from './pages/Profile'
import Signup from './pages/Signup'

const Content = props => {
  return (
    <Grid item sm={12} >
        <Route exact path="/" component={Home} />
        <Route path="/login" render={
          () => <Login user={props.user} updateUser={props.updateUser} />
        } />
        <Route path="/profile" render={
          () => <Profile user={props.user} />
        } />
        <Route path="/signup" render={
          () => <Signup user={props.user} updateUser={props.updateUser} />
        } />
    </Grid>
  )
}

export default Content
