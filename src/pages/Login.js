import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';

import { TextField } from '@mui/material';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';



const theme = createTheme({
    palette: {
      primary: {
        light: '#F9F8F4',
        main: '#997FD3',
        dark: '#222D41'
      }
    },
  });

export default function Login() {

    
  

  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: '100vh' }}>
    
        <Grid
         
          xs={false}
          sm={5}
          md={5}
          sx={{
              bgcolor:theme.palette.primary.dark
           
          }}
        />
        <Grid item xs={12} sm={7} md={7} >
          <Box  
            sx={{
              my: 20,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '10px'
             
            }}
          >
            
            <Typography component="h1" variant="h4" sx={{ fontWeight: 'bold', mb: 5 }}>
              Welcome Back
            </Typography>
            <Box component="form"  sx={{ mt: 1 }}>
            <TextField id="standard-basic" label="email" variant="outlined" fullWidth="true" type="email" margin="normal" />
            <TextField id="standard-basic" label="Password" variant="outlined" fullWidth="true" type="password" margin="normal" />
             
             
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ bgcolor:theme.palette.primary.dark, mt: 3, mb: 2 }}
              >
                Log In
              </Button>
             
                
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}

