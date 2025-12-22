import { AuthorizationStatus } from './const/const';
/** Интерфейс для пропс пустой страницы */
export interface EmptyProps {
  classDiv: string;
  classB?: string;
  classP?: string;
  boldContent: string;
  paragraph: string;
}

export interface PrivateRouteProps {
  children: JSX.Element;
  authorizationStatus: AuthorizationStatus;
  login?: boolean;
}
