import React, { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  Checkbox,
  FormControlLabel,
} from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const WinnersConcertForm = () => {
  const [formData, setFormData] = useState({
    schoolName: "",
    cityState: "",
    email: "",
    representative: "",
    phone: "",
    agree: false,
  });

  const [submitted, setSubmitted] = useState(false);

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
    setSubmitted(true); // Show confirmation after submit
  };

  if (submitted) {
    return (
      <Box
        sx={{
          textAlign: "center",
          p: 4,
          maxWidth: 500,
          mx: "auto",
        }}
      >
        <CheckCircleIcon sx={{ fontSize: 60, color: "error.main", mb: 2 }} />
        <Typography variant="h6" gutterBottom>
          Attendance Confirmed!
        </Typography>
        <Typography variant="body1" sx={{ mb: 3 }}>
          Thank you for registering for the Winners Concert!
          <br />
          We’re thrilled to have you join us for this special celebration of
          talent, music, and unforgettable performances. See you at the event!
        </Typography>
        <Button
          variant="contained"
          color="error"
          fullWidth
          sx={{ borderRadius: 2, textTransform: "none" }}
          onClick={() => window.location.href = "/"} // Redirect to homepage
        >
          Continue
        </Button>
      </Box>
    );
  }

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
