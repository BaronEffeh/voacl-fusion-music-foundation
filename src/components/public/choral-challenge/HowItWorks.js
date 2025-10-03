import React from 'react';
import { Box, Typography, Stack, Paper } from '@mui/material';
import { motion } from 'framer-motion';

const steps = [
  {
    number: 1,
    title: 'Register',
    description:
      'Schools can register Junior and Senior Secondary school choirs to participate in the competition by filling out the online registration form.',
  },
  {
    number: 2,
    title: 'Pay',
    description:
      'Complete your enrollment by making payment immediately after registration. This confirms your school’s participation in the competition, as a notification message of enrollment would be sent after payment is confirmed.',
  },
  {
    number: 3,
    title: 'Attend the Choral Challenge Workshop',
    description:
      'All participating schools are required to attend a pre-event orientation workshop. This session introduces the competition’s structure and other technical information necessary for success in the competition.',
  },
  {
    number: 4,
    title: 'Compete and Win',
    description:
      'With your team prepared, your choir will perform at the Choral Challenge. Top schools from the state level advance to the final — with a chance to win cash prizes, musical instruments, etc., and perform at the Winners Concert.',
  },
];

const HowItWorks = () => {
  return (
    <Box sx={{ py: 10, px: 3, backgroundColor: '#FFF8F9' }}>
      <Typography
        variant="h5"
        fontWeight="bold"
        textAlign="center"
        gutterBottom
      >
        How It Works
      </Typography>

      <Box maxWidth={800} mx="auto" mt={6} sx={{ position: 'relative' }}>
        {/* Vertical line */}
        <Box
          sx={{
            position: 'absolute',
            top: 32,
            left: 20,
            width: 2,
            height: 'calc(100% - 64px)',
            backgroundColor: '#C8A2C8',
            zIndex: 0,
          }}
        />

        <Stack spacing={6}>
          {steps.map(({ number, title, description }, index) => (
            <motion.div
              key={number}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true, amount: 0.2 }}
            >
              <Box sx={{ position: 'relative', pl: 6 }}>
                {/* Number badge */}
                <Box
                  sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: 40,
                    height: 40,
                    backgroundColor: '#581845',
                    color: '#fff',
                    fontWeight: 'bold',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: 20,
                    zIndex: 1,
                  }}
                >
                  {number}
                </Box>

                {/* Card */}
                <Paper
                  elevation={0}
                  sx={{
                    width: '707px',
                    backgroundColor: '#F6EDF0',
                    padding: 3,
                    borderRadius: 3,
                    position: 'relative',
                  }}
                >
                  <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
                    {title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {description}
                  </Typography>
                </Paper>
              </Box>
            </motion.div>
          ))}
        </Stack>
      </Box>
    </Box>
  );
};

export default HowItWorks;





// import React from 'react';
// import { Box, Typography, Stack, Paper } from '@mui/material';

// const steps = [
//   {
//     number: 1,
//     title: 'Register',
//     description:
//       'Schools can register Junior and Senior Secondary school choirs to participate in the competition by filling out the online registration form.',
//   },
//   {
//     number: 2,
//     title: 'Pay',
//     description:
//       'Complete your enrollment by making payment immediately after registration. This confirms your school’s participation in the competition, as a notification message of enrollment would be sent after payment is confirmed.',
//   },
//   {
//     number: 3,
//     title: 'Attend the Choral Challenge Workshop',
//     description:
//       'All participating schools are required to attend a pre-event orientation workshop. This session introduces the competition’s structure and other technical information necessary for success in the competition.',
//   },
//   {
//     number: 4,
//     title: 'Compete and Win',
//     description:
//       'With your team prepared, your choir will perform at the Choral Challenge. Top schools from the state level advance to the final — with a chance to win cash prizes, musical instruments, etc., and perform at the Winners Concert.',
//   },
// ];

// const HowItWorks = () => {
//   return (
//     <Box sx={{ py: 10, px: 3, backgroundColor: '#FFF8F9' }}>
//       <Typography
//         variant="h5"
//         fontWeight="bold"
//         textAlign="center"
//         gutterBottom
//       >
//         How It Works
//       </Typography>

//       <Stack spacing={6} maxWidth={800} mx="auto" mt={6}>
//         {steps.map(({ number, title, description }) => (
//           <Box key={number} sx={{ position: 'relative', pl: 6 }}>
//             {/* Number Badge */}
//             <Box
//               sx={{
//                 position: 'absolute',
//                 top: 0,
//                 left: 0,
//                 width: 40,
//                 height: 40,
//                 backgroundColor: '#581845',
//                 color: '#fff',
//                 fontWeight: 'bold',
//                 borderRadius: '50%',
//                 display: 'flex',
//                 alignItems: 'center',
//                 justifyContent: 'center',
//                 fontSize: 20,
//               }}
//             >
//               {number}
//             </Box>

//             {/* Card Content */}
//             <Paper
//               elevation={0}
//               sx={{
//                 width: '707px',
//                 backgroundColor: '#F6EDF0',
//                 padding: 3,
//                 borderRadius: 3,
//               }}
//             >
//               <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
//                 {title}
//               </Typography>
//               <Typography variant="body2" color="text.secondary">
//                 {description}
//               </Typography>
//             </Paper>
//           </Box>
//         ))}
//       </Stack>
//     </Box>
//   );
// };

// export default HowItWorks;
