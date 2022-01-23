import * as React from 'react';
import Button from '@mui/material/Button';
import { TextField } from '@mui/material';
import Box from '@mui/material/Box';
import myImage from '../assets/login-img.png';
import { Link } from 'react-router-dom'
import { useState } from 'react';
import { useLogin } from '../hooks/useLogin';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';


const theme = createTheme({
    palette: {
     
        light: '#F9F8F4',
        purple: '#997FD3',
        dark: '#222D41'
      
    },
  });


export default function Login() {

const [email, setEmail] = useState('')
const [password, setPassword] = useState('')
const { login, error, isPending } = useLogin()

const handleSubmit =(e) => {
  e.preventDefault()
  login(email, password)
  }
  

  return (
    <ThemeProvider theme={theme}>
     <div className="grid-container">
       <div className="image-container">
          <img src={myImage} className="landing-page-img" alt="landing-page-img"/>
       </div>

       <div className="form-container">
          <Box component="form"  onSubmit={handleSubmit} sx={{ mt: 1 }}>
          <Typography component="h1" variant="h4" sx={{ fontWeight: 'bold', mb: 2, color:theme.palette.dark, textAlign:'center' }}>Welcome Back</Typography>
            <TextField  label="email" variant="outlined" fullWidth type="email" margin="normal"  id="email" onChange={ (e) => setEmail(e.target.value)} value={email}/>
            <TextField label="Password" variant="outlined" fullWidth type="password" margin="normal"  id="password" onChange={ (e) => setPassword(e.target.value)} value={password} />
            <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ bgcolor:theme.palette.dark, mt: 3, mb: 2 }}
                
              >
                Log In
              </Button>
              {isPending &&  <Button fullWidth variant="contained" sx={{ bgcolor:theme.palette.dark, mt: 3, mb: 2 }} > Logging In </Button> }
              { error && <p className="error-msg">{error}</p>}
              <Link to="/forgotpassword" style={{ textDecoration: 'none', color:"white" }}><Typography component="p" variant="p" sx={{ fontWeight: 'bold', mb: 2, color:theme.palette.purple, textAlign:'center' }}>Forgot Password?</Typography></Link>
              <Link to="/register" style={{ textDecoration: 'none' }}><Typography component="p" variant="p" sx={{ fontWeight: 'bold', mb: 2, color:theme.palette.purple, textAlign:'center' }}>Register</Typography></Link>
          </Box>
        </div>
      </div>
  
    </ThemeProvider>
  );
}

