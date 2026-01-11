import React, { useState } from "react";
import {
  Card,
  CardContent,
  Typography,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  IconButton,
  Box,
  CircularProgress,
} from "@mui/material";
import { Edit, Delete } from "@mui/icons-material";
import ConfirmDeleteModal from "../common/ConfirmDeleteModal";

export default function EventListSection({ events, onEdit, onDelete, loading }) {
  const [openDelete, setOpenDelete] = useState(false);
  const [selectedId, setSelectedId] = useState(null);

  const handleOpenDelete = (id) => {
    setSelectedId(id);
    setOpenDelete(true);
  };

  const handleCloseDelete = () => {
    setSelectedId(null);
    setOpenDelete(false);
  };

  const handleConfirmDelete = () => {
    onDelete(selectedId);
    handleCloseDelete();
  };

  return (
    <>
      <Card sx={{ borderRadius: 3, overflow: "hidden" }}>
        <CardContent>
          <Typography variant="subtitle1" sx={{ mb: 2, fontWeight: 600 }}>
            Event List
          </Typography>

          <Box sx={{ position: "relative" }}>
            <Table>
              <TableHead>
                <TableRow sx={{ backgroundColor: "#fff0f0" }}>
                  <TableCell sx={{ fontWeight: "bold" }}>Event Title</TableCell>
                  <TableCell sx={{ fontWeight: "bold" }}>Event Type</TableCell>
                  <TableCell sx={{ fontWeight: "bold" }}>Date</TableCell>
                  <TableCell sx={{ fontWeight: "bold" }}>Time</TableCell>
                  <TableCell sx={{ fontWeight: "bold" }}>Location</TableCell>
                  <TableCell sx={{ fontWeight: "bold" }}>Actions</TableCell>
                </TableRow>
              </TableHead>

              <TableBody>
                {loading ? (
                  <TableRow>
                    <TableCell colSpan={6} align="center" sx={{ py: 4 }}>
                      <CircularProgress color="error" size={28} />
                      <Typography variant="body2" sx={{ mt: 1, color: "#777" }}>
                        Loading events...
                      </Typography>
                    </TableCell>
                  </TableRow>
                ) : events.length === 0 ? (
                  <TableRow>
                    <TableCell colSpan={6} align="center">
                      No events found.
                    </TableCell>
                  </TableRow>
                ) : (
                  events.map((event, index) => (
                    <TableRow key={index}>
                      <TableCell>{event.title}</TableCell>
                      <TableCell>{event.type}</TableCell>
                      <TableCell>
                        {new Date(event.date).toLocaleDateString()}
                      </TableCell>
                      <TableCell>
                        {new Date(event.date).toLocaleTimeString([], {
                          hour: "2-digit",
                          minute: "2-digit",
                        })}
                      </TableCell>
                      <TableCell>{event.location}</TableCell>
                      <TableCell>
                        <IconButton
                          size="small"
                          sx={{ color: "#350830" }}
                          onClick={() => onEdit(event)}
                        >
                          <Edit fontSize="small" />
                        </IconButton>
                        <IconButton
                          size="small"
                          sx={{ color: "#350830" }}
                          onClick={() => handleOpenDelete(event.id)}
                        >
                          <Delete fontSize="small" />
                        </IconButton>
                      </TableCell>
                    </TableRow>
                  ))
                )}
              </TableBody>
            </Table>
          </Box>

          <Typography
            variant="caption"
            sx={{ display: "block", mt: 2, color: "#999" }}
          >
            Showing 1 to {events.length} of {events.length} entries
          </Typography>
        </CardContent>
      </Card>

      {/* Confirm Delete Modal */}
      <ConfirmDeleteModal
        open={openDelete}
        onClose={handleCloseDelete}
        onConfirm={handleConfirmDelete}
      />
    </>
  );
}








// import React from "react";
// import {
//   Card,
//   CardContent,
//   Typography,
//   Table,
//   TableHead,
//   TableRow,
//   TableCell,
//   TableBody,
//   IconButton,
//   Box,
//   CircularProgress,
// } from "@mui/material";
// import { Edit, Delete } from "@mui/icons-material";

// export default function EventListSection({ events, onEdit, onDelete, loading }) {
//   return (
//     <Card sx={{ borderRadius: 3, overflow: "hidden" }}>
//       <CardContent>
//         <Typography variant="subtitle1" sx={{ mb: 2, fontWeight: 600 }}>
//           Event List
//         </Typography>

//         <Box sx={{ position: "relative" }}>
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
//               {loading ? (
//                 <TableRow>
//                   <TableCell colSpan={6} align="center" sx={{ py: 4 }}>
//                     <CircularProgress color="error" size={28} />
//                     <Typography variant="body2" sx={{ mt: 1, color: "#777" }}>
//                       Loading events...
//                     </Typography>
//                   </TableCell>
//                 </TableRow>
//               ) : events.length === 0 ? (
//                 <TableRow>
//                   <TableCell colSpan={6} align="center">
//                     No events found.
//                   </TableCell>
//                 </TableRow>
//               ) : (
//                 events.map((event, index) => (
//                   <TableRow key={index}>
//                     <TableCell>{event.title}</TableCell>
//                     <TableCell>{event.type}</TableCell>
//                     <TableCell>
//                       {new Date(event.date).toLocaleDateString()}
//                     </TableCell>
//                     <TableCell>
//                       {new Date(event.date).toLocaleTimeString([], {
//                         hour: "2-digit",
//                         minute: "2-digit",
//                       })}
//                     </TableCell>
//                     <TableCell>{event.location}</TableCell>
//                     <TableCell>
//                       <IconButton
//                         size="small"
//                         sx={{ color: "#350830" }}
//                         onClick={() => onEdit(event)}
//                       >
//                         <Edit fontSize="small" />
//                       </IconButton>
//                       <IconButton
//                         size="small"
//                         sx={{ color: "#350830" }}
//                         onClick={() => onDelete(event.id)}
//                       >
//                         <Delete fontSize="small" />
//                       </IconButton>
//                     </TableCell>
//                   </TableRow>
//                 ))
//               )}
//             </TableBody>
//           </Table>
//         </Box>

