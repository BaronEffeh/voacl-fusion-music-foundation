import React, { useEffect, useState } from "react";
import axios from "axios";
import PageBanner from "../../components/public/common/PageBanner";
import { Box, Divider, Container, CircularProgress, Typography } from "@mui/material";
import SignaturePrograms from "../../components/public/events/SignaturePrograms";
import EventDetail from "../../components/public/events/EventDetail";
import Expandtion from "../../components/public/events/Expandtion";
import { showError } from "../../utils/toastConfig";

const Events = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(false);
  const API_BASE_URL = "https://vocal-fusion.onrender.com";

  // Fetch events from API
  useEffect(() => {
    const fetchEvents = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`${API_BASE_URL}/events`);
        const eventData = response.data || [];

        // Format date/time for display
        const formattedEvents = eventData.map((ev) => {
          const dateObj = new Date(ev.date);
          return {
            id: ev.id || ev._id,
            title: ev.title,
            description: ev.description || "Join us for this exciting event!",
            buttonText: "Register",
            buttonColor: "error",
            eventInfo: {
              status: "Upcoming",
              location: ev.location || "TBA",
              date: dateObj.toLocaleDateString(undefined, {
                year: "numeric",
                month: "long",
                day: "numeric",
              }),
              time: dateObj.toLocaleTimeString(undefined, {
                hour: "2-digit",
                minute: "2-digit",
              }),
            },
          };
        });

        setEvents(formattedEvents);
      } catch (error) {
        console.error("Error fetching events:", error);
        showError("Failed to load events. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  return (
    <Box>
      <PageBanner
        title="Beyond the Stage: Where Music Keeps Growing"
        subtitle="From hands-on vocal workshops to immersive camps and celebration concerts, 
        our events help young voices thrive beyond the classroom and throughout the year."
        backgroundImage="/events-banner.jpg"
      />

      <Box>
        <SignaturePrograms />
        <Divider />

        <Container sx={{ pt: 6 }}>
          {loading ? (
            <Box display="flex" justifyContent="center" py={5}>
              <CircularProgress color="error" />
            </Box>
          ) : events.length === 0 ? (
            <Typography align="center" color="text.secondary" py={4}>
              No events available at the moment.
            </Typography>
          ) : (
            events.map((event, index) => (
              <EventDetail
                key={event.id}
                {...event}
                reverse={index % 2 === 1}
                index={index}
                isLast={index === events.length - 1}
              />
            ))
          )}
        </Container>

        <Expandtion />
        <Divider />
      </Box>
    </Box>
  );
};

export default Events;





// import React from "react";
// import PageBanner from "../../components/public/common/PageBanner";
// import { Box, Divider, Container } from "@mui/material";
// import SignaturePrograms from "../../components/public/events/SignaturePrograms";
// import EventDetail from "../../components/public/events/EventDetail";
// import Expandtion from "../../components/public/events/Expandtion";

// const events = [
//   {
//     id: 1,
//     title: "Vocal Training Seminars",
//     description:
//       "These one-day seminars provide practical, hands-on training led by experienced vocalists, choir directors, and music educators. Schools are encouraged to send their choir leaders and student representatives for focused learning, collaboration, and skill-building. The seminar also offers valuable exposure to the Schools Choral Challenge Competition—benefiting both partner schools and newly enrolled participants.",
//     buttonText: "Register for free",
//     buttonColor: "error",
//     eventInfo: {
//       status: "Upcoming",
//       location: "Transcorp Hilton, Abuja",
//       date: "25th May, 2025",
//       time: "2:00pm",
//     },
//   },
//   {
//     id: 2,
//     title: "Schools Choral Challenge",
//     description:
//       "The School’s Choral Challenge is Vocal Fusion’s flagship competition, bringing together secondary school choirs from across Nigeria. It offers young voices a vibrant platform to perform, grow, and connect through the power of music. From regional qualifiers to a thrilling grand finale, the excitement builds with every stage. Winners receive awards, recognition, and a feature in the prestigious Winners Concert. It’s not just about singing — it’s about creating unforgettable musical experiences.",
//     buttonText: "Join the competition",
//     buttonColor: "error",
//     eventInfo: {
//       status: "Upcoming",
//       location: "Transcorp Hilton, Abuja",
//       date: "25th May, 2025",
//       time: "2:00pm",
//     },
//   },
//   {
//     id: 3,
//     title: "The Winners Concert",
//     description:
//       "This event showcases the top choirs and soloists from the Choral Challenge, bringing together the most outstanding voices from schools across Nigeria. It’s a night of celebration, powerful performances, and well-deserved recognition — attended by school representatives, proud parents, music professionals, and key partners. Beyond the music, the event highlights the hard work, discipline, and growth of every student involved, making it a truly unforgettable experience for all.",
//     buttonText: "Be an audience",
//     buttonColor: "error",
//     eventInfo: {
//       status: "Upcoming",
//       location: "Transcorp Hilton, Abuja",
//       date: "25th May, 2025",
//       time: "2:00pm",
//     },
//   },
//   {
//     id: 4,
//     title: "Holiday Music Camps",
//     description:
//       "An unforgettable 7–10 day experience designed for selected students from partner schools. This immersive camp brings students together from diverse cultural and regional backgrounds to rehearse, perform, and grow in unity. With accommodation and meals fully provided, participants engage in camp-wide performances, friendly competitions, and collaborative learning sessions. The experience is designed to build not just musical depth, but also leadership, discipline, and lifelong connections.",
//     buttonText: null,
//     eventInfo: {
//       status: "Coming Soon, Stay Tuned!",
//       location: "-",
//       date: "-",
//       time: "-",
//     },
//   },
// ];

// const Events = () => {
//   return (
//     <Box>
//       <PageBanner
//         title="Beyond the Stage: Where Music Keeps Growing"
//         subtitle="From hands-on vocal workshops that sharpen technique, to immersive holiday music 
//         camps that foster friendship and creativity, and celebration concerts that honour 
//         excellence — our events are designed to help young voices thrive beyond the classroom and 
//         throughout the year."
//         backgroundImage="/events-banner.jpg"
//       />
//       <Box>
//         <SignaturePrograms />
//         <Divider />

//         <Container sx={{ pt: 6 }}>

//       {events.map((event, index) => (
//         <EventDetail key={event.id} {...event} reverse={index % 2 === 1} index={index} />
//         // <EventDetail key={event.id} {...event} reverse={index % 2 === 1} />
//       ))}      
//     </Container>

//       <Expandtion />
//       <Divider />
      
//       </Box>
//     </Box>
//   );
// };

// export default Events;
