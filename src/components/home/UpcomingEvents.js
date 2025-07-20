import React, { useState, useEffect } from 'react';
import { Box, Typography, Card, Button, useMediaQuery, useTheme } from '@mui/material';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import MicIcon from '@mui/icons-material/Mic';
import { Link as RouterLink } from 'react-router-dom';

const events = [
  {
    title: "SCC Winner’s Concert",
    icon: <MusicNoteIcon fontSize="large" />,
    location: "FCT, Abuja",
    date: "25th May, 2025",
    description:
      "A one-day seminar for school choir leaders and student vocalists, led by top music instructors",
    backgroundColor: '#FFB3AF29',
  },
  {
    title: "VFMF Seminar & Workshop",
    icon: <CalendarMonthIcon fontSize="large" />,
    location: "FCT, Abuja",
    date: "25th May, 2025",
    description:
      "A one-day seminar for school choir leaders and student vocalists, led by top music instructors",
    backgroundColor: '#F3B2E329',
  },
  {
    title: "School's Choral Challenge",
    icon: <MicIcon fontSize="large" />,
    location: "FCT, Abuja",
    date: "25th May, 2025",
    description:
      "A one-day seminar for school choir leaders and student vocalists, led by top music instructors",
    backgroundColor: '#F4BD6F29',
  },
];

const UpcomingEvents = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('md'));

  useEffect(() => {
    if (isSmallScreen) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % events.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [isSmallScreen]);

  return (
    <Box sx={{ py: 10, px: { xs: 2, md: 6 }, textAlign: 'center' }}>
      <Typography variant="h5" fontWeight="bold" gutterBottom>
        What’s Coming Up?
      </Typography>
      <Typography variant="body1" maxWidth="900px" mx="auto" mb={5}>
        From hands-on workshops to performance-filled concerts, our events are designed to inspire creativity,
        develop musical skill, and foster collaboration among schools and students. Each experience reflects
        our belief that music is life — and every event is a chance to live it out loud.
      </Typography>

      {/* For larger screens: show all cards side by side */}
      {!isSmallScreen && (
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            gap: 4,
            mb: 6,
          }}
        >
          {events.map((event, idx) => (
            <Card
              key={idx}
              sx={{
                backgroundColor: event.backgroundColor,
                borderRadius: '16px',
                px: 3,
                py: 4,
                textAlign: 'left',
                height: '228px',
                width: '328px',
              }}
              elevation={0}
            >
              <Box mb={2}>{event.icon}</Box>
              <Typography variant="subtitle1" fontWeight="bold" mb={1}>
                {event.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                <strong>Location:</strong> {event.location}
              </Typography>
              <Typography variant="body2" color="text.secondary" mb={2}>
                <strong>Date:</strong> {event.date}
              </Typography>
              <Typography variant="body2">{event.description}</Typography>
            </Card>
          ))}
        </Box>
      )}

      {/* For smaller screens: show one card at a time with auto-rotation */}
      {isSmallScreen && (
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            mb: 6,
            px: 2,
          }}
        >
          <Card
            sx={{
              minWidth: '90%',
              backgroundColor: events[currentIndex].backgroundColor,
              borderRadius: '16px',
              px: 3,
              py: 4,
              textAlign: 'left',
              transition: 'opacity 0.5s ease-in-out',
            }}
            elevation={0}
          >
            <Box mb={2}>{events[currentIndex].icon}</Box>
            <Typography variant="subtitle1" fontWeight="bold" mb={1}>
              {events[currentIndex].title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              <strong>Location:</strong> {events[currentIndex].location}
            </Typography>
            <Typography variant="body2" color="text.secondary" mb={2}>
              <strong>Date:</strong> {events[currentIndex].date}
            </Typography>
            <Typography variant="body2">{events[currentIndex].description}</Typography>
          </Card>
        </Box>
      )}

      <Button 
        variant="contained" 
        color="error" 
        size="large"
        component={RouterLink}
        to="/events"
      >
        View upcoming events
      </Button>
    </Box>
  );
};

export default UpcomingEvents;
