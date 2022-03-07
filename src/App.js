import { useState, useEffect } from 'react';
import Navbar from './components/Navbar/';
import Search from './components/Search/';
import Movies from './components/Movies/';
import Container from '@mui/material/Container';

const App = () => {
  const [ movies, setMovies ] = useState([]);
  const [ searchTerm, setSearchTerm ] = useState('');

  console.log(movies);
  const searchMovie = async (search) => {
    console.log(search);
    const response = await fetch(
      `${process.env.REACT_APP_MOVIE_ROOT_URL}?apikey=${process.env.REACT_APP_MOVIE_APIKEY}&s=${search}`,
      {
        headers: {
          'Accept': 'application/json'
        }
      }
    );
    const fetchedMovies = await response.json()
    setMovies(fetchedMovies.Search);
  }

  useEffect(() => {
    searchMovie(searchTerm); 
  }, [searchTerm])
  return (
    <>
      <Navbar />
      <Container maxWidth='lg'>
        <Search setSearchTerm={setSearchTerm} />
        <Movies movies={movies}/>
      </Container>
    </>
  );
}

export default App;
