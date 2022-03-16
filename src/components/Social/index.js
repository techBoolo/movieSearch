import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import CopyrightIcon from '@mui/icons-material/Copyright';

const Social = (props) => {

  return (
    <Box sx={{ marginTop: 'auto', height: 20 }}>
      <Typography sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', py: 2, bgcolor: '#f4f4f4' }}>
        <CopyrightIcon sx={{ color: '#786a6a', paddingX: 1, fontSize: '2.3rem'}}/>
        boo.et
      </Typography>      
    </Box>
  );
};

export default Social;
