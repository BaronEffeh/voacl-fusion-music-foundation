import React from 'react';
import { Box, Typography, Grid, Avatar } from '@mui/material';
import Ezekwuaku from '../../assets/team_images/chinyere-eze.png';
import Ejiga from '../../assets/team_images/ejiga-anthony.jpg';
import Okeleke from '../../assets/team_images/okeleke-amaka.jpg';
import Iyomo from '../../assets/team_images/iyomo-irewole.png';
import Chidinma from '../../assets/team_images/chidinma-cynthia.png';

const team = [
  {
    name: 'Ezekwuaku Chinyere P.',
    role: 'Executive Director',
    image: Ezekwuaku,
  },
  {
    name: 'Ejiga Anthony Ejiga',
    role: 'Secretary',
    image: Ejiga,
  },
  {
    name: 'Okeleke Amaka Linda',
    role: 'Communications Director',
    image: Okeleke,
  },
  {
    name: 'Iyomo Irewole',
    role: 'Programme Director',
    image: Iyomo,
  },
  {
    name: 'Chidinma Cynthia E.',
    role: 'Media Director',
    image: Chidinma,
  },
];

const TeamSection = () => {
  return (
    <Box sx={{ backgroundColor: '#fef6f8', py: 8, textAlign: 'center' }}>
      <Typography variant="h5" fontWeight="bold" gutterBottom>
        Meet The Team
      </Typography>

      <Grid container spacing={4} justifyContent="center" mt={2}>
        {team.map((member, index) => (
          <Grid item xs={6} sm={4} md={2.4} key={index}>
            <Avatar
              src={member.image}
              alt={member.name}
              sx={{ width: 120, height: 120, mx: 'auto', mb: 2 }}
            />
            <Typography fontWeight="bold">{member.name}</Typography>
            <Typography variant="body2">{member.role}</Typography>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default TeamSection;
