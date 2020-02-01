// Packages
import React, { useEffect, useState } from 'react'
import { Redirect } from 'react-router-dom'
import { Avatar, Button, CssBaseline, TextField, FormControlLabel, Checkbox, Link, Grid, Box, Typography, Container} from '@material-ui/core'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { makeStyles } from '@material-ui/core/styles';


function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));


const Login = props => {

	const classes = useStyles();

	// Declare and initialize state variables
	let [email, setEmail] = useState('')
	let [message, setMessage] = useState('')
	let [password, setPassword] = useState('')
  
	// Update the message whenever something else is typed
	useEffect(() => {
	  setMessage('')
	}, [email, password])
  
	// Event handlers
	const handleSubmit = e => {
	  e.preventDefault()
	  // Fetch call to POST data
	  fetch(`${process.env.REACT_APP_SERVER_URL}/auth/login`, {
		method: 'POST',
		body: JSON.stringify({
		  email,
		  password
		}),
		headers: {
		  'Content-Type': 'application/json'
		}
	  })
	  .then(response => {
		console.log('Success')
		response.json().then(result => {
		  console.log('Response', response) // metadata, status, etc
		  console.log('Result', result) // stuff in the send
		  if (response.ok) {
			// Update the user's token (back up in App.js)
			props.updateUser(result.token)
		  }
		  else {
			setMessage(`${response.status} ${response.statusText}: ${result.message}`)
		  }
		})
	  })
	  .catch(err => {
		console.log(err)
		setMessage(`${err.toString()}`)
	  })
	}
  
	// If the user exists, redirect to the profile page
	if (props.user) {
	  return <Redirect to="/profile" />
	}
  
	return (
		<Container component="main" maxWidth="xs" style={{backgroundColor: 'white'}}>
		<CssBaseline />
		<div className={classes.paper}>
		  <Avatar className={classes.avatar}>
			<LockOutlinedIcon />
		  </Avatar>
		  <Typography component="h1" variant="h5">
			Sign in
		  </Typography>
		  <form className={classes.form} noValidate onSubmit={handleSubmit}>
			<TextField
			  variant="outlined"
			  margin="normal"
			  required
			  fullWidth
			  id="email"
			  label="Email Address"
			  name="email"
			  autoComplete="email"
			  autoFocus
			  type="email"
			  onChange={e => setEmail(e.target.value)} 
			/>
			<TextField
			  variant="outlined"
			  margin="normal"
			  required
			  fullWidth
			  name="password"
			  label="Password"
			  type="password"
			  id="password"
			  autoComplete="current-password"
			  onChange={e => setPassword(e.target.value)} 
			/>
			<Button
			  type="submit"
			  fullWidth
			  variant="contained"
			  color="primary"
			  className={classes.submit}
			>
			  Sign In
			</Button>
			<Grid container>
			  <Grid item>
				<Link href="#" variant="body2">
				  {"Don't have an account? Sign Up"}
				</Link>
			  </Grid>
			</Grid>
		  </form>
		</div>
		<Box mt={8}>
		  <Copyright />
		</Box>
	  </Container>
	)
  }
  
  export default Login
  