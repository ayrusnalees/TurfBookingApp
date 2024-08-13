import React from 'react';
import { Box, Typography, Container, Paper, Button } from '@mui/material';
import { styled } from '@mui/system';
import { useLocation, useNavigate } from 'react-router-dom';

const GroundImage = styled('img')({
  width: '100%',
  height: '400px', // Adjust for larger image
  objectFit: 'cover',
  borderRadius: '8px',
  marginBottom: '16px',
});

const GroundPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  boxShadow: theme.shadows[3],
  marginBottom: theme.spacing(4),
}));

const GroundDetails = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { state } = location;
  const { ground } = state || {};

  // Define detailed information for each ground
  const details = {
    'Cricket Ground 1': {
      image: require('../assets/cricket-ground1.webp'),
      address: '123 Cricket Lane, Cricket City',
      contact: '123-456-7890',
      offers: '10% off for weekend bookings',
      timings: '6 AM - 10 PM',
      width: '75 meters',
      description: 'High-quality cricket ground with lush green grass and professional-grade facilities.',
    },
    'Cricket Ground 2': {
      image: require('../assets/cricket-ground2.webp'),
      address: '456 Cricket Avenue, Cricket City',
      contact: '987-654-3210',
      offers: 'Free equipment rental with booking',
      timings: '8 AM - 8 PM',
      width: '80 meters',
      description: 'Spacious and well-maintained ground with excellent facilities.',
    }
  };

  const groundDetail = details[ground];

  const handleBookNow = () => {
    navigate('/book-cricket', { state: { ground: groundDetail } });
  };

  return (
    <Container sx={{ py: 4 }}>
      {groundDetail ? (
        <>
          <GroundPaper>
            <GroundImage src={groundDetail.image} alt={ground} />
            <Typography variant="h4" gutterBottom>
              {ground}
            </Typography>
            <Typography variant="h6" gutterBottom>
              Address: {groundDetail.address}
            </Typography>
            <Typography variant="body1" paragraph>
              Contact: {groundDetail.contact}
            </Typography>
            <Typography variant="body1" paragraph>
              Offers: {groundDetail.offers}
            </Typography>
            <Typography variant="body1" paragraph>
              Timings: {groundDetail.timings}
            </Typography>
            <Typography variant="body1" paragraph>
              Width: {groundDetail.width}
            </Typography>
            <Typography variant="body1" paragraph>
              {groundDetail.description}
            </Typography>
            <Button variant="contained" color="primary" onClick={handleBookNow}>
              Book Now
            </Button>
          </GroundPaper>
        </>
      ) : (
        <Typography variant="h6" align="center">
          Ground details not found.
        </Typography>
      )}
    </Container>
  );
};

export default GroundDetails;
