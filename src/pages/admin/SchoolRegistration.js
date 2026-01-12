import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import { Box, Typography } from "@mui/material";
import SchoolFilterSection from "../../components/admin/schoolRegistration/SchoolFilterSection";
import SchoolTableSection from "../../components/admin/schoolRegistration/SchoolTableSection";

export default function SchoolRegistration() {
  const [event, setEvent] = useState("");
  const [status, setStatus] = useState("");
  const [search, setSearch] = useState("");

  const [schools, setSchools] = useState([]);
  const [filteredSchools, setFilteredSchools] = useState([]);

  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const [loading, setLoading] = useState(false);

  const API_BASE_URL = "https://vocal-fusion.onrender.com";

  /** Fetch schools */
  const fetchSchools = async (page = 1) => {
    try {
      setLoading(true);
      const response = await axios.get(
        `${API_BASE_URL}/schools?page=${page}&limit=10`
      );

      const data = response.data.schools || response.data;

      const mapped = data.map((s) => ({
        id: s.id,
        name: s.name,
        email: s.email,
        state: s.state,
        coordinator: s.coordination_name,
        paymentStatus: s.payment_status || "Unverified",
        fullData: s,
      }));

      setSchools(mapped);
      setFilteredSchools(mapped);

      setTotalPages(response.data.totalPages || 1);
    } catch (error) {
      console.error("Error fetching schools:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSchools(page);
  }, [page]);

  /** Filter */
  const handleFilter = useCallback(() => {
  let filtered = [...schools];

  if (status) {
    filtered = filtered.filter(
      (s) => s.paymentStatus.toLowerCase() === status.toLowerCase()
    );
  }

  if (search.trim()) {
    const keyword = search.toLowerCase();
    filtered = filtered.filter(
      (s) =>
        s.name.toLowerCase().includes(keyword) ||
        s.email.toLowerCase().includes(keyword) ||
        s.state.toLowerCase().includes(keyword) ||
        (s.coordinator || "").toLowerCase().includes(keyword)
    );
  }

  setFilteredSchools(filtered);
}, [schools, status, search]);

  useEffect(() => {
  handleFilter();
}, [handleFilter]);

  /** DELETE school */
  const handleDeleteSchool = async (id) => {
    try {
      await axios.delete(`${API_BASE_URL}/schools/${id}`);
      fetchSchools(page);
    } catch (error) {
      console.error("Delete failed:", error.response?.data || error);
    }
  };

  /** UPDATE PAYMENT STATUS */
  const handleTogglePayment = async (school) => {
  try {
    await axios.patch(`${API_BASE_URL}/schools/${school.id}`, {
      payment_status: school.payment_status,
    });

    fetchSchools(page);
  } catch (error) {
    console.error("Payment update failed:", error.response?.data || error);
  }
};

  return (
    <Box>
      <Typography variant="h6" fontWeight="bold" gutterBottom>
        School Registration
      </Typography>

      <SchoolFilterSection
        event={event}
        status={status}
        search={search}
        setEvent={setEvent}
        setStatus={setStatus}
        setSearch={setSearch}
        handleFilter={handleFilter}
      />

      <SchoolTableSection
        schools={filteredSchools}
        page={page}
        totalPages={totalPages}
        setPage={setPage}
        onDelete={handleDeleteSchool}
        onTogglePayment={handleTogglePayment}
        loading={loading}
      />
    </Box>
  );
}






// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { Box, Typography, CircularProgress } from "@mui/material";
// import SchoolFilterSection from "../../components/admin/schoolRegistration/SchoolFilterSection";
// import SchoolTableSection from "../../components/admin/schoolRegistration/SchoolTableSection";

// export default function SchoolRegistration() {
//   const [event, setEvent] = useState("");
//   const [status, setStatus] = useState("");
//   const [search, setSearch] = useState("");

//   const [schools, setSchools] = useState([]);
//   const [filteredSchools, setFilteredSchools] = useState([]);

//   const [page, setPage] = useState(1);
//   const [totalPages, setTotalPages] = useState(1);

//   const [loading, setLoading] = useState(false);

//   const API_BASE_URL = "https://vocal-fusion.onrender.com";

//   /** Fetch schools with pagination */
//   const fetchSchools = async (page = 1) => {
//     try {
//       setLoading(true);
//       const response = await axios.get(
//         `${API_BASE_URL}/schools?page=${page}&limit=10`
//       );

//       const data = response.data.schools || response.data;

//       const mapped = data.map((s) => ({
//         id: s.id,
//         name: s.name,
//         email: s.email,
//         state: s.state,
//         coordinator: s.coordination_name,
//         paymentStatus: s.payment_status || "Unverified",
//         fullData: s, // store all fields for modal
//       }));

//       setSchools(mapped);
//       setFilteredSchools(mapped);

//       setTotalPages(response.data.totalPages || 1);
//     } catch (error) {
//       console.error("Error fetching schools:", error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchSchools(page);
//   }, [page]);

//   /** Filtering logic */
//   const handleFilter = () => {
//     let filtered = [...schools];

//     if (event)
//       filtered = filtered.filter(
//         (s) => s.event?.toLowerCase() === event.toLowerCase()
//       );

//     if (status)
//       filtered = filtered.filter(
//         (s) => s.paymentStatus.toLowerCase() === status.toLowerCase()
//       );

//     if (search.trim()) {
//       const keyword = search.toLowerCase();
//       filtered = filtered.filter(
//         (s) =>
//           s.name.toLowerCase().includes(keyword) ||
//           s.email.toLowerCase().includes(keyword) ||
//           s.state.toLowerCase().includes(keyword) ||
//           s.coordinator.toLowerCase().includes(keyword)
//       );
//     }

//     setFilteredSchools(filtered);
//   };

//   useEffect(() => {
//     handleFilter();
//   }, [event, status, search, schools]);

//   /** DELETE school */
//   const handleDeleteSchool = async (id) => {
//     // if (!window.confirm("Delete this school? This action cannot be undone.")) return;

//     try {
//       await axios.delete(`${API_BASE_URL}/schools/${id}`);
//       fetchSchools(page);
//     } catch (error) {
//       console.error("Delete failed:", error.response?.data || error);
//     }
//   };

//   /** Toggle Payment Verification */
//   const handleTogglePayment = async (school) => {
//   try {
//     await axios.put(`${API_BASE_URL}/schools/${school.id}`, {
//       payment_status: school.payment_status,
//     });

//     fetchSchools(page); // refresh list
//   } catch (error) {
//     console.error("Payment update failed:", error.response?.data || error);
//   }
// };

//   // const handleTogglePayment = async (school) => {
//   //   const newStatus =
//   //     school.paymentStatus === "Verified" ? "Unverified" : "Verified";

//   //   try {
//   //     await axios.put(`${API_BASE_URL}/schools/${school.id}`, {
//   //       payment_status: newStatus,
//   //     });

//   //     fetchSchools(page);
//   //   } catch (error) {
//   //     console.error("Payment update failed:", error);
//   //   }
//   // };

//   return (
//     <Box>
//       <Typography variant="h6" fontWeight="bold" gutterBottom>
//         School Registration
//       </Typography>

//       <SchoolFilterSection
//         event={event}
//         status={status}
//         search={search}
//         setEvent={setEvent}
//         setStatus={setStatus}
//         setSearch={setSearch}
//         handleFilter={handleFilter}
//       />

//       {loading ? (
//         <Box display="flex" justifyContent="center" p={4}>
//           <CircularProgress color="error" />
//         </Box>
//       ) : (
//         <SchoolTableSection
//           schools={filteredSchools}
//           page={page}
//           totalPages={totalPages}
//           setPage={setPage}
//           onDelete={handleDeleteSchool}
//           onTogglePayment={handleTogglePayment}
//         />
//       )}
//     </Box>
//   );
// }







// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { Box, Typography } from "@mui/material";
// import SchoolFilterSection from "../../components/admin/schoolRegistration/SchoolFilterSection";
// import SchoolTableSection from "../../components/admin/schoolRegistration/SchoolTableSection";

// export default function SchoolRegistration() {
//   const [event, setEvent] = useState("");
//   const [status, setStatus] = useState("");
//   const [search, setSearch] = useState("");

//   const [schools, setSchools] = useState([]);
//   const [filteredSchools, setFilteredSchools] = useState([]);

//   const API_BASE_URL = "https://vocal-fusion.onrender.com";

//   /** Fetch schools from backend */
//   const fetchSchools = async () => {
//     try {
//       const response = await axios.get(`${API_BASE_URL}/schools`);

//       // Convert backend school fields to your table's expected structure
//       const mapped = response.data.map((s) => ({
//         name: s.name,
//         email: s.email,
//         state: s.state,
//         coordinator: s.coordination_name || "—",
//         paymentStatus: s.payment_status || "Pending",
//         event: "choral", // ❗ Temporary. Will change once backend adds event_id.
//       }));

//       setSchools(mapped);
//       setFilteredSchools(mapped);

//     } catch (error) {
//       console.error("Error fetching schools:", error.response?.data || error);
//     }
//   };

//   useEffect(() => {
//     fetchSchools();
//   }, []);

//   /** Filter logic */
//   const handleFilter = () => {
//     let filtered = [...schools];

//     if (event)
//       filtered = filtered.filter(
//         (s) => s.event.toLowerCase() === event.toLowerCase()
//       );

//     if (status)
//       filtered = filtered.filter(
//         (s) => (s.paymentStatus || "").toLowerCase() === status.toLowerCase()
//       );

//     if (search.trim()) {
//       const keyword = search.toLowerCase();
//       filtered = filtered.filter(
//         (s) =>
//           s.name.toLowerCase().includes(keyword) ||
//           s.email.toLowerCase().includes(keyword) ||
//           s.state.toLowerCase().includes(keyword) ||
//           s.coordinator.toLowerCase().includes(keyword)
//       );
//     }

//     setFilteredSchools(filtered);
//   };

//   useEffect(() => {
//     handleFilter();
//   }, [event, status, search, schools]);

//   return (
//     <Box>
//       <Typography variant="h6" fontWeight="bold" gutterBottom>
//         School Registration
//       </Typography>

//       <SchoolFilterSection
//         event={event}
//         status={status}
//         search={search}
//         setEvent={setEvent}
//         setStatus={setStatus}
//         setSearch={setSearch}
//         handleFilter={handleFilter}
//       />

//       <SchoolTableSection schools={filteredSchools} />
//     </Box>
//   );
// }






// import React, { useState, useEffect } from "react";
// import { Box, Typography } from "@mui/material";
// import SchoolFilterSection from "../../components/admin/schoolRegistration/SchoolFilterSection";
// import SchoolTableSection from "../../components/admin/schoolRegistration/SchoolTableSection";

// export default function SchoolRegistration() {
//   const [event, setEvent] = useState("");
//   const [status, setStatus] = useState("");
//   const [search, setSearch] = useState("");
//   const [filteredSchools, setFilteredSchools] = useState([]);

//   const schools = [
//     {
//       name: "Gracefield College",
//       email: "gracefieldcollege@gmail.com",
//       state: "Abuja",
//       coordinator: "Adenuga Bode T.",
//       paymentStatus: "Unverified",
//       event: "choral",
//     },
//     {
//       name: "Gracefield College",
//       email: "gracefieldcollege@gmail.com",
//       state: "Abuja",
//       coordinator: "Adenuga Bode T.",
//       paymentStatus: "Verified",
//       event: "solo",
//     },
//     {
//       name: "Gracefield College",
//       email: "gracefieldcollege@gmail.com",
//       state: "Abuja",
//       coordinator: "Adenuga Bode T.",
//       paymentStatus: "Verified",
//       event: "choral",
//     },
//     {
//       name: "Gracefield College",
//       email: "gracefieldcollege@gmail.com",
//       state: "Abuja",
//       coordinator: "Adenuga Bode T.",
//       paymentStatus: "Verified",
//       event: "choral",
//     },
//     {
//       name: "Another College",
//       email: "anothercollege@gmail.com",
//       state: "Lagos",
//       coordinator: "John Doe",
//       paymentStatus: "Verified",
//       event: "solo",
//     },
//   ];

//   // Filter logic
//   const handleFilter = () => {
//     let filtered = schools;

//     // Filter by event (if selected)
//     if (event) {
//       filtered = filtered.filter(
//         (school) => school.event.toLowerCase() === event.toLowerCase()
//       );
//     }

//     // Filter by payment status (if selected)
//     if (status) {
//       filtered = filtered.filter(
//         (school) => school.paymentStatus.toLowerCase() === status.toLowerCase()
//       );
//     }

//     // Filter by keyword search (name, email, state, or coordinator)
//     if (search.trim()) {
//       const keyword = search.toLowerCase();
//       filtered = filtered.filter(
//         (school) =>
//           school.name.toLowerCase().includes(keyword) ||
//           school.email.toLowerCase().includes(keyword) ||
//           school.state.toLowerCase().includes(keyword) ||
//           school.coordinator.toLowerCase().includes(keyword)
//       );
//     }

//     setFilteredSchools(filtered);
//   };

//   // Automatically show all schools when page loads or filters reset
//   useEffect(() => {
//         handleFilter();
//     }, [event, status, search]);

// //   useEffect(() => {
// //     setFilteredSchools(schools);
// //   }, []);

//   return (
//     <Box>
//       <Typography variant="h6" fontWeight="bold" gutterBottom>
//         School Registration
//       </Typography>

//       {/* Filter Section */}
//       <SchoolFilterSection
//         event={event}
//         status={status}
//         search={search}
//         setEvent={setEvent}
//         setStatus={setStatus}
//         setSearch={setSearch}
//         handleFilter={handleFilter}
//       />

//       {/* Table Section */}
//       <SchoolTableSection schools={filteredSchools} />
//     </Box>
//   );
// }
