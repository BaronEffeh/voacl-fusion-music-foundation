import React, { useState } from "react";
import {
  Box,
  Card,
  CardContent,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  IconButton,
  Pagination,
  Dialog,
  DialogContent,
  DialogActions,
  Button,
  TextField,
  DialogTitle,
  CircularProgress,
} from "@mui/material";
import { Delete, Visibility } from "@mui/icons-material";

export default function SchoolTableSection({
  schools,
  page,
  totalPages,
  setPage,
  onDelete,
  onTogglePayment,
  loading,
}) {
  const [selectedSchool, setSelectedSchool] = useState(null);
  const [paymentModal, setPaymentModal] = useState({ open: false, school: null });
  const [deleteModal, setDeleteModal] = useState({ open: false, school: null });
  const [newPaymentStatus, setNewPaymentStatus] = useState("");

  return (
    <>
      <Card sx={{ overflow: "hidden" }}>
        <CardContent>
          <Typography variant="subtitle1" fontWeight="bold" sx={{ mb: 1 }}>
            Choral Challenge List
          </Typography>

          <Table>
            <TableHead sx={{ backgroundColor: "#fde0e0" }}>
              <TableRow>
                <TableCell>School Name</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>State</TableCell>
                <TableCell>Co-ordinator</TableCell>
                <TableCell>Payment</TableCell>
                <TableCell>Actions</TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {loading ? (
                <TableRow>
                  <TableCell colSpan={6} align="center" sx={{ py: 4 }}>
                    <CircularProgress color="error" size={28} />
                    <Typography variant="body2" sx={{ mt: 1, color: "#777" }}>
                      Loading schools...
                    </Typography>
                  </TableCell>
                </TableRow>
              ) : schools.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={6} align="center" sx={{ py: 4 }}>
                    <Typography>No registered schools found</Typography>
                  </TableCell>
                </TableRow>
              ) : (
                schools.map((school) => (
                  <TableRow key={school.id}>
                    <TableCell>{school.name}</TableCell>
                    <TableCell>{school.email}</TableCell>
                    <TableCell>{school.state}</TableCell>
                    <TableCell>{school.coordinator || "---"}</TableCell>

                    <TableCell>
                      <Typography
                        sx={{
                          color:
                            school.paymentStatus === "Verified"
                              ? "green"
                              : "error.main",
                          fontWeight: "bold",
                          cursor: "pointer",
                        }}
                        onClick={() => {
                          setNewPaymentStatus(school.paymentStatus || "");
                          setPaymentModal({ open: true, school });
                        }}
                      >
                        {school.paymentStatus}
                      </Typography>
                    </TableCell>

                    <TableCell>
                      <IconButton
                        size="small"
                        sx={{ color: "#350830" }}
                        onClick={() => setSelectedSchool(school.fullData)}
                      >
                        <Visibility fontSize="small" />
                      </IconButton>

                      <IconButton
                        size="small"
                        sx={{ color: "#350830" }}
                        onClick={() =>
                          setDeleteModal({ open: true, school })
                        }
                      >
                        <Delete fontSize="small" />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {/* Pagination */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mt: 2,
        }}
      >
        <Typography variant="body2">
          Page {page} of {totalPages}
        </Typography>
        <Pagination
          page={page}
          count={totalPages}
          onChange={(e, value) => setPage(value)}
          color="error"
          size="small"
        />
      </Box>

      {/* PAYMENT STATUS MODAL */}
       <Dialog
        open={paymentModal.open}
        onClose={() => setPaymentModal({ open: false, school: null })}
        maxWidth="xs"
        fullWidth
      >
        <DialogContent sx={{ p: 4 }}>
          <Typography fontWeight={600} sx={{ mb: 2 }}>
            Payment Status
          </Typography>

          <TextField
            select
            SelectProps={{ native: true }}
            fullWidth
            value={newPaymentStatus}
            onChange={(e) => setNewPaymentStatus(e.target.value)}
            sx={{
              mb: 3,
              backgroundColor: "#fff",
              borderRadius: "10px",
            }}
          >
            <option value="">Select</option>
            <option value="Unverified">Unverified</option>
            <option value="Verified">Verified</option>
          </TextField>

          <Button
            fullWidth
            variant="contained"
            sx={{
              backgroundColor: "#B71C1C",
              borderRadius: "12px",
              textTransform: "none",
              py: 1.4,
              "&:hover": { backgroundColor: "#9A1212" },
            }}
            onClick={() => {
              onTogglePayment({
                id: paymentModal.school.id,
                payment_status: newPaymentStatus,
              });

              setPaymentModal({ open: false, school: null });
              setNewPaymentStatus("");
            }}
          >
            Save
          </Button>
        </DialogContent>
      </Dialog>

      {/* DELETE MODAL */}
      <Dialog
        open={deleteModal.open}
        onClose={() => setDeleteModal({ open: false, school: null })}
        maxWidth="xs"
        fullWidth
      >
        <DialogContent sx={{ textAlign: "center", p: 4 }}>
          <Typography fontWeight={600} sx={{ mb: 3 }}>
            Delete?
          </Typography>
          <Typography>
            Are you sure you want to delete this school? This action cannot be undone.
          </Typography>

          <Box display="flex" justifyContent="center" gap={2} mt={2}>
            <Button
              variant="outlined"
              sx={{
                color: "#B71C1C",
                borderColor: "#B71C1C",
                borderRadius: "12px",
                width: 100,
                textTransform: "none",
              }}
              onClick={() => setDeleteModal({ open: false, school: null })}
            >
              No
            </Button>

            <Button
              variant="contained"
              sx={{
                backgroundColor: "#B71C1C",
                borderRadius: "12px",
                width: 100,
                textTransform: "none",
                "&:hover": { backgroundColor: "#9A1212" },
              }}
              onClick={() => {
                onDelete(deleteModal.school.id);
                setDeleteModal({ open: false, school: null });
              }}
            >
              Yes
            </Button>
          </Box>
        </DialogContent>
      </Dialog>

      {/* FULL SCHOOL DETAILS */}
      <Dialog
        open={Boolean(selectedSchool)}
        onClose={() => setSelectedSchool(null)}
        maxWidth="sm"
        fullWidth
      >
        <DialogTitle fontWeight="bold">
          School Registration Details
        </DialogTitle>

        <DialogContent dividers>
          {selectedSchool && (
            <Box sx={{ lineHeight: 1.8 }}>
              <Typography><strong>Name:</strong> {selectedSchool.name}</Typography>
              <Typography><strong>Email:</strong> {selectedSchool.email}</Typography>
              <Typography><strong>Address:</strong> {selectedSchool.address}</Typography>
              <Typography><strong>City:</strong> {selectedSchool.city}</Typography>
              <Typography><strong>State:</strong> {selectedSchool.state}</Typography>
              <Typography><strong>Principal:</strong> {selectedSchool.principal_name}</Typography>
              <Typography><strong>Coordinator:</strong> {selectedSchool.coordination_name}</Typography>
              <Typography><strong>Payment Status:</strong> {selectedSchool.payment_status}</Typography>
              <Typography><strong>Created:</strong> {selectedSchool.created_at}</Typography>
            </Box>
          )}
        </DialogContent>

        <DialogActions>
          <Button
            onClick={() => setSelectedSchool(null)}
            color="error"
            sx={{ textTransform: "none" }}
          >
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}







// import React, { useState } from "react";
// import {
//   Box,
//   Card,
//   CardContent,
//   Typography,
//   Table,
//   TableBody,
//   TableCell,
//   TableHead,
//   TableRow,
//   IconButton,
//   Pagination,
//   Dialog,
//   DialogContent,
//   DialogActions,
//   Button,
//   TextField,
//   DialogTitle,
// } from "@mui/material";
// import { Delete, Visibility } from "@mui/icons-material";

// export default function SchoolTableSection({
//   schools,
//   page,
//   totalPages,
//   setPage,
//   onDelete,
//   onTogglePayment,
// }) {
//   const [selectedSchool, setSelectedSchool] = useState(null);
//   const [paymentModal, setPaymentModal] = useState({ open: false, school: null });
//   const [deleteModal, setDeleteModal] = useState({ open: false, school: null });
//   const [newPaymentStatus, setNewPaymentStatus] = useState("");

//   return (
//     <>
//       <Card sx={{ overflow: "hidden" }}>
//         <CardContent>
//           <Typography variant="subtitle1" fontWeight="bold" sx={{ mb: 1 }}>
//             Choral Challenge List
//           </Typography>

//           <Table>
//             <TableHead sx={{ backgroundColor: "#fde0e0" }}>
//               <TableRow>
//                 <TableCell>School Name</TableCell>
//                 <TableCell>Email</TableCell>
//                 <TableCell>State</TableCell>
//                 <TableCell>Co-ordinator</TableCell>
//                 <TableCell>Payment</TableCell>
//                 <TableCell>Actions</TableCell>
//               </TableRow>
//             </TableHead>

//             <TableBody>
//               {schools.length === 0 ? (
//                 <TableRow>
//                   <TableCell colSpan={6} align="center" sx={{ py: 4 }}>
//                     <Typography>No registered schools found</Typography>
//                   </TableCell>
//                 </TableRow>
//               ) : (
//                 schools.map((school) => (
//                   <TableRow key={school.id}>
//                     <TableCell>{school.name}</TableCell>
//                     <TableCell>{school.email}</TableCell>
//                     <TableCell>{school.state}</TableCell>
//                     <TableCell>{school.coordinator || "---"}</TableCell>

//                     <TableCell>
//                       <Typography
//                         sx={{
//                           color:
//                             school.paymentStatus === "Verified"
//                               ? "green"
//                               : "error.main",
//                           fontWeight: "bold",
//                           cursor: "pointer",
//                         }}
//                         onClick={() => {
//                           setNewPaymentStatus(school.paymentStatus || "");
//                           setPaymentModal({ open: true, school });
//                         }}
//                       >
//                         {school.paymentStatus}
//                       </Typography>
//                     </TableCell>

//                     <TableCell>
//                       <IconButton
//                         size="small"
//                         sx={{ color: "#350830" }}
//                         onClick={() => setSelectedSchool(school.fullData)}
//                       >
//                         <Visibility fontSize="small" />
//                       </IconButton>

//                       <IconButton
//                         size="small"
//                         sx={{ color: "#350830" }}
//                         onClick={() =>
//                           setDeleteModal({ open: true, school })
//                         }
//                       >
//                         <Delete fontSize="small" />
//                       </IconButton>
//                     </TableCell>
//                   </TableRow>
//                 ))
//               )}
//             </TableBody>
//           </Table>
//         </CardContent>
//       </Card>

//       {/* Pagination */}
//       <Box
//         sx={{
//           display: "flex",
//           justifyContent: "space-between",
//           alignItems: "center",
//           mt: 2,
//         }}
//       >
//         <Typography variant="body2">
//           Page {page} of {totalPages}
//         </Typography>
//         <Pagination
//           page={page}
//           count={totalPages}
//           onChange={(e, value) => setPage(value)}
//           color="error"
//           size="small"
//         />
//       </Box>

//       {/* PAYMENT STATUS MODAL */}
//       <Dialog
//         open={paymentModal.open}
//         onClose={() => setPaymentModal({ open: false, school: null })}
//         maxWidth="xs"
//         fullWidth
//       >
//         <DialogContent sx={{ p: 4 }}>
//           <Typography fontWeight={600} sx={{ mb: 2 }}>
//             Payment Status
//           </Typography>

//           <TextField
//             select
//             SelectProps={{ native: true }}
//             fullWidth
//             value={newPaymentStatus}
//             onChange={(e) => setNewPaymentStatus(e.target.value)}
//             sx={{
//               mb: 3,
//               backgroundColor: "#fff",
//               borderRadius: "10px",
//             }}
//           >
//             <option value="">Select</option>
//             <option value="Unverified">Unverified</option>
//             <option value="Verified">Verified</option>
//           </TextField>

//           <Button
//             fullWidth
//             variant="contained"
//             sx={{
//               backgroundColor: "#B71C1C",
//               borderRadius: "12px",
//               textTransform: "none",
//               py: 1.4,
//               "&:hover": { backgroundColor: "#9A1212" },
//             }}
//             onClick={() => {
//               onTogglePayment({
//                 id: paymentModal.school.id,
//                 payment_status: newPaymentStatus,
//               });

//               setPaymentModal({ open: false, school: null });
//               setNewPaymentStatus("");
//             }}
//           >
//             Save
//           </Button>
//         </DialogContent>
//       </Dialog>

//       {/* DELETE MODAL */}
//       <Dialog
//         open={deleteModal.open}
//         onClose={() => setDeleteModal({ open: false, school: null })}
//         maxWidth="xs"
//         fullWidth
//       >
//         <DialogContent sx={{ textAlign: "center", p: 4 }}>
//           <Typography fontWeight={600} sx={{ mb: 3 }}>
//             Delete?
//           </Typography>
//           <Typography>
//             Are you sure you want to delete this school? This action cannot be undone.
//           </Typography>

//           <Box display="flex" justifyContent="center" gap={2} mt={2}>
//             <Button
//               variant="outlined"
//               sx={{
//                 color: "#B71C1C",
//                 borderColor: "#B71C1C",
//                 borderRadius: "12px",
//                 width: 100,
//                 textTransform: "none",
//               }}
//               onClick={() => setDeleteModal({ open: false, school: null })}
//             >
//               No
//             </Button>

//             <Button
//               variant="contained"
//               sx={{
//                 backgroundColor: "#B71C1C",
//                 borderRadius: "12px",
//                 width: 100,
//                 textTransform: "none",
//                 "&:hover": { backgroundColor: "#9A1212" },
//               }}
//               onClick={() => {
//                 onDelete(deleteModal.school.id);
//                 setDeleteModal({ open: false, school: null });
//               }}
//             >
//               Yes
//             </Button>
//           </Box>
//         </DialogContent>
//       </Dialog>

//       {/* FULL SCHOOL DETAILS */}
//       <Dialog
//         open={Boolean(selectedSchool)}
//         onClose={() => setSelectedSchool(null)}
//         maxWidth="sm"
//         fullWidth
//       >
//         <DialogTitle fontWeight="bold">
//           School Registration Details
//         </DialogTitle>

//         <DialogContent dividers>
//           {selectedSchool && (
//             <Box sx={{ lineHeight: 1.8 }}>
//               <Typography><strong>Name:</strong> {selectedSchool.name}</Typography>
//               <Typography><strong>Email:</strong> {selectedSchool.email}</Typography>
//               <Typography><strong>Address:</strong> {selectedSchool.address}</Typography>
//               <Typography><strong>City:</strong> {selectedSchool.city}</Typography>
//               <Typography><strong>State:</strong> {selectedSchool.state}</Typography>
//               <Typography><strong>Principal:</strong> {selectedSchool.principal_name}</Typography>
//               <Typography><strong>Coordinator:</strong> {selectedSchool.coordination_name}</Typography>
//               <Typography><strong>Payment Status:</strong> {selectedSchool.payment_status}</Typography>
//               <Typography><strong>Created:</strong> {selectedSchool.created_at}</Typography>
//             </Box>
//           )}
//         </DialogContent>

//         <DialogActions>
//           <Button
//             onClick={() => setSelectedSchool(null)}
//             color="error"
//             sx={{ textTransform: "none" }}
//           >
//             Close
//           </Button>
//         </DialogActions>
//       </Dialog>
//     </>
//   );
// }







// import React, { useState } from "react";
// import {
//   Box,
//   Card,
//   CardContent,
//   Typography,
//   Table,
//   TableBody,
//   TableCell,
//   TableHead,
//   TableRow,
//   IconButton,
//   Pagination,
//   Dialog,
//   DialogContent,
//   DialogActions,
//   Button,
//   TextField,
//   DialogTitle,
// } from "@mui/material";
// import { Delete, Visibility } from "@mui/icons-material";

// export default function SchoolTableSection({
//   schools,
//   page,
//   totalPages,
//   setPage,
//   onDelete,
//   onTogglePayment,
// }) {
//   const [selectedSchool, setSelectedSchool] = useState(null);
//   const [paymentModal, setPaymentModal] = useState({ open: false, school: null });
//   const [deleteModal, setDeleteModal] = useState({ open: false, school: null });
//   const [newPaymentStatus, setNewPaymentStatus] = useState("");

//   return (
//     <>
//       <Card sx={{ overflow: "hidden" }}>
//         <CardContent>
//           <Typography variant="subtitle1" fontWeight="bold" sx={{ mb: 1 }}>
//             Choral Challenge List
//           </Typography>

//           <Table>
//             <TableHead sx={{ backgroundColor: "#fde0e0" }}>
//               <TableRow>
//                 <TableCell>School Name</TableCell>
//                 <TableCell>Email</TableCell>
//                 <TableCell>State</TableCell>
//                 <TableCell>Co-ordinator</TableCell>
//                 <TableCell>Payment</TableCell>
//                 <TableCell>Actions</TableCell>
//               </TableRow>
//             </TableHead>

//             <TableBody>
//               {schools.length === 0 ? (
//                 <TableRow>
//                   <TableCell colSpan={6} align="center" sx={{ py: 4 }}>
//                     <Typography>No registered schools found</Typography>
//                   </TableCell>
//                 </TableRow>
//               ) : (
//                 schools.map((school) => (
//                   <TableRow key={school.id}>
//                     <TableCell>{school.name}</TableCell>
//                     <TableCell>{school.email}</TableCell>
//                     <TableCell>{school.state}</TableCell>
//                     <TableCell>{school.coordinator || "---"}</TableCell>

//                     <TableCell>
//                       <Typography
//                         sx={{
//                           color:
//                             school.paymentStatus === "Verified"
//                               ? "green"
//                               : "error.main",
//                           fontWeight: "bold",
//                           cursor: "pointer",
//                           // textDecoration: "underline",
//                         }}
//                         onClick={() => {
//                           setNewPaymentStatus(school.paymentStatus || "");
//                           setPaymentModal({ open: true, school });
//                         }}
//                       >
//                         {school.paymentStatus}
//                       </Typography>
//                     </TableCell>

//                     <TableCell>
//                       <IconButton
//                         size="small"
//                         sx={{ color: "#350830" }}
//                         onClick={() => setSelectedSchool(school.fullData)}
//                       >
//                         <Visibility fontSize="small" />
//                       </IconButton>

//                       <IconButton
//                         size="small"
//                         sx={{ color: "#350830" }}
//                         onClick={() =>
//                           setDeleteModal({ open: true, school })
//                         }
//                       >
//                         <Delete fontSize="small" />
//                       </IconButton>
//                     </TableCell>
//                   </TableRow>
//                 ))
//               )}
//             </TableBody>
//           </Table>
//         </CardContent>
//       </Card>

//       {/* Pagination */}
//       <Box
//         sx={{
//           display: "flex",
//           justifyContent: "space-between",
//           alignItems: "center",
//           mt: 2,
//         }}
//       >
//         <Typography variant="body2">
//           Page {page} of {totalPages}
//         </Typography>
//         <Pagination
//           page={page}
//           count={totalPages}
//           onChange={(e, value) => setPage(value)}
//           color="error"
//           size="small"
//         />
//       </Box>

//       {/* PAYMENT STATUS MODAL */}
//       <Dialog
//         open={paymentModal.open}
//         onClose={() => setPaymentModal({ open: false, school: null })}
//         maxWidth="xs"
//         fullWidth
//       >
//         <DialogContent sx={{ p: 4 }}>
//           <Typography fontWeight={600} sx={{ mb: 2 }}>
//             Payment Status
//           </Typography>

//           <TextField
//             select
//             SelectProps={{ native: true }}
//             fullWidth
//             value={newPaymentStatus}
//             onChange={(e) => setNewPaymentStatus(e.target.value)}
//             sx={{
//               mb: 3,
//               backgroundColor: "#fff",
//               borderRadius: "10px",
//             }}
//           >
//             <option value="">Select</option>
//             <option value="Unverified">Unverified</option>
//             <option value="Verified">Verified</option>
//           </TextField>

//           <Button
//             fullWidth
//             variant="contained"
//             sx={{
//               backgroundColor: "#B71C1C",
//               borderRadius: "12px",
//               textTransform: "none",
//               py: 1.4,
//               "&:hover": { backgroundColor: "#9A1212" },
//             }}
//             onClick={() => {
//               onTogglePayment({
//                 id: paymentModal.school.id,
//                 payment_status: newPaymentStatus,   // FIXED
//               });

//               // onTogglePayment({
//               //   ...paymentModal.school,
//               //   payment_status: newPaymentStatus,
//               // });

//               setPaymentModal({ open: false, school: null });
//               setNewPaymentStatus("");
//             }}
//           >
//             Save
//           </Button>
//         </DialogContent>
//       </Dialog>

//       {/* DELETE CONFIRMATION MODAL */}
//       <Dialog
//         open={deleteModal.open}
//         onClose={() => setDeleteModal({ open: false, school: null })}
//         maxWidth="xs"
//         fullWidth
//       >
//         <DialogContent sx={{ textAlign: "center", p: 4 }}>
//           <Typography fontWeight={600} sx={{ mb: 3 }}>
//             Delete?
//           </Typography>
//           <Typography>
//             Are you sure you want to delete this school? This action cannot be undone.
//           </Typography>

//           <Box display="flex" justifyContent="center" gap={2}>
//             <Button
//               variant="outlined"
//               sx={{
//                 color: "#B71C1C",
//                 borderColor: "#B71C1C",
//                 borderRadius: "12px",
//                 width: 100,
//                 textTransform: "none",
//               }}
//               onClick={() => setDeleteModal({ open: false, school: null })}
//             >
//               No
//             </Button>

//             <Button
//               variant="contained"
//               sx={{
//                 backgroundColor: "#B71C1C",
//                 borderRadius: "12px",
//                 width: 100,
//                 textTransform: "none",
//                 "&:hover": { backgroundColor: "#9A1212" },
//               }}
//               onClick={() => {
//                 onDelete(deleteModal.school.id);
//                 setDeleteModal({ open: false, school: null });
//               }}
//             >
//               Yes
//             </Button>
//           </Box>
//         </DialogContent>
//       </Dialog>

//       {/* FULL SCHOOL DETAILS MODAL */}
//       <Dialog
//         open={Boolean(selectedSchool)}
//         onClose={() => setSelectedSchool(null)}
//         maxWidth="sm"
//         fullWidth
//       >
//         <DialogTitle fontWeight="bold">
//           School Registration Details
//         </DialogTitle>

//         <DialogContent dividers>
//           {selectedSchool && (
//             <Box sx={{ lineHeight: 1.8 }}>
//               <Typography><strong>Name:</strong> {selectedSchool.name}</Typography>
//               <Typography><strong>Email:</strong> {selectedSchool.email}</Typography>
//               <Typography><strong>Address:</strong> {selectedSchool.address}</Typography>
//               <Typography><strong>City:</strong> {selectedSchool.city}</Typography>
//               <Typography><strong>State:</strong> {selectedSchool.state}</Typography>
//               <Typography><strong>Principal:</strong> {selectedSchool.principal_name}</Typography>
//               <Typography><strong>Coordinator:</strong> {selectedSchool.coordination_name}</Typography>
//               <Typography><strong>Payment Status:</strong> {selectedSchool.payment_status}</Typography>
//               <Typography><strong>Created:</strong> {selectedSchool.created_at}</Typography>
//             </Box>
//           )}
//         </DialogContent>

//         <DialogActions>
//           <Button
//             onClick={() => setSelectedSchool(null)}
//             color="error"
//             sx={{ textTransform: "none" }}
//           >
//             Close
//           </Button>
//         </DialogActions>
//       </Dialog>
//     </>
//   );
// }






// import React, { useState } from "react";
// import {
//   Box,
//   Card,
//   CardContent,
//   Typography,
//   Table,
//   TableBody,
//   TableCell,
//   TableHead,
//   TableRow,
//   IconButton,
//   Pagination,
//   Dialog,
//   DialogTitle,
//   DialogContent,
//   DialogActions,
//   Button,
// } from "@mui/material";
// import { Edit, Delete, Visibility, CheckCircle } from "@mui/icons-material";

// export default function SchoolTableSection({
//   schools,
//   page,
//   totalPages,
//   setPage,
//   onDelete,
//   onTogglePayment,
// }) {
//   const [selectedSchool, setSelectedSchool] = useState(null);

//   return (
//     <>
//       <Card sx={{ overflow: "hidden" }}>
//         <CardContent>
//           <Typography variant="subtitle1" fontWeight="bold" sx={{ mb: 1 }}>
//             Choral Challenge List
//           </Typography>

//           <Table>
//             <TableHead sx={{ backgroundColor: "#fde0e0" }}>
//               <TableRow>
//                 <TableCell>School Name</TableCell>
//                 <TableCell>Email</TableCell>
//                 <TableCell>State</TableCell>
//                 <TableCell>Co-ordinator</TableCell>
//                 <TableCell>Payment</TableCell>
//                 <TableCell>Actions</TableCell>
//               </TableRow>
//             </TableHead>

//             <TableBody>
//               {schools.length === 0 ? (
//                 <TableRow>
//                   <TableCell colSpan={6} align="center" sx={{ py: 4 }}>
//                     <Typography>No registered schools found</Typography>
//                   </TableCell>
//                 </TableRow>
//               ) : (
//                 schools.map((school) => (
//                   <TableRow key={school.id}>
//                     <TableCell>{school.name}</TableCell>
//                     <TableCell>{school.email}</TableCell>
//                     <TableCell>{school.state}</TableCell>
//                     <TableCell>{school.coordinator || "---"}</TableCell>

//                     <TableCell>
//                       <Typography
//                         sx={{
//                           color:
//                             school.paymentStatus === "Verified"
//                               ? "green"
//                               : "error.main",
//                           fontWeight: "bold",
//                           cursor: "pointer",
//                         }}
//                         onClick={() => onTogglePayment(school)}
//                       >
//                         {school.paymentStatus}
//                       </Typography>
//                     </TableCell>

//                     <TableCell>
//                       <IconButton
//                         size="small"
//                         sx={{ color: "#350830" }}
//                         onClick={() => setSelectedSchool(school.fullData)}
//                       >
//                         <Visibility fontSize="small" />
//                       </IconButton>

//                       <IconButton
//                         size="small"
//                         sx={{ color: "#350830" }}
//                         onClick={() => onDelete(school.id)}
//                       >
//                         <Delete fontSize="small" />
//                       </IconButton>
//                     </TableCell>
//                   </TableRow>
//                 ))
//               )}
//             </TableBody>
//           </Table>
//         </CardContent>
//       </Card>

//       {/* Pagination */}
//       <Box
//         sx={{
//           display: "flex",
//           justifyContent: "space-between",
//           alignItems: "center",
//           mt: 2,
//         }}
//       >
//         <Typography variant="body2">
//           Page {page} of {totalPages}
//         </Typography>
//         <Pagination
//           page={page}
//           count={totalPages}
//           onChange={(e, value) => setPage(value)}
//           color="error"
//           size="small"
//         />
//       </Box>

//       {/* Full School Details Modal */}
//       <Dialog
//         open={Boolean(selectedSchool)}
//         onClose={() => setSelectedSchool(null)}
//         maxWidth="sm"
//         fullWidth
//       >
//         <DialogTitle fontWeight="bold">
//           School Registration Details
//         </DialogTitle>

//         <DialogContent dividers>
//           {selectedSchool && (
//             <Box sx={{ lineHeight: 1.8 }}>
//               <Typography><strong>Name:</strong> {selectedSchool.name}</Typography>
//               <Typography><strong>Email:</strong> {selectedSchool.email}</Typography>
//               <Typography><strong>Address:</strong> {selectedSchool.address}</Typography>
//               <Typography><strong>City:</strong> {selectedSchool.city}</Typography>
//               <Typography><strong>State:</strong> {selectedSchool.state}</Typography>
//               <Typography><strong>Principal:</strong> {selectedSchool.principal_name}</Typography>
//               <Typography><strong>Coordinator:</strong> {selectedSchool.coordination_name}</Typography>
//               <Typography><strong>Payment Status:</strong> {selectedSchool.payment_status}</Typography>
//               <Typography><strong>Created:</strong> {selectedSchool.created_at}</Typography>
//             </Box>
//           )}
//         </DialogContent>

//         <DialogActions>
//           <Button onClick={() => setSelectedSchool(null)} color="error">
//             Close
//           </Button>
//         </DialogActions>
//       </Dialog>
//     </>
//   );
// }






// import React from "react";
// import {
//   Box,
//   Card,
//   CardContent,
//   Typography,
//   Table,
//   TableBody,
//   TableCell,
//   TableHead,
//   TableRow,
//   IconButton,
//   Pagination,
// } from "@mui/material";
// import { Edit, Delete } from "@mui/icons-material";

// export default function SchoolTableSection({ schools }) {
//   return (
//     <>
//       <Card sx={{ overflow: "hidden" }}>
//         <CardContent>
//           <Typography variant="subtitle1" fontWeight="bold" sx={{ mb: 1 }}>
//             Choral Challenge List
//           </Typography>

//           <Table>
//             <TableHead sx={{ backgroundColor: "#fde0e0" }}>
//               <TableRow>
//                 <TableCell>School Name</TableCell>
//                 <TableCell>Email address</TableCell>
//                 <TableCell>State</TableCell>
//                 <TableCell>Co-ordinator name</TableCell>
//                 <TableCell>Payment Status</TableCell>
//                 <TableCell>Actions</TableCell>
//               </TableRow>
//             </TableHead>
//             <TableBody>
//               {schools.map((school, index) => (
//                 <TableRow key={index}>
//                   <TableCell>{school.name}</TableCell>
//                   <TableCell>{school.email}</TableCell>
//                   <TableCell>{school.state}</TableCell>
//                   <TableCell>{school.coordinator}</TableCell>
//                   <TableCell>
//                     <Typography
//                       sx={{
//                         color: school.paymentStatus === "Verified" ? "green" : "error.main",
//                         fontWeight: "bold",
//                       }}
//                     >
//                       {school.paymentStatus}
//                     </Typography>
//                   </TableCell>
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
//         </CardContent>
//       </Card>

//       {/* Pagination */}
//       <Box
//         sx={{
//           display: "flex",
//           justifyContent: "space-between",
//           alignItems: "center",
//           mt: 2,
//         }}
//       >
//         <Typography variant="body2">
//           Showing 1 to {schools.length} of {schools.length} entries
//         </Typography>
//         <Pagination count={1} color="error" size="small" />
//       </Box>
//     </>
//   );
// }
