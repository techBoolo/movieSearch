import Movie from '../Movie/';

import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const Movies = ({movies}) => {
  return (
    <Grid container>
      {
        movies.length > 0 
          ? (
            movies.map(movie => (
              <Grid key={movie.imdbID} item xs={12} sm={6} md={4}>
                <Movie movie={movie} />
              </Grid>
            ))
          ) : (
            <Box><Typography>No result</Typography></Box>
          )
      }
    </Grid>
  );
};

export default Movies;
