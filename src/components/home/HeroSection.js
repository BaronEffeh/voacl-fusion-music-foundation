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
              sx={{ fontWeight: 'bold', borderRadius: '16px', height: 48 }}
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






// // src/components/home/HeroSection.js
// import React, { useState, useEffect, useCallback } from 'react';
// import { Box, Typography, Button, IconButton } from '@mui/material';
// import { Link as RouterLink } from 'react-router-dom';
// import { ArrowBackIos, ArrowForwardIos } from '@mui/icons-material';
// import { useSwipeable } from 'react-swipeable';

// const slides = [
//   {
//     image: '/hero-image1.jpg',
//     title: 'Welcome to Vocal Fusion Music Foundation',
//     text: `Music is life — a language of unity, growth, and self-expression.
//     At the heart of every song we nurture is a student discovering their voice,
//     a school building stronger community, and a future shaped through harmony.
//     Vocal Fusion Music Foundation creates these moments through programs like
//     the School’s Choral Challenge, workshops, and music camps.`,
//     buttonText: 'Register for Choral Challenge',
//     buttonLink: '/register'
//   },
//   {
//     image: '/hero-image2.jpg',
//     title: 'Empowering the Next Generation of Voices',
//     text: `We believe in the transformative power of music.
//     Through engaging competitions, workshops, and mentorship programs,
//     we inspire students to achieve their dreams and amplify their voices.`,
//     buttonText: 'Learn More',
//     buttonLink: '/about'
//   },
//   {
//     image: '/hero-image3.jpg',
//     title: 'Join the Choral Challenge',
//     text: `Be part of an exciting journey that brings schools together
//     in celebration of music, creativity, and community building.`,
//     buttonText: 'Get Involved',
//     buttonLink: '/events'
//   }
// ];

// const HeroSection = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const nextSlide = useCallback(() => {
//     setCurrentIndex((prev) => (prev + 1) % slides.length);
//   }, []);

//   const prevSlide = useCallback(() => {
//     setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
//   }, []);

//   // Auto-play every 6 seconds
//   useEffect(() => {
//     const interval = setInterval(nextSlide, 6000);
//     return () => clearInterval(interval);
//   }, [nextSlide]);

//   // Swipe handling
//   const handlers = useSwipeable({
//     onSwipedLeft: () => nextSlide(),
//     onSwipedRight: () => prevSlide(),
//     preventScrollOnSwipe: true,
//     trackMouse: true
//   });

//   const { image, title, text, buttonText, buttonLink } = slides[currentIndex];

//   return (
//     <Box
//       {...handlers}
//       sx={{
//         height: '712px',
//         backgroundImage: `url(${image})`,
//         backgroundSize: 'cover',
//         backgroundPosition: 'center',
//         color: '#fff',
//         display: 'flex',
//         alignItems: 'center',
//         position: 'relative',
//         px: 4,
//         paddingLeft: '65px',
//         transition: 'background-image 1s ease-in-out'
//       }}
//     >
//       {/* Content */}
//       <Box maxWidth="761px" sx={{ mt: 20 }}>
//         <Typography variant="h4" fontWeight="bold" gutterBottom>
//           {title}
//         </Typography>
//         <Typography variant="body1" paragraph>
//           {text}
//         </Typography>
//         <Button
//           variant="contained"
//           color="error"
//           component={RouterLink}
//           to={buttonLink}
//           sx={{ fontWeight: 'bold', borderRadius: '16px', height: 48 }}
//         >
//           {buttonText}
//         </Button>
//       </Box>

//       {/* Navigation Arrows */}
//       <IconButton
//         onClick={prevSlide}
//         sx={{
//           position: 'absolute',
//           left: 20,
//           top: '50%',
//           transform: 'translateY(-50%)',
//           color: '#fff',
//           backgroundColor: 'rgba(0,0,0,0.4)',
//           '&:hover': { backgroundColor: 'rgba(0,0,0,0.6)' }
//         }}
//       >
//         <ArrowBackIos />
//       </IconButton>

//       <IconButton
//         onClick={nextSlide}
//         sx={{
//           position: 'absolute',
//           right: 20,
//           top: '50%',
//           transform: 'translateY(-50%)',
//           color: '#fff',
//           backgroundColor: 'rgba(0,0,0,0.4)',
//           '&:hover': { backgroundColor: 'rgba(0,0,0,0.6)' }
//         }}
//       >
//         <ArrowForwardIos />
//       </IconButton>
//     </Box>
//   );
// };

// export default HeroSection;





// // src/components/home/HeroSection.js
// import React from 'react';
// import { Box, Typography, Button } from '@mui/material';
// import { Link as RouterLink } from 'react-router-dom';

// const HeroSection = () => {
//   return (
//     <Box
//       sx={{
//         height: '712px',
//         backgroundImage: `url(/hero-image1.png)`,
//         backgroundSize: 'cover',
//         backgroundPosition: 'center',
//         color: '#fff',
//         display: 'flex',
//         alignItems: 'center',
//         px: 4,
//         paddingLeft: "65px"
//       }}
//     >
//       <Box maxWidth="761px" sx={{mt: 20}}>
//         <Typography variant="h4" fontWeight="bold" gutterBottom>
//           Welcome to Vocal Fusion Music Foundation
//         </Typography>
//         <Typography variant="body1" paragraph>
//           Music is life — a language of unity, growth, and self-expression. 
//           At the heart of every song we nurture is a student discovering their voice, 
//           a school building stronger community, and a future shaped through harmony. 
//           Vocal Fusion Music Foundation creates these moments through programs like the School’s 
//           Choral Challenge, workshops, and music camps.
//         </Typography>
//         <Button
//           variant="contained"
//           color="error"
//           component={RouterLink}
//           to="/register"
//           sx={{ fontWeight: 'bold', borderRadius: '16px', height: 48 }}
//         >
//           Register for Choral Challenge
//         </Button>
//       </Box>
//     </Box>
//   );
// };

// export default HeroSection;
