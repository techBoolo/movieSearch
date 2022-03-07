import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const Movie = ({ movie }) => {

  return (
    <Paper sx={{ m: 2, pb: 2, bgcolor: '#c1c1c1',
        '&:hover': {
          transform: 'scale(1.08)',
          transition: 'transform 330ms ease-in-out'
        },
        '&:hover .top': {
          transform: 'scale(1.15)',
          transition: 'transform 330ms ease-in-out'
        }
    }}>
      <Box component='img'
        src={ movie.Poster !== 'N/A' ? movie.Poster : 'https://via.placeholder.com/250' }
        alt={`${movie.Title}`}
        sx={{width: 1, my: 2, resizeMode: 'contain' }}
      />

      <Typography variant='h6' sx={{ px: 1 }}>{ movie.Title}</Typography>

      <Box sx={{display: 'flex', aignItems: 'center', justifyContent: 'space-between', py: 2, px: 1}}>
        <Typography>imdbId: {movie.imdbID}</Typography>
        <Typography>year: { movie.Year}</Typography>
      </Box>
      
    </Paper>
  );
};

export default Movie;
