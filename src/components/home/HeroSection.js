import React, { useState, useEffect } from 'react';
import { Box, Typography, Button, Fade } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

const slides = [
  {
    image: '/hero-image1.jpg',
    title: 'Welcome to Vocal Fusion Music Foundation',
    description: `Music is life — a language of unity, growth, and self-expression. 
    At the heart of every song we nurture is a student discovering their voice, 
    a school building stronger community, and a future shaped through harmony. 
    Vocal Fusion Music Foundation creates these moments through programs like the School’s 
    Choral Challenge, workshops, and music camps.`,
    buttonText: 'Learn More',
    buttonLink: '/about'
  },
  {
    image: '/hero-image2.jpg',
    title: 'Join Our Choral Challenge',
    description: `An exciting platform where schools compete in harmony, talent, and creativity.
    Inspire, collaborate, and let your voice shine in the community of music lovers.`,
    buttonText: 'Register for Choral Challenge',
    buttonLink: '/register'
  },
  {
    image: '/hero-image3.jpg',
    title: 'Building Music Communities',
    description: `We connect young people with opportunities to learn, perform, and grow in music.
    Our events inspire creativity and foster unity through song.`,
    buttonText: 'Get Involved',
    buttonLink: '/events'
  }
];

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 7000);
    return () => clearInterval(interval);
  }, []);

  const { buttonLink, buttonText } = slides[currentSlide];

  return (
    <Box sx={{ position: 'relative', height: '712px', overflow: 'hidden' }}>
      {/* Background Image */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundImage: `url(${slides[currentSlide].image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          transition: 'background-image 1s ease-in-out',
          filter: 'brightness(0.4)'
        }}
      />

      {/* Overlay (optional extra darkening) */}
      {/* <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.4)', // Semi-transparent dark layer
        }}
      /> */}

      {/* Text Content */}
      <Fade in key={currentSlide} timeout={1000}>
        <Box
          sx={{
            position: 'relative',
            zIndex: 2,
            color: '#fff',
            display: 'flex',
            alignItems: 'center',
            height: '100%',
            px: 4,
            paddingLeft: '65px'
          }}
        >
          <Box maxWidth="761px" sx={{ mt: 20 }}>
            <Typography variant="h4" gutterBottom>
              {slides[currentSlide].title}
            </Typography>
            <Typography variant="body1" paragraph>
              {slides[currentSlide].description}
            </Typography>
            <Button
              variant="contained"
              color="error"
              component={RouterLink}
              to={buttonLink}
              sx={{ 
                fontWeight: 'bold', 
                borderRadius: '16px', 
                height: 48,
                textTransform: 'capitalize' 
              }}
            >
              {buttonText}
            </Button>
          </Box>
        </Box>
      </Fade>
    </Box>
  );
};

export default HeroSection;
