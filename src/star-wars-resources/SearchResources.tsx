import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import { IconButton, InputAdornment, OutlinedInput } from '@mui/material';
import { delay } from 'lodash';
import { useState } from 'react';

interface SearchResourcesProps {
  onSearchResources: (searchQuery: string) => void;
  onClearSearch: () => void;
}

export const SearchResources: React.FC<SearchResourcesProps> = ({
  onSearchResources,
  onClearSearch,
}) => {
  const [searchQuery, setSetSearchQuery] = useState('');

  const clearInput = () => {
    setSetSearchQuery('');
    onClearSearch();
  };

  return (
    <OutlinedInput
      id="outlined-adornment-amount"
      size="small"
      value={searchQuery}
      placeholder="Search"
      onChange={(e) => {
        setSetSearchQuery(e.target.value);
        delay(() => onSearchResources(e.target.value), 500);
      }}
      sx={{
        height: 36,
      }}
      startAdornment={
        <InputAdornment position="start">
          <SearchRoundedIcon />
        </InputAdornment>
      }
      endAdornment={
        <InputAdornment position="end">
          <IconButton
            onClick={clearInput}
            edge="end"
            color="inherit"
            aria-label="clear"
            sx={{ visibility: searchQuery ? 'visible' : 'hidden' }}
          >
            <CloseRoundedIcon fontSize="small" />
          </IconButton>
        </InputAdornment>
      }
    />
  );
};
