// Import packages
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom'
import jwtDecode from 'jwt-decode'
import { Grid } from '@material-ui/core'

// Resources and custom components
import Content from './content/Content'
import Nav from './nav/Nav'

const App = props => {
  // Declare state variables
  let [user, setUser] = useState(null)

  // Define any onload actions (e.g., to look for the token)
  useEffect(() => {
    console.log('check for token!')
    decodeToken()
  }, [])

  // Helper function to update the user (login, signup, and logout use this)
  const updateUser = newToken => {
    if (newToken) {
      // Save the token 
      localStorage.setItem('userToken', newToken)

      // Update the user with the token's info
      decodeToken(newToken)
    }
    else {
      setUser(null)
    }
  }

  // Helper function to decode existing tokens
  const decodeToken = existingToken => {
    let token = existingToken || localStorage.getItem('userToken')
    console.log('The token is:', token)

    // Decode token
    if (token) {
      let decoded = jwtDecode(token)

      // If the token is not decoded or it is expired, NO USER!
      if (!decoded || Date.now() > decoded.exp * 1000) {
        console.log('Expired or bad token?')
        setUser(null)
      }
      else {
        // This is the user data - YAY
        console.log('YAY! Good token!')
        setUser(decoded)
      }
    } 
    else {
      setUser(null)
    }
  }

  return (
    <Router>
      <Nav user={user} updateUser={updateUser} />
      <Grid container spacing={3}>
        <Content user={user} updateUser={updateUser} />
      </Grid>
    </Router>
  )
}

export default App
