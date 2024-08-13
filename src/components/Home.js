import React from 'react';
import { Box, Typography, Container, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import styled from '@emotion/styled';
import videoBackground from '../assets/background-video.mp4';

const VideoBackground = styled('video')({
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  zIndex: -1,
  filter: 'brightness(0.7)',
});

const Home = () => {
  return (
    <Box sx={{ position: 'relative', height: '100vh', overflow: 'hidden', pt: '80px' }}>
      <VideoBackground autoPlay loop muted>
        <source src={videoBackground} type="video/mp4" />
      </VideoBackground>
      <Container sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100vh', textAlign: 'center', color: 'white', zIndex: 1 }}>
        <Typography variant="h2" sx={{ fontWeight: 'bold', fontSize: '4rem', mb: 2, textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}>
          WELCOME TO GOTURF!
        </Typography>
        <Typography variant="h5" sx={{ mb: 4, fontSize: '1.5rem', textShadow: '1px 1px 3px rgba(0, 0, 0, 0.5)' }}>
          Your premier destination for booking sports facilities effortlessly.
        </Typography>
        <Button variant="contained" color="secondary" component={Link} to="/available-games" sx={{ mb: 4, px: 4, py: 1.5, fontSize: '1.2rem', fontWeight: 'bold' }}>
          Explore Our Games
        </Button>
        <Typography variant="h6" sx={{ mt: 4, fontWeight: 'bold', fontSize: '1.25rem', color: '#f1c40f' }}>
          <strong>WHY GOTURF?</strong>
        </Typography>
        <Typography variant="body1" sx={{ mb: 4, maxWidth: 600, fontSize: '1rem', lineHeight: 1.6, textAlign: 'center', color: '#ecf0f1' }}>
          - Discover a wide range of sports facilities including Cricket, Football, and Badminton.<br />
          - Enjoy seamless booking with just a few clicks.<br />
          - Experience top-notch facilities and excellent service.<br />
          - Access facilities at convenient locations across the city.
        </Typography>
        <Button variant="outlined" color="secondary" component={Link} to="/contact" sx={{ px: 4, py: 1.5, fontSize: '1.2rem', fontWeight: 'bold' }}>
          Get in Touch
        </Button>
      </Container>
    </Box>
  );
};

export default Home;
