import * as React from 'react';
import Button from '@mui/material/Button';

import { TextField } from '@mui/material';
import Box from '@mui/material/Box'
import myImage from '../assets/forgot-password-img.png';
import { Link } from 'react-router-dom'





import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';



const theme = createTheme({
    palette: {
     
        light: '#F9F8F4',
        purple: '#997FD3',
        dark: '#222D41'
      
    },
  });


export default function ForgotPassword() {

    
  

  return (
    <ThemeProvider theme={theme}>
     <div className="grid-container">
       <div className="image-container">
          <img src={myImage} className="landing-page-img" alt="landing-page-img"/>
       </div>

       <div className="form-container">
          <Box component="form"  sx={{ mt: 1 }}>
          <Typography component="h1" variant="h4" sx={{ fontWeight: 'bold', mb: 2, color:theme.palette.dark, textAlign:'center' }}>Forgot Password</Typography>
            <TextField id="standard-basic" label="email" variant="outlined" fullWidth type="email" margin="normal" />
           
            <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ bgcolor:theme.palette.dark, mt: 3, mb: 2 }}
              >
                Send Link
              </Button>
              <Link to="/login" style={{ textDecoration: 'none' }}><Typography component="p" variant="p" sx={{ fontWeight: 'bold', mb: 2, color:theme.palette.purple, textAlign:'center' }}>Back to Login</Typography></Link>
              <Link to="/register" style={{ textDecoration: 'none' }}><Typography component="p" variant="p" sx={{ fontWeight: 'bold', mb: 2, color:theme.palette.purple, textAlign:'center' }}>Register</Typography></Link>
          </Box>
        </div>
      </div>
  
    </ThemeProvider>
  );
}
