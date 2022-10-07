import { User } from './user';

export const USER_KEY = 'user';

const registeredUser: User = {
  email: 'user@gmail.com',
  password: '123',
};

const getUser = (): User | null => {
  const savedUser = localStorage.getItem(USER_KEY);
  if (!savedUser) {
    return null;
  }
  return JSON.parse(savedUser);
};

const setUser = (user: User) => {
  localStorage.setItem('user', JSON.stringify(user));
};

const login = async (user: User): Promise<boolean> => {
  if (
    user.email !== registeredUser.email ||
    user.password !== registeredUser.password
  ) {
    return false;
  }

  setUser(user);
  return true;
};

export const userService = {
  getUser,
  setUser,
  login,
};
