import { Button, Stack } from '@mui/material';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useNavigate } from 'react-router-dom';
import { SWTextField } from '../core';
import { User } from './user';
import { useUserContext } from './userContext';
import { userService } from './userService';

const schema = yup.object().shape({
  email: yup
    .string()
    .email('Please provide a valid email')
    .required('Email is a required field'),
  password: yup.string().required('Password is a required field'),
});

export const LoginForm = () => {
  const {
    control,
    formState: { errors, isValid },
    handleSubmit,
  } = useForm<User>({
    defaultValues: {
      email: '',
      password: '',
    },
    mode: 'onTouched',
    resolver: yupResolver(schema),
  });

  const navigate = useNavigate();
  const userContext = useUserContext();

  const onSubmit: SubmitHandler<User> = async (data) => {
    const response = await userService.login(data);
    if (response) {
      userContext.setUser(data);
      navigate('/welcome', { replace: true });
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <Stack component="form" gap={3} onSubmit={handleSubmit(onSubmit)}>
      <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({ field: { onChange, onBlur } }) => (
          <SWTextField
            label="Email"
            type="email"
            onChange={onChange}
            onBlur={onBlur}
            autoFocus
            required
            error={Boolean(errors.email)}
            helperText={Boolean(errors.email) && errors.email?.message}
          />
        )}
        name="email"
      />
      <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({ field: { onChange, onBlur } }) => (
          <SWTextField
            label="Password"
            type="password"
            onChange={onChange}
            onBlur={onBlur}
            required
            error={Boolean(errors.password)}
            helperText={Boolean(errors.password) && errors.password?.message}
          />
        )}
        name="password"
      />
      <Button type="submit" variant="outlined" disabled={!isValid}>
        Login
      </Button>
    </Stack>
  );
};
