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
import { Delete, Visibility, Edit, Check } from "@mui/icons-material";

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
  const [editModal, setEditModal] = useState({ open: false, school: null, view: "menu", });
  const [eventStep, setEventStep] = useState(1);
  const [selectedEvent, setSelectedEvent] = useState("");
  const [generatedCode, setGeneratedCode] = useState("");
  const [copied, setCopied] = useState(false);
  const [eventCounters, setEventCounters] = useState({
    choral: 1,
    vfmf: 1,
    winners: 1,
  });

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
                    <TableCell>{school.name || "---"}</TableCell>
                    <TableCell>{school.email || "---"}</TableCell>
                    <TableCell>{school.state || "---"}</TableCell>
                    {/* <TableCell>{school.coordinator || "---"}</TableCell> */}
                    <TableCell>{school.choirCoordinator || "---"}</TableCell>

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
                          onClick={() =>
                          setEditModal({ open: true, school, view: "menu" })
                        }
                      >
                        <Edit fontSize="small" />
                      </IconButton>
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
              <Typography><strong>Phone:</strong> {selectedSchool.phoneNumber}</Typography>
              <Typography><strong>Email:</strong> {selectedSchool.email}</Typography>
              <Typography><strong>Address:</strong> {selectedSchool.address}</Typography>
              <Typography><strong>City:</strong> {selectedSchool.city}</Typography>
              <Typography><strong>State:</strong> {selectedSchool.state}</Typography>
              <Typography><strong>Principal:</strong> {selectedSchool.principalName}</Typography>
              {/* <Typography><strong>Coordinator:</strong> {selectedSchool.coordination_name}</Typography> */}
              <Typography><strong>Coordinator:</strong> {selectedSchool.choirCoordinator}</Typography>
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

      {/* EDIT OPTIONS MODAL */}
      <Dialog
        open={editModal.open}
        onClose={() => setEditModal({ open: false, school: null, view: "menu" })}
        maxWidth="xs"
        fullWidth
      >
        <DialogContent sx={{ p: 3 }}>
          
          {/* ================= MENU VIEW ================= */}
          {editModal.view === "menu" && (
            <Box>
              <Typography
                sx={{ mb: 2, cursor: "pointer", pl: 1,
                  "&:hover": {
                    backgroundColor: "#EFDEE6",
                  },
                 }}
                onClick={() =>
                  setEditModal((prev) => ({ ...prev, view: "payment" }))
                }
              >
                Change Payment Status
              </Typography>

              <Typography
                sx={{ cursor: "pointer", pl: 1,
                  "&:hover": {
                    backgroundColor: "#EFDEE6",
                  },
                 }}
                 onClick={() => {
                  setEventStep(1);
                  setSelectedEvent("");
                  setGeneratedCode("");
                  setEditModal((prev) => ({ ...prev, view: "code" }));
                  setCopied(false);
                }}
                // onClick={() =>
                //   setEditModal((prev) => ({ ...prev, view: "code" }))
                // }
              >
                Generate Event Code Pass
              </Typography>
            </Box>
          )}

          {/* ================= PAYMENT FORM ================= */}
          {editModal.view === "payment" && (
            <>
              <Typography fontWeight={600} sx={{ mb: 2 }}>
                Change Payment Status
              </Typography>

              <TextField
                select
                SelectProps={{ native: true }}
                fullWidth
                value={newPaymentStatus}
                onChange={(e) => setNewPaymentStatus(e.target.value)}
                sx={{ mb: 3 }}
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
                }}
                onClick={() => {
                  onTogglePayment({
                    id: editModal.school.id,
                    payment_status: newPaymentStatus,
                  });

                  setEditModal({ open: false, school: null, view: "menu" });
                  setNewPaymentStatus("");
                }}
              >
                Save
              </Button>

              <Button
                fullWidth
                sx={{ mt: 1, textTransform: "none" }}
                onClick={() =>
                  setEditModal((prev) => ({ ...prev, view: "menu" }))
                }
              >
                Back
              </Button>
            </>
          )}

          {/* ================= EVENT CODE FORM ================= */}
          {editModal.view === "code" && (
            <>
              {/* STEP 1: SELECT DROPDOWN */}
              {eventStep === 1 && (
                <>
                  <Typography fontWeight={600} sx={{ mb: 2 }}>
                    Event
                  </Typography>

                  <TextField
                    select
                    SelectProps={{ native: true }}
                    fullWidth
                    value={selectedEvent}
                    onChange={(e) => {
                      setSelectedEvent(e.target.value);
                      setEventStep(2);
                    }}
                    sx={{ mb: 2 }}
                  >
                    <option value="">Select</option>
                    <option value="choral">Choral Challenge</option>
                    <option value="vfmf">VFMF Seminar</option>
                    <option value="winners">Winners Concert</option>
                  </TextField>
                </>
              )}

              {/* STEP 2: SHOW SELECTED EVENT */}
              {eventStep === 2 && (
                <>
                  <Typography fontWeight={600} sx={{ mb: 2 }}>
                    Event
                  </Typography>

                  <TextField
                    select
                    SelectProps={{ native: true }}
                    fullWidth
                    value={selectedEvent}
                    onChange={(e) => setSelectedEvent(e.target.value)}
                    sx={{ mb: 3 }}
                  >
                    <option value="choral">Choral Challenge</option>
                    <option value="vfmf">VFMF Seminar</option>
                    <option value="winners">Winners Concert</option>
                  </TextField>

                  <Button
                    fullWidth
                    variant="contained"
                    sx={{
                      backgroundColor: "#B71C1C",
                      borderRadius: "12px",
                      textTransform: "none",
                      py: 1.4,
                    }}
                    onClick={() => {
                      const fullYear = new Date().getFullYear();
                      const shortYear = String(fullYear).slice(-2);

                      let prefix = "";
                      let key = selectedEvent;

                      if (selectedEvent === "choral") prefix = "CHC-SCC";
                      if (selectedEvent === "vfmf") prefix = "VFMF-SME";
                      if (selectedEvent === "winners") prefix = "WIN-WCT";

                      // Get current counter for selected event
                      const currentCount = eventCounters[key];

                      const formattedCounter = String(currentCount).padStart(3, "0");

                      const code = `${prefix}-${fullYear}-${shortYear}-${formattedCounter}`;

                      setGeneratedCode(code);
                      setCopied(false);
                      setEventStep(3);

                      // Increment ONLY this event counter
                      setEventCounters((prev) => ({
                        ...prev,
                        [key]: prev[key] + 1,
                      }));
                    }}                    
                  >
                    Generate
                  </Button>
                </>
              )}

              {/* STEP 3: SHOW CODE + COPY */}
              {eventStep === 3 && (
                <>
                  <Typography fontWeight={600} sx={{ mb: 2 }}>
                    Event
                  </Typography>

                  <TextField
                    select
                    SelectProps={{ native: true }}
                    fullWidth
                    value={selectedEvent}
                    sx={{ mb: 2 }}
                  >
                    <option value="choral">Choral Challenge</option>
                    <option value="vfmf">VFMF Seminar</option>
                    <option value="winners">Winners Concert</option>
                  </TextField>

                  <Box display="flex" gap={1} mb={2}>
                    <TextField
                      value={generatedCode}
                      fullWidth
                      InputProps={{ readOnly: true }}
                    />

                    <Button
                      variant="outlined"
                      sx={{
                        minWidth: 80,
                        borderColor: copied ? "green" : undefined,
                        color: copied ? "green" : undefined,
                      }}
                      onClick={() => {
                        navigator.clipboard.writeText(generatedCode);
                        setCopied(true);

                        // Reset after 2 seconds
                        setTimeout(() => setCopied(false), 2000);
                      }}
                    >
                      {copied ? <Check fontSize="small" /> : "Copy"}
                    </Button>

                    {/* <Button
                      variant="outlined"
                      sx={{ minWidth: 60 }}
                      onClick={() => {
                        navigator.clipboard.writeText(generatedCode);
                      }}
                    >
                      Copy
                    </Button> */}
                  </Box>

                  <Button
                    fullWidth
                    variant="contained"
                    sx={{
                      backgroundColor: "#B71C1C",
                      borderRadius: "12px",
                      textTransform: "none",
                      py: 1.4,
                    }}
                    onClick={() => {
                      setEditModal({ open: false, school: null, view: "menu" });
                    }}
                  >
                    Done
                  </Button>
                </>
              )}

              {/* BACK BUTTON */}
              <Button
                fullWidth
                sx={{ mt: 1, textTransform: "none" }}
                onClick={() => {
                  if (eventStep === 1) {
                    setEditModal((prev) => ({ ...prev, view: "menu" }));
                  } else {
                    setEventStep((prev) => prev - 1);
                  }
                }}
              >
                Back
              </Button>
            </>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}
