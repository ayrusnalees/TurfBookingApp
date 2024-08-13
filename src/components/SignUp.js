import React, { useState } from 'react';
import { Container, Box, TextField, Button, Typography, FormControlLabel, Checkbox, Link } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const SignUp = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    termsAccepted: false,
  });
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const validateForm = () => {
    let formErrors = {};
    if (!formData.username) formErrors.username = "Username is required";
    if (!formData.email) {
      formErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      formErrors.email = "Email address is invalid";
    }
    if (!formData.password) {
      formErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      formErrors.password = "Password must be at least 6 characters";
    }
    if (!formData.termsAccepted) formErrors.termsAccepted = "You must accept the terms and conditions";
    
    setErrors(formErrors);
    return Object.keys(formErrors).length === 0;
  };

  const handleSignUp = () => {
    if (validateForm()) {
      axios.post('http://localhost:8080/register', formData)
        .then(response => {
          alert('Sign Up Successful!');
          navigate('/home');
        })
        .catch(error => {
          console.error('There was an error registering the user!', error);
        });
    }
  };

  return (
    <Container
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        backgroundImage: 'url(https://www.ultraimagehub.com/wallpapers/tr:flp-false,gx-0.1,gy-1,q-75,rh-3264,rw-5824,th-1080,tw-1920/1247493864592248883.jpeg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <Box
        sx={{
          width: '420px',
          background: 'rgba(255, 255, 255, 0.1)',
          border: '2px solid rgba(255, 255, 255, 0.1)',
          backdropFilter: 'blur(10px)',
          color: '#fff',
          borderRadius: '10px',
          padding: '30px 40px',
          boxSizing: 'border-box',
        }}
      >
        <Typography variant="h1" align="center" sx={{ fontSize: '36px', marginBottom: '30px' }}>
          Sign Up
        </Typography>
        <Box sx={{ position: 'relative', marginBottom: '30px' }}>
          <TextField
            label="Username"
            name="username"
            variant="outlined"
            fullWidth
            value={formData.username}
            onChange={handleInputChange}
            error={!!errors.username}
            helperText={errors.username}
            sx={{
              '& .MuiOutlinedInput-root': {
                borderRadius: '40px',
                background: 'transparent',
                border: '2px solid rgba(255, 255, 255, 0.2)',
                '& fieldset': { border: 'none' },
                '& input': {
                  color: '#fff',
                  padding: '20px 45px 20px 20px',
                },
              },
            }}
          />
          <i className='bx bx-user' style={{ position: 'absolute', right: '20px', top: '30%', fontSize: '20px', color: '#fff' }}></i>
        </Box>
        <Box sx={{ position: 'relative', marginBottom: '30px' }}>
          <TextField
            label="Email"
            name="email"
            type="email"
            variant="outlined"
            fullWidth
            value={formData.email}
            onChange={handleInputChange}
            error={!!errors.email}
            helperText={errors.email}
            sx={{
              '& .MuiOutlinedInput-root': {
                borderRadius: '40px',
                background: 'transparent',
                border: '2px solid rgba(255, 255, 255, 0.2)',
                '& fieldset': { border: 'none' },
                '& input': {
                  color: '#fff',
                  padding: '20px 45px 20px 20px',
                },
              },
            }}
          />
          <i className='bx bx-envelope' style={{ position: 'absolute', right: '20px', top: '30%', fontSize: '20px', color: '#fff' }}></i>
        </Box>
        <Box sx={{ position: 'relative', marginBottom: '30px' }}>
          <TextField
            label="Password"
            name="password"
            type="password"
            variant="outlined"
            fullWidth
            value={formData.password}
            onChange={handleInputChange}
            error={!!errors.password}
            helperText={errors.password}
            sx={{
              '& .MuiOutlinedInput-root': {
                borderRadius: '40px',
                background: 'transparent',
                border: '2px solid rgba(255, 255, 255, 0.2)',
                '& fieldset': { border: 'none' },
                '& input': {
                  color: '#fff',
                  padding: '20px 45px 20px 20px',
                },
              },
            }}
          />
          <i className='bx bx-lock-alt' style={{ position: 'absolute', right: '20px', top: '30%', fontSize: '20px', color: '#fff' }}></i>
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', marginBottom: '15px' }}>
          <FormControlLabel
            control={<Checkbox name="termsAccepted" checked={formData.termsAccepted} onChange={handleInputChange} sx={{ color: '#fff' }} />}
            label="Agree to terms"
            sx={{ fontSize: '14.5px', color: '#fff' }}
            error={!!errors.termsAccepted}
          />
          <Link href="#" sx={{ fontSize: '14.5px', color: '#fff', textDecoration: 'none' }}>
            Terms & Conditions
          </Link>
        </Box>
        {errors.termsAccepted && (
          <Typography color="error" sx={{ fontSize: '12px', mb: 2 }}>
            {errors.termsAccepted}
          </Typography>
        )}
        <Button
          variant="contained"
          color="primary"
          fullWidth
          sx={{
            height: '45px',
            background: '#fff',
            borderRadius: '40px',
            boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
            fontSize: '20px',
            fontWeight: 600,
            color: '#333',
            mb: 2,
          }}
          onClick={handleSignUp}
        >
          Sign Up
        </Button>
        <Typography align="center" sx={{ fontSize: '14.5px', mb: 2 }}>
          Already have an account?{' '}
          <Link href="signin" sx={{ color: '#fff', textDecoration: 'none', fontWeight: 600 }}>
            Login
          </Link>
        </Typography>
      </Box>
    </Container>
  );
};

export default SignUp;
