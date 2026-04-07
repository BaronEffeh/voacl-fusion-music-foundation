import React, { useState } from "react";
import axios from "axios";
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
  Dialog,
  DialogContent,
  DialogActions,
  CircularProgress,
} from "@mui/material";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
// import { showSuccess, showError } from "../../../utils/toastConfig";

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
    fields: [],
  },
];

const MultiStepForm = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [formData, setFormData] = useState({});
  const [confirmOpen, setConfirmOpen] = useState(false);
  const [successOpen, setSuccessOpen] = useState(false);
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const [submitting, setSubmitting] = useState(false);

  // const API_BASE_URL = "https://vocal-fusion.onrender.com";

  const currentStep = steps[activeStep] || {};
  const hasFields = Array.isArray(currentStep.fields) && currentStep.fields.length > 0;

  /** Handle input */
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  /** Handle file upload */
  const handleFileChange = (e) => {
    const uploadedFile = e.target.files[0];
    if (uploadedFile) {
      setFile(uploadedFile);
      if (uploadedFile.type.startsWith("image/")) {
        const reader = new FileReader();
        reader.onloadend = () => setPreview(reader.result);
        reader.readAsDataURL(uploadedFile);
      } else {
        setPreview(null);
      }
    }
  };

  /** Navigation */
  const handleNext = () => {
    if (activeStep < steps.length - 1) {
      setActiveStep((prev) => prev + 1);
    } else {
      setConfirmOpen(true);
    }
  };

  const handleBack = () => {
    if (activeStep > 0) setActiveStep((prev) => prev - 1);
  };

  /** Confirm submission → API POST */
  const handleConfirm = async () => {
  setConfirmOpen(false);
  setSubmitting(true);

  try {
    const payload = {
      name: formData.schoolName,
      address: formData.address,
      city: formData.city,
      state: formData.state,
      principalName: formData.principalName,
      choirCoordinator: formData.coordinator,
      position: formData.position,
      phoneNumber: formData.phone,
      email: formData.email,
      choirSize: Number(formData.choirSize) || 0,
    };

    const response = await axios.post(
      "https://vocal-fusion.onrender.com/schools",
      payload,
      { headers: { "Content-Type": "application/json" } }
    );

    console.log("Registration success:", response.data);
    setSuccessOpen(true);
  } catch (error) {
    console.error("Error submitting registration:", error.response?.data || error);
    alert(JSON.stringify(error.response?.data || error.message, null, 2));
  }
};

//   /** Confirm submission → API POST */
// const handleConfirm = async () => {
//   setConfirmOpen(false);
//   setSubmitting(true);

//   try {
//     const data = new FormData();

//     // Match backend field names exactly
//     data.append("name", formData.schoolName || "");
//     data.append("address", formData.address || "");
//     data.append("city", formData.city || "");
//     data.append("state", formData.state || "");
//     data.append("principalName", formData.principalName || "");
//     data.append("choirCoordinator", formData.coordinator || "");
//     data.append("position", formData.position || "");
//     data.append("phoneNumber", formData.phone || "");
//     data.append("email", formData.email || "");
//     data.append("choirSize", formData.choirSize || "");

//     if (file) data.append("paymentProof", file);

//     const response = await axios.post(
//       "https://vocal-fusion.onrender.com/schools",
//       data,
//       { headers: { "Content-Type": "multipart/form-data" } }
//     );

