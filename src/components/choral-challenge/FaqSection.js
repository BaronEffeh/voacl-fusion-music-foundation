// import React, { useState } from 'react';
// import {
//   Box,
//   Typography,
//   Grid,
//   Collapse,
//   IconButton,
//   Divider,
// } from '@mui/material';
// import { motion } from 'framer-motion';
// import AddIcon from '@mui/icons-material/Add';
// import RemoveIcon from '@mui/icons-material/Remove';

// const faqs = [
//   {
//     question: 'Who can participate in the Choral Challenge?',
//     answer: 'Any registered secondary school in Nigeria can participate by registering their Junior or Senior Secondary school choir through the official form.',
//   },
//   {
//     question: 'How many students are allowed in a choir?',
//     answer: 'A maximum of 25 students are allowed in each choir.',
//   },
//   {
//     question: 'Why is the Choral Workshop a necessity?',
//     answer: 'It provides vital orientation and rules clarification before the event.',
//   },
//   {
//     question: 'Can choirs perform with instruments?',
//     answer: 'Yes, but instruments must not overpower the vocals.',
//   },
//   {
//     question: 'Can a school register more than one choir?',
//     answer: 'Yes, as long as each choir meets the eligibility criteria.',
//   },
//   {
//     question: 'Is there a registration fee?',
//     answer: 'Yes, a registration fee is required to complete enrollment.',
//   },
//   {
//     question: 'Are travels and accommodations provided?',
//     answer: 'No, schools are responsible for their travel and lodging arrangements.',
//   },
//   {
//     question: 'What genre of music are allowed?',
//     answer: 'Classical, Gospel, Afrobeat, and Choral arrangements are permitted.',
//   },
// ];

// const FaqColumn = ({ items }) => {
//   const [openIndex, setOpenIndex] = useState(null);

//   const handleToggle = (index) => {
//     setOpenIndex((prev) => (prev === index ? null : index));
//   };

//   return (
//     <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
//       {items.map((item, index) => {
//         const isOpen = openIndex === index;

//         return (
//           <motion.div
//             key={index}
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.4, delay: index * 0.1 }}
//             viewport={{ once: true }}
//           >
//             <Box>
//               <Box
//                 sx={{
//                   display: 'flex',
//                   justifyContent: 'space-between',
//                   alignItems: 'flex-start',
//                   cursor: 'pointer',
//                   py: 1.2,
//                 }}
//                 onClick={() => handleToggle(index)}
//               >
//                 <Typography fontSize="0.95rem" fontWeight={500} sx={{ flex: 1, pr: 2 }}>
//                   {item.question}
//                 </Typography>
//                 <IconButton
//                   size="small"
//                   sx={{
//                     bgcolor: '#581845',
//                     color: '#fff',
//                     width: 28,
//                     height: 28,
//                     borderRadius: '50%',
//                     mt: '4px',
//                     flexShrink: 0,
//                     '&:hover': { bgcolor: '#6C2E6F' },
//                   }}
//                 >
//                   {isOpen ? <RemoveIcon fontSize="small" /> : <AddIcon fontSize="small" />}
//                 </IconButton>
//               </Box>

//               <Collapse in={isOpen} timeout="auto" unmountOnExit>
//                 <Typography fontSize="0.85rem" color="text.secondary" sx={{ pr: 2, pb: 1.5 }}>
//                   {item.answer}
//                 </Typography>
//               </Collapse>

//               <Divider />
//             </Box>
//           </motion.div>
//         );
//       })}
//     </Box>
//   );
// };

// const FaqSection = () => {
//   const firstHalf = faqs.slice(0, 4);
//   const secondHalf = faqs.slice(4);

//   return (
//     <Box sx={{ py: 10, px: 3 }}>
//       <Typography variant="h5" fontWeight="bold" textAlign="center" gutterBottom>
//         FAQs
//       </Typography>

//       <Grid container spacing={4} maxWidth="md" mx="auto" mt={4}>
//         <Grid item xs={12} sm={6}>
//           <FaqColumn items={firstHalf} />
//         </Grid>
//         <Grid item xs={12} sm={6}>
//           <FaqColumn items={secondHalf} />
//         </Grid>
//       </Grid>
//     </Box>
//   );
// };

