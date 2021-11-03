import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';

import { TextField } from '@mui/material';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Test from '../assets/Test';
import myImage from '../assets/login-img.png';
import { Link } from 'react-router-dom'





import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { color } from '@mui/system';



const theme = createTheme({
    palette: {
     
        light: '#F9F8F4',
        purple: '#997FD3',
        dark: '#222D41'
      
    },
  });


export default function Login() {

    
  

  return (
    <ThemeProvider theme={theme}>
     <div className="grid-container">
       <div className="image-container">
          <img src={myImage} className="landing-page-img"/>
       </div>

       <div className="form-container">
          <Box component="form"  sx={{ mt: 1 }}>
          <Typography component="h1" variant="h4" sx={{ fontWeight: 'bold', mb: 2, color:theme.palette.dark, textAlign:'center' }}>Welcome Back</Typography>
            <TextField id="standard-basic" label="email" variant="outlined" fullWidth="true" type="email" margin="normal" />
            <TextField id="standard-basic" label="Password" variant="outlined" fullWidth="true" type="password" margin="normal" />
            <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ bgcolor:theme.palette.dark, mt: 3, mb: 2 }}
              >
                <Link to="/dashboard" className="link">Log In</Link>
              </Button>
              <Link to="/forgotpassword" style={{ textDecoration: 'none', color:"white" }}><Typography component="p" variant="p" sx={{ fontWeight: 'bold', mb: 2, color:theme.palette.purple, textAlign:'center' }}>Forgot Password?</Typography></Link>
              <Link to="/register" style={{ textDecoration: 'none' }}><Typography component="p" variant="p" sx={{ fontWeight: 'bold', mb: 2, color:theme.palette.purple, textAlign:'center' }}>Register</Typography></Link>
          </Box>
        </div>
      </div>
  
    </ThemeProvider>
  );
}

