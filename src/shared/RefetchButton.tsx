import ReplayIcon from '@mui/icons-material/Replay';
import { Button } from '@mui/material';

interface RefetchButtonProps {
  onRefetch: () => void;
}

export const RefetchButton: React.FC<RefetchButtonProps> = ({ onRefetch }) => {
  return (
    <Button variant="contained" startIcon={<ReplayIcon />} onClick={onRefetch}>
      Retry
    </Button>
  );
};
