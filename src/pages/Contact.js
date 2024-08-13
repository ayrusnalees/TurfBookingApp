// import React, { useState } from "react";
// import { TextField, Button, Grid, Typography, Box, Snackbar } from "@mui/material";
// import { Instagram, Email, Facebook, Twitter, Phone, LocationOn } from "@mui/icons-material";

// const ContactUsPage = () => {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [message, setMessage] = useState("");
//   const [openSnackbar, setOpenSnackbar] = useState(false);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Name:", name);
//     console.log("Email:", email);
//     console.log("Message:", message);

//     // Show the Snackbar after form submission
//     setOpenSnackbar(true);

//     // Reset form fields
//     setName("");
//     setEmail("");
//     setMessage("");
//   };

//   const handleCloseSnackbar = () => {
//     setOpenSnackbar(false);
//   };

//   return (
//     <Box
//       sx={{
        
//         backgroundColor: "#f5f5f5",
//         padding: "200px",
//         borderRadius: "8px",
//         maxWidth: "800px",
//         margin: "auto",
//         boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.1)",
//       }}
//     >
//       <Typography variant="h4" component="h1" align="center" gutterBottom>
//         Contact Us
//       </Typography>
//       <Typography variant="body1" align="center" gutterBottom>
//         Feel free to contact us any time. We will get back to you as soon as we can!
//       </Typography>
//       <form onSubmit={handleSubmit}>
//         <Grid container spacing={2}>
//           <Grid item xs={12}>
//             <TextField
//               label="Name"
//               variant="outlined"
//               fullWidth
//               value={name}
//               onChange={(e) => setName(e.target.value)}
//             />
//           </Grid>
//           <Grid item xs={12}>
//             <TextField
//               label="Email"
//               type="email"
//               variant="outlined"
//               fullWidth
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//             />
//           </Grid>
//           <Grid item xs={12}>
//             <TextField
//               label="Message"
//               variant="outlined"
//               fullWidth
//               multiline
//               rows={4}
//               value={message}
//               onChange={(e) => setMessage(e.target.value)}
//             />
//           </Grid>
//           <Grid item xs={12} align="center">
//             <Button
//               type="submit"
//               variant="contained"
//               color="primary"
//               sx={{ borderRadius: "20px", padding: "10px 20px", fontSize: "16px" }}
//             >
//               Send Message
//             </Button>
//           </Grid>
//         </Grid>
//       </form>
//       <Box sx={{ marginTop: "40px" }}>
//         <Typography variant="h6" component="h2" gutterBottom>
//           Contact Info
//         </Typography>
//         <Box sx={{ display: "flex", alignItems: "center", marginBottom: "10px" }}>
//           <Phone sx={{ marginRight: "10px" }} />
//           <Typography>+91 9080690743</Typography>
//         </Box>
//         <Box sx={{ display: "flex", alignItems: "center", marginBottom: "10px" }}>
//           <Email sx={{ marginRight: "10px" }} />
//           <Typography>info@goturf.com</Typography>
//         </Box>
//         <Box sx={{ display: "flex", alignItems: "center", marginBottom: "10px" }}>
//           <LocationOn sx={{ marginRight: "10px" }} />
//           <Typography>
//             Sri Krishna College, Coimbatore, 641008
//           </Typography>
//         </Box>
//         <Box sx={{ display: "flex", justifyContent: "center ", marginTop: "20px" }}>
//           <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" style={{ margin: "0 10px" }}>
//             <Facebook sx={{ color: "#4267B2", fontSize: "30px" }} />
//           </a>
//           <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" style={{ margin: "0 10px" }}>
//             <Instagram sx={{ color: "#E1306C", fontSize: "30px" }} />
//           </a>
//           <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" style={{ margin: "0 10px" }}>
//             <Twitter sx={{ color: "#1DA1F2", fontSize: "30px" }} />
//           </a>
//         </Box>
//       </Box>

//       {/* Snackbar for form submission success message */}
//       <Snackbar
//         open={openSnackbar}
//         onClose={handleCloseSnackbar}
//         message="Thanks for contacting us!"
//         autoHideDuration={4000}
//         anchorOrigin={{ vertical: "top", horizontal: "center" }}
//       />
//     </Box>
//   );
// };

// export default ContactUsPage;

import React, { useState } from "react";
import { TextField, Button, Grid, Typography, Box, Snackbar } from "@mui/material";
import { Instagram, Email, Facebook, Twitter, Phone, LocationOn } from "@mui/icons-material";
import axios from "axios";

const ContactUsPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [openSnackbar, setOpenSnackbar] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const contactData = {
      name,
      email,
      message,
    };

    try {
      const response = await axios.post("http://localhost:8080/suripostAll", contactData);
      console.log(response.data);
      setOpenSnackbar(true);
      // Reset form fields
      setName("");
      setEmail("");
      setMessage("");
    } catch (error) {
      console.error("There was an error submitting the form!", error);
    }
  };

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  return (
    <Box
      sx={{
        backgroundColor: "#f5f5f5",
        padding: "200px",
        borderRadius: "8px",
        maxWidth: "800px",
        margin: "auto",
        boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.1)",
      }}
    >
      <Typography variant="h4" component="h1" align="center" gutterBottom>
        Contact Us
      </Typography>
      <Typography variant="body1" align="center" gutterBottom>
        Feel free to contact us any time. We will get back to you as soon as we can!
      </Typography>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              label="Name"
              variant="outlined"
              fullWidth
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Email"
              type="email"
              variant="outlined"
              fullWidth
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Message"
              variant="outlined"
              fullWidth
              multiline
              rows={4}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />
          </Grid>
          <Grid item xs={12} align="center">
            <Button
              type="submit"
              variant="contained"
              color="primary"
              sx={{ borderRadius: "20px", padding: "10px 20px", fontSize: "16px" }}
            >
              Send Message
            </Button>
          </Grid>
        </Grid>
      </form>
      <Box sx={{ marginTop: "40px" }}>
        <Typography variant="h6" component="h2" gutterBottom>
          Contact Info
        </Typography>
        <Box sx={{ display: "flex", alignItems: "center", marginBottom: "10px" }}>
          <Phone sx={{ marginRight: "10px" }} />
          <Typography>+91 9080690743</Typography>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center", marginBottom: "10px" }}>
          <Email sx={{ marginRight: "10px" }} />
          <Typography>info@goturf.com</Typography>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center", marginBottom: "10px" }}>
          <LocationOn sx={{ marginRight: "10px" }} />
          <Typography>Sri Krishna College, Coimbatore, 641008</Typography>
        </Box>
        <Box sx={{ display: "flex", justifyContent: "center", marginTop: "20px" }}>
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" style={{ margin: "0 10px" }}>
            <Facebook sx={{ color: "#4267B2", fontSize: "30px" }} />
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" style={{ margin: "0 10px" }}>
            <Instagram sx={{ color: "#E1306C", fontSize: "30px" }} />
          </a>
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" style={{ margin: "0 10px" }}>
            <Twitter sx={{ color: "#1DA1F2", fontSize: "30px" }} />
          </a>
        </Box>
      </Box>

      <Snackbar
        open={openSnackbar}
        onClose={handleCloseSnackbar}
        message="Thanks for contacting us!"
        autoHideDuration={4000}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      />
    </Box>
  );
};

export default ContactUsPage;

