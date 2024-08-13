import React from 'react';
import { Container, Typography, Grid, Paper, Box, Button } from '@mui/material';
import { styled } from '@mui/system';

const BackgroundBox = styled(Box)({
  //backgroundImage: `url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRT4_EGNjU9kJO8PRBeYrSaezLZVMsUMRuj7A&s)`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  padding: '100px 0',
  color: 'white',
  position: 'relative',
});

const Overlay = styled(Box)({
  backgroundColor: 'rgba(0, 0, 0, 0.6)',
  padding: '40px',
  borderRadius: '10px',
});

const StyledPaper = styled(Paper)({
  padding: '30px',
  backgroundColor: 'rgba(255, 255, 255, 0.9)',
  borderRadius: '10px',
  textAlign: 'center',
});

const StyledButton = styled(Button)({
  position: 'absolute',
  top: '20px',
  left: '20px',
  backgroundColor: '#1976d2',
  color: 'white',
  '&:hover': {
    backgroundColor: '#1565c0',
  },
});

const AboutUs = () => {
  return (
    <BackgroundBox>
      <Container>
        <StyledButton variant="contained" href="/">
          Home
        </StyledButton>
        <Overlay>
          <Typography variant="h3" align="center" gutterBottom>
            About Us
          </Typography>
          <Typography variant="body1" align="center" paragraph>
            Welcome to our website! We are dedicated to providing the best service to our customers.
            Our mission is to create a platform that meets all your needs, and we pride ourselves
            on our commitment to excellence.
          </Typography>
        </Overlay>
        <Grid container spacing={4} mt={4}>
          <Grid item xs={12} md={6}>
            <StyledPaper elevation={4}>
              <Typography variant="h5" gutterBottom>
                Our Vision
              </Typography>
              <Typography variant="body1">
                Our vision is to be the leading provider of high-quality services that make a
                positive impact on our community and the world. We aim to innovate and inspire
                others through our work.
              </Typography>
            </StyledPaper>
          </Grid>
          <Grid item xs={12} md={6}>
            <StyledPaper elevation={4}>
              <Typography variant="h5" gutterBottom>
                Our Mission
              </Typography>
              <Typography variant="body1">
                Our mission is to deliver unparalleled service to our customers while fostering
                a culture of integrity, innovation, and teamwork within our organization.
              </Typography>
            </StyledPaper>
          </Grid>
        </Grid>
      </Container>
    </BackgroundBox>
  );
};

export default AboutUs;
