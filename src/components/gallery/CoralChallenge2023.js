import React, { useState, useEffect, useRef } from 'react';
import {
  Box,
  Typography,
  Grid,
  Dialog,
  DialogContent,
  IconButton,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

import GalleryImage1 from '../../assets/images/captured-moments1.jpg';
import GalleryImage2 from '../../assets/images/captured-moments2.jpg';
import GalleryImage3 from '../../assets/images/captured-moments3.jpg';
import GalleryImage4 from '../../assets/images/captured-moments4.jpg';
import GalleryImage5 from '../../assets/images/captured-moments5.jpg';
import GalleryImage6 from '../../assets/images/captured-moments6.jpg';
import GalleryImage7 from '../../assets/images/captured-moments7.jpg';
import GalleryImage8 from '../../assets/images/captured-moments8.jpg';
import GalleryImage9 from '../../assets/images/captured-moments9.jpg';
import GalleryImage10 from '../../assets/images/captured-moments10.jpg';
import GalleryImage11 from '../../assets/images/captured-moments11.jpg';
import GalleryImage12 from '../../assets/images/captured-moments12.jpg';

const galleryImages = [
  GalleryImage1,
  GalleryImage2,
  GalleryImage3,
  GalleryImage4,
  GalleryImage5,
  GalleryImage6,
  GalleryImage7,
  GalleryImage8,
  GalleryImage9,
  GalleryImage10,
  GalleryImage11,
  GalleryImage12,
];

const CoralChallenge2023 = () => {
  const [open, setOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleImageClick = (index) => {
    setCurrentIndex(index);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? galleryImages.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === galleryImages.length - 1 ? 0 : prev + 1));
  };

  // Keyboard support
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!open) return;
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'Escape') handleClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [open]);

  // Swipe Support
  const startXRef = useRef(null);

  const handleTouchStart = (e) => {
    startXRef.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    if (startXRef.current === null) return;
    const endX = e.changedTouches[0].clientX;
    const deltaX = endX - startXRef.current;

    if (deltaX > 50) {
      handlePrev(); // swipe right → previous image
    } else if (deltaX < -50) {
      handleNext(); // swipe left → next image
    }

    startXRef.current = null;
  };

  return (
    <Box sx={{ py: 8, px: { xs: 2, md: 6 }, textAlign: 'center' }}>
      <Typography variant="h5" gutterBottom>
        Choral Challenge 2023
      </Typography>
      <Typography variant="body1" maxWidth="1152px" mx="auto" mb={5}>
        The Choral Challenge took place on the 15th of November, 2023, attracting a total of six talented 
        schools from across the region. The event brought together young, vibrant voices in a spirited 
        display of harmony, creativity, and musical excellence. After a series of powerful performances 
        and intense competition, Louisville Girls' Secondary School Gwagwalada emerged as the overall 
        Champions for the year, winning the hearts of the judges and audience alike. Their dedication, 
        discipline, and stage presence set them apart — marking a memorable victory in what was truly a 
        celebration of youth and music.
      </Typography>

      <Grid container spacing={2} justifyContent="center" mb={4}>
        {galleryImages.map((img, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Box
              component="img"
              src={img}
              alt={`gallery-${index}`}
              onClick={() => handleImageClick(index)}
              sx={{
                width: '352px',
                height: '230px',
                objectFit: 'cover',
                borderRadius: 2,
                cursor: 'pointer',
                boxShadow: 2,
                transition: 'transform 0.3s',
                '&:hover': {
                  transform: 'scale(1.02)',
                },
              }}
            />
          </Grid>
        ))}
      </Grid>

      {/* Lightbox Dialog */}
      <Dialog open={open} onClose={handleClose} maxWidth="md">
        <DialogContent
          sx={{ position: 'relative', p: 0, overflow: 'hidden' }}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {/* Close */}
          <IconButton
            onClick={handleClose}
            sx={{ position: 'absolute', top: 8, right: 8, zIndex: 2, color: 'white' }}
          >
            <CloseIcon />
          </IconButton>

          {/* Left Arrow */}
          <IconButton
            onClick={handlePrev}
            sx={{
              position: 'absolute',
              top: '50%',
              left: 10,
              zIndex: 2,
              color: 'white',
              transform: 'translateY(-50%)',
              backgroundColor: 'rgba(0,0,0,0.5)',
              '&:hover': { backgroundColor: 'rgba(0,0,0,0.7)' },
            }}
          >
            <ArrowBackIosNewIcon />
          </IconButton>

          {/* Right Arrow */}
          <IconButton
            onClick={handleNext}
            sx={{
              position: 'absolute',
              top: '50%',
              right: 10,
              zIndex: 2,
              color: 'white',
              transform: 'translateY(-50%)',
              backgroundColor: 'rgba(0,0,0,0.5)',
              '&:hover': { backgroundColor: 'rgba(0,0,0,0.7)' },
            }}
          >
            <ArrowForwardIosIcon />
          </IconButton>

          {/* Lightbox Image */}
          <Box
            component="img"
            src={galleryImages[currentIndex]}
            alt={`preview-${currentIndex}`}
            sx={{
              width: '100%',
              height: 'auto',
              display: 'block',
              borderRadius: 1,
            }}
          />
        </DialogContent>
      </Dialog>
    </Box>
  );
};

export default CoralChallenge2023;
