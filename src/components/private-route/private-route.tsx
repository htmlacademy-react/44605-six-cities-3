import { Navigate } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const/const';
import { PrivateRouteProps } from '../../types.props';

export default function PrivateRoute({ children, authorizationStatus, login }: PrivateRouteProps) {
  const isAuthorized = authorizationStatus === AuthorizationStatus.Auth;

  if (login) {
    return isAuthorized ? <Navigate to={AppRoute.root} /> : children;
  }
  return isAuthorized ? children : <Navigate to={AppRoute.login} />;
}

