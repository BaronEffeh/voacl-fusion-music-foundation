// import React, { useState } from "react";
// import {
//   Box,
//   Button,
//   Card,
//   CardContent,
//   Grid,
//   Typography,
//   Table,
//   TableHead,
//   TableRow,
//   TableCell,
//   TableBody,
//   IconButton,
//   Modal,
//   TextField,
// } from "@mui/material";
// import {
//   Event,
//   Group,
//   NotificationsActive,
//   Edit,
//   Delete,
// } from "@mui/icons-material";

// const eventStats = [
//   {
//     icon: <Event sx={{ color: "#d32f2f" }} />,
//     value: "06",
//     label: "Total Events Organized",
//   },
//   {
//     icon: <Group sx={{ color: "#f57c00" }} />,
//     value: "556",
//     label: "Total Attendance",
//   },
//   {
//     icon: <NotificationsActive sx={{ color: "#c62828" }} />,
//     value: "In 3 days",
//     label: "Winners Concert, Abuja",
//   },
// ];

// const events = [
//   {
//     title: "Voice Training Workshop",
//     type: "Workshop",
//     date: "Sept 12, 2025",
//     time: "2:00pm",
//     location: "Transcorp Hilton, Abuja",
//   },
//   {
//     title: "Choral Challenge",
//     type: "Competition",
//     date: "Sept 12, 2025",
//     time: "2:00pm",
//     location: "Transcorp Hilton, Abuja",
//   },
//   {
//     title: "Winners Concert",
//     type: "Concert",
//     date: "Sept 12, 2025",
//     time: "2:00pm",
//     location: "Transcorp Hilton, Abuja",
//   },
// ];

// export default function EventManager() {
//   const [open, setOpen] = useState(false);
//   const handleOpen = () => setOpen(true);
//   const handleClose = () => setOpen(false);

//   const [formData, setFormData] = useState({
//     title: "",
//     type: "",
//     date: "",
//     time: "",
//     location: "",
//   });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Event Added:", formData);
//     handleClose();
//   };

//   return (
//     <Box sx={{ p: 2 }}>
//       {/* Header */}
//       <Box
//         sx={{
//           display: "flex",
//           justifyContent: "space-between",
//           alignItems: "center",
//           mb: 3,
//         }}
//       >
//         <Typography variant="h6" sx={{ fontWeight: "bold" }}>
//           Event Manager
//         </Typography>
//         <Button
//           variant="outlined"
//           sx={{
//             borderRadius: "16px",
//             textTransform: "none",
//             bgcolor: "#FFFFFF",
//             borderColor: "#d32f2f",
//             color: "#d32f2f",
//             "&:hover": { bgcolor: "#fde0dc" },
//           }}
//           onClick={handleOpen}
//         >
//           Add Event
//         </Button>
//       </Box>

//       {/* Stat Cards */}
//       <Grid container spacing={6} sx={{ mb: 4 }}>
//         {eventStats.map((stat, index) => (
//           <Grid item xs={12} sm={6} md={4} key={index}>
//             <Card
//               sx={{
//                 borderRadius: 3,
//                 boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
//                 bgcolor: "#fff5f5",
//                 border: "1px solid #FFB4AB",
//               }}
//             >
//               <CardContent sx={{ width: "245px", height: "144px" }}>
//                 <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
//                   {stat.icon}
//                   <Typography
//                     variant="h5"
//                     sx={{ ml: 2, fontWeight: "bold", color: "#333" }}
//                   >
//                     {stat.value}
//                   </Typography>
//                 </Box>
//                 <Typography variant="body2" sx={{ color: "#666" }}>
//                   {stat.label}
//                 </Typography>
//               </CardContent>
//             </Card>
//           </Grid>
//         ))}
//       </Grid>

//       {/* Event Table */}
//       <Card sx={{ borderRadius: 3, overflow: "hidden" }}>
//         <CardContent>
//           <Typography variant="subtitle1" sx={{ mb: 2, fontWeight: 600 }}>
//             Event List
//           </Typography>

