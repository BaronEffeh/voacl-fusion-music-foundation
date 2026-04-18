import React, { useState } from "react";
import { Box, Typography, TextField, Button, Paper } from "@mui/material";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/logo.png";

export default function AdminLogin() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({ ...prev, [name]: value }));

    setError("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const mockUser = {
      username: "admin",
      password: "1234",
    };

    if (
      formData.username === mockUser.username &&
      formData.password === mockUser.password
    ) {
      localStorage.setItem("adminAuth", "true");
      navigate("/admin/dashboard");
    } else {
      setError("Invalid username or password");
    }
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        backgroundColor: "#FFF7F9",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      {/* Logo + Title */}
      <Box textAlign="center" mb={3}>
        <Box
          component="img"
          src={logo}
          alt="logo"
          sx={{
            width: 60,
            height: 60,
            objectFit: "contain",
            margin: "0 auto",
          }}
        />

        <Typography mt={2} fontWeight={700}>
          Admin Login
        </Typography>
      </Box>

      {/* Form Card */}
      <Paper
        elevation={0}
        sx={{
          width: 400,
          p: 3,
          borderRadius: "10px",
          backgroundColor: "#FFFFFF",
        }}
      >
        <Box component="form" onSubmit={handleSubmit}>
          {error && (
            <Typography
              sx={{
                color: "#C62828",
                backgroundColor: "#fdecea",
                padding: "8px 10px",
                borderRadius: "6px",
                mb: 2,
                fontSize: 13,
              }}
            >
              {error}
            </Typography>
          )}

          <Typography fontSize={14} fontWeight={400} letterSpacing={0.5} mb={0.5}>
            Username/ID
          </Typography>
          <TextField
            name="username"
            value={formData.username}
            onChange={handleChange}
            placeholder="Enter username"
            fullWidth
            size="small"
            sx={{ mb: 2 }}
          />

          <Typography fontSize={14} fontWeight={400} letterSpacing={0.5} mb={0.5}>
            Password
          </Typography>
          <TextField
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Enter Password"
            fullWidth
            size="small"
            sx={{ mb: 2 }}
          />

          <Button
            type="submit"
            fullWidth
            sx={{
              backgroundColor: "#B71C1C",
              color: "#fff",
              borderRadius: "20px",
              textTransform: "none",
              py: 1,
              "&:hover": { backgroundColor: "#9A1212" },
            }}
          >
            Login
          </Button>
        </Box>
      </Paper>
    </Box>
  );
}






// import React, { useState } from "react";
// import { Box, Typography, TextField, Button, Paper } from "@mui/material";
// import { useNavigate } from "react-router-dom";
// import logo from "../../assets/logo.png";

// export default function AdminLogin() {
//   const navigate = useNavigate();

//   const [formData, setFormData] = useState({
//     username: "",
//     password: "",
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     // Mock credentials
//     const mockUser = {
//       username: "admin",
//       password: "12345",
//     };

//     if (
//       formData.username === mockUser.username &&
//       formData.password === mockUser.password
//     ) {
//       // Save auth state (simple)
//       localStorage.setItem("adminAuth", "true");

//       navigate("/admin/dashboard");
//     } else {
//       alert("Invalid credentials");
//     }
//   };

//   return (
//     <Box
//       sx={{
//         minHeight: "100vh",
//         backgroundColor: "#FFF7F9",
//         display: "flex",
//         alignItems: "center",
//         justifyContent: "center",
//         flexDirection: "column",
//       }}
//     >
//       {/* Logo + Title */}
//       <Box textAlign="center" mb={3}>
//         <Box
//           component="img"
//           src={logo}
//           alt="logo"
//           sx={{
//             width: 60,
//             height: 60,
//             objectFit: "contain",
//             margin: "0 auto",
//           }}
//         />

//         <Typography mt={2} fontWeight={700}>
//           Admin Login
//         </Typography>
//       </Box>

//       {/* Form Card */}
//       <Paper
//         elevation={0}
//         sx={{
//           width: 400,
//           p: 3,
//           borderRadius: "10px",
//           backgroundColor: "#FFFFFF",
//         }}
//       >
//         <Box component="form" onSubmit={handleSubmit}>
//           <Typography fontSize={14} fontWeight={400} letterSpacing={0.5} mb={0.5}>
//             Username/ID
//           </Typography>
//           <TextField
//             name="username"
//             value={formData.username}
//             onChange={handleChange}
//             placeholder="Enter username"
//             fullWidth
//             size="small"
//             sx={{ mb: 2 }}
//           />

//           <Typography fontSize={14} fontWeight={400} letterSpacing={0.5} mb={0.5}>
//             Password
//           </Typography>
//           <TextField
//             type="password"
//             name="password"
//             value={formData.password}
//             onChange={handleChange}
//             placeholder="Enter Password"
//             fullWidth
//             size="small"
//             sx={{ mb: 2 }}
//           />

//           <Button
//             type="submit"
//             fullWidth
//             sx={{
//               backgroundColor: "#B71C1C",
//               color: "#fff",
//               borderRadius: "20px",
//               textTransform: "none",
//               py: 1,
//               "&:hover": { backgroundColor: "#9A1212" },
//             }}
//           >
//             Login
//           </Button>
//         </Box>
//       </Paper>
//     </Box>
//   );
// }
