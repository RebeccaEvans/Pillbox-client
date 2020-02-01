import React from 'react'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import AppBar from '@material-ui/core/AppBar'

const Footer = () => {
  const style = {
    height: '5vh',
    display: 'flex',
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '20px'
  }
  return (
      <AppBar position='static' style={style}>
        <Typography>
          <Button maxWidth="sm" color='secondary'>CREATED BY REBECCA EVANS 2020</Button>
        </Typography>
      </AppBar>
  )
}

export default Footer