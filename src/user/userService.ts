import { User } from './user';

const registeredUser: User = {
  email: 'user@gmail.com',
  password: '123',
};

const login = async (user: User): Promise<boolean> => {
  if (
    user.email !== registeredUser.email ||
    user.password !== registeredUser.password
  ) {
    return false;
  }
  return true;
};

export const userService = {
  login,
};
