import React from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton } from '@mui/material';
import { Link } from 'react-router-dom';
import { styled } from '@mui/system';
import Logo from '../assets/logo.png'; 

const StyledLink = styled(Link)({
  textDecoration: 'none',
  color: 'inherit',
  fontFamily: 'Roboto, sans-serif',
  fontWeight: 'bold',
  '&:hover': {
    color: '#ffeb3b',
  },
});

const Navbar = () => {
  return (
    <AppBar 
      position="fixed" 
      sx={{ 
        backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent background
        boxShadow: 'none', 
        height: '80px',
        zIndex: 2,
      }}
    >
      <Toolbar sx={{ height: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
        <IconButton edge="start" color="inherit" aria-label="logo">
          <img src={Logo} alt="TurfKart Logo" style={{ height: '60px', marginRight: '10px' }} />
        </IconButton>
        <Typography variant="h4" component="div" sx={{ flexGrow: 1, fontSize: '24px', fontFamily: 'Roboto, sans-serif', fontWeight: 'bold' }}>
          <StyledLink to="/">GOTURF</StyledLink>
        </Typography>
        <Button color="inherit" sx={{ fontSize: '16px', fontFamily: 'Roboto, sans-serif', margin: '0 10px' }}>
          <StyledLink to="/home">Home</StyledLink>
        </Button>
        <Button color="inherit" sx={{ fontSize: '16px', fontFamily: 'Roboto, sans-serif', margin: '0 10px' }}>
          <StyledLink to="/available-games">Available Games</StyledLink>
        </Button>
        {/* <Button color="inherit" sx={{ fontSize: '16px', fontFamily: 'Roboto, sans-serif', margin: '0 10px' }}>
          <StyledLink to="/location">Location</StyledLink>
        </Button> */}
        <Button color="inherit" sx={{ fontSize: '16px', fontFamily: 'Roboto, sans-serif', margin: '0 10px' }}>
          <StyledLink to="/reviews">Reviews</StyledLink>
        </Button>
        {/* Uncomment and add these buttons if needed */}
        {/* <Button color="inherit" sx={{ fontSize: '16px', fontFamily: 'Roboto, sans-serif', margin: '0 10px' }}>
          <StyledLink to="/contact">Contact</StyledLink>
        </Button> */}
        <Button color="inherit" sx={{ fontSize: '16px', fontFamily: 'Roboto, sans-serif', margin: '0 10px' }}>
          <StyledLink to="/homepage">SignOut</StyledLink>
        </Button>
        {/* <Button color="inherit" sx={{ fontSize: '16px', fontFamily: 'Roboto, sans-serif', margin: '0 10px' }}>
          <StyledLink to="/signup">Sign Up</StyledLink>
        </Button> */}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
