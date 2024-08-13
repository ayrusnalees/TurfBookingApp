import React from 'react';
import { Box, Typography, Container, Grid, Paper, Button } from '@mui/material';
import { styled } from '@mui/system';
import { useNavigate } from 'react-router-dom';
import CricketImage from '../assets/cricket-image.jpg';
import FootballImage from '../assets/turf-image.jpg';
import BadmintonImage from '../assets/badminton-image.jpg';

const games = [
  { title: 'Cricket', image: CricketImage, description: 'Professional-grade pitches, spacious and well-maintained.', link: '/select-cricket-ground' },
  { title: 'Football', image: FootballImage, description: 'Top-quality turf with excellent lighting for night games.', link: '/select-football-ground' },
  { title: 'Badminton', image: BadmintonImage, description: 'Indoor and outdoor courts with high-quality nets and flooring.', link: '/select-badminton-ground' },
  // Additional games can be added here
];

const HoverPaper = styled(Paper)(({ theme }) => ({
  transition: 'transform 0.3s, box-shadow 0.3s',
  '&:hover': {
    transform: 'scale(1.05)',
    boxShadow: theme.shadows[6],
  },
}));

const HoverImage = styled('img')({
  width: '100%',
  height: '250px', // Increased height
  borderRadius: '8px',
  objectFit: 'cover',
  marginBottom: '20px',
});

const HoverButton = styled(Button)(({ theme }) => ({
  transition: 'background-color 0.3s, color 0.3s',
  '&:hover': {
    backgroundColor: '#d32f2f', 
    color: '#fff',
  },
}));

const AvailableGames = () => {
  const navigate = useNavigate();

  const handleCardClick = (link) => {
    navigate(link);
  };

  return (
    <Box 
      sx={{ 
        minHeight: '100vh', 
        backgroundImage: 'url(https://image.slidesdocs.com/responsive-images/background/3d-model-of-a-soccer-field-with-vibrant-green-turf-and-a-football-in-play-powerpoint-background_4ecf7869c5__960_540.jpg)', 
        backgroundSize: 'cover', 
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        py: 4, 
      }}
    > 
      <Container>
        <Typography variant="h3" align="center" paddingTop="105px" gutterBottom color="black">
          Available Games
        </Typography>
        <Grid container spacing={30} justifyContent="center" padding={10}>
          {games.map((game, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}> 
              <HoverPaper 
                elevation={3} 
                sx={{ 
                  p: 3, 
                  display: 'flex', 
                  flexDirection: 'column', 
                  alignItems: 'center', 
                  cursor: 'pointer', 
                  backgroundColor: 'rgba(255, 255, 255, 0.8)',
                  width: '200%', 
                  maxWidth: '350px', // Increase max-width to make cards slightly bigger
                  height: '200', // Auto height to fit content
                  
                }}
                onClick={() => handleCardClick(game.link)}
              >
                <HoverImage 
                  src={game.image} 
                  alt={game.title} 
                />
                <Typography variant="h6" gutterBottom>{game.title}</Typography>
                <Typography paragraph sx={{ flexGrow: 1, textAlign: 'center' }}>{game.description}</Typography>
                <HoverButton 
                  variant="contained" 
                  color="primary"
                  onClick={(e) => {
                    e.stopPropagation(); 
                    handleCardClick(game.link);
                  }}
                >
                  Book {game.title}
                </HoverButton>
              </HoverPaper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default AvailableGames;