// export default FaqSection;






// import React, { useState } from 'react';
// import {
//   Box,
//   Typography,
//   Grid,
//   Collapse,
//   IconButton,
//   Divider,
// } from '@mui/material';
// import { motion } from 'framer-motion';
// import AddIcon from '@mui/icons-material/Add';
// import RemoveIcon from '@mui/icons-material/Remove';

// const faqs = [
//   {
//     question: 'Who can participate in the Choral Challenge?',
//     answer: 'Any registered secondary school in Nigeria can participate by registering their Junior or Senior Secondary school choir through the official form.',
//   },
//   {
//     question: 'How many students are allowed in a choir?',
//     answer: 'A maximum of 25 students are allowed in each choir.',
//   },
//   {
//     question: 'Why is the Choral Workshop a necessity?',
//     answer: 'It provides vital orientation and rules clarification before the event.',
//   },
//   {
//     question: 'Can choirs perform with instruments?',
//     answer: 'Yes, but instruments must not overpower the vocals.',
//   },
//   {
//     question: 'Can a school register more than one choir?',
//     answer: 'Yes, as long as each choir meets the eligibility criteria.',
//   },
//   {
//     question: 'Is there a registration fee?',
//     answer: 'Yes, a registration fee is required to complete enrollment.',
//   },
//   {
//     question: 'Are travels and accommodations provided?',
//     answer: 'No, schools are responsible for their travel and lodging arrangements.',
//   },
//   {
//     question: 'What genre of music are allowed?',
//     answer: 'Classical, Gospel, Afrobeat, and Choral arrangements are permitted.',
//   },
// ];

// const FaqSection = () => {
//   const [openIndex, setOpenIndex] = useState(null);

//   const handleToggle = (index) => {
//     setOpenIndex((prev) => (prev === index ? null : index));
//   };

//   const renderFaqItems = (items, offset = 0) =>
//     items.map((item, i) => {
//       const index = i + offset;
//       const isOpen = openIndex === index;

//       return (
//         <motion.div
//           key={index}
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.4, delay: i * 0.1 }}
//           viewport={{ once: true }}
//         >
//           <Box sx={{ width: '100%' }}>
//             <Box
//               sx={{
//                 display: 'flex',
//                 justifyContent: 'space-between',
//                 alignItems: 'flex-start',
//                 cursor: 'pointer',
//                 py: 1.2,
//               }}
//               onClick={() => handleToggle(index)}
//             >
//               <Typography
//                 fontSize="0.95rem"
//                 fontWeight={500}
//                 sx={{ flex: 1, pr: 2 }}
//               >
//                 {item.question}
//               </Typography>
//               <IconButton
//                 size="small"
//                 onClick={() => handleToggle(index)}
//                 sx={{
//                   bgcolor: '#581845',
//                   color: '#fff',
//                   width: 28,
//                   height: 28,
//                   borderRadius: '50%',
//                   mt: '4px',
//                   flexShrink: 0,
//                   '&:hover': { bgcolor: '#6C2E6F' },
//                 }}
//               >
//                 {isOpen ? <RemoveIcon fontSize="small" /> : <AddIcon fontSize="small" />}
//               </IconButton>
//             </Box>

//             <Collapse in={isOpen} timeout="auto" unmountOnExit>
//               <Typography
//                 fontSize="0.85rem"
//                 color="text.secondary"
//                 sx={{ pr: 2, pb: 1.5 }}
//               >
//                 {item.answer}
//               </Typography>
//             </Collapse>

//             <Divider />
//           </Box>
//         </motion.div>
//       );
//     });

//   return (
//     <Box sx={{ backgroundColor: '#FFF4F8', py: 10, px: 3 }}>
//       <Typography variant="h5" fontWeight="bold" textAlign="center" gutterBottom>
//         FAQs
//       </Typography>

