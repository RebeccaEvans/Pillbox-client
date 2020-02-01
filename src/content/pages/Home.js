import React from 'react'
import { Container, Paper, Typography, Divider } from '@material-ui/core';

// font-family: 'Fredoka One', cursive;
// font-family: 'Satisfy', cursive;
// font-family: 'Cantora One', sans-serif;

const Home = props => {

  const style = {
    container: {
      backgroundColor: 'white',
      textAlign: 'center',
    }
  }

  return (
    <Container component="main" maxWidth="sm" style={style.container} >
      <Typography color='primary' style={{fontFamily: 'Fredoka One', fontSize: '2em'}}>
        <h2>WELCOME TO PILLBOX</h2>
        <Divider variant="middle" />
        <img src='/images/pillorganizer.png' style={{height: '200px', width: 'auto'}}/>
        <Divider variant="middle" />
        <h3>a virtual medication organizer</h3>
      </Typography>
    </Container>
          
  )
}

export default Home
