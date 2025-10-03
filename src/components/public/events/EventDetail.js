import React from "react";
import { Box, Typography, Button, Card, CardContent, Divider } from "@mui/material";

const colors = ["#F3B2E329", "#F4BD6F29", "#FFB3AF29", "#62400029"]; 
const outlineColor = ["#814C7729", "#814C7729", "#814C7729", "#814C7729"];

const EventDetail = ({ title, description, buttonText, buttonColor, eventInfo, reverse, index, isLast }) => {
  return (
    <>
      <Box
        display="flex"
        flexDirection={{ xs: "column", md: reverse ? "row-reverse" : "row" }}
        alignItems="stretch"
        justifyContent="space-between"
        mb={6}
      >
        {/* Text Section */}
        <Box flex={{ xs: 1, md: 2 }} p={3}>
          <Typography variant="h5" gutterBottom>
            {title}
          </Typography>
          <Typography variant="body1" paragraph>
            {description}
          </Typography>
          {buttonText && (
            <Button
              variant="contained"
              color={buttonColor || "primary"}
              sx={{ textTransform: "none" }}
            >
              {buttonText}
            </Button>
          )}
        </Box>

        {/* Event Card Section */}
        <Box
          flex={{ xs: 1, md: 1 }}
          p={3}
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <Card
            sx={{
              maxWidth: 320,
              width: "100%",
              height: "252px",
              backgroundColor: colors[index % colors.length],
              border: "1px solid",
              borderColor: outlineColor[index % outlineColor.length],
              borderRadius: "16px",
              justifyContent: "center",
              alignItems: "center",
              p: 2,
            }}
          >
            <CardContent>
              <Typography variant="subtitle1" color="text.secondary" gutterBottom>
                {eventInfo.status}
              </Typography>
              <Divider sx={{ mb: 1 }} />
              <Typography variant="body1">
                <strong>Location:</strong> {eventInfo.location}
              </Typography>
              <Typography variant="body1">
                <strong>Date:</strong> {eventInfo.date}
              </Typography>
              <Typography variant="body1">
                <strong>Time:</strong> {eventInfo.time}
              </Typography>
            </CardContent>
          </Card>
        </Box>
      </Box>

      {/* Full-width Divider (skip on last item if needed) */}
      {!isLast && (
        <Divider
          sx={{
            width: "100vw",
            position: "relative",
            left: "50%",
            transform: "translateX(-50%)",
            my: 4,
          }}
        />
      )}
    </>
  );
};

export default EventDetail;






// import React from "react";
// import { Box, Typography, Button, Card, CardContent, Divider } from "@mui/material";

// const colors = ["#F3B2E329", "#F4BD6F29", "#FFB3AF29", "#62400029"]; 
// const outlineColor = ["#814C7729", "#814C7729", "#814C7729", "#814C7729"];

// const EventDetail = ({ title, description, buttonText, buttonColor, eventInfo, reverse, index }) => {
//   return (
//     <>
//     <Box
//       display="flex"
//       flexDirection={{ xs: "column", md: reverse ? "row-reverse" : "row" }}
//       alignItems="stretch"
//       justifyContent="space-between"
//       mb={6}
//     >
//       {/* Text Section */}
//       <Box flex={{ xs: 1, md: 2 }} p={3}>
//         <Typography variant="h5" gutterBottom>
//           {title}
//         </Typography>
//         <Typography variant="body1" paragraph>
//           {description}
//         </Typography>
//         {buttonText && (
//           <Button variant="contained" color={buttonColor || "primary"} sx={{ textTransform: "none"}}>
//             {buttonText}
//           </Button>
//         )}
//       </Box>

//       {/* Event Card Section */}
//       <Box flex={{ xs: 1, md: 1 }} p={3} display="flex" justifyContent="center" alignItems="center">
//         <Card
//           sx={{
//             maxWidth: 320,
//             width: "100%",
//             height: "252px",
//             backgroundColor: colors[index % colors.length], // rotate bg color
//             border: "1px solid",
//             borderColor: outlineColor[index % outlineColor.length],
//             borderRadius: "16px",
//             justifyContent: "center",
//             alignItems: "center",
//             p: 2
//           }}
//         >
//           <CardContent>
//             <Typography variant="subtitle1" color="text.secondary" gutterBottom>
//               {eventInfo.status}
//             </Typography>
//             <Divider sx={{ mb: 1 }} />
//             <Typography variant="body1">
//               <strong>Location:</strong> {eventInfo.location}
//             </Typography>
//             <Typography variant="body1">
//               <strong>Date:</strong> {eventInfo.date}
//             </Typography>
//             <Typography variant="body1">
//               <strong>Time:</strong> {eventInfo.time}
//             </Typography>
//           </CardContent>
//         </Card>
//       </Box>
//     </Box>
//     <Divider sx={{ my: 4 }} />
//     </>
//   );
// };

