import { ExpandMoreRounded } from '@mui/icons-material';
import {
  AlertTitle,
  Button,
  FormControl,
  ListItemText,
  MenuItem,
  OutlinedInput,
  Select,
  Stack,
} from '@mui/material';
import { useMemo, useState } from 'react';
import { StarWarResourceType } from '../api';

interface FilterResourceProps {
  onFilterReset: () => void;
  onFilter: (filter: StarWarResourceType) => void;
}

export const FilterResource: React.FC<FilterResourceProps> = ({
  onFilterReset,
  onFilter,
}) => {
  const [filter, setFilter] = useState<StarWarResourceType | string>('');
  const [menuOpen, setMenuOpen] = useState(false);

  const options = useMemo(() => {
    const filterOptions = Object.values(StarWarResourceType).filter(
      (v) => typeof v === 'string'
    );
    return filterOptions.map((filter) => ({ value: filter, label: filter }));
  }, []);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const filterResource = (filter: StarWarResourceType) => {
    setFilter(filter);
    onFilter(filter);
    closeMenu();
  };

  const resetFilter = () => {
    closeMenu();
    setFilter('');
    onFilterReset();
  };

  return (
    <Stack direction="row" gap={2}>
      <FormControl sx={{ width: 190 }}>
        {!filter ? (
          <AlertTitle
            sx={{
              display: 'inline',
              position: 'absolute',
              zIndex: 1,
              left: 14,
              top: 9,
              right: 0,
              pointerEvents: 'none',
            }}
            color={menuOpen ? 'primary' : 'text.secondary'}
          >
            Filter resource
          </AlertTitle>
        ) : null}
        <Select
          size="small"
          value={filter}
          input={<OutlinedInput />}
          IconComponent={ExpandMoreRounded}
          color="primary"
          onOpen={() => setMenuOpen(true)}
          onClose={() => closeMenu()}
          MenuProps={{
            anchorOrigin: {
              vertical: 'bottom',
              horizontal: 90,
            },
            PaperProps: {
              style: {
                width: 176,
              },
            },
          }}
          sx={{
            height: 36,
          }}
        >
          {options.map((option) => {
            return (
              <MenuItem
                key={option.value}
                value={option.value}
                onClick={() => {
                  filterResource(option.value);
                }}
              >
                <ListItemText
                  primary={option.label}
                  sx={{ textTransform: 'capitalize' }}
                />
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
      <Button disabled={!filter} onClick={resetFilter}>
        Reset
      </Button>
    </Stack>
  );
};
