import React, { useState } from 'react';
import { Container, Typography, TextField, Button, Grid, Paper, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';
import { styled } from '@mui/system';
import BadmintonImage from '../assets/badminton-image.jpg';

import SideImage from '../assets/bad1side.jpeg'; // Import the side image
import axios from 'axios';

const BookPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  backgroundColor: theme.palette.background.paper,
  boxShadow: theme.shadows[3],
}));

const ImageContainer = styled('div')({
  width: '100%',
  height: '250px',
  marginBottom: '20px',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  borderRadius: '8px',
});

const SideImageContainer = styled('div')({
  width: '100%',
  height: '100%',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  borderRadius: '8px',
  minHeight: '500px', // Set the minimum height for the side image
});

const BookBadminton = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const [open, setOpen] = useState(false); // State to control dialog visibility

  const handleSubmit = (e) => {
    e.preventDefault();
      axios.post('http://localhost:8080/pragapostAll', formData)
    .then(response => {
      console.log(response.data);
      setOpen(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        date: '',
        time: '',
        duration: '',
      });
    })
    .catch(error => {
      console.error('There was an error!', error);
    });
    console.log(formData);
  };

  const handleClose = () => {
    setOpen(false); // Close the dialog
  };

  return (
    <Container sx={{ py: 4 }}>
      <Typography variant="h3" align="center" paddingTop="80px" gutterBottom>
        Book Your Badminton Court
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        {/* Grid item for the side image */}
        <Grid item xs={12} md={5}>
          <SideImageContainer style={{ backgroundImage: `url(${SideImage})` }} />
        </Grid>

        {/* Grid item for the form */}
        <Grid item xs={12} md={7}>
          <BookPaper>
            <ImageContainer style={{ backgroundImage: `url(${BadmintonImage})` }} />
            <Typography variant="h6" gutterBottom>
              Badminton Court Details
            </Typography>
            <Typography paragraph>
              Our badminton courts are available for booking with flexible time slots. Enjoy high-quality nets and flooring for an excellent game experience.
            </Typography>
            <form onSubmit={handleSubmit}>
              <TextField
                label="Name"
                variant="outlined"
                fullWidth
                margin="normal"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
              <TextField
                label="Email"
                variant="outlined"
                fullWidth
                margin="normal"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <TextField
                label="Phone"
                variant="outlined"
                fullWidth
                margin="normal"
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
              />
              <TextField
                label="Date"
                variant="outlined"
                fullWidth
                margin="normal"
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                InputLabelProps={{ shrink: true }}
                required
              />
              <TextField
                label="Time"
                variant="outlined"
                fullWidth
                margin="normal"
                type="time"
                name="time"
                value={formData.time}
                onChange={handleChange}
                InputLabelProps={{ shrink: true }}
                required
              />
              <TextField
                label="Duration (in hours)"
                variant="outlined"
                fullWidth
                margin="normal"
                type="number"
                name="duration"
                value={formData.duration}
                onChange={handleChange}
                required
              />
              <Button variant="contained" color="primary" type="submit" sx={{ mt: 2 }}>
                Book Now
              </Button>
            </form>
          </BookPaper>
        </Grid>
      </Grid>
      {/* Dialog for success message */}
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Booking Successful</DialogTitle>
        <DialogContent>
          <Typography>Your booking has been successfully completed!</Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
};

export default BookBadminton;
