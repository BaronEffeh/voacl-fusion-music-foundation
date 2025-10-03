import React from 'react';
import { Box, Typography, Grid, Paper, Avatar } from '@mui/material';
import {
  Person as PersonIcon,
  School as SchoolIcon,
  Celebration as ConcertIcon,
} from '@mui/icons-material';

const stats = [
  {
    title: 'Student Performers',
    value: '1,000+',
    icon: <PersonIcon fontSize="large" />,
    bgColor: '#fdddf8',
  },
  {
    title: 'Participating Schools',
    value: '6',
    icon: <SchoolIcon fontSize="large" />,
    bgColor: '#ffe1ae',
  },
  {
    title: 'Workshops & Concerts',
    value: '2',
    icon: <ConcertIcon fontSize="large" />,
    bgColor: '#ffd9d4',
  },
];

const ImpactStats = () => {
  return (
    <Box sx={{ backgroundColor: '#fef6f8', py: 8, textAlign: 'center' }}>
      <Typography variant="h5" fontWeight="bold" gutterBottom>
        Our Impact In Numbers
      </Typography>
      <Typography variant="body2" sx={{ maxWidth: '1152px', mx: 'auto', mb: 4 }}>
        Each year, we document the reach and results of our programs — from number of student 
        participants to events hosted.
        This reflects our commitment to transparency and growth, emphasizing our vision and mission 
        achievements.
      </Typography>

      <Grid container spacing={4} justifyContent="center">
        {stats.map((item, index) => (
          <Grid item xs={12} sm={4} key={index}>
            <Paper
              elevation={0}
              sx={{
                backgroundColor: item.bgColor,
                borderRadius: 3,
                py: 4,
                pt: 6,
                height: '244px',
                width: '240px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <Avatar sx={{ bgcolor: 'transparent'}}>
              <Box sx={{ color: '#72254b' }}>{item.icon}</Box>
              </Avatar>
              <Typography variant="body1" mb={2}>
                {item.title}
              </Typography>
              <Typography variant="h5" fontWeight="bold" mt={1}>
                {item.value}
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ImpactStats;
