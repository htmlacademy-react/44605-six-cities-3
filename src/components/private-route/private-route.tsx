import { Navigate } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const/const';
import { PrivateRouteProps } from '../../types.props';

export default function PrivateRoute({ children, authorizationStatus }: PrivateRouteProps) {
  return authorizationStatus === AuthorizationStatus.Auth ? children : <Navigate to={AppRoute.login} />;
}

