import React from 'react'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'

const Footer = () => {
  return (
    <footer style={{
      height: '5vh', 
      textAlign:'center', 
      display: 'flex', 
      justifyContent:'center',
      alignItems: 'center',
      margin: '40px 0 0 0',
      backgroundColor: '#428e92',
      color: '#fff'
      }}>
      <Typography>
        <Box maxWidth="sm" fontWeight='fontWeightLight'>Created by Rebecca Evans 2020</Box>
      </Typography>
      
    </footer>
  )
}

export default Footer
