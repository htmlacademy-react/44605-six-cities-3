import Layout from '../components/layout/layout';
import Main from '../pages/main/main';
import Login from '../pages/login/login';
import Offer from '../pages/offer/offer';
import Favorites from '../pages/favorites/favorites';
import Error from '../pages/error/error';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AppRoute, authorizationStatus } from '../const/const';
import PrivateRoute from '../components/private-route/private-route';
import { HelmetProvider } from 'react-helmet-async';
import { Offers } from '../mock/offers';
import ScrollToTop from '../components/scroll-to-top/scroll-to-top';

export default function App(): JSX.Element {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path={AppRoute.root} element={<Layout />}>
            <Route index element={<Main />} />
            <Route path={AppRoute.offer} element={<Offer offers={Offers} />} />
            <Route path={AppRoute.login} element={<Login />} />
            <Route
              path={AppRoute.favorites}
              element={
                <PrivateRoute authorizationStatus={authorizationStatus()}>
                  <Favorites />
                </PrivateRoute>
              }
            />
          </Route>
          <Route path='*' element={<Error />} />
        </Routes>
      </BrowserRouter>
    </HelmetProvider >
  );
}
