import { TextField, TextFieldProps } from '@mui/material';

type SWTextFieldProps = TextFieldProps;

export const SWTextField: React.FC<SWTextFieldProps> = (props) => {
  return <TextField {...props} />;
};