//       <Grid container spacing={4} maxWidth="md" mx="auto" mt={4}>
//         {/* Left Column */}
//         <Grid item xs={12} sm={6}>
//           <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
//             {renderFaqItems(faqs.slice(0, 4), 0)}
//           </Box>
//         </Grid>

//         {/* Right Column */}
//         <Grid item xs={12} sm={6}>
//           <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
//             {renderFaqItems(faqs.slice(4), 4)}
//           </Box>
//         </Grid>
//       </Grid>
//     </Box>
//   );
// };

// export default FaqSection;






// import React, { useState } from 'react';
// import {
//   Box,
//   Typography,
//   Grid,
//   Collapse,
//   IconButton,
//   Divider,
// } from '@mui/material';
// import { motion } from 'framer-motion';
// import AddIcon from '@mui/icons-material/Add';
// import RemoveIcon from '@mui/icons-material/Remove';

// const faqs = [
//   {
//     question: 'Who can participate in the Choral Challenge?',
//     answer: 'Any registered secondary school in Nigeria can participate by registering their Junior or Senior Secondary school choir through the official form.',
//   },
//   {
//     question: 'How many students are allowed in a choir?',
//     answer: 'A maximum of 25 students are allowed in each choir.',
//   },
//   {
//     question: 'Why is the Choral Workshop a necessity?',
//     answer: 'It provides vital orientation and rules clarification before the event.',
//   },
//   {
//     question: 'Can choirs perform with instruments?',
//     answer: 'Yes, but instruments must not overpower the vocals.',
//   },
//   {
//     question: 'Can a school register more than one choir?',
//     answer: 'Yes, as long as each choir meets the eligibility criteria.',
//   },
//   {
//     question: 'Is there a registration fee?',
//     answer: 'Yes, a registration fee is required to complete enrollment.',
//   },
//   {
//     question: 'Are travels and accommodations provided?',
//     answer: 'No, schools are responsible for their travel and lodging arrangements.',
//   },
//   {
//     question: 'What genre of music are allowed?',
//     answer: 'Classical, Gospel, Afrobeat, and Choral arrangements are permitted.',
//   },
// ];

// const FaqSection = () => {
//   const [openIndex, setOpenIndex] = useState(null);

//   const handleToggle = (index) => {
//     setOpenIndex((prev) => (prev === index ? null : index));
//   };

//   const leftColumn = faqs.slice(0, 4);
//   const rightColumn = faqs.slice(4);

//   const renderFaqItems = (items, offset = 0) =>
//     items.map((item, i) => {
//       const index = i + offset;
//       const isOpen = openIndex === index;
//       return (
//         <motion.div
//           key={index}
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.4, delay: i * 0.1 }}
//           viewport={{ once: true }}
//         >
//           <Box sx={{ width: '100%', overflow: 'hidden' }}>
//             <Box
//               sx={{
//                 display: 'flex',
//                 justifyContent: 'space-between',
//                 alignItems: 'flex-start',
//                 cursor: 'pointer',
//                 py: 1.2,
//               }}
//             >
//               <Typography
//                 fontSize="0.95rem"
//                 fontWeight={500}
//                 sx={{ flex: 1, pr: 2 }}
//                 onClick={() => handleToggle(index)}
//               >
//                 {item.question}
//               </Typography>

//               <IconButton
//                 size="small"
//                 onClick={() => handleToggle(index)}
//                 sx={{
//                   bgcolor: '#581845',
//                   color: '#fff',
//                   width: 28,
//                   height: 28,
//                   borderRadius: '50%',
//                   mt: '4px',
//                   flexShrink: 0,
//                   '&:hover': { bgcolor: '#6C2E6F' },
//                 }}
//               >
//                 {isOpen ? <RemoveIcon fontSize="small" /> : <AddIcon fontSize="small" />}
//               </IconButton>
//             </Box>

//             <Collapse in={isOpen} timeout="auto" unmountOnExit>
//               <Box sx={{ pr: 2 }}>
//                 <Typography
//                   fontSize="0.85rem"
//                   color="text.secondary"
//                   pb={1.5}
//                   sx={{
//                     wordBreak: 'break-word',
//                   }}
//                 >
//                   {item.answer}
//                 </Typography>
//               </Box>
//             </Collapse>

