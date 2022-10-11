import { Navigate } from 'react-router-dom';
import { SWRoutes } from './shared';

interface ProtectedRouteProps {
  children: React.ReactNode;
  isLoggedIn: boolean;
}

export const ProtectedRoute: React.FC<ProtectedRouteProps> = ({
  children,
  isLoggedIn,
}) => {
  if (!isLoggedIn) {
    return <Navigate to={SWRoutes.Root} replace />;
  }
  return <>{children}</>;
};
