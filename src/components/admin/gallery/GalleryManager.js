import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Box,
  Typography,
  Grid,
  Paper,
  Button,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Card,
  CardContent,
  Modal,
  TextField,
  CircularProgress,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";
import {
  Image,
  Link as LinkIcon,
  Visibility,
  Collections,
  Edit,
  Delete,
  Add,
} from "@mui/icons-material";
import { showSuccess, showError } from "../../../utils/toastConfig";

const API_BASE_URL = "https://vocal-fusion.onrender.com/media";

export default function GalleryManager() {
  const [gallery, setGallery] = useState([]);
  const [stats, setStats] = useState({
    images: 0,
    videos: 0,
    views: 0,
    collections: 0,
  });

  const [loading, setLoading] = useState(false);
  const [saving, setSaving] = useState(false);
  const [open, setOpen] = useState(false);
  const [deleteTarget, setDeleteTarget] = useState(null);
  const [editingItem, setEditingItem] = useState(null);

  const [formData, setFormData] = useState({
    mediaType: "",
    event: "",
    caption: "",
    file: null,
    videoUrl: "",
  });

  /* ================= FETCH GALLERY ================= */
  const fetchGallery = async () => {
    try {
      setLoading(true);
      const res = await axios.get(API_BASE_URL);
      const data = res.data || [];
      setGallery(data);

      const imgCount = data.filter((g) => g.mediaType === "image").length;
      const vidCount = data.filter((g) => g.mediaType === "video").length;

      setStats({
        images: imgCount,
        videos: vidCount,
        views: 8245,       // static for now
        collections: 3,    // static for now
      });
    } catch (error) {
      console.error("Error fetching gallery:", error);
      showError("Failed to fetch gallery items");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchGallery();
  }, []);

  /* ================= FORM HANDLERS ================= */
  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  /* ================= ADD / UPDATE MEDIA ================= */
  const handleSubmit = async (e) => {
    e.preventDefault();
    setSaving(true);

    try {
      const data = new FormData();
      data.append("mediaType", formData.mediaType);
      data.append("event", formData.event);
      data.append("caption", formData.caption);

      if (formData.mediaType === "image" && formData.file) {
        data.append("file", formData.file);
      }

      if (formData.mediaType === "video" && formData.videoUrl) {
        data.append("videoUrl", formData.videoUrl);
      }

      let response;

      if (editingItem) {
        // Update existing media
        response = await axios.put(
          `${API_BASE_URL}/${editingItem._id}`,
          data,
          { headers: { "Content-Type": "multipart/form-data" } }
        );

        setGallery((prev) =>
          prev.map((g) => (g._id === editingItem._id ? response.data : g))
        );
        showSuccess("Media updated successfully");
      } else {
        // Upload new media
        response = await axios.post(API_BASE_URL, data, {
          headers: { "Content-Type": "multipart/form-data" },
        });

        setGallery((prev) => [...prev, response.data]);
        showSuccess("Media uploaded successfully");
      }

      // Reset form
      setOpen(false);
      setEditingItem(null);
      setFormData({
        mediaType: "",
        event: "",
        caption: "",
        file: null,
        videoUrl: "",
      });
    } catch (error) {
      console.error("Error saving media:", error.response?.data || error.message);
      showError(error.response?.data?.message || "Failed to upload media");
    } finally {
      setSaving(false);
    }
  };

  /* ================= DELETE MEDIA ================= */
  const handleDelete = async () => {
    if (!deleteTarget) return;
    try {
      await axios.delete(`${API_BASE_URL}/${deleteTarget.id}`);
      setGallery((prev) => prev.filter((g) => g._id !== deleteTarget.id));
      showSuccess("Media deleted successfully");
    } catch (error) {
      console.error("Error deleting media:", error);
      showError("Failed to delete media");
    } finally {
      setDeleteTarget(null);
    }
  };

  /* ================= EDIT MEDIA ================= */
  const handleEdit = (item) => {
    setFormData({
      mediaType: item.mediaType,
      event: item.event,
      caption: item.caption,
      file: null,
      videoUrl: item.videoUrl || "",
    });
    setEditingItem(item);
    setOpen(true);
  };

  return (
    <Box>
      {/* Header */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: 3,
        }}
      >
        <Typography variant="h6" fontWeight="bold">
          Gallery Manager
        </Typography>
        <Button
          variant="outlined"
          startIcon={<Add />}
          color="error"
          onClick={() => setOpen(true)}
          sx={{ borderRadius: 5, textTransform: "none" }}
        >
          Upload Media
        </Button>
      </Box>

      {/* Stats */}
      <Grid container spacing={6} sx={{ mb: 4 }}>
        {[
          { icon: <Image color="error" />, label: "Images Uploaded", value: stats.images },
          { icon: <LinkIcon color="warning" />, label: "Video Links", value: stats.videos },
          { icon: <Visibility color="error" />, label: "Views", value: stats.views },
          { icon: <Collections color="secondary" />, label: "Gallery Collections", value: stats.collections },
        ].map((item, i) => (
          <Grid item xs={12} sm={6} md={3} key={i}>
            <Paper
              elevation={0}
              sx={{
                width: "216px",
                height: "144px",
                p: 2,
                display: "flex",
                alignItems: "center",
                gap: 2,
                border: "1px solid #FFB4AB",
                borderRadius: "16px",
              }}
            >
              <Box>{item.icon}</Box>
              <Box>
                <Typography fontSize={24} fontWeight="bold">
                  {item.value}
                </Typography>
                <Typography fontSize={13}>{item.label}</Typography>
              </Box>
            </Paper>
          </Grid>
        ))}
      </Grid>

      {/* Gallery Table */}
      <Card>
        <CardContent>
          <Typography variant="h6" fontWeight="bold" gutterBottom>
            Gallery Information
          </Typography>

          {loading ? (
            <Box display="flex" justifyContent="center" py={4}>
              <CircularProgress color="error" />
            </Box>
          ) : (
            <Table>
              <TableHead sx={{ backgroundColor: "#fde0e0" }}>
                <TableRow>
                  <TableCell>Thumbnail</TableCell>
                  <TableCell>Type</TableCell>
                  <TableCell>Event</TableCell>
                  <TableCell>Caption</TableCell>
                  <TableCell>Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {gallery.map((row) => (
                  <TableRow key={row._id}>
                    <TableCell>
                      {row.url ? (
                        <img
                          src={row.url}
                          alt="thumb"
                          style={{
                            width: 60,
                            height: 40,
                            borderRadius: 6,
                            objectFit: "cover",
                          }}
                        />
                      ) : (
                        "—"
                      )}
                    </TableCell>
                    <TableCell>{row.mediaType}</TableCell>
                    <TableCell>{row.event}</TableCell>
                    <TableCell>{row.caption}</TableCell>
                    <TableCell>
                      <Edit
                        fontSize="small"
                        sx={{ color: "#350830", mr: 1, cursor: "pointer" }}
                        onClick={() => handleEdit(row)}
                      />
                      <Delete
                        fontSize="small"
                        sx={{ color: "#350830", cursor: "pointer" }}
                        onClick={() =>
                          setDeleteTarget({ id: row._id, title: row.caption })
                        }
                      />
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          )}
        </CardContent>
      </Card>

      {/* Upload / Edit Modal */}
      <Modal open={open} onClose={() => setOpen(false)}>
        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            bgcolor: "#fff",
            p: 4,
            borderRadius: "12px",
            boxShadow: 24,
            width: 400,
          }}
        >
          <Typography variant="subtitle1" fontWeight={600} mb={2}>
            {editingItem ? "Edit Media" : "Upload Media"}
          </Typography>

          <TextField
            select
            SelectProps={{ native: true }}
            label="Media Type"
            name="mediaType"
            value={formData.mediaType}
            onChange={handleChange}
            fullWidth
            sx={{ mb: 2 }}
          >
            <option value="">Select Type</option>
            <option value="image">Image</option>
            <option value="video">Video</option>
          </TextField>

          <TextField
            label="Event"
            name="event"
            value={formData.event}
            onChange={handleChange}
            fullWidth
            sx={{ mb: 2 }}
          />

          <TextField
            label="Caption"
            name="caption"
            value={formData.caption}
            onChange={handleChange}
            fullWidth
            sx={{ mb: 2 }}
          />

          {formData.mediaType === "image" && (
            <Button
              variant="outlined"
              component="label"
              fullWidth
              sx={{ mb: 2, textTransform: "none" }}
            >
              Choose Image File
              <input
                type="file"
                name="file"
                accept="image/*"
                hidden
                onChange={handleChange}
              />
            </Button>
          )}

          {formData.mediaType === "video" && (
            <TextField
              label="Video URL"
              name="videoUrl"
              value={formData.videoUrl}
              onChange={handleChange}
              fullWidth
              sx={{ mb: 2 }}
            />
          )}

          <Button
            type="submit"
            fullWidth
            disabled={saving}
            sx={{
              backgroundColor: "#B71C1C",
              color: "#fff",
              borderRadius: "12px",
              py: 1.5,
              "&:hover": { backgroundColor: "#9A1212" },
            }}
          >
            {saving ? (
              <CircularProgress size={24} sx={{ color: "#fff" }} />
            ) : editingItem ? (
              "Update Media"
            ) : (
              "Upload"
            )}
          </Button>
        </Box>
      </Modal>

      {/* Delete Confirmation */}
      <Dialog
        open={Boolean(deleteTarget)}
        onClose={() => setDeleteTarget(null)}
      >
        <DialogTitle sx={{ color: "#C62828", fontWeight: 600 }}>
          Confirm Delete
        </DialogTitle>
        <DialogContent>
          <Typography>
            Are you sure you want to delete{" "}
            <strong>{deleteTarget?.title}</strong>?
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={() => setDeleteTarget(null)}
            sx={{ textTransform: "none", color: "#350830" }}
          >
            Cancel
          </Button>
          <Button
            onClick={handleDelete}
            sx={{
              textTransform: "none",
              backgroundColor: "#C62828",
              color: "#fff",
              "&:hover": { backgroundColor: "#9A1212" },
            }}
          >
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}






// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import {
//   Box,
//   Typography,
//   Grid,
//   Paper,
//   Button,
//   Table,
//   TableBody,
//   TableCell,
//   TableHead,
//   TableRow,
//   Card,
//   CardContent,
//   Modal,
//   TextField,
//   CircularProgress,
//   Dialog,
//   DialogTitle,
//   DialogContent,
//   DialogActions,
// } from "@mui/material";
// import {
//   Image,
//   Link as LinkIcon,
//   Visibility,
//   Collections,
//   Edit,
//   Delete,
//   Add,
// } from "@mui/icons-material";
// import { showSuccess, showError } from "../../../utils/toastConfig";

// export default function GalleryManager() {
//   const [gallery, setGallery] = useState([]);
//   const [stats, setStats] = useState({ images: 0, videos: 0, views: 0, collections: 0 });
//   const [loading, setLoading] = useState(false);
//   const [saving, setSaving] = useState(false);
//   const [open, setOpen] = useState(false);
//   const [deleteTarget, setDeleteTarget] = useState(null);
//   const [editingItem, setEditingItem] = useState(null);
//   const [formData, setFormData] = useState({
//     mediaType: "",
//     event: "",
//     caption: "",
//     file: null,
//     videoUrl: "",
//   });

//   const API_BASE_URL = "https://vocal-fusion.onrender.com/media";

//   /** Fetch gallery data */
//   const fetchGallery = async () => {
//     try {
//       setLoading(true);
//       const res = await axios.get(API_BASE_URL);
//       setGallery(res.data || []);

//       // Compute quick stats
//       const imgCount = res.data.filter((g) => g.mediaType === "image").length;
//       const vidCount = res.data.filter((g) => g.mediaType === "video").length;
//       setStats({
//         images: imgCount,
//         videos: vidCount,
//         views: 8245,
//         collections: 3,
//       });
//     } catch (error) {
//       console.error("Error fetching gallery:", error);
//       showError("Failed to fetch gallery items");
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchGallery();
//   }, []);

//   /** Handle input changes */
//   const handleChange = (e) => {
//     const { name, value, files } = e.target;
//     setFormData({ ...formData, [name]: files ? files[0] : value });
//   };

//   /** Add or Update media */
// const handleSubmit = async (e) => {
//   e.preventDefault();
//   setSaving(true);

//   try {
//     const data = new FormData();
//     data.append("type", formData.type);
//     data.append("eventTag", formData.eventTag);
//     data.append("caption", formData.caption);

//     if (formData.type === "Image" && formData.file)
//       data.append("file", formData.file);
//     if (formData.type === "Video" && formData.videoLink)
//       data.append("videoLink", formData.videoLink);

//     let response;
//     if (editingItem) {
//       // Update existing
//       response = await axios.put(
//         `${API_BASE_URL}/media/${editingItem.id || editingItem._id}`,
//         data,
//         { headers: { "Content-Type": "multipart/form-data" } }
//       );
//       setGallery((prev) =>
//         prev.map((g) =>
//           (g.id || g._id) === (editingItem.id || editingItem._id)
//             ? response.data
//             : g
//         )
//       );
//       showSuccess("Media updated successfully");
//     } else {
//       // ✅ Correct upload endpoint
//       response = await axios.post(`${API_BASE_URL}/media`, data, {
//         headers: { "Content-Type": "multipart/form-data" },
//       });
//       setGallery((prev) => [...prev, response.data]);
//       showSuccess("Media uploaded successfully");
//     }

//     setOpen(false);
//     setEditingItem(null);
//     setFormData({
//       type: "",
//       eventTag: "",
//       caption: "",
//       file: null,
//       videoLink: "",
//     });
//   } catch (error) {
//     console.error("Error saving media:", error.response?.data || error.message);
//     showError(error.response?.data?.message || "Failed to upload media");
//   } finally {
//     setSaving(false);
//   }
// };

//   /** Delete media */
//   const handleDelete = async () => {
//     if (!deleteTarget) return;
//     try {
//       await axios.delete(`${API_BASE_URL}/${deleteTarget.id}`);
//       setGallery((prev) => prev.filter((g) => g._id !== deleteTarget.id));
//       showSuccess("Media deleted successfully");
//     } catch (error) {
//       console.error("Error deleting media:", error);
//       showError("Failed to delete media");
//     } finally {
//       setDeleteTarget(null);
//     }
//   };

//   /** Edit existing media */
//   const handleEdit = (item) => {
//     setFormData({
//       mediaType: item.mediaType,
//       event: item.event,
//       caption: item.caption,
//       file: null,
//       videoUrl: item.videoUrl || "",
//     });
//     setEditingItem(item);
//     setOpen(true);
//   };

//   return (
//     <Box>
//       {/* Header */}
//       <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 3 }}>
//         <Typography variant="h6" fontWeight="bold">
//           Gallery Manager
//         </Typography>
//         <Button
//           variant="outlined"
//           startIcon={<Add />}
//           color="error"
//           onClick={() => setOpen(true)}
//           sx={{ borderRadius: 5, textTransform: "none" }}
//         >
//           Upload Media
//         </Button>
//       </Box>

//       {/* Stats */}
//       <Grid container spacing={6} sx={{ mb: 4 }}>
//         {[
//           { icon: <Image color="error" />, label: "Images Uploaded", value: stats.images },
//           { icon: <LinkIcon color="warning" />, label: "Video Links", value: stats.videos },
//           { icon: <Visibility color="error" />, label: "Views", value: stats.views },
//           { icon: <Collections color="secondary" />, label: "Gallery Collections", value: stats.collections },
//         ].map((item, i) => (
//           <Grid item xs={12} sm={6} md={3} key={i}>
//             <Paper
//               elevation={0}
//               sx={{
//                 width: "216px",
//                 height: "144px",
//                 p: 2,
//                 display: "flex",
//                 alignItems: "center",
//                 gap: 2,
//                 border: "1px solid #FFB4AB",
//                 borderRadius: "16px",
//                 bgcolor: "inherit",
//               }}
//             >
//               <Box>{item.icon}</Box>
//               <Box>
//                 <Typography fontSize={24} fontWeight="bold">
//                   {item.value}
//                 </Typography>
//                 <Typography fontSize={13}>{item.label}</Typography>
//               </Box>
//             </Paper>
//           </Grid>
//         ))}
//       </Grid>

//       {/* Gallery Table */}
//       <Card>
//         <CardContent>
//           <Typography variant="h6" fontWeight="bold" gutterBottom>
//             Gallery Information
//           </Typography>

//           {loading ? (
//             <Box display="flex" justifyContent="center" alignItems="center" py={4}>
//               <CircularProgress color="error" />
//             </Box>
//           ) : (
//             <Table>
//               <TableHead sx={{ backgroundColor: "#fde0e0" }}>
//                 <TableRow>
//                   <TableCell>Thumbnail</TableCell>
//                   <TableCell>Type</TableCell>
//                   <TableCell>Event</TableCell>
//                   <TableCell>Caption</TableCell>
//                   <TableCell>Actions</TableCell>
//                 </TableRow>
//               </TableHead>
//               <TableBody>
//                 {gallery.map((row, index) => (
//                   <TableRow key={index}>
//                     <TableCell>
//                       {row.url ? (
//                         <img
//                           src={row.url}
//                           alt="thumb"
//                           style={{ width: 60, height: 40, borderRadius: 6, objectFit: "cover" }}
//                         />
//                       ) : (
//                         "—"
//                       )}
//                     </TableCell>
//                     <TableCell>{row.mediaType}</TableCell>
//                     <TableCell>{row.event}</TableCell>
//                     <TableCell>{row.caption}</TableCell>
//                     <TableCell>
//                       <Edit
//                         fontSize="small"
//                         sx={{ color: "#350830", mr: 1, cursor: "pointer" }}
//                         onClick={() => handleEdit(row)}
//                       />
//                       <Delete
//                         fontSize="small"
//                         sx={{ color: "#350830", cursor: "pointer" }}
//                         onClick={() =>
//                           setDeleteTarget({ id: row._id, title: row.caption })
//                         }
//                       />
//                     </TableCell>
//                   </TableRow>
//                 ))}
//               </TableBody>
//             </Table>
//           )}
//         </CardContent>
//       </Card>

//       {/* Upload / Edit Modal */}
//       <Modal open={open} onClose={() => setOpen(false)}>
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
//             width: 400,
//           }}
//         >
//           <Typography variant="subtitle1" fontWeight={600} mb={2}>
//             {editingItem ? "Edit Media" : "Upload Media"}
//           </Typography>

//           <TextField
//             select
//             SelectProps={{ native: true }}
//             label="Media Type"
//             name="mediaType"
//             value={formData.mediaType}
//             onChange={handleChange}
//             fullWidth
//             sx={{ mb: 2 }}
//           >
//             <option value="">Select Type</option>
//             <option value="image">Image</option>
//             <option value="video">Video</option>
//           </TextField>

//           <TextField
//             label="Event"
//             name="event"
//             value={formData.event}
//             onChange={handleChange}
//             fullWidth
//             sx={{ mb: 2 }}
//           />

//           <TextField
//             label="Caption"
//             name="caption"
//             value={formData.caption}
//             onChange={handleChange}
//             fullWidth
//             sx={{ mb: 2 }}
//           />

//           {formData.mediaType === "image" && (
//             <Button variant="outlined" component="label" fullWidth sx={{ mb: 2, textTransform: "none" }}>
//               Choose Image File
//               <input type="file" name="file" accept="image/*" hidden onChange={handleChange} />
//             </Button>
//           )}

//           {formData.mediaType === "video" && (
//             <TextField
//               label="Video URL"
//               name="videoUrl"
//               value={formData.videoUrl}
//               onChange={handleChange}
//               fullWidth
//               sx={{ mb: 2 }}
//             />
//           )}

//           <Button
//             type="submit"
//             fullWidth
//             disabled={saving}
//             sx={{
//               backgroundColor: "#B71C1C",
//               color: "#fff",
//               borderRadius: "12px",
//               py: 1.5,
//               "&:hover": { backgroundColor: "#9A1212" },
//             }}
//           >
//             {saving ? (
//               <CircularProgress size={24} sx={{ color: "#fff" }} />
//             ) : editingItem ? (
//               "Update Media"
//             ) : (
//               "Upload"
//             )}
//           </Button>
//         </Box>
//       </Modal>

//       {/* Delete Confirmation */}
//       <Dialog open={Boolean(deleteTarget)} onClose={() => setDeleteTarget(null)}>
//         <DialogTitle sx={{ color: "#C62828", fontWeight: 600 }}>
//           Confirm Delete
//         </DialogTitle>
//         <DialogContent>
//           <Typography>
//             Are you sure you want to delete{" "}
//             <strong>{deleteTarget?.title}</strong>?
//           </Typography>
//         </DialogContent>
//         <DialogActions>
//           <Button onClick={() => setDeleteTarget(null)} sx={{ textTransform: "none", color: "#350830" }}>
//             Cancel
//           </Button>
//           <Button
//             onClick={handleDelete}
//             sx={{
//               textTransform: "none",
//               backgroundColor: "#C62828",
//               color: "#fff",
//               "&:hover": { backgroundColor: "#9A1212" },
//             }}
//           >
//             Delete
//           </Button>
//         </DialogActions>
//       </Dialog>
//     </Box>
//   );
// }






// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import {
//   Box,
//   Typography,
//   Grid,
//   Paper,
//   Button,
//   Table,
//   TableBody,
//   TableCell,
//   TableHead,
//   TableRow,
//   Card,
//   CardContent,
//   Modal,
//   TextField,
//   CircularProgress,
//   Dialog,
//   DialogTitle,
//   DialogContent,
//   DialogActions,
// } from "@mui/material";
// import {
//   Image,
//   Link as LinkIcon,
//   Visibility,
//   Collections,
//   Edit,
//   Delete,
//   Add,
// } from "@mui/icons-material";
// import { showSuccess, showError } from "../../../utils/toastConfig";
// export default function GalleryManager() {
//   const [gallery, setGallery] = useState([]);
//   const [stats, setStats] = useState({
//     images: 0,
//     videos: 0,
//     views: 0,
//     collections: 0,
//   });
//   const [loading, setLoading] = useState(false);
//   const [saving, setSaving] = useState(false);
//   const [open, setOpen] = useState(false);
//   const [deleteTarget, setDeleteTarget] = useState(null);
//   const [editingItem, setEditingItem] = useState(null);
//   const [formData, setFormData] = useState({
//     type: "",
//     eventTag: "",
//     caption: "",
//     file: null,
//     videoLink: "",
//   });

//   const API_BASE_URL = "https://vocal-fusion.onrender.com";

//   /** Fetch gallery data */
//   const fetchGallery = async () => {
//     try {
//       setLoading(true);
//       const res = await axios.get(`${API_BASE_URL}/media`);
//       setGallery(res.data || []);

//       // Calculate quick stats
//       const imgCount = res.data.filter((g) => g.type === "Image").length;
//       const vidCount = res.data.filter((g) => g.type === "Video").length;
//       setStats({
//         images: imgCount,
//         videos: vidCount,
//         views: 8245, // static for now
//         collections: 3, // adjust if collections supported later
//       });
//     } catch (error) {
//       console.error("Error fetching gallery:", error);
//       showError("Failed to fetch gallery items");
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchGallery();
//   }, []);

//   /** Handle field changes */
//   const handleChange = (e) => {
//     const { name, value, files } = e.target;
//     setFormData({
//       ...formData,
//       [name]: files ? files[0] : value,
//     });
//   };

//   /** Add or Update media */
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setSaving(true);

//     try {
//       const data = new FormData();
//       data.append("type", formData.type);
//       data.append("eventTag", formData.eventTag);
//       data.append("caption", formData.caption);

//       if (formData.type === "Image" && formData.file)
//         data.append("file", formData.file);
//       if (formData.type === "Video" && formData.videoLink)
//         data.append("videoLink", formData.videoLink);

//       let response;
//       if (editingItem) {
//         response = await axios.put(
//           `${API_BASE_URL}/media/${editingItem.id || editingItem._id}`,
//           data,
//           { headers: { "Content-Type": "multipart/form-data" } }
//         );
//         setGallery((prev) =>
//           prev.map((g) =>
//             (g.id || g._id) === (editingItem.id || editingItem._id)
//               ? response.data
//               : g
//           )
//         );
//         showSuccess("Media updated successfully");
//       } else {
//         response = await axios.post(`${API_BASE_URL}/media`, data, {
//           headers: { "Content-Type": "multipart/form-data" },
//         });
//         setGallery((prev) => [...prev, response.data]);
//         showSuccess("Media uploaded successfully");
//       }

//       setOpen(false);
//       setEditingItem(null);
//       setFormData({
//         type: "",
//         eventTag: "",
//         caption: "",
//         file: null,
//         videoLink: "",
//       });
//     } catch (error) {
//       console.error("Error saving media:", error);
//       showError("Failed to upload media");
//     } finally {
//       setSaving(false);
//     }
//   };

//   /** Delete media */
//   const handleDelete = async () => {
//     if (!deleteTarget) return;
//     try {
//       await axios.delete(`${API_BASE_URL}/media/${deleteTarget.id}`);
//       setGallery((prev) =>
//         prev.filter((g) => (g.id || g._id) !== deleteTarget.id)
//       );
//       showSuccess("Media deleted successfully");
//     } catch (error) {
//       console.error("Error deleting media:", error);
//       showError("Failed to delete media");
//     } finally {
//       setDeleteTarget(null);
//     }
//   };

//   /** Edit existing media */
//   const handleEdit = (item) => {
//     setFormData({
//       type: item.type,
//       eventTag: item.eventTag,
//       caption: item.caption,
//       file: null,
//       videoLink: item.videoLink || "",
//     });
//     setEditingItem(item);
//     setOpen(true);
//   };

//   return (
//     <Box>
//       {/* Header */}
//       <Box
//         sx={{
//           display: "flex",
//           justifyContent: "space-between",
//           alignItems: "center",
//           mb: 3,
//         }}
//       >
//         <Typography variant="h6" fontWeight="bold">
//           Gallery Manager
//         </Typography>
//         <Button
//           variant="outlined"
//           startIcon={<Add />}
//           color="error"
//           onClick={() => setOpen(true)}
//           sx={{ borderRadius: 5, textTransform: "none" }}
//         >
//           Upload Media
//         </Button>
//       </Box>

//       {/* Stats */}
//       <Grid container spacing={6} sx={{ mb: 4 }}>
//         {[
//           {
//             icon: <Image color="error" />,
//             label: "Images Uploaded",
//             value: stats.images,
//           },
//           {
//             icon: <LinkIcon color="warning" />,
//             label: "Video Links",
//             value: stats.videos,
//           },
//           {
//             icon: <Visibility color="error" />,
//             label: "Views",
//             value: stats.views,
//           },
//           {
//             icon: <Collections color="secondary" />,
//             label: "Gallery Collections",
//             value: stats.collections,
//           },
//         ].map((item, i) => (
//           <Grid item xs={12} sm={6} md={3} key={i}>
//             <Paper
//               elevation={0}
//               sx={{
//                 width: "216px",
//                 height: "144px",
//                 p: 2,
//                 display: "flex",
//                 alignItems: "center",
//                 gap: 2,
//                 border: "1px solid #FFB4AB",
//                 borderRadius: "16px",
//                 bgcolor: "inherit",
//               }}
//             >
//               <Box>{item.icon}</Box>
//               <Box>
//                 <Typography fontSize={24} fontWeight="bold">
//                   {item.value}
//                 </Typography>
//                 <Typography fontSize={13}>{item.label}</Typography>
//               </Box>
//             </Paper>
//           </Grid>
//         ))}
//       </Grid>

//       {/* Gallery Table */}
//       <Card>
//         <CardContent>
//           <Typography variant="h6" fontWeight="bold" gutterBottom>
//             Gallery Information
//           </Typography>

//           {loading ? (
//             <Box display="flex" justifyContent="center" alignItems="center" py={4}>
//               <CircularProgress color="error" />
//             </Box>
//           ) : (
//             <Table>
//               <TableHead sx={{ backgroundColor: "#fde0e0" }}>
//                 <TableRow>
//                   <TableCell>Thumbnail</TableCell>
//                   <TableCell>Type</TableCell>
//                   <TableCell>Event Tag</TableCell>
//                   <TableCell>Caption</TableCell>
//                   <TableCell>Actions</TableCell>
//                 </TableRow>
//               </TableHead>
//               <TableBody>
//                 {gallery.map((row, index) => (
//                   <TableRow key={index}>
//                     <TableCell>
//                       {row.thumbnail || row.url ? (
//                         <img
//                           src={row.thumbnail || row.url}
//                           alt="thumb"
//                           style={{
//                             width: 60,
//                             height: 40,
//                             borderRadius: 6,
//                             objectFit: "cover",
//                           }}
//                         />
//                       ) : (
//                         "—"
//                       )}
//                     </TableCell>
//                     <TableCell>{row.type}</TableCell>
//                     <TableCell>{row.eventTag}</TableCell>
//                     <TableCell>{row.caption}</TableCell>
//                     <TableCell>
//                       <Edit
//                         fontSize="small"
//                         sx={{ color: "#350830", mr: 1, cursor: "pointer" }}
//                         onClick={() => handleEdit(row)}
//                       />
//                       <Delete
//                         fontSize="small"
//                         sx={{ color: "#350830", cursor: "pointer" }}
//                         onClick={() =>
//                           setDeleteTarget({
//                             id: row.id || row._id,
//                             title: row.caption,
//                           })
//                         }
//                       />
//                     </TableCell>
//                   </TableRow>
//                 ))}
//               </TableBody>
//             </Table>
//           )}
//         </CardContent>
//       </Card>

//       {/* Upload / Edit Modal */}
//       <Modal open={open} onClose={() => setOpen(false)}>
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
//             width: 400,
//           }}
//         >
//           <Typography variant="subtitle1" fontWeight={600} mb={2}>
//             {editingItem ? "Edit Media" : "Upload Media"}
//           </Typography>

//           <TextField
//             select
//             SelectProps={{ native: true }}
//             label="Media Type"
//             name="type"
//             value={formData.type}
//             onChange={handleChange}
//             fullWidth
//             sx={{ mb: 2 }}
//           >
//             <option value="">Select Type</option>
//             <option value="Image">Image</option>
//             <option value="Video">Video</option>
//           </TextField>

//           <TextField
//             label="Event Tag"
//             name="eventTag"
//             value={formData.eventTag}
//             onChange={handleChange}
//             fullWidth
//             sx={{ mb: 2 }}
//           />

//           <TextField
//             label="Caption"
//             name="caption"
//             value={formData.caption}
//             onChange={handleChange}
//             fullWidth
//             sx={{ mb: 2 }}
//           />

//           {formData.type === "Image" && (
//             <Button
//               variant="outlined"
//               component="label"
//               fullWidth
//               sx={{ mb: 2, textTransform: "none" }}
//             >
//               Choose Image File
//               <input
//                 type="file"
//                 name="file"
//                 accept="image/*"
//                 hidden
//                 onChange={handleChange}
//               />
//             </Button>
//           )}

//           {formData.type === "Video" && (
//             <TextField
//               label="Video Link"
//               name="videoLink"
//               value={formData.videoLink}
//               onChange={handleChange}
//               fullWidth
//               sx={{ mb: 2 }}
//             />
//           )}

//           <Button
//             type="submit"
//             fullWidth
//             disabled={saving}
//             sx={{
//               backgroundColor: "#B71C1C",
//               color: "#fff",
//               borderRadius: "12px",
//               py: 1.5,
//               "&:hover": { backgroundColor: "#9A1212" },
//             }}
//           >
//             {saving ? (
//               <CircularProgress size={24} sx={{ color: "#fff" }} />
//             ) : editingItem ? (
//               "Update Media"
//             ) : (
//               "Upload"
//             )}
//           </Button>
//         </Box>
//       </Modal>

//       {/* Delete Confirmation */}
//       <Dialog
//         open={Boolean(deleteTarget)}
//         onClose={() => setDeleteTarget(null)}
//       >
//         <DialogTitle sx={{ color: "#C62828", fontWeight: 600 }}>
//           Confirm Delete
//         </DialogTitle>
//         <DialogContent>
//           <Typography>
//             Are you sure you want to delete{" "}
//             <strong>{deleteTarget?.title}</strong>?
//           </Typography>
//         </DialogContent>
//         <DialogActions>
//           <Button
//             onClick={() => setDeleteTarget(null)}
//             sx={{ textTransform: "none", color: "#350830" }}
//           >
//             Cancel
//           </Button>
//           <Button
//             onClick={handleDelete}
//             sx={{
//               textTransform: "none",
//               backgroundColor: "#C62828",
//               color: "#fff",
//               "&:hover": { backgroundColor: "#9A1212" },
//             }}
//           >
//             Delete
//           </Button>
//         </DialogActions>
//       </Dialog>
//     </Box>
//   );
// }





// import React from "react";
// import {
//   Box,
//   Typography,
//   Grid,
//   Paper,
//   Button,
//   Table,
//   TableBody,
//   TableCell,
//   // TableContainer,
//   TableHead,
//   TableRow,
//   Card,
//   CardContent,
// } from "@mui/material";
// import {
//   Image,
//   Link as LinkIcon,
//   Visibility,
//   Collections,
//   Edit,
//   Delete,
//   Add,
// } from "@mui/icons-material";

// export default function GalleryManager() {
//   const stats = [
//     { icon: <Image color="error" />, label: "Images Uploaded", value: "2500" },
//     { icon: <LinkIcon color="warning" />, label: "Video Links", value: "22" },
//     { icon: <Visibility color="error" />, label: "Views", value: "8,245" },
//     { icon: <Collections color="secondary" />, label: "Gallery Collections", value: "3" },
//   ];

//   const galleryData = [
//     {
//       thumbnail: "/images/sample1.jpg",
//       type: "Image",
//       eventTag: "Voice Training Workshop",
//       caption: "VFMF Trainer II",
//     },
//     {
//       thumbnail: "/images/sample2.jpg",
//       type: "Video",
//       eventTag: "Choral Challenge",
//       caption: "Choral Challenge 3.0",
//     },
//     {
//       thumbnail: "/images/sample3.jpg",
//       type: "Image",
//       eventTag: "Winners Concert",
//       caption: "Winners Concert A3",
//     },
//     {
//       thumbnail: "/images/sample4.jpg",
//       type: "Image",
//       eventTag: "Voice Training Workshop",
//       caption: "VFMF - Trainer I",
//     },
//   ];

//   const videoLinks = [
//     "youtube.com/xxxyyyzzz",
//     "youtube.com/xxxyyyzzz",
//     "youtube.com/xxxyyyzzz",
//   ];

//   return (
//     <Box>
//       {/* Header */}
//       <Box
//         sx={{
//           display: "flex",
//           justifyContent: "space-between",
//           alignItems: "center",
//           mb: 3,
//         }}
//       >
//         <Typography variant="h6" fontWeight="bold">
//           Gallery Manager
//         </Typography>
//         <Button
//           variant="outlined"
//           startIcon={<Add />}
//           color="error"
//           sx={{ borderRadius: 5, textTransform: "none" }}
//         >
//           Upload Media
//         </Button>
//       </Box>

//       {/* Summary Cards */}
//       <Grid container spacing={6} sx={{ mb: 4 }}>
//         {stats.map((item, i) => (
//           <Grid item xs={12} sm={6} md={3} key={i}>
//             <Paper
//               elevation={0}
//               sx={{
//                 width: "216px",
//                 height: "144px",
//                 p: 2,
//                 display: "flex",
//                 alignItems: "center",
//                 gap: 2,
//                 border: "1px solid #FFB4AB",
//                 borderRadius: "16px",
//                 bgcolor: "inherit",
//               }}
//             >
//               <Box>{item.icon}</Box>
//               <Box>
//                 <Typography fontSize={24} fontWeight="bold">
//                   {item.value}
//                 </Typography>
//                 <Typography fontSize={13}>{item.label}</Typography>
//               </Box>
//             </Paper>
//           </Grid>
//         ))}
//       </Grid>

//       {/* Gallery Table */}
//       <Card>
//         <CardContent>
//       <Typography variant="h6" fontWeight="bold" gutterBottom>
//         Gallery Information
//       </Typography>
      
//         <Table>
//           <TableHead sx={{ backgroundColor: "#fde0e0" }}>
//             <TableRow>
//               <TableCell>Thumbnail</TableCell>
//               <TableCell>Type</TableCell>
//               <TableCell>Event Tag</TableCell>
//               <TableCell>Caption</TableCell>
//               <TableCell>Actions</TableCell>
//             </TableRow>
//           </TableHead>
//           <TableBody>
//             {galleryData.map((row, index) => (
//               <TableRow key={index}>
//                 <TableCell>
//                   <img
//                     src={row.thumbnail}
//                     alt="thumb"
//                     style={{
//                       width: 60,
//                       height: 40,
//                       borderRadius: 6,
//                       objectFit: "cover",
//                     }}
//                   />
//                 </TableCell>
//                 <TableCell>{row.type}</TableCell>
//                 <TableCell>{row.eventTag}</TableCell>
//                 <TableCell>{row.caption}</TableCell>
//                 <TableCell>
//                   <Edit
//                     fontSize="small"
//                     sx={{ color: "#350830", mr: 1, cursor: "pointer" }}
//                   />
//                   <Delete
//                     fontSize="small"
//                     sx={{ color: "#350830", cursor: "pointer" }}
//                   />
//                 </TableCell>
//               </TableRow>
//             ))}
//           </TableBody>
//         </Table>
//         </CardContent>
//       </Card>

//       {/* Collections & Video Links */}
//       <Grid container spacing={2}>
//         <Grid item xs={12} md={8}>
//           <Typography variant="h6" fontWeight="bold" gutterBottom>
//             Gallery Collections
//           </Typography>
//           <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
//             {galleryData.map((item, index) => (
//               <Box
//                 key={index}
//                 component="img"
//                 src={item.thumbnail}
//                 alt="collection"
//                 sx={{
//                   width: 100,
//                   height: 70,
//                   borderRadius: 2,
//                   objectFit: "cover",
//                   boxShadow: 1,
//                 }}
//               />
//             ))}
//           </Box>
//         </Grid>
//         <Grid item xs={12} md={4}>
//           <Typography variant="h6" fontWeight="bold" gutterBottom>
//             Video Links
//           </Typography>
//           <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
//             {videoLinks.map((link, i) => (
//               <Typography
//                 key={i}
//                 variant="body2"
//                 sx={{ color: "primary.main", cursor: "pointer" }}
//               >
//                 {link}
//               </Typography>
//             ))}
//           </Box>
//         </Grid>
//       </Grid>
//     </Box>
//   );
// }
