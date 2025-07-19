// src/components/SchoolCommunity.js
import React from 'react';
import { Box, Typography, Card, CardContent, Button, Avatar } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import Slider from 'react-slick';

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
  {
    name: 'Government Secondary School Kuje',
    logo: require('../../assets/schools/gssk.png'),
  },
  {
    name: 'St. Patrick Secondary School, Benue State',
    logo: require('../../assets/schools/spssb.png'),
  },
  {
    name: 'Regina Pacis College Garki, Abuja',
    logo: require('../../assets/schools/regina-pacis-college.png'),
  },
];

const sliderSettings = {
  dots: false,
  infinite: true,
  speed: 2000,
  autoplay: true,
  autoplaySpeed: 2500,
  slidesToShow: 5,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 4,
      },
    },
    {
      breakpoint: 960,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 400,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};

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

      <Box maxWidth="1152px" mx="auto" mb={5}>
        <Slider {...sliderSettings}>
          {schools.map((school, idx) => (
            <Box key={idx} px={2}>
              <Card
                elevation={3}
                sx={{
                  borderRadius: '16px',
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
            </Box>
          ))}
        </Slider>
      </Box>

      <Button 
        variant="contained" 
        color="error" 
        size="large"
        component={RouterLink}
        to="/register"
      >
        Become a partner
      </Button>
    </Box>
  );
};

export default SchoolCommunity;
