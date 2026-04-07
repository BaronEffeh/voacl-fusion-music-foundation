import React, { useEffect, useState } from "react";
import {
  Box,
  Paper,
  Typography,
  TextField,
  Button,
  CircularProgress,
  MenuItem,
} from "@mui/material";
import axios from "axios";

const API_BASE_URL = "https://vocal-fusion.onrender.com";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    sender_name: "",
    email: "",
    subject: "",
    phone: "",
    content: "",
    school_id: null,
  });

  const [schools, setSchools] = useState([]);
  const [loading, setLoading] = useState(false);
  const [successMsg, setSuccessMsg] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  /** Fetch schools for dropdown */
  useEffect(() => {
    const fetchSchools = async () => {
      try {
        const res = await axios.get(`${API_BASE_URL}/schools?limit=100`);
        const data = res.data.schools || res.data;

        setSchools(data);
      } catch (err) {
        console.error("Failed to load schools:", err);
      }
    };

    fetchSchools();
  }, []);

  const handleChange = (e) => {
    let value = e.target.value;

    if (e.target.name === "school_id") {
      value = value === "" ? null : Number(value);
    }

    setFormData({
      ...formData,
      [e.target.name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccessMsg("");
    setErrorMsg("");

    try {
      await axios.post(`${API_BASE_URL}/messages`, formData);

      setSuccessMsg("Your message has been sent successfully!");

      setFormData({
        sender_name: "",
        email: "",
        subject: "",
        phone: "",
        content: "",
        school_id: null,
      });
    } catch (err) {
      console.error("Contact form error:", err);

      const backendMsg =
        err.response?.data?.error ||
        err.response?.data?.message ||
        "Failed to send message. Please try again.";

      setErrorMsg(backendMsg);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box display="flex" justifyContent="center" alignItems="center" minHeight="100vh" p={2}>
      <Paper
        elevation={0}
        sx={{
          p: 4,
          borderRadius: 2,
          border: "1px solid #ddd",
          maxWidth: 500,
          width: "100%",
          marginTop: 4,
        }}
      >
        <Typography variant="h6" gutterBottom>
          Send Us a Message
        </Typography>

        {successMsg && <Typography sx={{ color: "green", mb: 2 }}>{successMsg}</Typography>}
        {errorMsg && <Typography sx={{ color: "red", mb: 2 }}>{errorMsg}</Typography>}

        <Box component="form" autoComplete="off" onSubmit={handleSubmit}>
          <TextField
            fullWidth
            label="Full Name"
            name="sender_name"
            required
            value={formData.sender_name}
            onChange={handleChange}
            margin="normal"
          />

          <TextField
            fullWidth
            label="Email Address"
            name="email"
            type="email"
            required
            value={formData.email}
            onChange={handleChange}
            margin="normal"
          />

          <TextField
            fullWidth
            label="Subject"
            name="subject"
            required
            value={formData.subject}
            onChange={handleChange}
            margin="normal"
          />

          <TextField
            fullWidth
            label="Phone Number (Optional)"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            margin="normal"
          />

          {/* SCHOOL DROPDOWN */}
          <TextField
            fullWidth
            select
            label="School / Organization (Optional)"
            name="school_id"
            value={formData.school_id ?? ""}
            onChange={handleChange}
            margin="normal"
          >
            <MenuItem value="">None</MenuItem>
            {schools.map((school) => (
              <MenuItem key={school.id} value={school.id}>
                {school.name}
              </MenuItem>
            ))}
          </TextField>

          <TextField
            fullWidth
            label="Message"
            name="content"
            multiline
            required
            rows={4}
            value={formData.content}
            onChange={handleChange}
            margin="normal"
          />

          {successMsg && <Typography sx={{ color: "green", mb: 2 }}>{successMsg}</Typography>}
          {errorMsg && <Typography sx={{ color: "red", mb: 2 }}>{errorMsg}</Typography>}

          <Button
            type="submit"
            fullWidth
            variant="contained"
            disabled={loading}
            sx={{
              mt: 2,
              bgcolor: "#b71c1c",
              "&:hover": { bgcolor: "#a31414" },
              textTransform: "none",
              borderRadius: 2,
              py: 1.2,
            }}
          >
            {loading ? <CircularProgress size={24} sx={{ color: "#fff" }} /> : "Submit"}
          </Button>
        </Box>
      </Paper>
    </Box>
  );
};

export default ContactForm;






// import React, { useState } from "react";
// import {
//   Box,
//   Paper,
//   Typography,
//   TextField,
//   Button,
//   CircularProgress,
// } from "@mui/material";
// import axios from "axios";

// const API_BASE_URL = "https://vocal-fusion.onrender.com";

// const ContactForm = () => {
//   const [formData, setFormData] = useState({
//     sender_name: "",
//     email: "",
//     subject: "",
//     phone: "",
//     content: "",
//     school_id: null,
//   });

//   const [loading, setLoading] = useState(false);
//   const [successMsg, setSuccessMsg] = useState("");
//   const [errorMsg, setErrorMsg] = useState("");

//   const handleChange = (e) => {
//     let value = e.target.value;

//     // Convert school_id to number or null
//     if (e.target.name === "school_id") {
//       value = value.trim() === "" ? null : Number(value);
//     }

//     setFormData({
//       ...formData,
//       [e.target.name]: value,
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setSuccessMsg("");
//     setErrorMsg("");

//     try {
//       await axios.post(`${API_BASE_URL}/messages`, formData);

//       setSuccessMsg("Your message has been sent successfully!");

//       setFormData({
//         sender_name: "",
//         email: "",
//         subject: "",
//         phone: "",
//         content: "",
//         school_id: null,
//       });
//     } catch (err) {
//       console.error("Contact form error:", err);

//       const backendMsg =
//         err.response?.data?.error ||
//         err.response?.data?.message ||
//         "Failed to send message. Please try again.";

//       setErrorMsg(backendMsg);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <Box display="flex" justifyContent="center" alignItems="center" minHeight="100vh" p={2}>
//       <Paper
//         elevation={0}
//         sx={{
//           p: 4,
//           borderRadius: 2,
//           border: "1px solid #ddd",
//           maxWidth: 500,
//           width: "100%",
//           marginTop: 4,
//         }}
//       >
//         <Typography variant="h6" gutterBottom>
//           Send Us a Message
//         </Typography>

//         {successMsg && <Typography sx={{ color: "green", mb: 2 }}>{successMsg}</Typography>}
//         {errorMsg && <Typography sx={{ color: "red", mb: 2 }}>{errorMsg}</Typography>}

//         <Box component="form" autoComplete="off" onSubmit={handleSubmit}>
//           <TextField
//             fullWidth
//             label="Full Name"
//             name="sender_name"
//             required
//             value={formData.sender_name}
//             onChange={handleChange}
//             margin="normal"
//           />

//           <TextField
//             fullWidth
//             label="Email Address"
//             name="email"
//             type="email"
//             required
//             value={formData.email}
//             onChange={handleChange}
//             margin="normal"
//           />

//           <TextField
//             fullWidth
//             label="Subject"
//             name="subject"
//             required
//             value={formData.subject}
//             onChange={handleChange}
//             margin="normal"
//           />

//           <TextField
//             fullWidth
//             label="Phone Number (Optional)"
//             name="phone"
//             value={formData.phone}
//             onChange={handleChange}
//             margin="normal"
//           />

//           <TextField
//             fullWidth
//             label="School ID (Optional)"
//             name="school_id"
//             value={formData.school_id ?? ""}
//             onChange={handleChange}
//             margin="normal"
//           />

//           <TextField
//             fullWidth
//             label="Message"
//             name="content"
//             multiline
//             required
//             rows={4}
//             value={formData.content}
//             onChange={handleChange}
//             margin="normal"
//           />

//           <Button
//             type="submit"
//             fullWidth
//             variant="contained"
//             disabled={loading}
//             sx={{
//               mt: 2,
//               bgcolor: "#b71c1c",
//               "&:hover": { bgcolor: "#a31414" },
//               textTransform: "none",
//               borderRadius: 2,
//               py: 1.2,
//             }}
//           >
//             {loading ? <CircularProgress size={24} sx={{ color: "#fff" }} /> : "Submit"}
//           </Button>
//         </Box>
//       </Paper>
//     </Box>
//   );
// };

// export default ContactForm;






// import React, { useState } from "react";
// import {
//   Box,
//   Paper,
//   Typography,
//   TextField,
//   Button,
//   CircularProgress,
// } from "@mui/material";
// import axios from "axios";

// const API_BASE_URL = "https://vocal-fusion.onrender.com";

// const ContactForm = () => {
//   const [formData, setFormData] = useState({
//     sender_name: "",
//     email: "",
//     subject: "",
//     phone: "",
//     content: "",
//     school_id: null,
//   });

//   const [loading, setLoading] = useState(false);
//   const [successMsg, setSuccessMsg] = useState("");
//   const [errorMsg, setErrorMsg] = useState("");

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setSuccessMsg("");
//     setErrorMsg("");

//     try {
//       const res = await axios.post(`${API_BASE_URL}/messages`, formData);

//       setSuccessMsg("Your message has been sent successfully!");
//       setFormData({
//         sender_name: "",
//         email: "",
//         subject: "",
//         phone: "",
//         content: "",
//         school_id: "",
//       });
//     } catch (err) {
//       console.error("Contact form error:", err);
//       setErrorMsg("Failed to send message. Please try again.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <Box display="flex" justifyContent="center" alignItems="center" minHeight="100vh" p={2}>
//       <Paper
//         elevation={0}
//         sx={{
//           p: 4,
//           borderRadius: 2,
//           border: "1px solid #ddd",
//           maxWidth: 500,
//           width: "100%",
//           marginTop: 4,
//         }}
//       >
//         <Typography variant="h6" gutterBottom>
//           Send Us a Message
//         </Typography>

//         {successMsg && <Typography sx={{ color: "green", mb: 2 }}>{successMsg}</Typography>}
//         {errorMsg && <Typography sx={{ color: "red", mb: 2 }}>{errorMsg}</Typography>}

//         <Box component="form" autoComplete="off" onSubmit={handleSubmit}>
//           <TextField
//             fullWidth
//             label="Full Name"
//             name="sender_name"
//             required
//             value={formData.sender_name}
//             onChange={handleChange}
//             margin="normal"
//           />

//           <TextField
//             fullWidth
//             label="Email Address"
//             name="email"
//             type="email"
//             required
//             value={formData.email}
//             onChange={handleChange}
//             margin="normal"
//           />

//           <TextField
//             fullWidth
//             label="Subject"
//             name="subject"
//             required
//             value={formData.subject}
//             onChange={handleChange}
//             margin="normal"
//           />

//           <TextField
//             fullWidth
//             label="Phone Number (Optional)"
//             name="phone"
//             value={formData.phone}
//             onChange={handleChange}
//             margin="normal"
//           />

//           <TextField
//             fullWidth
//             label="School ID (Optional)"
//             name="school_id"
//             value={formData.school_id}
//             onChange={handleChange}
//             margin="normal"
//           />

//           <TextField
//             fullWidth
//             label="Message"
//             name="content"
//             multiline
//             required
//             rows={4}
//             value={formData.content}
//             onChange={handleChange}
//             margin="normal"
//           />

//           <Button
//             type="submit"
//             fullWidth
//             variant="contained"
//             disabled={loading}
//             sx={{
//               mt: 2,
//               bgcolor: "#b71c1c",
//               "&:hover": { bgcolor: "#a31414" },
//               textTransform: "none",
//               borderRadius: 2,
//               py: 1.2,
//             }}
//           >
//             {loading ? <CircularProgress size={24} sx={{ color: "#fff" }} /> : "Submit"}
//           </Button>
//         </Box>
//       </Paper>
//     </Box>
//   );
// };

// export default ContactForm;






// import React from "react";
// import { Box, Paper, Typography, TextField, Button } from "@mui/material";

// const ContactForm = () => {
//   return (
//     <Box
//       display="flex"
//       justifyContent="center"
//       alignItems="center"
//       minHeight="100vh"
//       p={2}
//     >
//       <Paper
//         elevation={0}
//         sx={{
//           p: 4,
//           borderRadius: 2,
//           border: "1px solid #ddd",
//           maxWidth: 500,
//           width: "100%",
//           marginTop: 4,
//         }}
//       >
//         <Typography variant="h6" gutterBottom>
//           Send Us a Message
//         </Typography>

//         <Box component="form" noValidate autoComplete="off">
//           <TextField
//             fullWidth
//             label="Full Name"
//             variant="outlined"
//             margin="normal"
//           />
//           <TextField
//             fullWidth
//             label="Email Address"
//             type="email"
//             variant="outlined"
//             margin="normal"
//           />
//           <TextField
//             fullWidth
//             label="Phone Number (Optional)"
//             type="tel"
//             variant="outlined"
//             margin="normal"
//           />
//           <TextField
//             fullWidth
//             label="School/Organization Name (Optional)"
//             variant="outlined"
//             margin="normal"
//           />
//           <TextField
//             fullWidth
//             label="Message"
//             multiline
//             rows={4}
//             variant="outlined"
//             margin="normal"
//           />

//           <Button
//             type="submit"
//             fullWidth
//             variant="contained"
//             sx={{
//               mt: 2,
//               bgcolor: "#b71c1c",
//               "&:hover": { bgcolor: "#a31414" },
//               textTransform: "none",
//               borderRadius: 2,
//               py: 1.2,
//             }}
//           >
//             Submit
//           </Button>
//         </Box>
//       </Paper>
//     </Box>
//   );
// };

// export default ContactForm;
