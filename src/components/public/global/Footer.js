import React from 'react';
import { Box, Typography, IconButton, Stack } from '@mui/material';
import {
  Twitter,
  Facebook,
  Instagram,
  Phone,
  Email,
  YouTube,
} from '@mui/icons-material';
import { Link } from 'react-router-dom';

const Footer = () => {
  const iconHoverStyle = {
    color: '#67355E',
    fontSize: 32,
    transition: 'transform 0.3s ease, color 0.3s ease',
    '&:hover': {
      transform: 'scale(1.3)',
      color: '#BA1A1A',
    },
  };

  return (
    <Box sx={{ backgroundColor: '#fef6f8', textAlign: 'center', pt: 6 }}>
      <Typography variant="h6" gutterBottom>
        Connect with Us
      </Typography>

      <Stack direction="row" justifyContent="center" spacing={3} mb={6}>
        <IconButton aria-label="Twitter" href="https://twitter.com" target="_blank">
          <Twitter sx={iconHoverStyle} />
        </IconButton>
        <IconButton aria-label="Facebook" href="https://facebook.com" target="_blank">
          <Facebook sx={iconHoverStyle} />
        </IconButton>
        <IconButton aria-label="Instagram" href="https://instagram.com" target="_blank">
          <Instagram sx={iconHoverStyle} />
        </IconButton>
        <IconButton aria-label="Call" href="tel:+2347012928822">
          <Phone sx={iconHoverStyle} />
        </IconButton>
        <IconButton aria-label="Email" href="mailto:info@vocalfusion.org">
          <Email sx={iconHoverStyle} />
        </IconButton>
        <IconButton aria-label="YouTube" href="https://youtube.com" target="_blank">
          <YouTube sx={iconHoverStyle} />
        </IconButton>
      </Stack>

      <Box sx={{ backgroundColor: '#BA1A1A', py: 2 }}>
        <Typography variant="body2" color="white">
          &copy; Copyright 2025. Vocal Fusion Music Foundation | Powered by   
          <Link 
            to="https://baroneffeh.github.io/baron_effeh_portfolio/" 
            target="_blank"
            >
              : BaronEffeh
            </Link>
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
