import { useEffect } from 'react';
import Search from './components/Search/';
import Movies from './components/Movies/';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const App = () => {

  const movies = [{
        "Title": "Italian Spiderman",
        "Year": "2007",
        "imdbID": "tt2705436",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BYjFhN2RjZTctMzA2Ni00NzE2LWJmYjMtNDAyYTllOTkyMmY3XkEyXkFqcGdeQXVyNTA0OTU0OTQ@._V1_SX300.jpg"
      },
        {
            "Title": "Italian Spiderman",
            "Year": "2007",
            "imdbID": "tt2705437",
            "Type": "movie",
            "Poster": "https://m.media-amazon.com/images/M/MV5BYjFhN2RjZTctMzA2Ni00NzE2LWJmYjMtNDAyYTllOTkyMmY3XkEyXkFqcGdeQXVyNTA0OTU0OTQ@._V1_SX300.jpg"
      }
  ]

  const search = 'spiderman';
  const searchMovie = async () => {
    const response = await fetch(
      `${process.env.REACT_APP_MOVIE_ROOT_URL}?apikey=${process.env.REACT_APP_MOVIE_APIKEY}&s=${search}`,
      {
        headers: {
          'Accept': 'application/json'
        }
      }
    );
    const movies = await response.json()
    console.log(movies);
  }

  useEffect(() => {
  //  searchMovie(); 
  }, [])
  return (
    <>
      <Box sx={{display: 'flex', alignItems: 'center', 
          justifyContent: 'center', px: 2, bgcolor: '#786a6a', 
          width: 1, height: '120px' }}>
        <Typography variant='h5' sx={{ color: '#fff' }}>Movies</Typography>
      </Box>
      <Container maxWidth='lg'>
        <Search />
        <Movies movies={movies}/>
      </Container>
    </>
  );
}

export default App;
