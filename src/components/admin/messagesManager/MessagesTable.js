import React, { useState } from "react";
import {
  Typography,
  Stack,
  Button,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Dialog,
  DialogContent,
  TextField,
  Card,
  CardContent,
  CircularProgress,
} from "@mui/material";
import { Edit, Delete, Visibility, Close } from "@mui/icons-material";

export default function MessagesTable({ messages, loading, onMarkAsRead }) {
  const [filter, setFilter] = useState("All");
  const [open, setOpen] = useState(false);
  const [selectedMsg, setSelectedMsg] = useState(null);

  const filteredMessages =
    filter === "All"
      ? messages
      : messages.filter((msg) => msg.status === filter);

  const handleView = (msg) => {
    setSelectedMsg(msg);
    setOpen(true);

    // Mark as Read when opened
    if (msg.status !== "Read") {
      onMarkAsRead(msg.id);
    }
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedMsg(null);
  };

  return (
    <>
      <Card sx={{ borderRadius: 3, overflow: "hidden" }}>
        <CardContent>
          <Typography variant="h6" fontWeight="bold" gutterBottom>
            Message Center
          </Typography>

          {/* Filters */}
          <Stack direction="row" spacing={1} sx={{ mb: 2 }}>
            {["All", "Unread", "Read", "Replied"].map((type) => (
              <Button
                key={type}
                size="small"
                variant={filter === type ? "contained" : "outlined"}
                color="error"
                onClick={() => setFilter(type)}
                sx={{
                  borderRadius: 5,
                  textTransform: "none",
                  fontSize: 13,
                  px: 2,
                }}
              >
                {type}
              </Button>
            ))}
          </Stack>

          <Table>
            <TableHead sx={{ backgroundColor: "#fde0e0" }}>
              <TableRow>
                <TableCell>Sender Name</TableCell>
                <TableCell>Email Address</TableCell>
                <TableCell>Subject</TableCell>
                <TableCell>Date</TableCell>
                <TableCell>Status</TableCell>
                <TableCell>Actions</TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {loading ? (
                <TableRow>
                  <TableCell colSpan={6} align="center" sx={{ py: 4 }}>
                    <CircularProgress color="error" size={28} />
                    <Typography variant="body2" sx={{ mt: 1, color: "#777" }}>
                      Loading messages...
                    </Typography>
                  </TableCell>
                </TableRow>
              ) : filteredMessages.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={6} align="center" sx={{ py: 4 }}>
                    <Typography>No messages found.</Typography>
                  </TableCell>
                </TableRow>
              ) : (
                filteredMessages.map((msg) => (
                  <TableRow
                    key={msg.id}
                    sx={{
                      backgroundColor:
                        msg.status === "Unread" ? "#fff3f3" : "inherit",
                    }}
                  >
                    <TableCell>{msg.sender_name}</TableCell>
                    <TableCell>{msg.email}</TableCell>
                    <TableCell>{msg.subject}</TableCell>
                    <TableCell>
                      {new Date(msg.created_at).toLocaleDateString()}
                    </TableCell>
                    <TableCell>{msg.status}</TableCell>
                    <TableCell>
                      <Visibility
                        fontSize="small"
                        sx={{ color: "#350830", mr: 1, cursor: "pointer" }}
                        onClick={() => handleView(msg)}
                      />
                      <Edit
                        fontSize="small"
                        sx={{ color: "#350830", mr: 1 }}
                      />
                      <Delete fontSize="small" sx={{ color: "#350830" }} />
                    </TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {/* Message Detail Modal */}
      <Dialog open={open} onClose={handleClose} maxWidth="xs" fullWidth>
        <DialogContent sx={{ p: 3, bgcolor: "#fffaf9" }}>
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            mb={1}
          >
            <Typography variant="h6" fontWeight="bold">
              Message Details
            </Typography>
            <Close onClick={handleClose} sx={{ cursor: "pointer" }} />
          </Stack>

          {selectedMsg && (
            <Stack spacing={2}>
              <TextField
                label="Full Name"
                value={selectedMsg.sender_name}
                fullWidth
                InputProps={{ readOnly: true }}
              />
              <TextField
                label="Email"
                value={selectedMsg.email}
                fullWidth
                InputProps={{ readOnly: true }}
              />
              <TextField
                label="Phone"
                value={selectedMsg.phone || "—"}
                fullWidth
                InputProps={{ readOnly: true }}
              />
              <TextField
                label="Message"
                value={selectedMsg.content}
                fullWidth
                multiline
                minRows={3}
                InputProps={{ readOnly: true }}
              />
            </Stack>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}






// import React, { useState } from "react";
// import {
//   Typography,
//   Stack,
//   Button,
//   Table,
//   TableBody,
//   TableCell,
//   TableHead,
//   TableRow,
//   Dialog,
//   DialogContent,
//   TextField,
//   Card,
//   CardContent,
//   CircularProgress,
// } from "@mui/material";
// import { Edit, Delete, Visibility, Close } from "@mui/icons-material";

// export default function MessagesTable({ messages, loading, onMarkAsRead }) {
//   const [filter, setFilter] = useState("All");
//   const [open, setOpen] = useState(false);
//   const [selectedMsg, setSelectedMsg] = useState(null);

//   const filteredMessages =
//     filter === "All"
//       ? messages
//       : messages.filter((msg) => msg.status === filter);

//   const handleView = (msg) => {
//     setSelectedMsg(msg);
//     setOpen(true);

//     // Mark as Read when opened
//     if (msg.status !== "Read") {
//       onMarkAsRead(msg.id);
//     }
//   };

//   const handleClose = () => {
//     setOpen(false);
//     setSelectedMsg(null);
//   };

//   return (
//     <>
//       <Card sx={{ borderRadius: 3, overflow: "hidden" }}>
//         <CardContent>
//           <Typography variant="h6" fontWeight="bold" gutterBottom>
//             Message Center
//           </Typography>

//           {/* Filters */}
//           <Stack direction="row" spacing={1} sx={{ mb: 2 }}>
//             {["All", "Unread", "Read", "Replied"].map((type) => (
//               <Button
//                 key={type}
//                 size="small"
//                 variant={filter === type ? "contained" : "outlined"}
//                 color="error"
//                 onClick={() => setFilter(type)}
//                 sx={{
//                   borderRadius: 5,
//                   textTransform: "none",
//                   fontSize: 13,
//                   px: 2,
//                 }}
//               >
//                 {type}
//               </Button>
//             ))}
//           </Stack>

//           <Table>
//             <TableHead sx={{ backgroundColor: "#fde0e0" }}>
//               <TableRow>
//                 <TableCell>Sender Name</TableCell>
//                 <TableCell>Email Address</TableCell>
//                 <TableCell>Subject</TableCell>
//                 <TableCell>Date</TableCell>
//                 <TableCell>Status</TableCell>
//                 <TableCell>Actions</TableCell>
//               </TableRow>
//             </TableHead>

//             <TableBody>
//               {loading ? (
//                 <TableRow>
//                   <TableCell colSpan={6} align="center" sx={{ py: 4 }}>
//                     <CircularProgress color="error" size={28} />
//                     <Typography variant="body2" sx={{ mt: 1, color: "#777" }}>
//                       Loading messages...
//                     </Typography>
//                   </TableCell>
//                 </TableRow>
//               ) : filteredMessages.length === 0 ? (
//                 <TableRow>
//                   <TableCell colSpan={6} align="center" sx={{ py: 4 }}>
//                     <Typography>No messages found.</Typography>
//                   </TableCell>
//                 </TableRow>
//               ) : (
//                 filteredMessages.map((msg) => (
//                   <TableRow
//                     key={msg.id}
//                     sx={{
//                       backgroundColor:
//                         msg.status === "Unread" ? "#fff3f3" : "inherit",
//                     }}
//                   >
//                     <TableCell>{msg.sender_name}</TableCell>
//                     <TableCell>{msg.email}</TableCell>
//                     <TableCell>{msg.subject}</TableCell>
//                     <TableCell>
//                       {new Date(msg.created_at).toLocaleDateString()}
//                     </TableCell>
//                     <TableCell>{msg.status}</TableCell>
//                     <TableCell>
//                       <Visibility
//                         fontSize="small"
//                         sx={{ color: "#350830", mr: 1, cursor: "pointer" }}
//                         onClick={() => handleView(msg)}
//                       />
//                       <Edit
//                         fontSize="small"
//                         sx={{ color: "#350830", mr: 1 }}
//                       />
//                       <Delete fontSize="small" sx={{ color: "#350830" }} />
//                     </TableCell>
//                   </TableRow>
//                 ))
//               )}
//             </TableBody>
//           </Table>
//         </CardContent>
//       </Card>

//       {/* Message Detail Modal */}
//       <Dialog open={open} onClose={handleClose} maxWidth="xs" fullWidth>
//         <DialogContent sx={{ p: 3, bgcolor: "#fffaf9" }}>
//           <Stack
//             direction="row"
//             justifyContent="space-between"
//             alignItems="center"
//             mb={1}
//           >
//             <Typography variant="h6" fontWeight="bold">
//               Message Details
//             </Typography>
//             <Close onClick={handleClose} sx={{ cursor: "pointer" }} />
//           </Stack>

//           {selectedMsg && (
//             <Stack spacing={2}>
//               <TextField
//                 label="Full Name"
//                 value={selectedMsg.sender_name}
//                 fullWidth
//                 InputProps={{ readOnly: true }}
//               />
//               <TextField
//                 label="Email"
//                 value={selectedMsg.email}
//                 fullWidth
//                 InputProps={{ readOnly: true }}
//               />
//               <TextField
//                 label="Phone"
//                 value={selectedMsg.phone || "—"}
//                 fullWidth
//                 InputProps={{ readOnly: true }}
//               />
//               <TextField
//                 label="Message"
//                 value={selectedMsg.content}
//                 fullWidth
//                 multiline
//                 minRows={3}
//                 InputProps={{ readOnly: true }}
//               />
//             </Stack>
//           )}
//         </DialogContent>
//       </Dialog>
//     </>
//   );
// }







// import React, { useState } from "react";
// import {
//   Typography,
//   Stack,
//   Button,
//   Table,
//   TableBody,
//   TableCell,
//   TableHead,
//   TableRow,
//   Dialog,
//   DialogContent,
//   TextField,
//   Card,
//   CardContent,
//   CircularProgress,
// } from "@mui/material";
// import { Edit, Delete, Visibility, Close } from "@mui/icons-material";

// export default function MessagesTable({ messages, loading }) {
//   const [filter, setFilter] = useState("All");
//   const [open, setOpen] = useState(false);
//   const [selectedMsg, setSelectedMsg] = useState(null);

//   const filteredMessages =
//     filter === "All"
//       ? messages
//       : messages.filter((msg) => msg.status === filter);

//   const handleView = (msg) => {
//     setSelectedMsg(msg);
//     setOpen(true);
//   };

//   const handleClose = () => {
//     setOpen(false);
//     setSelectedMsg(null);
//   };

//   return (
//     <>
//       <Card sx={{ borderRadius: 3, overflow: "hidden" }}>
//         <CardContent>
//           <Typography variant="h6" fontWeight="bold" gutterBottom>
//             Message Center
//           </Typography>

//           {/* Filters */}
//           <Stack direction="row" spacing={1} sx={{ mb: 2 }}>
//             {["All", "Unread", "Read", "Replied"].map((type) => (
//               <Button
//                 key={type}
//                 size="small"
//                 variant={filter === type ? "contained" : "outlined"}
//                 color="error"
//                 onClick={() => setFilter(type)}
//                 sx={{ borderRadius: 5, textTransform: "none", fontSize: 13, px: 2 }}
//               >
//                 {type}
//               </Button>
//             ))}
//           </Stack>

//           <Table>
//             <TableHead sx={{ backgroundColor: "#fde0e0" }}>
//                 <TableRow>
//                 <TableCell>Sender Name</TableCell>
//                 <TableCell>Email Address</TableCell>
//                 <TableCell>Subject</TableCell>
//                 <TableCell>Date</TableCell>
//                 <TableCell>Status</TableCell>
//                 <TableCell>Actions</TableCell>
//                 </TableRow>
//             </TableHead>

//             <TableBody>
//                 {loading ? (
//                 <TableRow>
//                     <TableCell colSpan={6} align="center" sx={{ py: 4 }}>
//                     <CircularProgress color="error" size={28} />
//                     <Typography
//                         variant="body2"
//                         sx={{ mt: 1, color: "#777" }}
//                     >
//                         Loading messages...
//                     </Typography>
//                     </TableCell>
//                 </TableRow>
//                 ) : filteredMessages.length === 0 ? (
//                 <TableRow>
//                     <TableCell colSpan={6} align="center" sx={{ py: 4 }}>
//                     <Typography>No messages found.</Typography>
//                     </TableCell>
//                 </TableRow>
//                 ) : (
//                 filteredMessages.map((msg) => (
//                     <TableRow key={msg.id}>
//                     <TableCell>{msg.sender_name}</TableCell>
//                     <TableCell>{msg.email}</TableCell>
//                     <TableCell>{msg.subject}</TableCell>
//                     <TableCell>
//                         {new Date(msg.created_at).toLocaleDateString()}
//                     </TableCell>
//                     <TableCell>{msg.status}</TableCell>
//                     <TableCell>
//                         <Visibility
//                         fontSize="small"
//                         sx={{ color: "#350830", mr: 1, cursor: "pointer" }}
//                         onClick={() => handleView(msg)}
//                         />
//                         <Edit fontSize="small" sx={{ color: "#350830", mr: 1 }} />
//                         <Delete fontSize="small" sx={{ color: "#350830" }} />
//                     </TableCell>
//                     </TableRow>
//                 ))
//                 )}
//             </TableBody>
//             </Table>
//         </CardContent>
//       </Card>

//       {/* Message Detail Modal */}
//       <Dialog open={open} onClose={handleClose} maxWidth="xs" fullWidth>
//         <DialogContent sx={{ p: 3, bgcolor: "#fffaf9" }}>
//           <Stack
//             direction="row"
//             justifyContent="space-between"
//             alignItems="center"
//             mb={1}
//           >
//             <Typography variant="h6" fontWeight="bold">
//               Message Details
//             </Typography>
//             <Close onClick={handleClose} sx={{ cursor: "pointer" }} />
//           </Stack>

//           {selectedMsg && (
//             <Stack spacing={2}>
//               <TextField label="Full Name" value={selectedMsg.sender_name} fullWidth InputProps={{ readOnly: true }} />
//               <TextField label="Email" value={selectedMsg.email} fullWidth InputProps={{ readOnly: true }} />
//               <TextField label="Phone" value={selectedMsg.phone || "—"} fullWidth InputProps={{ readOnly: true }} />
//               <TextField
//                 label="Message"
//                 value={selectedMsg.content}
//                 fullWidth
//                 multiline
//                 minRows={3}
//                 InputProps={{ readOnly: true }}
//               />
//             </Stack>
//           )}
//         </DialogContent>
//       </Dialog>
//     </>
//   );
// }
