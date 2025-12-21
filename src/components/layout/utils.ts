import { AppRoute } from '../../const/const';

export function getLayoutState(pathName: AppRoute) {
  let linkClassName = '';
  let divClassName = '';
  let shouldRenderUser = true;
  let shouldRenderFooter = false;

  if (pathName === AppRoute.root) {
    divClassName = 'page--gray page--main';
    linkClassName = 'header__logo-link--active';
  } else if (pathName === AppRoute.login) {
    divClassName = 'page--gray page--login';
    shouldRenderUser = false;
  } else if (pathName === AppRoute.favorites) {
    shouldRenderFooter = true;
  }

  return { linkClassName, divClassName, shouldRenderUser, shouldRenderFooter };
}