//           <Table>
//             <TableHead>
//               <TableRow sx={{ backgroundColor: "#fff0f0" }}>
//                 <TableCell sx={{ fontWeight: "bold" }}>Event Title</TableCell>
//                 <TableCell sx={{ fontWeight: "bold" }}>Event Type</TableCell>
//                 <TableCell sx={{ fontWeight: "bold" }}>Date</TableCell>
//                 <TableCell sx={{ fontWeight: "bold" }}>Time</TableCell>
//                 <TableCell sx={{ fontWeight: "bold" }}>Location</TableCell>
//                 <TableCell sx={{ fontWeight: "bold" }}>Actions</TableCell>
//               </TableRow>
//             </TableHead>
//             <TableBody>
//               {events.map((event, index) => (
//                 <TableRow key={index}>
//                   <TableCell>{event.title}</TableCell>
//                   <TableCell>{event.type}</TableCell>
//                   <TableCell>{event.date}</TableCell>
//                   <TableCell>{event.time}</TableCell>
//                   <TableCell>{event.location}</TableCell>
//                   <TableCell>
//                     <IconButton size="small" sx={{ color: "#350830" }}>
//                       <Edit fontSize="small" />
//                     </IconButton>
//                     <IconButton size="small" sx={{ color: "#350830" }}>
//                       <Delete fontSize="small" />
//                     </IconButton>
//                   </TableCell>
//                 </TableRow>
//               ))}
//             </TableBody>
//           </Table>

//           <Typography
//             variant="caption"
//             sx={{ display: "block", mt: 2, color: "#999" }}
//           >
//             Showing 1 to {events.length} of {events.length} entries
//           </Typography>
//         </CardContent>
//       </Card>

//       {/* Add Event Modal */}
//       <Modal open={open} onClose={handleClose}>
//         <Box
//           component="form"
//           onSubmit={handleSubmit}
//           sx={{
//             position: "absolute",
//             top: "50%",
//             left: "50%",
//             transform: "translate(-50%, -50%)",
//             bgcolor: "#fff",
//             p: 4,
//             borderRadius: "12px",
//             boxShadow: 24,
//             width: 380,
//           }}
//         >
//           <Typography variant="subtitle1" sx={{ mb: 2, fontWeight: 600 }}>
//             Add New Event
//           </Typography>

//           <TextField
//             label="Event Title"
//             name="title"
//             fullWidth
//             value={formData.title}
//             onChange={handleChange}
//             sx={{ mb: 2 }}
//           />
//           <TextField
//             label="Event Type"
//             name="type"
//             fullWidth
//             value={formData.type}
//             onChange={handleChange}
//             sx={{ mb: 2 }}
//           />

//           <Grid container spacing={2} sx={{ mb: 2 }}>
//             <Grid item xs={6}>
//               <TextField
//                 label="Date"
//                 name="date"
//                 type="date"
//                 fullWidth
//                 InputLabelProps={{ shrink: true }}
//                 value={formData.date}
//                 onChange={handleChange}
//               />
//             </Grid>
//             <Grid item xs={6}>
//               <TextField
//                 label="Time"
//                 name="time"
//                 type="time"
//                 fullWidth
//                 InputLabelProps={{ shrink: true }}
//                 value={formData.time}
//                 onChange={handleChange}
//               />
//             </Grid>
//           </Grid>

//           <TextField
//             label="Location"
//             name="location"
//             fullWidth
//             value={formData.location}
//             onChange={handleChange}
//             sx={{ mb: 3 }}
//           />

//           <Button
//             type="submit"
//             fullWidth
//             sx={{
//               backgroundColor: "#B71C1C",
//               color: "#fff",
//               borderRadius: "12px",
//               textTransform: "none",
//               py: 1.5,
//               "&:hover": { backgroundColor: "#9A1212" },
//             }}
//           >
//             Add Event
//           </Button>
//         </Box>
//       </Modal>
//     </Box>
//   );
// }