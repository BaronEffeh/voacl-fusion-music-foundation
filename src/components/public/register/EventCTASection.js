import React, { useState } from "react";
import {
  Box,
  Typography,
  Button,
  Dialog,
  DialogContent,
} from "@mui/material";
import WinnersConcertForm from "./WinnersConcertForm";
import VFMSeminarForm from "./VFMSeminarForm";

const EventRegistrationSection = () => {
  const [open, setOpen] = useState(false);
  const [activeForm, setActiveForm] = useState(null);

  const handleOpen = (formType) => {
    setActiveForm(formType);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setActiveForm(null);
  };

  return (
    <Box sx={{ textAlign: "center", py: 6 }}>
      <Typography variant="h6" gutterBottom>
        Want to join us for our events?
      </Typography>
      <Typography variant="body1" sx={{ maxWidth: 1152, mx: "auto", mb: 3 }}>
        Take your school's musical journey further by registering for either the Vocal Fusion workshop — a hands-on experience designed to sharpen vocal skills and inspire creativity, or at the prestigious Winners Concert, where the best voices from the Choral Challenge come together to shine on one stage.
      </Typography>

      <Box sx={{ display: "flex", justifyContent: "center", gap: 2 }}>
        <Button
          variant="outlined"
          color="error"
          onClick={() => handleOpen("winners")}
          sx={{ textTransform: "none", borderRadius: 2 }}
        >
          Join us at the Winner's Concert
        </Button>
        <Button
          variant="contained"
          color="error"
          onClick={() => handleOpen("seminar")}
          sx={{ textTransform: "none", borderRadius: 2 }}
        >
          Register for the VFM Seminar
        </Button>
      </Box>

      <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth>
        <DialogContent>
          {activeForm === "winners" && <WinnersConcertForm />}
          {activeForm === "seminar" && <VFMSeminarForm />}
        </DialogContent>
      </Dialog>
    </Box>
  );
};

export default EventRegistrationSection;






// import React, { useState } from "react";
// import {
//   Box,
//   Typography,
//   Button,
//   Dialog,
//   DialogContent,
//   IconButton,
// } from "@mui/material";
// import CloseIcon from "@mui/icons-material/Close";
// import WinnersConcertForm from "./WinnersConcertForm";
// import VFMSeminarForm from "./VFMSeminarForm";

// // Dummy Form Components (replace with your actual forms)
// const WinnersConcert = () => (
//   <Box p={2}>
//     <WinnersConcertForm />
//   </Box>
// );

// const VFMForm = () => (
//   <Box p={2}>
//     <VFMSeminarForm />
//     <Typography variant="h6" gutterBottom>
//       VFM Seminar Registration
//     </Typography>
//     <Typography>👉 Your multi-step form goes here...</Typography>
//   </Box>
// );

// const EventCTASection = () => {
//   const [openForm, setOpenForm] = useState(null);

//   const handleOpen = (formType) => {
//     setOpenForm(formType);
//   };

//   const handleClose = () => {
//     setOpenForm(null);
//   };

//   return (
//     <Box textAlign="center" py={6} px={12} bgcolor="#fff5f6">
//       <Typography variant="h6" gutterBottom>
//         Want to join us for our events?
//       </Typography>
//       <Typography
//         variant="body1"
//         sx={{ maxWidth: 1280, mx: "auto", mb: 3, lineHeight: 1.6 }}
//       >
//         Take your school's musical journey further by registering for either the
//         Vocal Fusion workshop — a hands-on experience designed to sharpen vocal
//         skills and inspire creativity, or at the prestigious Winners Concert,
//         where the best voices from the Choral Challenge come together to shine
//         on one stage.
//       </Typography>

//       {/* Buttons */}
//       <Box display="flex" justifyContent="center" gap={2}>
//         <Button
//           variant="outlined"
//           color="error"
//           onClick={() => handleOpen("winners")}
//           sx={{ borderRadius: 2, textTransform: "none" }}
//         >
//           Join us at the Winner&apos;s Concert
//         </Button>

//         <Button
//           variant="contained"
//           color="error"
//           onClick={() => handleOpen("vfm")}
//           sx={{ borderRadius: 2, textTransform: "none" }}
//         >
//           Register for the VFM Seminar
//         </Button>
//       </Box>

//       {/* Dialog Modal */}
//       <Dialog open={!!openForm} onClose={handleClose} maxWidth="md" fullWidth>
//         <Box display="flex" justifyContent="flex-end" p={1}>
//           <IconButton onClick={handleClose}>
//             <CloseIcon />
//           </IconButton>
//         </Box>
//         <DialogContent>
//           {openForm === "winners" && <WinnersConcert />}
//           {openForm === "vfm" && <VFMForm />}
//         </DialogContent>
//       </Dialog>
//     </Box>
//   );
// };

// export default EventCTASection;
