import React, { useState } from 'react';
import { Container, Typography,  TextField, Button, Grid, Paper } from '@mui/material';
import { styled } from '@mui/system';
import CricketImage from '../assets/cricket-image.jpg';


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

const BookCricket = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    duration: '',
    participants: '',
    requests: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    console.log(formData);
  };

  return (
    <Container sx={{ py: 4 }}>
      <Typography variant="h3" align="center" gutterBottom>
        Book Your Cricket Field
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        <Grid item xs={12} md={6}>
          <BookPaper>
            <ImageContainer style={{ backgroundImage: `url(${CricketImage})` }} />
            <Typography variant="h6" gutterBottom>
              Cricket Field Details
            </Typography>
            <Typography paragraph>
              Our cricket fields are available for booking with flexible time slots. Enjoy well-maintained pitches and facilities.
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
              <TextField
                label="Number of Participants"
                variant="outlined"
                fullWidth
                margin="normal"
                type="number"
                name="participants"
                value={formData.participants}
                onChange={handleChange}
                required
              />
              <TextField
                label="Additional Requests"
                variant="outlined"
                fullWidth
                margin="normal"
                name="requests"
                value={formData.requests}
                onChange={handleChange}
                multiline
                rows={4}
              />
              <Button variant="contained" color="primary" type="submit" sx={{ mt: 2 }}>
                Book Now
              </Button>
            </form>
          </BookPaper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default BookCricket;