//             <Divider />
//           </Box>
//         </motion.div>
//       );
//     });

//   return (
//     <Box sx={{ backgroundColor: '#FFF4F8', py: 10, px: 3 }}>
//       <Typography variant="h5" fontWeight="bold" textAlign="center" gutterBottom>
//         FAQs
//       </Typography>

//       <Grid container spacing={4} maxWidth="md" mx="auto" mt={4}>
//         <Grid item xs={12} sm={6}>
//           <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
//             {renderFaqItems(leftColumn, 0)}
//           </Box>
//         </Grid>
//         <Grid item xs={12} sm={6}>
//           <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
//             {renderFaqItems(rightColumn, 4)}
//           </Box>
//         </Grid>
//       </Grid>
//     </Box>
//   );
// };

// export default FaqSection;





// import React, { useState } from 'react';
// import {
//   Box,
//   Typography,
//   Grid,
//   Collapse,
//   IconButton,
//   Divider,
// } from '@mui/material';
// import { motion } from 'framer-motion';
// import AddIcon from '@mui/icons-material/Add';
// import RemoveIcon from '@mui/icons-material/Remove';

// const faqs = [
//   {
//     question: 'Who can participate in the Choral Challenge?',
//     answer: 'Any registered secondary school in Nigeria can participate by registering their Junior or Senior Secondary school choir through the official form.',
//   },
//   {
//     question: 'How many students are allowed in a choir?',
//     answer: 'A maximum of 25 students are allowed in each choir.',
//   },
//   {
//     question: 'Why is the Choral Workshop a necessity?',
//     answer: 'It provides vital orientation and rules clarification before the event.',
//   },
//   {
//     question: 'Can choirs perform with instruments?',
//     answer: 'Yes, but instruments must not overpower the vocals.',
//   },
//   {
//     question: 'Can a school register more than one choir?',
//     answer: 'Yes, as long as each choir meets the eligibility criteria.',
//   },
//   {
//     question: 'Is there a registration fee?',
//     answer: 'Yes, a registration fee is required to complete enrollment.',
//   },
//   {
//     question: 'Are travels and accommodations provided?',
//     answer: 'No, schools are responsible for their travel and lodging arrangements.',
//   },
//   {
//     question: 'What genre of music are allowed?',
//     answer: 'Classical, Gospel, Afrobeat, and Choral arrangements are permitted.',
//   },
// ];

// const FaqSection = () => {
//   const [openIndex, setOpenIndex] = useState(null);

//   const handleToggle = (index) => {
//     setOpenIndex((prev) => (prev === index ? null : index));
//   };

//   const leftColumn = faqs.slice(0, 4);
//   const rightColumn = faqs.slice(4);

//   const renderFaqItems = (items, offset = 0) =>
//     items.map((item, i) => {
//       const index = i + offset;
//       return (
//         <motion.div
//           key={index}
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.4, delay: i * 0.1 }}
//           viewport={{ once: true }}
//         >
//           <Box sx={{ width: '100%', overflow: 'hidden' }}>
//             <Box
//               onClick={() => handleToggle(index)}
//               sx={{
//                 display: 'flex',
//                 justifyContent: 'space-between',
//                 alignItems: 'flex-start',
//                 cursor: 'pointer',
//                 py: 1.2,
//                 gap: 12,
//               }}
//             >
//               <Typography
//                 fontSize="0.95rem"
//                 fontWeight={500}
//                 sx={{ flex: 1, wordBreak: 'break-word' }}
//               >
//                 {item.question}
//               </Typography>
//               <IconButton
//                 size="small"
//                 sx={{
//                   bgcolor: '#581845',
//                   color: '#fff',
//                   width: 28,
//                   height: 28,
//                   borderRadius: '50%',
//                   mt: '4px',
//                   flexShrink: 0,
//                   '&:hover': { bgcolor: '#6C2E6F' },
//                 }}
//               >
//                 {openIndex === index ? (
//                   <RemoveIcon fontSize="small" />
//                 ) : (
//                   <AddIcon fontSize="small" />
//                 )}
//               </IconButton>
//             </Box>

