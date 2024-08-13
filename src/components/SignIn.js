import React, { useState } from "react";
import { Container, Box, TextField, Button, Typography, FormControlLabel, Checkbox, Link, Snackbar } from "@mui/material";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const SignIn = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");

  const handleSignIn = async (e) => {
    e.preventDefault();

    // Basic form validation
    if (!username || !password) {
      setSnackbarMessage("Username and Password are required.");
      setOpenSnackbar(true);
      return;
    }

    try {
      const response = await axios.get("http://localhost:8080/users");
      const user = response.data.find((user) => user.username === username);

      if (user) {
        if (user.password === password) {
          navigate("/home");
        } else {
          setSnackbarMessage("Invalid password");
          setOpenSnackbar(true);
        }
      } else {
        setSnackbarMessage("Invalid username");
        setOpenSnackbar(true);
      }
    } catch (error) {
      console.error("Sign-in error:", error.response || error.message);
      setSnackbarMessage("An error occurred. Please try again.");
      setOpenSnackbar(true);
    }
  };

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  return (
    <Container
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        backgroundImage:
          "url(https://www.ultraimagehub.com/wallpapers/tr:flp-false,gx-0.1,gy-1,q-75,rh-3264,rw-5824,th-1080,tw-1920/1247493864592248883.jpeg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Box
        sx={{
          width: "420px",
          background: "rgba(255, 255, 255, 0.1)",
          border: "2px solid rgba(255, 255, 255, 0.1)",
          backdropFilter: "blur(10px)",
          color: "#fff",
          borderRadius: "10px",
          padding: "30px 40px",
          boxSizing: "border-box",
        }}
      >
        <Typography variant="h1" align="center" sx={{ fontSize: "36px", marginBottom: "30px" }}>
          Login
        </Typography>
        <Box sx={{ position: "relative", marginBottom: "30px" }}>
          <TextField
            label="Username"
            variant="outlined"
            fullWidth
            value={username}
            name="username"
            onChange={(e) => setUsername(e.target.value)}
            sx={{
              "& .MuiOutlinedInput-root": {
                borderRadius: "40px",
                background: "transparent",
                border: "2px solid rgba(255, 255, 255, 0.2)",
                "& fieldset": { border: "none" },
                "& input": {
                  color: "#fff",
                  padding: "20px 45px 20px 20px",
                },
              },
            }}
          />
        </Box>
        <Box sx={{ position: "relative", marginBottom: "30px" }}>
          <TextField
            label="Password"
            type="password"
            variant="outlined"
            fullWidth
            value={password}
            name="password"
            onChange={(e) => setPassword(e.target.value)}
            sx={{
              "& .MuiOutlinedInput-root": {
                borderRadius: "40px",
                background: "transparent",
                border: "2px solid rgba(255, 255, 255, 0.2)",
                "& fieldset": { border: "none" },
                "& input": {
                  color: "#fff",
                  padding: "20px 45px 20px 20px",
                },
              },
            }}
          />
        </Box>
        <Box sx={{ display: "flex", justifyContent: "space-between", marginBottom: "15px" }}>
          <FormControlLabel
            control={<Checkbox sx={{ color: "#fff" }} />}
            label="Remember me"
            sx={{ fontSize: "14.5px", color: "#fff" }}
          />
          <Link href="#" sx={{ fontSize: "14.5px", color: "#fff", textDecoration: "none" }}>
            Forgot Password?
          </Link>
        </Box>
        <Button
          variant="contained"
          color="primary"
          fullWidth
          sx={{
            height: "45px",
            background: "#fff",
            borderRadius: "40px",
            boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
            fontSize: "20px",
            fontWeight: 600,
            color: "#333",
            mb: 2,
          }}
          onClick={handleSignIn}
        >
          Login
        </Button>
        <Typography align="center" sx={{ fontSize: "14.5px", mb: 2 }}>
          Don't have an account?{" "}
          <Link href="signup" sx={{ color: "#fff", textDecoration: "none", fontWeight: 600 }}>
            Register
          </Link>
        </Typography>
      </Box>

      {/* Snackbar for form submission success message */}
      <Snackbar
        open={openSnackbar}
        onClose={handleCloseSnackbar}
        message={snackbarMessage}
        autoHideDuration={4000}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      />
    </Container>
  );
};

export default SignIn;
