import React from 'react';
import { Card, CardContent, CardMedia, Typography, Box, Button } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';

const FacilityCard = ({ image, title, location, rating, distance, isBookable }) => {
  return (
    <Card sx={{ maxWidth: 345, margin: '10px' }}>
      <CardMedia
        component="img"
        alt={title}
        height="140"
        image={image}
        title={title}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {location}
        </Typography>
        <Box sx={{ display: 'flex', alignItems: 'center', mt: 1 }}>
          <StarIcon sx={{ color: '#fbc02d' }} />
          <Typography variant="body2" sx={{ ml: 0.5 }}>
            {rating} ({distance})
          </Typography>
        </Box>
        {isBookable && (
          <Button variant="contained" color="primary" sx={{ mt: 2 }}>
            Bookable
          </Button>
        )}
      </CardContent>
    </Card>
  );
};

export default FacilityCard;