//         <Typography
//           variant="caption"
//           sx={{ display: "block", mt: 2, color: "#999" }}
//         >
//           {/* Showing {events.length} event{events.length !== 1 ? "s" : ""} */}
//           Showing 1 to {events.length} of {events.length} entries
//         </Typography>
//       </CardContent>
//     </Card>
//   );
// }






// import React from "react";
// import {
//   Card,
//   CardContent,
//   Typography,
//   Table,
//   TableHead,
//   TableRow,
//   TableCell,
//   TableBody,
//   IconButton,
// } from "@mui/material";
// import { Edit, Delete } from "@mui/icons-material";

// export default function EventListSection({ events, onEdit, onDelete }) {
//   return (
//     <Card sx={{ borderRadius: 3, overflow: "hidden" }}>
//       <CardContent>
//         <Typography variant="subtitle1" sx={{ mb: 2, fontWeight: 600 }}>
//           Event List
//         </Typography>

//         <Table>
//           <TableHead>
//             <TableRow sx={{ backgroundColor: "#fff0f0" }}>
//               <TableCell sx={{ fontWeight: "bold" }}>Event Title</TableCell>
//               <TableCell sx={{ fontWeight: "bold" }}>Event Type</TableCell>
//               <TableCell sx={{ fontWeight: "bold" }}>Date</TableCell>
//               <TableCell sx={{ fontWeight: "bold" }}>Time</TableCell>
//               <TableCell sx={{ fontWeight: "bold" }}>Location</TableCell>
//               <TableCell sx={{ fontWeight: "bold" }}>Actions</TableCell>
//             </TableRow>
//           </TableHead>
//           <TableBody>
//             {events.map((event, index) => (
//               <TableRow key={index}>
//                 <TableCell>{event.title}</TableCell>
//                 <TableCell>{event.type}</TableCell>
//                 <TableCell>
//                   {new Date(event.date).toLocaleDateString()}
//                 </TableCell>
//                 <TableCell>
//                   {new Date(event.date).toLocaleTimeString([], {
//                     hour: "2-digit",
//                     minute: "2-digit",
//                   })}
//                 </TableCell>
//                 <TableCell>{event.location}</TableCell>
//                 <TableCell>
//                   <IconButton
//                     size="small"
//                     sx={{ color: "#350830" }}
//                     onClick={() => onEdit(event)}
//                   >
//                     <Edit fontSize="small" />
//                   </IconButton>
//                   <IconButton
//                     size="small"
//                     sx={{ color: "#350830" }}
//                     onClick={() => onDelete(event.id)}
//                   >
//                     <Delete fontSize="small" />
//                   </IconButton>
//                 </TableCell>
//               </TableRow>
//             ))}
//           </TableBody>
//         </Table>

//         <Typography
//           variant="caption"
//           sx={{ display: "block", mt: 2, color: "#999" }}
//         >
//           Showing 1 to {events.length} of {events.length} entries
//         </Typography>
//       </CardContent>
//     </Card>
//   );
// }





// import React from "react";
// import {
//   Card,
//   CardContent,
//   Typography,
//   Table,
//   TableHead,
//   TableRow,
//   TableCell,
//   TableBody,
//   IconButton,
// } from "@mui/material";
// import { Edit, Delete } from "@mui/icons-material";

// export default function EventListSection({ events }) {
//   return (
//     <Card sx={{ borderRadius: 3, overflow: "hidden" }}>
//       <CardContent>
//         <Typography variant="subtitle1" sx={{ mb: 2, fontWeight: 600 }}>
//           Event List
//         </Typography>

//         <Table>
//           <TableHead>
//             <TableRow sx={{ backgroundColor: "#fff0f0" }}>
//               <TableCell sx={{ fontWeight: "bold" }}>Event Title</TableCell>
//               <TableCell sx={{ fontWeight: "bold" }}>Event Type</TableCell>
//               <TableCell sx={{ fontWeight: "bold" }}>Date</TableCell>
//               <TableCell sx={{ fontWeight: "bold" }}>Time</TableCell>
//               <TableCell sx={{ fontWeight: "bold" }}>Location</TableCell>
//               <TableCell sx={{ fontWeight: "bold" }}>Actions</TableCell>
//             </TableRow>
//           </TableHead>
//           <TableBody>
//             {events.map((event, index) => (
//               <TableRow key={index}>
//                 <TableCell>{event.title}</TableCell>
//                 <TableCell>{event.type}</TableCell>
//                 <TableCell>{event.date}</TableCell>
//                 <TableCell>{event.time}</TableCell>
//                 <TableCell>{event.location}</TableCell>
//                 <TableCell>
//                   <IconButton size="small" sx={{ color: "#350830" }}>
//                     <Edit fontSize="small" />
//                   </IconButton>
//                   <IconButton size="small" sx={{ color: "#350830" }}>
//                     <Delete fontSize="small" />
//                   </IconButton>
//                 </TableCell>
//               </TableRow>
//             ))}
//           </TableBody>
//         </Table>

//         <Typography
//           variant="caption"
//           sx={{ display: "block", mt: 2, color: "#999" }}
//         >
//           Showing 1 to {events.length} of {events.length} entries
//         </Typography>
//       </CardContent>
//     </Card>
//   );
// }
