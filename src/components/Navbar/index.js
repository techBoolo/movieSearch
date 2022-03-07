import  Box from '@mui/material/Box';
import  Typography from '@mui/material/Typography';

const Navbar = (props) => {

  return (
    <Box sx={{display: 'flex', alignItems: 'center', 
        justifyContent: 'center', px: 2, bgcolor: '#786a6a', 
        width: 1, height: '60px' }}>
      <Typography variant='h6' sx={{ color: '#fff' }}>Movies</Typography>
    </Box>
  );
};
export default Navbar;