// export default EventDetail;






// import React from "react";
// import { Box, Typography, Button, Card, CardContent, Divider } from "@mui/material";

// const EventDetail = ({ title, description, buttonText, buttonColor, eventInfo, reverse }) => {
//   return (
//     <Box
//       display="flex"
//       flexDirection={{ xs: "column", md: reverse ? "row-reverse" : "row" }}
//       alignItems="stretch"
//       justifyContent="space-between"
//       mb={6}
//     >
//       {/* Text Section */}
//       <Box flex={1} p={3}>
//         <Typography variant="h5" fontWeight="bold" gutterBottom>
//           {title}
//         </Typography>
//         <Typography variant="body1" paragraph>
//           {description}
//         </Typography>
//         {buttonText && (
//           <Button variant="contained" color={buttonColor || "primary"}>
//             {buttonText}
//           </Button>
//         )}
//       </Box>

//       {/* Event Card Section */}
//       <Box flex={1} p={3} display="flex" justifyContent="center" alignItems="center">
//         <Card sx={{ maxWidth: 320, width: "100%", height: "252px" }}>
//           <CardContent>
//             <Typography variant="subtitle2" color="text.secondary" gutterBottom>
//               {eventInfo.status}
//             </Typography>
//             <Divider />
//             <Typography variant="body2">
//               <strong>Location:</strong> {eventInfo.location}
//             </Typography>
//             <Typography variant="body2">
//               <strong>Date:</strong> {eventInfo.date}
//             </Typography>
//             <Typography variant="body2">
//               <strong>Time:</strong> {eventInfo.time}
//             </Typography>
//           </CardContent>
//         </Card>
//       </Box>
//     </Box>
//   );
// };

// export default EventDetail;





// import React from "react";
// import { Box, Typography, Button, Card, CardContent, Divider } from "@mui/material";

// const EventDetail = ({ 
//   title, 
//   description, 
//   buttonText, 
//   buttonColor = "error", 
//   onButtonClick, 
//   eventInfo 
// }) => {
//   return (
//     <Box
//       sx={{
//         display: "grid",
//         gridTemplateColumns: { xs: "1fr", md: "2fr 1fr" },
//         gap: 4,
//         p: { xs: 2, md: 4 },
//         mb: 4,
//         borderRadius: "12px",
//         bgcolor: "#fff",
//         boxShadow: "0px 2px 8px rgba(0,0,0,0.05)",
//       }}
//     >
//       {/* Left section */}
//       <Box>
//         <Typography variant="h6" fontWeight="bold" gutterBottom>
//           {title}
//         </Typography>
//         <Typography variant="body1" sx={{ mb: 3 }}>
//           {description}
//         </Typography>
//         {buttonText && (
//           <Button
//             variant="contained"
//             color={buttonColor}
//             onClick={onButtonClick}
//             sx={{
//               fontWeight: "bold",
//               borderRadius: "12px",
//               px: 3,
//               py: 1.2,
//               textTransform: "none",
//             }}
//           >
//             {buttonText}
//           </Button>
//         )}
//       </Box>

//       {/* Right section */}
//       <Card
//         sx={{
//           bgcolor: "#fff0f5", // light pink background
//           borderRadius: "12px",
//           boxShadow: "none",
//           height: "fit-content",
//         }}
//       >
//         <CardContent>
//           <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
//             {eventInfo.status || "Upcoming"}
//           </Typography>
//           <Divider sx={{ mb: 2 }} />
//           {eventInfo.location && (
//             <Typography variant="body2" gutterBottom>
//               <strong>Location:</strong> {eventInfo.location}
//             </Typography>
//           )}
//           {eventInfo.date && (
//             <Typography variant="body2" gutterBottom>
//               <strong>Date:</strong> {eventInfo.date}
//             </Typography>
//           )}
//           {eventInfo.time && (
//             <Typography variant="body2">
//               <strong>Time:</strong> {eventInfo.time}
//             </Typography>
//           )}
//           {(!eventInfo.location && !eventInfo.date && !eventInfo.time) && (
//             <Typography variant="body2">Coming Soon, Stay Tuned!</Typography>
//           )}
//         </CardContent>
//       </Card>
//     </Box>
//   );
// };

// export default EventDetail;
