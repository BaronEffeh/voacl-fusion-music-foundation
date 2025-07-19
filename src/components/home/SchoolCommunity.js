// src/components/SchoolCommunity.js
import React from 'react';
import { Box, Typography, Grid, Card, CardContent, Button, Avatar } from '@mui/material';

// Sample data – replace with actual image imports or URLs
const schools = [
  {
    name: "Louisville Girls' Secondary School",
    logo: require('../../assets/schools/louisville.png'),
  },
  {
    name: 'SS Simon and Jude Seminary, Kuje',
    logo: require('../../assets/schools/simon-jude.png'),
  },
  {
    name: "Handmaid Girls' Secondary School",
    logo: require('../../assets/schools/handmaid.png'),
  },
  {
    name: 'Holy Family College, Kuje, Abuja',
    logo: require('../../assets/schools/holy-family.png'),
  },
  {
    name: 'Britarch Schools, Lugbe, Abuja',
    logo: require('../../assets/schools/britarch.png'),
  },
];

const SchoolCommunity = () => {
  return (
    <Box sx={{ py: 10, px: { xs: 2, md: 6 }, textAlign: 'center' }}>
      <Typography variant="h5" fontWeight="bold" gutterBottom>
        Our School Community
      </Typography>
      <Typography variant="body1" maxWidth="1152px" mx="auto" mb={5}>
        We’re proud to collaborate with a growing network of schools that believe in the power of
        music to inspire and uplift students. These institutions share our vision and have opened
        their doors to creativity, harmony, and youth development through choral challenge
        performance. By partnering with Vocal Fusion Music Foundation, these schools become part of
        a movement — one where music is more than performance; it’s transformation.
      </Typography>

      <Grid container spacing={6} justifyContent="center" maxWidth="1152px" mb={5}>
        {schools.map((school, idx) => (
          <Grid item key={idx} xs={12} sm={6} md={4} lg={2.4}>
            <Card
              elevation={3}
              sx={{
                width: '187px',
                borderRadius: '16px',
                border: '0.5px',
                py: 3,
                px: 2,
                backgroundColor: '#FEF0F6',
                textAlign: 'center',
              }}
            >
              <Avatar
                src={school.logo}
                alt={school.name}
                sx={{ width: 80, height: 80, margin: '0 auto', mb: 2 }}
                variant="circular"
              />
              <CardContent sx={{ p: 0 }}>
                <Typography variant="body2" fontWeight="medium">
                  {school.name}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Button variant="contained" color="error" size="large">
        Become a partner
      </Button>
    </Box>
  );
};

export default SchoolCommunity;
