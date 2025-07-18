// src/components/global/Navbar.js
import React from 'react';
import { AppBar, Toolbar, Button, Stack } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import Logo from '../../assets/logo.png';

const Navbar = () => {
  return (
    <AppBar position="static" color="transparent" elevation={0} sx={{px: "30px"}} >
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <img src={Logo} alt="Logo" style={{ height: 50 }} />

        <Stack direction="row" spacing={3}>
          {['Home', 'About', 'Choral Challenge', 'Events', 'Gallery', 'Contact Us'].map((text) => (
            <Button
              key={text}
              component={RouterLink}
              to={`/${text.toLowerCase().replace(/ /g, '-')}`}
              sx={{ color: '#000', fontWeight: 'bold' }}
            >
              {text}
            </Button>
          ))}
        </Stack>

        <Button
          variant="outlined"
          color="error"
          component={RouterLink}
          to="/register"
          sx={{ fontWeight: 'bold', background: '#FFFFFF', borderRadius: '16px', height: 48 }}
        >
          Register Now
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
