import React, { useState } from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  LinearProgress,
  TextField,
  Typography,
} from "@mui/material";

const MultiStepForm = ({ steps, onSubmit }) => {
  const [activeStep, setActiveStep] = useState(0);
  const [formData, setFormData] = useState({});

  // Handle input change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Navigation
  const handleNext = () => {
    if (activeStep === steps.length - 1) {
      onSubmit(formData); // submit final data
    } else {
      setActiveStep((prev) => prev + 1);
    }
  };

  const handleBack = () => setActiveStep((prev) => prev - 1);

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="80vh"
    >
      <Card
        sx={{
          maxWidth: 600,
          width: "100%",
          borderRadius: 3,
          boxShadow: 3,
          p: 2,
        }}
      >
        <CardContent>
          {/* Progress Bar */}
          <LinearProgress
            variant="determinate"
            value={((activeStep + 1) / steps.length) * 100}
            sx={{
              height: 6,
              borderRadius: 3,
              mb: 3,
              bgcolor: "#f5d6e6",
              "& .MuiLinearProgress-bar": { backgroundColor: "darkred" },
            }}
          />

          {/* Section Title */}
          <Typography variant="h6" gutterBottom>
            Section {activeStep + 1}: {steps[activeStep].title}
          </Typography>

          {/* Render Fields */}
          {steps[activeStep].fields.map((field, index) => (
            <TextField
              key={index}
              fullWidth
              margin="normal"
              label={field.label}
              name={field.name}
              type={field.type || "text"}
              value={formData[field.name] || ""}
              onChange={handleChange}
              required={field.required || false}
              sx={{ color: "error.main" }}
            />
          ))}

          {/* Navigation Buttons */}
          <Box display="flex" justifyContent="space-between" mt={3}>
            <Button
              disabled={activeStep === 0}
              onClick={handleBack}
              variant="outlined"
              color="error"
              sx={{ textTransform: "none",}}
            >
              Previous
            </Button>
            <Button
              onClick={handleNext}
              variant="contained"
              sx={{
                bgcolor: "darkred",
                textTransform: "none",
                "&:hover": { bgcolor: "red" },
              }}
            >
              {activeStep === steps.length - 1 ? "Submit" : "Next"}
            </Button>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};

export default MultiStepForm;