//             <Collapse in={openIndex === index} timeout="auto" unmountOnExit>
//               <Typography
//                 fontSize="0.85rem"
//                 color="text.secondary"
//                 pl={0.5}
//                 pb={1.5}
//                 sx={{
//                   wordBreak: 'break-word',
//                 }}
//               >
//                 {item.answer}
//               </Typography>
//             </Collapse>

//             <Divider />
//           </Box>
//         </motion.div>
//       );
//     });

//   return (
//     <Box sx={{ backgroundColor: '#FFF4F8', py: 10, px: 3 }}>
//       <Typography
//         variant="h5"
//         fontWeight="bold"
//         textAlign="center"
//         gutterBottom
//       >
//         FAQs
//       </Typography>

//       <Grid
//         container
//         spacing={4}
//         maxWidth="md"
//         mx="auto"
//         mt={4}
//       >
//         <Grid item xs={12} sm={6}>
//           <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
//             {renderFaqItems(leftColumn, 0)}
//           </Box>
//         </Grid>
//         <Grid item xs={12} sm={6}>
//           <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
//             {renderFaqItems(rightColumn, 4)}
//           </Box>
//         </Grid>
//       </Grid>
//     </Box>
//   );
// };

// export default FaqSection;





import React, { useState } from 'react';
import {
  Box,
  Typography,
  Grid,
  Collapse,
  IconButton,
  Divider,
} from '@mui/material';
import { motion } from 'framer-motion';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

const faqs = [
  {
    question: 'Who can participate in the Choral Challenge?',
    answer: 'Any registered secondary school in Nigeria can participate by registering their Junior or Senior Secondary school choir through the official form.',
  },
  {
    question: 'How many students are allowed in a choir?',
    answer: 'A maximum of 25 students are allowed in each choir.',
  },
  {
    question: 'Why is the Choral Workshop a necessity?',
    answer: 'It provides vital orientation and rules clarification before the event.',
  },
  {
    question: 'Can choirs perform with instruments?',
    answer: 'Yes, but instruments must not overpower the vocals.',
  },
  {
    question: 'Can a school register more than one choir?',
    answer: 'Yes, as long as each choir meets the eligibility criteria.',
  },
  {
    question: 'Is there a registration fee?',
    answer: 'Yes, a registration fee is required to complete enrollment.',
  },
  {
    question: 'Are travels and accommodations provided?',
    answer: 'No, schools are responsible for their travel and lodging arrangements.',
  },
  {
    question: 'What genre of music are allowed?',
    answer: 'Classical, Gospel, Afrobeat, and Choral arrangements are permitted.',
  },
];

const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  // Split into two columns of 4
  const leftColumn = faqs.slice(0, 4);
  const rightColumn = faqs.slice(4);

  const renderFaqItems = (items, offset = 0) =>
    items.map((item, i) => {
      const index = i + offset;
      return (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: i * 0.1 }}
          viewport={{ once: true }}
        >
          <Box>
            <Box
              onClick={() => handleToggle(index)}
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'flex-start',
                cursor: 'pointer',
                py: 1.2,
                gap: 12,
              }}
            >
              <Typography fontSize="0.95rem" fontWeight={500} sx={{ flex: 1 }}>
                {item.question}
              </Typography>
              <IconButton
                size="small"
                sx={{
                  bgcolor: '#581845',
                  color: '#fff',
                  width: 28,
                  height: 28,
                  borderRadius: '50%',
                  mt: '4px',
                  '&:hover': { bgcolor: '#6C2E6F' },
                }}
              >
                {openIndex === index ? (
                  <RemoveIcon fontSize="small" />
                ) : (
                  <AddIcon fontSize="small" />
                )}
              </IconButton>
            </Box>

            <Collapse in={openIndex === index} timeout="auto" unmountOnExit>
              <Typography
                fontSize="0.85rem"
                color="text.secondary"
                pl={0.5}
                pb={1.5}
              >
                {item.answer}
              </Typography>
            </Collapse>

            <Divider />
          </Box>
        </motion.div>
      );
    });

  return (
    <Box sx={{alignItems: 'center', py: 10, px: 3 }}>
      <Typography
        variant="h5"
        fontWeight="bold"
        textAlign="center"
        gutterBottom
      >
        FAQs
      </Typography>

      <Grid
        container
        spacing={4}
        maxWidth="md"
        mx="auto"
        mt={4}
      >
        <Grid item xs={12} sm={6}>
          {renderFaqItems(leftColumn, 0)}
        </Grid>
        <Grid item xs={12} sm={6}>
          {renderFaqItems(rightColumn, 4)}
        </Grid>
      </Grid>
    </Box>
  );
};