//     console.log("Registration successful:", response.data);
//     showSuccess("Registration submitted successfully!");
//     setSuccessOpen(true);
//     setFormData({});
//     setFile(null);
//     setPreview(null);
//     setActiveStep(0);
//   } catch (error) {
//     console.error("Error submitting registration:", error.response?.data || error);
//     showError(
//       error.response?.data?.message ||
//         "Failed to submit registration. Please check your input and try again."
//     );
//   } finally {
//     setSubmitting(false);
//   }
// };


  // /** Confirm submission → API POST */
  // const handleConfirm = async () => {
  //   setConfirmOpen(false);
  //   setSubmitting(true);

  //   try {
  //     const data = new FormData();
  //     Object.keys(formData).forEach((key) => data.append(key, formData[key]));
  //     if (file) data.append("paymentProof", file);

  //     const response = await axios.post(`${API_BASE_URL}/schools`, data, {
  //       headers: { "Content-Type": "multipart/form-data" },
  //     });

  //     console.log("Registration successful:", response.data);
  //     showSuccess("Registration submitted successfully!");
  //     setSuccessOpen(true);
  //     setFormData({});
  //     setFile(null);
  //     setPreview(null);
  //     setActiveStep(0);
  //   } catch (error) {
  //     console.error("Error submitting registration:", error);
  //     showError(
  //       error.response?.data?.message ||
  //         "Failed to submit registration. Please check your input and try again."
  //     );
  //   } finally {
  //     setSubmitting(false);
  //   }
  // };

  return (
    <Box display="flex" justifyContent="center" alignItems="center" minHeight="100vh" mb={6}>
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

          {/* Step Fields */}
          <Box sx={{ display: "flex", flexDirection: "column", gap: 2, mt: 2 }}>
            {hasFields ? (
              currentStep.fields.map((field) => (
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
            ) : (
              <Box>
                <Typography variant="body1" paragraph>
                  After submitting the form, please make payment to the account below.
                  Once payment is made, kindly upload your proof of payment (screenshot, bank receipt)
                  to complete registration.
                </Typography>

                <Typography variant="h6" sx={{ mb: 2 }}>
                  Account Details:
                </Typography>

                <Box sx={{ mb: 2, pl: 2 }}>
                  <Typography>Account Name: Vocal Fusion Music Foundation</Typography>
                  <Typography>Bank Name: Zenith Bank</Typography>
                  <Typography>Account Number: 2005558881</Typography>
                  <Typography>Amount: ₦20,000.00</Typography>
                </Box>

                {/* File Upload */}
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
                  <input
                    accept="image/*,application/pdf"
                    style={{ display: "none" }}
                    id="upload-file"
                    type="file"
                    onChange={handleFileChange}
                  />
                  <label htmlFor="upload-file">
                    <Button
                      component="span"
                      color="error"
                      startIcon={<CloudUploadIcon />}
                      sx={{ borderRadius: 2, textTransform: "none" }}
                    >
                      {file ? "Change File" : "Upload Proof of Payment"}
                    </Button>
                  </label>

                  {preview && (
                    <Box mt={2}>
                      <img
                        src={preview}
                        alt="Preview"
                        style={{ maxWidth: "100%", borderRadius: "8px" }}
                      />
                    </Box>
                  )}

                  {file && !preview && (
                    <Typography mt={2} variant="body2" color="text.secondary">
                      File uploaded: {file.name}
                    </Typography>
                  )}
                </Box>

                <FormControlLabel
                  control={<Checkbox required color="error" />}
                  label="I confirm that the information provided is accurate and our school agrees to attend the compulsory Choral Challenge Workshop."
                />
              </Box>
            )}
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
              color="error"
              onClick={handleNext}
              disabled={submitting}
              sx={{ borderRadius: 2, textTransform: "none" }}
            >
              {activeStep === steps.length - 1 ? (
                submitting ? (
                  <CircularProgress size={24} sx={{ color: "#fff" }} />
                ) : (
                  "Submit"
                )
              ) : (
                "Next"
              )}
            </Button>
          </Box>
        </CardContent>
      </Card>

      {/* Confirmation Dialog */}
      <Dialog open={confirmOpen} onClose={() => setConfirmOpen(false)}>
        <DialogContent sx={{ textAlign: "center", p: 4 }}>
          <Typography>Are you sure you want to submit this registration?</Typography>
        </DialogContent>
        <DialogActions sx={{ justifyContent: "center", pb: 3 }}>
          <Button
            variant="outlined"
            color="error"
            onClick={() => setConfirmOpen(false)}
            sx={{ borderRadius: 2, textTransform: "none" }}
          >
            Go Back
          </Button>
          <Button
            variant="contained"
            color="error"
            onClick={handleConfirm}
            sx={{ borderRadius: 2, textTransform: "none" }}
          >
            Yes, Submit
          </Button>
        </DialogActions>
      </Dialog>

      {/* Success Dialog */}
      <Dialog open={successOpen} onClose={() => setSuccessOpen(false)}>
        <DialogContent sx={{ textAlign: "center", p: 4 }}>
          <CheckCircleIcon sx={{ fontSize: 50, color: "error.main", mb: 2 }} />
          <Typography variant="h6" gutterBottom>
            Registration Successful
          </Typography>
          <Typography variant="body2" sx={{ mb: 3 }}>
            Your submission and payment proof have been received. Payment confirmation may take up to 24 hours.
            Once verified, you’ll receive an email with your school’s set-piece and competition access details.
          </Typography>
          <Button
            variant="contained"
            color="error"
            sx={{ borderRadius: 2, textTransform: "none", mt: 1 }}
            onClick={() => {
              setSuccessOpen(false);
              window.location.href = "/";
            }}
          >
            Go to Homepage
          </Button>
        </DialogContent>
      </Dialog>
    </Box>
  );
};

export default MultiStepForm;






// import React, { useState } from "react";
// import {
//   Box,
//   Button,
//   Card,
//   CardContent,
//   TextField,
//   Typography,
//   Checkbox,
//   FormControlLabel,
//   LinearProgress,
//   Dialog,
//   DialogContent,
//   DialogActions,
// } from "@mui/material";
// import CloudUploadIcon from "@mui/icons-material/CloudUpload";
// import CheckCircleIcon from "@mui/icons-material/CheckCircle";

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
//     fields: [], // No text fields, just custom content
//   },
// ];

// const MultiStepForm = () => {
//   const [activeStep, setActiveStep] = useState(0);
//   const [formData, setFormData] = useState({});
//   const [confirmOpen, setConfirmOpen] = useState(false);
//   const [successOpen, setSuccessOpen] = useState(false);
//   const [file, setFile] = useState(null);
//   const [preview, setPreview] = useState(null);

//   const currentStep = steps[activeStep] || {};
//   const hasFields = Array.isArray(currentStep.fields) && currentStep.fields.length > 0;

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleFileChange = (e) => {
//     const uploadedFile = e.target.files[0];
//     if (uploadedFile) {
//       setFile(uploadedFile);

//       // Preview if image
//       if (uploadedFile.type.startsWith("image/")) {
//         const reader = new FileReader();
//         reader.onloadend = () => setPreview(reader.result);
//         reader.readAsDataURL(uploadedFile);
//       } else {
//         setPreview(null); // no preview for PDFs
//       }
//     }
//   };

//   const handleNext = () => {
//     if (activeStep < steps.length - 1) {
//       setActiveStep((prev) => prev + 1);
//     } else {
//       setConfirmOpen(true);
//     }
//   };

//   const handleBack = () => {
//     if (activeStep > 0) setActiveStep((prev) => prev - 1);
//   };

//   const handleConfirm = () => {
//     setConfirmOpen(false);
//     console.log("Registration Form:", formData);
//     console.log("Uploaded File:", file);
//     setSuccessOpen(true);
//   };

//   return (
//     <Box display="flex" justifyContent="center" alignItems="center" minHeight="100vh" mb={6}>
//       <Card sx={{ maxWidth: 600, width: "100%", p: 3, borderRadius: 3 }}>
//         <CardContent>
//           {/* Stepper Progress Bar */}
//           <LinearProgress
//             variant="determinate"
//             value={((activeStep + 1) / steps.length) * 100}
//             sx={{ mb: 3, height: 8, borderRadius: 5 }}
//             color="error"
//           />

//           <Typography variant="h6" gutterBottom>
//             Section {activeStep + 1}: {currentStep.title}
//           </Typography>

//           {/* Render Fields or Custom Content */}
//           <Box sx={{ display: "flex", flexDirection: "column", gap: 2, mt: 2 }}>
//             {hasFields ? (
//               currentStep.fields.map((field) => (
//                 <TextField
//                   key={field.name}
//                   label={field.label}
//                   name={field.name}
//                   type={field.type || "text"}
//                   required={field.required}
//                   value={formData[field.name] || ""}
//                   onChange={handleChange}
//                   fullWidth
//                 />
//               ))
//             ) : (
//               <Box>
//                 <Typography variant="body1" paragraph>
//                   After submitting the form, please make payment to the account below.
//                   Once payment is made, kindly upload your proof of payment
//                   (screenshot, bank receipt) to complete registration.
//                 </Typography>

//                 <Typography variant="h6" sx={{ mb: 2 }}>
//                   Account Details:
//                 </Typography>

//                 <Box sx={{ mb: 2, pl: 2 }}>
//                   <Typography>Account Name: Vocal Fusion Music Foundation</Typography>
//                   <Typography>Bank Name: Zenith Bank</Typography>
//                   <Typography>Account Number: 2005558881</Typography>
//                   <Typography>Amount: N20,000.00</Typography>
//                 </Box>

//                 {/* File Upload Box */}
//                 <Box
//                   sx={{
//                     border: "1px solid #D2C2CA",
//                     backgroundColor: "#FFF8F9",
//                     borderRadius: 2,
//                     p: 3,
//                     textAlign: "center",
//                     mb: 2,
//                   }}
//                 >
//                   <input
//                     accept="image/*,application/pdf"
//                     style={{ display: "none" }}
//                     id="upload-file"
//                     type="file"
//                     onChange={handleFileChange}
//                   />
//                   <label htmlFor="upload-file">
//                     <Button
//                       component="span"
//                       // variant="outlined"
//                       color="error"
//                       startIcon={<CloudUploadIcon />}
//                       sx={{ borderRadius: 2, textTransform: "none" }}
//                     >
//                       {file ? "Change File" : "Upload Proof of Payment"}
//                     </Button>
//                   </label>

//                   {preview && (
//                     <Box mt={2}>
//                       <img
//                         src={preview}
//                         alt="Preview"
//                         style={{ maxWidth: "100%", borderRadius: "8px" }}
//                       />
//                     </Box>
//                   )}

//                   {file && !preview && (
//                     <Typography mt={2} variant="body2" color="text.secondary">
//                       File uploaded: {file.name}
//                     </Typography>
//                   )}
//                 </Box>

//                 <FormControlLabel
//                   control={<Checkbox required color="error" sx={{ color: "error.main" }} />}
//                   label="I confirm that the information provided is accurate and our school agrees to attend the compulsory Choral Challenge Workshop."
//                 />
//               </Box>
//             )}
//           </Box>

//           {/* Navigation Buttons */}
//           <Box display="flex" justifyContent="space-between" mt={4}>
//             <Button
//               variant="outlined"
//               color="error"
//               onClick={handleBack}
//               disabled={activeStep === 0}
//               sx={{ borderRadius: 2, textTransform: "none" }}
//             >
//               Previous
//             </Button>
//             <Button
//               variant="contained"
//               onClick={handleNext}
//               color="error"
//               sx={{ borderRadius: 2, textTransform: "none" }}
//             >
//               {activeStep === steps.length - 1 ? "Submit" : "Next"}
//             </Button>
//           </Box>
//         </CardContent>
//       </Card>

//       {/* Confirmation Dialog */}
//       <Dialog open={confirmOpen} onClose={() => setConfirmOpen(false)}>
//         <DialogContent sx={{ textAlign: "center", p: 4 }}>
//           <Typography>Are you sure?</Typography>
//         </DialogContent>
//         <DialogActions sx={{ justifyContent: "center", pb: 3 }}>
//           <Button
//             variant="outlined"
//             color="error"
//             onClick={() => setConfirmOpen(false)}
//             sx={{ borderRadius: 2, textTransform: "none" }}
//           >
//             Go back
//           </Button>
//           <Button
//             variant="contained"
//             color="error"
//             onClick={handleConfirm}
//             sx={{ borderRadius: 2, textTransform: "none" }}
//           >
//             Yes
//           </Button>
//         </DialogActions>
//       </Dialog>

//       {/* Success Dialog */}
//       <Dialog open={successOpen} onClose={() => setSuccessOpen(false)}>
//         <DialogContent sx={{ textAlign: "center", p: 4 }}>
//           <CheckCircleIcon sx={{ fontSize: 50, color: "error.main", mb: 2 }} />
//           <Typography variant="h6" gutterBottom>
//             Registration Successful
//           </Typography>
//           <Typography variant="body2" sx={{ mb: 3 }}>
//             Your submission and payment proof have been received. Payment confirmation may take up to 24 hours.
//             Once verified, you’ll receive an email with access to your school’s set-piece, specifications for other
//             choice pieces, and Pass to the Choral Challenge. Let the journey to harmony begin!
//           </Typography>
//           <Button
//             variant="contained"
//             color="error"
//             sx={{ borderRadius: 2, textTransform: "none", mt: 1 }}
//             onClick={() => {
//               setSuccessOpen(false);
//               window.location.href = "/"; // Redirect to homepage
//             }}
//           >
//             Go to Homepage
//           </Button>
//         </DialogContent>
//       </Dialog>
//     </Box>
//   );
// };

// export default MultiStepForm;
