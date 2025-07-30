import React from 'react';
import { Box, Typography, Grid, Paper, Avatar } from '@mui/material';
import {
  AutoAwesome as CreativityIcon,
  Handshake as CollaborationIcon,
  EmojiEvents as ExcellenceIcon,
  Lightbulb as EmpowermentIcon,
} from '@mui/icons-material';

const values = [
  {
    title: 'Creativity',
    description: 'We nurture self-expression through artistic freedom.',
    icon: <CreativityIcon fontSize="large" />,
    bgColor: '#fff1ea',
  },
  {
    title: 'Collaboration',
    description: 'We bridge gaps between schools, regions, and people, through music.',
    icon: <CollaborationIcon fontSize="large" />,
    bgColor: '#f3e6ec',
  },
  {
    title: 'Excellence',
    description: 'We promote discipline, quality, and consistency, through our programs.',
    icon: <ExcellenceIcon fontSize="large" />,
    bgColor: '#f9e6e6',
  },
  {
    title: 'Empowerment',
    description: 'We bring out the best in every young performer, driving confidence.',
    icon: <EmpowermentIcon fontSize="large" />,
    bgColor: '#f5f1ee',
  },
];

const CoreValues = () => {
  return (
    <Box sx={{ backgroundColor: '#fef6f8', py: 8, textAlign: 'center' }}>
      <Typography variant="h5" gutterBottom fontWeight="bold">
        Core Values
      </Typography>
      <Grid container spacing={4} justifyContent="center" mt={4}>
        {values.map((value, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Paper
              elevation={0}
              sx={{
                backgroundColor: value.bgColor,
                borderRadius: 3,
                p: 3,
                height: '272px',
                width: '240px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <Avatar sx={{ bgcolor: '#fff', mb: 2, width: 100, height: 100 }}>
                <Box sx={{ color: '#72254b' }}>{value.icon}</Box>
              </Avatar>
              <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
                {value.title}
              </Typography>
              <Typography variant="body2" sx={{ color: '#333' }}>
                {value.description}
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default CoreValues;
