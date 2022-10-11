import { Button } from '@mui/material';
import React from 'react';
import { useAppSelector, useAppDispatch } from '../api';
import { setLoggedOut } from '../user/user.slice';

export const Logout = () => {
  const isLoggedIn = useAppSelector((state) => state.user.isLoggedIn);
  const dispatch = useAppDispatch();

  const logout = () => {
    dispatch(setLoggedOut());
  };
  return (
    <>
      {isLoggedIn ? (
        <Button
          onClick={() => {
            logout();
          }}
        >
          Logout
        </Button>
      ) : null}
    </>
  );
};
