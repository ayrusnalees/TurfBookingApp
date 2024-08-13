import React from 'react';
import { Box, Typography, Grid, Paper, Button } from '@mui/material';
import { styled } from '@mui/system';
// import CricketImage1 from '../assets/cricket-image1.jpg'; // Replace with actual image paths
 //import CricketImage2 from '../assets/cricket-image2.jpg';
 import CricketImage2 from '../assets/Badmintonyuga.jpeg';
// import CricketImage4 from '../assets/cricket-image4.jpg';
// import CricketImage5 from '../assets/cricket-image5.jpg';
import CricketImage6 from '../assets/Badminton6feather.jpg';
import CricketImage7 from '../assets/yuga.jpeg';
import CricketImage8 from '../assets/BadmintonSmart.jpeg';
import CricketImage9 from '../assets/Badmintonyuga.jpeg';

const cricketGrounds = [
  // { title: 'Pitch@37', address: 'Amman Kulam Rd, Pappanaickenpalayam, Pudur, Coimbatore, Tamil Nadu', link: '/book-pitch-37', image: CricketImage1 },
   { title: 'Yuga Badminton', address: 'Yuga Sports Indoor Badminton court , Sports Indoor Badminton court, Kalapatti-Kurumbapalayam Rd, Vasanth Nagar, Kalapatti, Coimbatore',link: '/book-badminton', image: CricketImage2 },
  // { title: 'A Square Play Arena', address: 'Square Play Arena, Min Nagar 2, Jothinagar, Pollachi, Coimbatore', link: '/book-square-play-arena', image: CricketImage3 },
  // { title: 'GUN & RUN – THE HEXA', address: 'Sf No 1106/2b, Kalapatti East Village, Near The Ideal Mount Litera Zee School, Kalapatti, Coimbatore', link: '/book-gun-run', image: CricketImage4 },
  // { title: 'SBM Sports', address: 'Sports, Kalapatti Road, Kurumbapalayam, Coimbatore', link: '/book-sbm-sports', image: CricketImage5 },
  { title: '6 Feathers Badminton Court ', address: 'Feathers Badminton Court, Laxmi Nagar, Sanganoor, Coimbatore',link: '/book-badminton', image: CricketImage6 },
  { title: 'Yuga Sports Complex', address: 'Badminton, Kalapatti-Kurumbapalayam Rd, Vasanth Nagar, Kalapatti, Coimbatore', link: '/book-badminton', image: CricketImage7 },
  { title: 'Smart Shuttlers ', address: 'Shuttlers,Natraj Nagar,koundampalayam, Coimbatore', link: '/book-badminton', image: CricketImage8 },
  { title: 'Yadhu’s premier badminton club ', address: ' premier badminton club, Thudiyalur Rd, Sri Sivasakthi Nagar , Coimbatore', link: '/book-badminton', image: CricketImage9 }
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
    <Typography variant="h4" paddingTop="80px" sx={{ color: 'green', fontWeight: 'bold' }}>
      Badminton Courts in Coimbatore
    </Typography>
    <Typography variant="body1" sx={{ marginTop: '20px', lineHeight: '1.8' }}>
    When looking for Badminton Courts in Coimbatore, GOTURF has you covered with a comprehensive list of facilities for you to book and play at. Our user-friendly app allows you to easily navigate through the available options, compare prices, and make quick bookings, all at your fingertips. Whether you prefer indoor or outdoor courts, our platform provides a variety of choices to suit your preferences and needs. Simply select your desired location, check availability, and book your slot hassle-free through GOTURF app.
<br/>
Coimbatore, known for its vibrant sports culture, offers a plethora of Badminton Courts for enthusiasts to enjoy the game. With Playspots, you can discover top-notch facilities in the city that cater to your playing requirements. From well-maintained courts to professional equipment, our platform ensures a seamless booking experience for badminton players of all levels. Whether you are a beginner looking to practice or a seasoned player seeking competitive gameplay, GOTURF makes it easy for you to find and book the perfect Badminton Courts in Coimbatore.
    </Typography>
  </Box>
    <Box sx={{ minHeight: '100vh', padding: '20px', backgroundColor: '#f4f4f4'  }}>
      <Typography variant="h4" align="center" paddingBottom="50px">
        Available Badminton Grounds
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
