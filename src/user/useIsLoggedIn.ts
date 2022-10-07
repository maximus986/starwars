import { useUserContext } from './userContext';
import { userService } from './userService';

export const useIsLoggedIn = () => {
  const userContext = useUserContext();
  const user = userService.getUser();

  return !!userContext.user || !!user;
};
