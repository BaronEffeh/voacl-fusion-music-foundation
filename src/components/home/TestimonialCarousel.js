import React from 'react';
import { Box, Typography, Avatar, Card, CardContent } from '@mui/material';
import Slider from 'react-slick';
import person1 from '../../assets/images/adeleke-dennis.jpg';
import person2 from '../../assets/images/mrs-adeyemi.jpg';
import person3 from '../../assets/images/adeleke.jpg';
import person4 from '../../assets/images/olawuyi-ndubuisi.jpg';
import person5 from '../../assets/images/kingsley-amako.jpg';
import person6 from '../../assets/images/haruna-aisha.jpg';

const testimonials = [
  {
    name: 'Adeleke Dennis',
    role: 'Student, GSS Kuje, Abuja',
    quote:
      'Performing with my school choir in the Choral Challenge made me believe in myself for the first time. I found my confidence through music.',
    image: person1,
  },
  {
    name: 'Mrs Adeyemi',
    role: 'Parent · GSS Kuje, Abuja',
    quote:
      'My daughter came home from the Choral Challenge camp with a glow I hadn’t seen before. She didn’t just sing better — she stood taller. Thank you for giving her that confidence.',
    image: person2,
  },
  {
    name: 'Adeleke Dennis',
    role: 'Music Teacher, SS Simon & Jude Seminary',
    quote:
      'Our students not only improved musically, they learned teamwork, discipline, and pride. Vocal Fusion gave them a stage and they rose to it.',
    image: person3,
  },
  {
    name: 'Olawuyi Ndubuisi',
    role: 'Principal, Louisville Girls College, Abuja',
    quote:
      'This foundation isn’t just about music—it’s about transformation. Our partnership with Vocal Fusion has enriched our school culture.',
    image: person4,
  },
  {
    name: 'Kingsley Amako',
    role: 'Music Teacher, Britarch Schools, Abuja',
    quote:
      'We’ve joined many competitions before, but none with this level of organization and heart. The foundation truly values the students’ growth — not just the trophy.',
    image: person5,
  },
  {
    name: 'Haruna Aisha',
    role: 'Regina Pacis College',
    quote:
      'I always loved to sing, but I never imagined being on a real stage. Vocal Fusion made me feel seen, and now I know I want to pursue music even after school.',
    image: person6,
  },
];

const TestimonialCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5000,
    speed: 500,
    arrows: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 960, // md
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <Box sx={{ py: 10, px: { xs: 2, md: 6 }, textAlign: 'center', backgroundColor: '#fdf7f9' }}>
      <Typography variant="h5" fontWeight="bold" gutterBottom>
        What They’re Saying
      </Typography>
      <Typography variant="body1" maxWidth="800px" mx="auto" mb={5}>
        Students, teachers, and school leaders share how Vocal Fusion Music Foundation has transformed their experience of music, learning, and leadership. These voices are at the heart of what we do.
      </Typography>

      <Slider {...settings}>
        {testimonials.map((item, index) => (
          <Box key={index} px={2}>
            <Card elevation={0} sx={{ border: '1px solid #62400029', borderRadius: 3, minHeight: '240px', background: 'transparent' }}>
              <CardContent sx={{ textAlign: 'left' }}>
                <Box display="flex" alignItems="center" gap={2} mb={2}>
                  <Avatar src={item.image} alt={item.name} />
                  <Box>
                    <Typography variant="subtitle1" fontWeight="bold">
                      {item.name}
                    </Typography>
                    <Typography variant="caption" color="textSecondary">
                      {item.role}
                    </Typography>
                  </Box>
                </Box>
                <Typography variant="body2" fontStyle="italic">
                  “{item.quote}”
                </Typography>
              </CardContent>
            </Card>
          </Box>
        ))}
      </Slider>
    </Box>
  );
};

export default TestimonialCarousel;