export default FaqSection;





// import React, { useState } from 'react';
// import {
//   Box,
//   Typography,
//   Grid,
//   Collapse,
//   IconButton,
// } from '@mui/material';
// import { motion } from 'framer-motion';
// import AddIcon from '@mui/icons-material/Add';
// import RemoveIcon from '@mui/icons-material/Remove';

// const faqs = [
//   'Who can participate in the Choral Challenge?',
//   'How many students are allowed in a choir?',
//   'Why is the Choral Workshop a necessity?',
//   'Can choirs perform with instruments?',
//   'Can a school register more than one choir?',
//   'Is there a registration fee?',
//   'Are travels and accommodations provided?',
//   'What genre of music are allowed?',
// ];

// const answers = [
//   'Junior and Senior Secondary school choirs from recognized schools.',
//   'A maximum of 25 students are allowed in each choir.',
//   'It provides vital orientation and rules clarification before the event.',
//   'Yes, but instruments must not overpower the vocals.',
//   'Yes, as long as each choir meets the eligibility criteria.',
//   'Yes, a registration fee is required to complete enrollment.',
//   'No, schools are responsible for their travel and lodging arrangements.',
//   'Classical, Gospel, Afrobeat, and Choral arrangements are permitted.',
// ];

// const FaqSection = () => {
//   const [openIndex, setOpenIndex] = useState(null);

//   const handleToggle = (index) => {
//     setOpenIndex((prev) => (prev === index ? null : index));
//   };

//   return (
//     <Box sx={{ backgroundColor: '#FFF4F8', py: 10, px: 3 }}>
//       <Typography variant="h5" fontWeight="bold" textAlign="center" gutterBottom>
//         FAQs
//       </Typography>

//       <Grid container spacing={4} maxWidth="md" mx="auto" mt={4}>
//         {faqs.map((question, index) => (
//           <Grid item xs={12} sm={6} key={index}>
//             <motion.div
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5, delay: index * 0.1 }}
//               viewport={{ once: true, amount: 0.3 }}
//             >
//               <Box
//                 sx={{
//                   display: 'flex',
//                   alignItems: 'flex-start',
//                   gap: 1.5,
//                   cursor: 'pointer',
//                 }}
//                 onClick={() => handleToggle(index)}
//               >
//                 <IconButton
//                   size="small"
//                   sx={{
//                     bgcolor: '#581845',
//                     color: '#fff',
//                     width: 28,
//                     height: 28,
//                     borderRadius: '50%',
//                     mt: '4px',
//                     '&:hover': { bgcolor: '#6C2E6F' },
//                   }}
//                 >
//                   {openIndex === index ? (
//                     <RemoveIcon fontSize="small" />
//                   ) : (
//                     <AddIcon fontSize="small" />
//                   )}
//                 </IconButton>

//                 <Box>
//                   <Typography fontWeight={500} fontSize="0.95rem">
//                     {question}
//                   </Typography>

//                   <Collapse in={openIndex === index}>
//                     <Typography fontSize="0.85rem" color="text.secondary" mt={1}>
//                       {answers[index]}
//                     </Typography>
//                   </Collapse>
//                 </Box>
//               </Box>
//             </motion.div>
//           </Grid>
//         ))}
//       </Grid>
//     </Box>
//   );
// };

// export default FaqSection;
