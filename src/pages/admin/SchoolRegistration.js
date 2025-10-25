import React, { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import SchoolFilterSection from "../../components/admin/schoolRegistration/SchoolFilterSection";
import SchoolTableSection from "../../components/admin/schoolRegistration/SchoolTableSection";

export default function SchoolRegistration() {
  const [event, setEvent] = useState("");
  const [status, setStatus] = useState("");
  const [search, setSearch] = useState("");
  const [filteredSchools, setFilteredSchools] = useState([]);

  const schools = [
    {
      name: "Gracefield College",
      email: "gracefieldcollege@gmail.com",
      state: "Abuja",
      coordinator: "Adenuga Bode T.",
      paymentStatus: "Unverified",
      event: "choral",
    },
    {
      name: "Gracefield College",
      email: "gracefieldcollege@gmail.com",
      state: "Abuja",
      coordinator: "Adenuga Bode T.",
      paymentStatus: "Verified",
      event: "solo",
    },
    {
      name: "Gracefield College",
      email: "gracefieldcollege@gmail.com",
      state: "Abuja",
      coordinator: "Adenuga Bode T.",
      paymentStatus: "Verified",
      event: "choral",
    },
    {
      name: "Gracefield College",
      email: "gracefieldcollege@gmail.com",
      state: "Abuja",
      coordinator: "Adenuga Bode T.",
      paymentStatus: "Verified",
      event: "choral",
    },
    {
      name: "Another College",
      email: "anothercollege@gmail.com",
      state: "Lagos",
      coordinator: "John Doe",
      paymentStatus: "Verified",
      event: "solo",
    },
  ];

  // Filter logic
  const handleFilter = () => {
    let filtered = schools;

    // Filter by event (if selected)
    if (event) {
      filtered = filtered.filter(
        (school) => school.event.toLowerCase() === event.toLowerCase()
      );
    }

    // Filter by payment status (if selected)
    if (status) {
      filtered = filtered.filter(
        (school) => school.paymentStatus.toLowerCase() === status.toLowerCase()
      );
    }

    // Filter by keyword search (name, email, state, or coordinator)
    if (search.trim()) {
      const keyword = search.toLowerCase();
      filtered = filtered.filter(
        (school) =>
          school.name.toLowerCase().includes(keyword) ||
          school.email.toLowerCase().includes(keyword) ||
          school.state.toLowerCase().includes(keyword) ||
          school.coordinator.toLowerCase().includes(keyword)
      );
    }

    setFilteredSchools(filtered);
  };

  // Automatically show all schools when page loads or filters reset
  useEffect(() => {
        handleFilter();
    }, [event, status, search]);

//   useEffect(() => {
//     setFilteredSchools(schools);
//   }, []);

  return (
    <Box>
      <Typography variant="h6" fontWeight="bold" gutterBottom>
        School Registration
      </Typography>

      {/* Filter Section */}
      <SchoolFilterSection
        event={event}
        status={status}
        search={search}
        setEvent={setEvent}
        setStatus={setStatus}
        setSearch={setSearch}
        handleFilter={handleFilter}
      />

      {/* Table Section */}
      <SchoolTableSection schools={filteredSchools} />
    </Box>
  );
}






// import React, { useState } from "react";
// import { Box, Typography } from "@mui/material";
// import SchoolFilterSection from "../../components/admin/schoolRegistration/SchoolFilterSection";
// import SchoolTableSection from "../../components/admin/schoolRegistration/SchoolTableSection";

// export default function SchoolRegistration() {
//   const [event, setEvent] = useState("");
//   const [status, setStatus] = useState("");
//   const [search, setSearch] = useState("");

//   const schools = [
//     {
//       name: "Gracefield College",
//       email: "gracefieldcollege@gmail.com",
//       state: "Abuja",
//       coordinator: "Adenuga Bode T.",
//       paymentStatus: "Unverified",
//     },
//     {
//       name: "Gracefield College",
//       email: "gracefieldcollege@gmail.com",
//       state: "Abuja",
//       coordinator: "Adenuga Bode T.",
//       paymentStatus: "Verified",
//     },
//     {
//       name: "Gracefield College",
//       email: "gracefieldcollege@gmail.com",
//       state: "Abuja",
//       coordinator: "Adenuga Bode T.",
//       paymentStatus: "Verified",
//     },
//     {
//       name: "Gracefield College",
//       email: "gracefieldcollege@gmail.com",
//       state: "Abuja",
//       coordinator: "Adenuga Bode T.",
//       paymentStatus: "Verified",
//     },
//     {
//       name: "Another College",
//       email: "gracefieldcollege@gmail.com",
//       state: "Abuja",
//       coordinator: "Adenuga Bode T.",
//       paymentStatus: "Verified",
//     },
//   ];

//   const handleFilter = () => {
//     console.log("Filters:", { event, status, search });
//   };

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

//       <SchoolTableSection schools={schools} />
//     </Box>
//   );
// }





// import React from "react";
// import { Box } from "@mui/material";
// import SchoolRegistration from "../../components/admin/schoolRegistration/SchoolRegistration";

// const SchoolRegistration = () => {
//     return (
//         <Box>
//             <SchoolRegistration />
//         </Box>
//     )
// }