import  Box from '@mui/material/Box';
import LocalMoviesIcon from '@mui/icons-material/LocalMovies';

const Navbar = (props) => {

  return (
    <Box sx={{display: 'flex', alignItems: 'center', 
        justifyContent: 'center', px: 2, bgcolor: '#786a6a', 
        width: 1, height: '60px' }}>
        <LocalMoviesIcon fontSize='large' sx={{ color: '#f4f4f4' }}/>
    </Box>
  );
};
export default Navbar;

