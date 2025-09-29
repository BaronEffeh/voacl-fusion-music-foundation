import React, { useState } from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  TextField,
  Typography,
  Checkbox,
  FormControlLabel,
  LinearProgress,
} from "@mui/material";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";

const steps = [
  {
    title: "School Details",
    fields: [
      { label: "School Name", name: "schoolName", required: true },
      { label: "Address", name: "address" },
      { label: "City", name: "city" },
      { label: "State", name: "state" },
      { label: "Name of Principal", name: "principalName" },
    ],
  },
  {
    title: "Choir Details",
    fields: [
      { label: "Name of Choir Co-ordinator", name: "coordinator", required: true },
      { label: "Position/Role", name: "position", required: true },
      { label: "Phone Number", name: "phone", type: "tel", required: true },
      { label: "Email Address", name: "email", type: "email", required: true },
      { label: "Choir Size", name: "choirSize", type: "number", required: true },
    ],
  },
  {
    title: "Payment Information",
    content: (
      <Box>
        <Typography variant="body1" paragraph>
          After submitting the form, please make payment to the account below.
          Once payment is made, kindly upload your proof of payment
          (screenshot, bank receipt) to complete registration.
        </Typography>
        <Typography variant="h6" sx={{ mb: 2 }}>
            Account Details:
        </Typography>

        <Box sx={{ mb: 2, pl: 2 }}>
          <Typography>Account Name: Vocal Fusion Music Foundation</Typography>
          <Typography>Bank Name: Zenith Bank</Typography>
          <Typography>Account Number: 2005558881</Typography>
          <Typography>Amount: N20,000.00</Typography>
        </Box>

        <Box
          sx={{
            border: "1px solid #D2C2CA",
            backgroundColor: "#FFF8F9",
            borderRadius: 2,
            p: 3,
            textAlign: "center",
            mb: 2,
          }}
        >
          <CloudUploadIcon sx={{ fontSize: 40, color: "error.main" }} />
          <Typography>Upload Proof of Payment</Typography>
        </Box>

        <FormControlLabel
          control={<Checkbox required color="error" sx={{ color: "error.main" }} />}
          label="I confirm that the information provided is accurate and our school agrees to attend the compulsory Choral Challenge Workshop."
        />
      </Box>
    ),
  },
];

const MultiStepForm = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [formData, setFormData] = useState({});

  const currentStep = steps[activeStep] || {};
  const hasFields = Array.isArray(currentStep.fields) && currentStep.fields.length > 0;

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleNext = () => {
    if (activeStep < steps.length - 1) {
      setActiveStep((prev) => prev + 1);
    } else {
      console.log("Form submitted:", formData);
      alert("Form submitted! 🎉");
    }
  };

  const handleBack = () => {
    if (activeStep > 0) setActiveStep((prev) => prev - 1);
  };

  return (
    <Box display="flex" justifyContent="center" alignItems="center" minHeight="100vh" bgcolor="#fff5f6">
      <Card sx={{ maxWidth: 600, width: "100%", p: 3, borderRadius: 3 }}>
        <CardContent>
          {/* Stepper Progress Bar */}
          <LinearProgress
            variant="determinate"
            value={((activeStep + 1) / steps.length) * 100}
            sx={{ mb: 3, height: 8, borderRadius: 5 }}
            color="error"
          />

          <Typography variant="h6" gutterBottom>
            Section {activeStep + 1}: {currentStep.title}
          </Typography>

          {/* Render Fields or Custom Content */}
          <Box sx={{ display: "flex", flexDirection: "column", gap: 2, mt: 2 }}>
            {hasFields
              ? currentStep.fields.map((field) => (
                  <TextField
                    key={field.name}
                    label={field.label}
                    name={field.name}
                    type={field.type || "text"}
                    required={field.required}
                    value={formData[field.name] || ""}
                    onChange={handleChange}
                    fullWidth
                  />
                ))
              : currentStep.content}
          </Box>

          {/* Navigation Buttons */}
          <Box display="flex" justifyContent="space-between" mt={4}>
            <Button
              variant="outlined"
              color="error"
              onClick={handleBack}
              disabled={activeStep === 0}
              sx={{ borderRadius: 2, textTransform: "none" }}
            >
              Previous
            </Button>
            <Button
              variant="contained"
              onClick={handleNext}
              color="error"
              sx={{ borderRadius: 2, textTransform: "none" }}
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





// import React from "react";
// import MultiStepForm from "./MultiStepForm";

// const steps = [
//   {
//     title: "School Details",
//     fields: [
//       { label: "School Name", name: "schoolName", required: true },
//       { label: "Address", name: "address" },
//       { label: "City", name: "city" },
//       { label: "State", name: "state" },
//       { label: "Name of Principal", name: "principalName" },
//     ],
//   },
//   {
//     title: "Choir Details",
//     fields: [
//       { label: "Name of Choir Co-ordinator", name: "coordinator", required: true },
//       { label: "Position/Role", name: "position", required: true },
//       { label: "Phone Number", name: "phone", type: "tel", required: true },
//       { label: "Email Address", name: "email", type: "email", required: true },
//       { label: "Choir Size", name: "choirSize", type: "number", required: true },
//     ],
//   },
//   {
//     title: "Payment Information",
//     fields: [
//       { label: "Number of Students", name: "students", type: "number" },
//       { label: "Notes", name: "notes" },
//     ],
//   },
// ];

// const RegistrationForm = () => {
//   const handleSubmit = (data) => {
//     console.log("Form submitted:", data);
//     alert("Form submitted! 🎉");
//   };

//   return <MultiStepForm steps={steps} onSubmit={handleSubmit} />;
// };

// export default RegistrationForm;
