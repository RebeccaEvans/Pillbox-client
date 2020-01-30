import React, { useEffect, useState } from 'react'
import { Redirect } from 'react-router-dom'
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

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
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignUp(props) {
  const classes = useStyles();

	// Declare and initialize state variables
	let [message, setMessage] = useState('')
	let [firstname, setFirstname] = useState('')
	let [lastname, setLastname] = useState('')
	let [phone, setPhone] = useState('')
	let [birthdate, setBirthdate] = useState('')
	let [profileUrl, setProfileUrl] = useState('')
	let [email, setEmail] = useState('')
	let [password, setPassword] = useState('')
  
	// Set message to blank if I'm typing in the form
	useEffect(() => {
	  setMessage('')
	}, [firstname, lastname, email, password, profileUrl])
  
	const handleSubmit = e => {
	  // Prevent default of form submission
	  e.preventDefault()
  
	  // Form the data object
	  let data = {
		firstname, 
		lastname,
		phone,
		birthdate,
		profileUrl,
		email,
		password,
	  }
  
	  // Send the user sign up data to the server
	  fetch(`${process.env.REACT_APP_SERVER_URL}/auth/signup`, {
		method: 'POST',
		body: JSON.stringify(data),
		headers: {
		  'Content-Type': 'application/json'
		}
	  })
	  .then(response => {
		response.json().then(result => {
		  if (response.ok) {
			// I have a token - update the user info
			props.updateUser(result.token)
		  }
		  else {
			// Status was something other than 200
			setMessage(`${response.status} ${response.statusText}: ${result.message}`)
		  }
		})
	  })
	  .catch(err => {
		setMessage(`Error: ${err.toString()}`)
	  })
	}
  
	// Redirect if there is already someone logged in
	if (props.user) {
	  return <Redirect to="/profile" />
	}


  

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <form className={classes.form} noValidate  onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="fname"
                name="firstname"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="First Name"
                autoFocus
				onChange={e => setFirstname(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="lastname"
                label="Last Name"
                name="lastName"
                autoComplete="lname"
				onChange={e => setLastname(e.target.value)}
              />
            </Grid>
			<Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                fullWidth
                id="phone"
				type="tel"
                label="Phone Number"
                name="phone"
                autoComplete="mobile"
//				onChange={e => setEmail(e.target.value)}
              />
            </Grid>
			<Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                fullWidth
                id="birthdate"
				type="date"
                name="birthdate"
                autoComplete="bday"
				helperText="Birth Date"
//				onChange={e => setBday(e.target.value)}
              />
            </Grid>
			<Grid item xs={12}>
              <TextField
                variant="outlined"
                fullWidth
				type="url"
                id="profileUrl"
                label="Profile Picture URL"
                name="profileUrl"
                autoComplete="url"
				onChange={e => setEmail(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
				onChange={e => setEmail(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
				onChange={e => setPassword(e.target.value)}
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign Up
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Link href="#" variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
}