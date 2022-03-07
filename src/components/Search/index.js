import { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';

const Search = ({setSearchTerm}) => {
  const [ search, setSearch ] = useState('');

  return (
    <Box component='form' 
      onSubmit={(ev) => {
        ev.preventDefault();
        setSearchTerm(search)
      }}
      sx={{ display: 'flex', my: 2, alignItems: 'center', bgcolor: '#e0e0e0', 
            padding: '5px', width: '300px', borderRadius: '30px'  
      }}>
        <IconButton type='submit'><SearchIcon /></IconButton>
        <TextField
          type='search'
          size='small'
          value={search}
          onChange={(ev) => setSearch(ev.target.value)}
          placeholder='Search'
          sx={{ outline: 'none', bgcolor: 'transparent',
            '& .MuiOutlinedInput-root': {
              '& fieldset': { 
                borderColor: 'transparent',
              }
            },
            '&:hover fieldset': { 
              borderColor: 'transparent',
            },
            '&.Mui-focused fieldset': { 
              borderColor: 'transparent',
            }
          }}
        />
    </Box>
  );
};

export default Search;
