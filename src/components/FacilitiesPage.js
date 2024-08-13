import React from 'react';
import { Grid, Container } from '@mui/material';
import FacilityCard from '../pages/FacilityCard'; // Import the FacilityCard component

const facilities = [
  {
    image: 'path_to_image_1',
    title: 'Turfit Prime',
    location: 'Navalur (~2.3 km)',
    rating: '5.00',
    distance: '2',
    isBookable: true,
  },
  {
    image: 'path_to_image_2',
    title: 'PlayFit Badminton Academy',
    location: 'Pudupakkam (~3.3 km)',
    rating: '4.85',
    distance: '13',
    isBookable: true,
  },
  // Add more facility objects here
];

const FacilitiesPage = () => {
  return (
    <Container sx={{ py: 4 }}>
      <Grid container spacing={4}>
        {facilities.map((facility, index) => (
          <Grid item key={index} xs={12} sm={6} md={4}>
            <FacilityCard {...facility} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default FacilitiesPage;
