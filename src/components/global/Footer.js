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

const Footer = () => {
  const iconStyle = { color: '#72254b', fontSize: 32 };

  return (
    <Box sx={{ backgroundColor: '#fef6f8', textAlign: 'center', pt: 6 }}>
      <Typography variant="h6" gutterBottom>
        Connect with Us
      </Typography>

      <Stack direction="row" justifyContent="center" spacing={3} mb={6}>
        <IconButton aria-label="Twitter" href="https://twitter.com" target="_blank">
          <Twitter sx={iconStyle} />
        </IconButton>
        <IconButton aria-label="Facebook" href="https://facebook.com" target="_blank">
          <Facebook sx={iconStyle} />
        </IconButton>
        <IconButton aria-label="Instagram" href="https://instagram.com" target="_blank">
          <Instagram sx={iconStyle} />
        </IconButton>
        <IconButton aria-label="Call" href="tel:+234123456789">
          <Phone sx={iconStyle} />
        </IconButton>
        <IconButton aria-label="Email" href="mailto:info@vocalfusion.org">
          <Email sx={iconStyle} />
        </IconButton>
        <IconButton aria-label="YouTube" href="https://youtube.com" target="_blank">
          <YouTube sx={iconStyle} />
        </IconButton>
      </Stack>

      <Box sx={{ backgroundColor: '#BA1A1A', py: 2 }}>
        <Typography variant="body2" color="white">
          &copy; Copyright 2025. Vocal Fusion Music Foundation
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
