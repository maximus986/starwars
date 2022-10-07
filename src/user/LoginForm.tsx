import { Button, Stack } from '@mui/material';
import { ChangeEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { SWTextField } from '../core';
import { User } from './user';
import { useUserContext } from './userContext';
import { userService } from './userService';

export const LoginForm = () => {
  const [loginFormData, setLoginFormData] = useState<User>({
    email: '',
    password: '',
  });

  const navigate = useNavigate();
  const userContext = useUserContext();

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setLoginFormData({
      ...loginFormData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event: React.SyntheticEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(loginFormData);

    const response = await userService.login(loginFormData);
    if (response) {
      userContext.setUser(loginFormData);
      navigate('/welcome', { replace: true });
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <Stack component="form" gap={3} onSubmit={handleSubmit}>
      <SWTextField
        label="Email"
        name="email"
        type="email"
        onChange={handleChange}
        autoFocus
        required
      />
      <SWTextField
        label="Password"
        name="password"
        type="password"
        onChange={handleChange}
        required
      />
      <Button type="submit" variant="outlined">
        Login
      </Button>
    </Stack>
  );
};
