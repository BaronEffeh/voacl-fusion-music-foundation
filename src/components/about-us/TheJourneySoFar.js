// src/components/TheJourneySoFar.js
import React from 'react';
import { Box, Typography } from '@mui/material';
import AboutImage from '../../assets/other_images/journey-so-far.png';

const TheJourneySoFar = () => {
  return (
    <Box sx={{ py: 10, px: { xs: 2, md: 6 }, textAlign: 'center' }}>
      <Typography variant="h5" fontWeight="bold" gutterBottom>
        The Journey So Far
      </Typography>
      <Typography variant="body1" maxWidth="1152px" mx="auto" mb={5} sx={{ textAlign: 'left' }}>
        Vocal Fusion Music Foundation is a music-based non-governmental organization (NGO), 
        an initiative conceived during the quiet moments of the COVID-19 lockdown in 2020. 
        Officially birthed in 2023 and fully registered in 2024, the Foundation was created 
        out of a passion for music’s power to heal, uplift, and connect communities. Founded 
        on the belief that music transcends barriers, Vocal Fusion was established to revive 
        and strengthen music education in schools — especially through choir participation. 
        What began as a small grassroots effort has grown into a national movement that continues 
        to reach students across Nigeria through vibrant competitions, workshops, and music camps.
        <Typography>
        Over the years, we have expanded our impact by organizing hands-on music workshops, classes, 
        and live performances that develop talent and creativity. We also engage in community outreach 
        programs that use music as a tool for inclusion and social development. Through strategic 
        partnerships with schools, organizations, and artists, we continue to build a network that 
        champions music as a vital part of education and society. Every stage, every song, every 
        standing ovation — it all reflects our commitment to giving young voices a platform to 
        rise and be heard.
        </Typography>
      </Typography>

      {/* Image section */}
      <Box
            component="img"
            src={AboutImage}
            alt="Vocal Fusion Team"
            sx={{
              width: '1152px',
              maxHeight: '450px',
              objectFit: 'cover',
              boxShadow: 3,
            }}
          />

    </Box>
  );
};

export default TheJourneySoFar;
