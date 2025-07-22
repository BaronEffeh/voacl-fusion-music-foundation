import React, { useState, useEffect, useRef } from 'react';
import {
  Box,
  Typography,
  Grid,
  Button,
  Dialog,
  DialogContent,
  IconButton,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { useNavigate } from 'react-router-dom';

import Gallery1 from '../../assets/images/gallery1.png';
import Gallery2 from '../../assets/images/gallery2.jpg';
import Gallery3 from '../../assets/images/gallery3.png';
import Gallery4 from '../../assets/images/gallery4.jpg';

const galleryImages = [
  Gallery1,
  Gallery2,
  Gallery3,
  Gallery4,
  Gallery3,
  Gallery1,
  Gallery2,
  Gallery4,
  Gallery3,
];

const CapturedMoments = () => {
  const [open, setOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate();

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

  const handleSeeMore = () => {
    navigate('/gallery');
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
    <Box sx={{ py: 10, px: { xs: 2, md: 6 }, textAlign: 'center' }}>
      <Typography variant="h5" fontWeight="bold" gutterBottom>
        Captured Moments
      </Typography>
      <Typography variant="body1" maxWidth="800px" mx="auto" mb={5}>
        From high notes to heartfelt smiles, every image tells the story of young lives being shaped by music. Our
        gallery captures the energy, teamwork, and joy that define our programs — from the Choral Challenge to winners'
        concerts.
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

      <Button variant="contained" color="error" onClick={handleSeeMore}>
        See More
      </Button>

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

export default CapturedMoments;





// import React, { useState, useEffect } from 'react';
// import {
//   Box,
//   Typography,
//   Grid,
//   Button,
//   Dialog,
//   DialogContent,
//   IconButton,
// } from '@mui/material';
// import CloseIcon from '@mui/icons-material/Close';
// import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
// import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
// import { useNavigate } from 'react-router-dom';

// import Gallery1 from '../../assets/images/gallery1.png';
// import Gallery2 from '../../assets/images/gallery2.jpg';
// import Gallery3 from '../../assets/images/gallery3.png';
// import Gallery4 from '../../assets/images/gallery4.jpg';

// const galleryImages = [
//   Gallery1,
//   Gallery2,
//   Gallery3,
//   Gallery4,
//   Gallery3,
//   Gallery1,
//   Gallery2,
//   Gallery4,
//   Gallery3,
// ];

// const CapturedMoments = () => {
//   const [open, setOpen] = useState(false);
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const navigate = useNavigate();

//   const handleImageClick = (index) => {
//     setCurrentIndex(index);
//     setOpen(true);
//   };

//   const handleClose = () => {
//     setOpen(false);
//   };

//   const handlePrev = () => {
//     setCurrentIndex((prev) => (prev === 0 ? galleryImages.length - 1 : prev - 1));
//   };

//   const handleNext = () => {
//     setCurrentIndex((prev) => (prev === galleryImages.length - 1 ? 0 : prev + 1));
//   };

//   const handleSeeMore = () => {
//     navigate('/gallery');
//   };

//   // Optional: Arrow key support for desktop
//   useEffect(() => {
//     const handleKeyDown = (e) => {
//       if (!open) return;
//       if (e.key === 'ArrowRight') handleNext();
//       if (e.key === 'ArrowLeft') handlePrev();
//       if (e.key === 'Escape') handleClose();
//     };
//     window.addEventListener('keydown', handleKeyDown);
//     return () => window.removeEventListener('keydown', handleKeyDown);
//   }, [open]);

//   return (
//     <Box sx={{ py: 10, px: { xs: 2, md: 6 }, textAlign: 'center' }}>
//       <Typography variant="h5" fontWeight="bold" gutterBottom>
//         Captured Moments
//       </Typography>
//       <Typography variant="body1" maxWidth="800px" mx="auto" mb={5}>
//         From high notes to heartfelt smiles, every image tells the story of young lives being shaped by music. Our
//         gallery captures the energy, teamwork, and joy that define our programs — from the Choral Challenge to winners'
//         concerts.
//       </Typography>

//       <Grid container spacing={2} justifyContent="center" mb={4}>
//         {galleryImages.map((img, index) => (
//           <Grid item xs={12} sm={6} md={4} key={index}>
//             <Box
//               component="img"
//               src={img}
//               alt={`gallery-${index}`}
//               onClick={() => handleImageClick(index)}
//               sx={{
//                 width: '352px',
//                 height: '230px',
//                 objectFit: 'cover',
//                 borderRadius: 2,
//                 cursor: 'pointer',
//                 boxShadow: 2,
//                 transition: 'transform 0.3s',
//                 '&:hover': {
//                   transform: 'scale(1.02)',
//                 },
//               }}
//             />
//           </Grid>
//         ))}
//       </Grid>

//       <Button variant="contained" color="error" onClick={handleSeeMore}>
//         See More
//       </Button>

//       {/* Lightbox Dialog */}
//       <Dialog open={open} onClose={handleClose} maxWidth="md">
//         <DialogContent sx={{ position: 'relative', p: 0, overflow: 'hidden' }}>
//           {/* Close Button */}
//           <IconButton
//             onClick={handleClose}
//             sx={{ position: 'absolute', top: 8, right: 8, zIndex: 2, color: 'white' }}
//           >
//             <CloseIcon />
//           </IconButton>

//           {/* Left Arrow */}
//           <IconButton
//             onClick={handlePrev}
//             sx={{
//               position: 'absolute',
//               top: '50%',
//               left: 10,
//               zIndex: 2,
//               color: 'white',
//               transform: 'translateY(-50%)',
//               backgroundColor: 'rgba(0,0,0,0.5)',
//               '&:hover': { backgroundColor: 'rgba(0,0,0,0.7)' },
//             }}
//           >
//             <ArrowBackIosNewIcon />
//           </IconButton>

//           {/* Right Arrow */}
//           <IconButton
//             onClick={handleNext}
//             sx={{
//               position: 'absolute',
//               top: '50%',
//               right: 10,
//               zIndex: 2,
//               color: 'white',
//               transform: 'translateY(-50%)',
//               backgroundColor: 'rgba(0,0,0,0.5)',
//               '&:hover': { backgroundColor: 'rgba(0,0,0,0.7)' },
//             }}
//           >
//             <ArrowForwardIosIcon />
//           </IconButton>

//           {/* Image */}
//           <Box
//             component="img"
//             src={galleryImages[currentIndex]}
//             alt={`preview-${currentIndex}`}
//             sx={{
//               width: '100%',
//               height: 'auto',
//               display: 'block',
//               borderRadius: 1,
//             }}
//           />
//         </DialogContent>
//       </Dialog>
//     </Box>
//   );
// };

// export default CapturedMoments;
