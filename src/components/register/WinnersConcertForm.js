import React, { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  Checkbox,
  FormControlLabel,
} from "@mui/material";

const WinnersConcertForm = () => {
  const [formData, setFormData] = useState({
    schoolName: "",
    cityState: "",
    email: "",
    representative: "",
    phone: "",
    agree: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Winner's Concert Form:", formData);
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ maxWidth: 500, mx: "auto" }}>
      <Typography variant="h6" gutterBottom align="center">
        Join us at the 2025 VFMF Winner’s Concert
      </Typography>

      <TextField
        fullWidth
        label="School Name"
        name="schoolName"
        value={formData.schoolName}
        onChange={handleChange}
        margin="normal"
      />

      <TextField
        fullWidth
        label="City and State"
        name="cityState"
        value={formData.cityState}
        onChange={handleChange}
        margin="normal"
      />

      <TextField
        fullWidth
        label="Email Address"
        name="email"
        type="email"
        value={formData.email}
        onChange={handleChange}
        margin="normal"
      />

      <TextField
        fullWidth
        label="Name of Representative"
        name="representative"
        value={formData.representative}
        onChange={handleChange}
        margin="normal"
      />

      <TextField
        fullWidth
        label="Phone Number"
        name="phone"
        type="tel"
        value={formData.phone}
        onChange={handleChange}
        margin="normal"
      />

      <FormControlLabel
        control={
          <Checkbox
            name="agree"
            checked={formData.agree}
            onChange={handleChange}
            color="error"
          />
        }
        label="I understand this form is for the winner’s concert registration and agree to attend the event"
        sx={{ mt: 2 }}
      />

      <Button
        type="submit"
        fullWidth
        variant="contained"
        color="error"
        sx={{ mt: 3, borderRadius: 2, textTransform: "none" }}
        disabled={!formData.agree}
      >
        Submit
      </Button>
    </Box>
  );
};

export default WinnersConcertForm;






// import React, { useState } from "react";
// import {
//   Box,
//   Typography,
//   TextField,
//   Button,
//   Checkbox,
//   FormControlLabel,
// } from "@mui/material";

// const WinnersConcertForm = () => {
//   const [formData, setFormData] = useState({
//     schoolName: "",
//     cityState: "",
//     email: "",
//     representative: "",
//     phone: "",
//     agree: false,
//   });

//   const handleChange = (e) => {
//     const { name, value, type, checked } = e.target;
//     setFormData((prev) => ({
//       ...prev,
//       [name]: type === "checkbox" ? checked : value,
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Form submitted:", formData);
//     // TODO: Send formData to backend
//   };

//   return (
//     <Box component="form" onSubmit={handleSubmit} sx={{ maxWidth: "500px", mx: "auto" }}>
//       <Typography variant="h6" gutterBottom align="center">
//         Join us at the 2025 VFMF Winner’s Concert
//       </Typography>

//       <TextField
//         fullWidth
//         label="School Name"
//         name="schoolName"
//         value={formData.schoolName}
//         onChange={handleChange}
//         margin="normal"
//       />

//       <TextField
//         fullWidth
//         label="City and State"
//         name="cityState"
//         value={formData.cityState}
//         onChange={handleChange}
//         margin="normal"
//       />

//       <TextField
//         fullWidth
//         label="Email Address"
//         name="email"
//         type="email"
//         value={formData.email}
//         onChange={handleChange}
//         margin="normal"
//       />

//       <TextField
//         fullWidth
//         label="Name of Representative"
//         name="representative"
//         value={formData.representative}
//         onChange={handleChange}
//         margin="normal"
//       />

//       <TextField
//         fullWidth
//         label="Phone Number"
//         name="phone"
//         type="tel"
//         value={formData.phone}
//         onChange={handleChange}
//         margin="normal"
//       />

//       <FormControlLabel
//         control={
//           <Checkbox
//             name="agree"
//             checked={formData.agree}
//             onChange={handleChange}
//             color="error"
//           />
//         }
//         label="I understand this form is for the winner’s concert registration and agree to attend the event"
//         sx={{ mt: 2 }}
//       />

//       <Button
//         type="submit"
//         fullWidth
//         variant="contained"
//         color="error"
//         sx={{ mt: 3, borderRadius: 2, textTransform: "none" }}
//         disabled={!formData.agree}
//       >
//         Submit
//       </Button>
//     </Box>
//   );
// };

// export default WinnersConcertForm;
