// CricketGrounds.js
import React from 'react';
import { Box, Typography, Grid, Paper, Button } from '@mui/material';
import { styled } from '@mui/system';
import { useNavigate } from 'react-router-dom';
import CricketImage2 from '../assets/gamezone.jpg';
import CricketImage6 from '../assets/united.jpeg';
import CricketImage7 from '../assets/yuga.jpeg';
import CricketImage8 from '../assets/retro.jpeg';
import CricketImage9 from '../assets/Hitnrun.jpeg';

const cricketGrounds = [
  { title: 'Game Zone', address: 'Zone, Postal Colony, Near Csi Church, Perur, Coimbatore', link: '/book-cricket', image: CricketImage2 },
  { title: 'United Sports Academy (Club41)', address: 'Sports Academy (Club41), Puliampatti, Palladam Main Road, Pollachi, Coimbatore', link: '/book-cricket', image: CricketImage6 },
  { title: 'Yuga Sports Turf', address: 'Sports Turf, Kalapatti-Kurumbapalayam Rd, Vasanth Nagar, Kalapatti, Coimbatore', link: '/book-cricket', image: CricketImage7 },
  { title: 'Retro Station', address: 'Station, Telungupalayam, Jayaram Nagar, Selvapuram, Coimbatore', link: '/book-cricket', image: CricketImage8 },
  { title: 'Hit n Run', address: 'Thangamman Kovil Road, Kalapatti, Coimbatore', link: '/book-cricket', image: CricketImage9 }
];

const HoverPaper = styled(Paper)(({ theme }) => ({
  transition: 'transform 0.3s, box-shadow 0.3s',
  '&:hover': {
    transform: 'scale(1.05)',
    boxShadow: theme.shadows[6],
  },
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '20px',
  height: '350px',
}));

const HoverImage = styled('img')({
  width: '100%',
  height: '150px',
  objectFit: 'cover',
  borderRadius: '8px',
  marginBottom: '20px',
});

const CricketGrounds = () => {
  const navigate = useNavigate();

  return (
    <Box sx={{ textAlign: 'center', margin: '40px 0' }}>
      <Typography variant="h4" paddingTop="70px" sx={{ color: 'green', fontWeight: 'bold' }}>
        Cricket Grounds in Coimbatore
      </Typography>
      <Typography variant="body1" sx={{ marginTop: '20px', lineHeight: '1.8' }}>
        The ultimate hub for cricket enthusiasts in Coimbatore. We’re dedicated to providing unparalleled access to the gentleman’s game, offering a comprehensive listing of top-notch venues across the city for players of all skill levels to enjoy.
      </Typography>
      <Box sx={{ minHeight: '100vh', padding: '20px', backgroundColor: '#f4f4f4' }}>
        <Typography variant="h4" align="center" paddingBottom="50px">
          Available Cricket Grounds
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          {cricketGrounds.map((ground, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <HoverPaper elevation={3}>
                <HoverImage src={ground.image} alt={ground.title} />
                <Typography variant="h6" gutterBottom>{ground.title}</Typography>
                <Typography variant="body2" color="textSecondary" paragraph sx={{ textAlign: 'center' }}>
                  {ground.address}
                </Typography>
                <Button 
                  variant="text" 
                  sx={{ color: 'green', textDecoration: 'underline' }}
                  onClick={() => navigate(ground.link)}
                >
                  BOOK NOW
                </Button>
              </HoverPaper>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default CricketGrounds;
