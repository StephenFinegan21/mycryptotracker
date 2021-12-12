import * as React from 'react';
import { useState } from 'react';
import Button from '@mui/material/Button';

import { TextField } from '@mui/material';


import Box from '@mui/material/Box';
import myImage from '../assets/Register-image.png';
import { Link } from 'react-router-dom'

import { useRegister } from '../hooks/useRegister';






import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';




const theme = createTheme({
    palette: {
     
        light: '#F9F8F4',
        purple: '#997FD3',
        dark: '#222D41'
      
    },
  });


export default function Register() {

const [email, setEmail] = useState('')
const [password, setPassword] = useState('')
const [firstName, setFirstName] = useState('')
const [lastName, setLastName] = useState('')

const { register, isPending, error} = useRegister()



const handleSubmit =(e) => {
  e.preventDefault()
  register(email, password, firstName)
}
  

  return (
    <ThemeProvider theme={theme}>
     <div className="grid-container">
       <div className="image-container">
          <img src={myImage} className="landing-page-img" alt="landing-page-img"/>
       </div>

       <div className="form-container">
          <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
          <Typography component="h1" variant="h4" sx={{ fontWeight: 'bold', mb: 2, color:theme.palette.dark, textAlign:'center' }}>Get Started</Typography>
            <TextField  label="First Name" variant="outlined" fullWidth type="text" margin="normal" id="firstName" onChange={ (e) => setFirstName(e.target.value)} value={firstName}/>
            <TextField  label="Last Name" variant="outlined" fullWidth type="tex" margin="normal" id="lastName" onChange={ (e) => setLastName(e.target.value)} value={lastName}/> 
            <TextField  label="email" variant="outlined" fullWidth type="email" margin="normal" id="email" onChange={ (e) => setEmail(e.target.value)} value={email} />
            <TextField  label="Password" variant="outlined" fullWidth type="password" margin="normal" id="password" onChange={ (e) => setPassword(e.target.value)} value={password} />
            
            {!isPending &&<Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ bgcolor:theme.palette.dark, mt: 3, mb: 2 }}
              >
                Sign up
              </Button> }
              {isPending &&  <Button fullWidth variant="contained" sx={{ bgcolor:theme.palette.dark, mt: 3, mb: 2 }} > Registering </Button> }
              { error && <p className="error-msg">{error}</p>}
              <Link to="/login" style={{ textDecoration: 'none' }}><Typography component="p" variant="p" sx={{ fontWeight: 'bold', mb: 2, color:theme.palette.purple, textAlign:'center' }}>Already registered? Log In</Typography></Link>
          </Box>
        </div>
      </div>
  
    </ThemeProvider>
  );
}

