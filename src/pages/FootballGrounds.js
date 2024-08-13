import React from 'react';
import { Box, Typography, Grid, Paper, Button } from '@mui/material';
import { styled } from '@mui/system';
// import CricketImage1 from '../assets/cricket-image1.jpg'; // Replace with actual image paths
 //import CricketImage2 from '../assets/cricket-image2.jpg';
 import CricketImage2 from '../assets/gamezone.jpg';
// import CricketImage4 from '../assets/cricket-image4.jpg';
// import CricketImage5 from '../assets/cricket-image5.jpg';
import CricketImage6 from '../assets/united.jpeg';
import CricketImage7 from '../assets/yuga.jpeg';
import CricketImage8 from '../assets/retro.jpeg';
import CricketImage9 from '../assets/Hitnrun.jpeg';

const cricketGrounds = [
  // { title: 'Pitch@37', address: 'Amman Kulam Rd, Pappanaickenpalayam, Pudur, Coimbatore, Tamil Nadu', link: '/book-pitch-37', image: CricketImage1 },
   { title: 'Game Zone', address: 'Zone, Postal Colony, Near Csi Church, Perur, Coimbatore', link: '/book-football', image: CricketImage2 },
  // { title: 'A Square Play Arena', address: 'Square Play Arena, Min Nagar 2, Jothinagar, Pollachi, Coimbatore', link: '/book-square-play-arena', image: CricketImage3 },
  // { title: 'GUN & RUN – THE HEXA', address: 'Sf No 1106/2b, Kalapatti East Village, Near The Ideal Mount Litera Zee School, Kalapatti, Coimbatore', link: '/book-gun-run', image: CricketImage4 },
  // { title: 'SBM Sports', address: 'Sports, Kalapatti Road, Kurumbapalayam, Coimbatore', link: '/book-sbm-sports', image: CricketImage5 },
  { title: 'United Sports Academy (Club41)', address: 'Sports Academy (Club41), Puliampatti, Palladam Main Road, Pollachi, Coimbatore', link: '/book-football', image: CricketImage6 },
  { title: 'Yuga Sports Turf', address: 'Sports Turf, Kalapatti-Kurumbapalayam Rd, Vasanth Nagar, Kalapatti, Coimbatore', link: '/book-football', image: CricketImage7 },
  { title: 'Retro Station', address: 'Station, Telungupalayam, Jayaram Nagar, Selvapuram, Coimbatore', link: '/book-football', image: CricketImage8 },
  { title: 'Hit n Run', address: 'Thangamman Kovil Road, Kalapatti, Coimbatore', link: '/book-football', image: CricketImage9 }
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
  return (
    <container>
    <Box sx={{ textAlign: 'center', margin: '40px 0' }}>
    <Typography variant="h4" paddingTop="70px" sx={{ color: 'green', fontWeight: 'bold' }}>
      Football Grounds In Coimbatore
    </Typography>
    <Typography variant="body1" sx={{ marginTop: '20px', lineHeight: '1.8' }}>
    Discover the best football turf grounds in Coimbatore on GOTURF app. With our easy-to-use app, you can explore, compare, and book football grounds near you with just a few taps. Our platform is designed to make your booking experience seamless and convenient.
<br/>
Explore our hand-picked selection of football pitches in Coimbatore and find the perfect turf for your game. Whether you’re looking for artificial turf or natural grass,GOTURF app offers a diverse range of options for you to book and play. Enjoy the convenience of finding and booking your preferred football turf quickly and easily.
    </Typography>
  </Box>
    <Box sx={{ minHeight: '100vh', padding: '20px', backgroundColor: '#f4f4f4'  }}>
      <Typography variant="h4" align="center" paddingBottom="50px">
        Available Football Grounds
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
                onClick={() => window.location.href = ground.link}
              >
                BOOK NOW
              </Button>
            </HoverPaper>
          </Grid>
        ))}
      </Grid>
    </Box>
    </container>
  );
};

export default CricketGrounds;
