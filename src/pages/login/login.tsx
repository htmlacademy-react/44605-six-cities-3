import SignIn from './components/sign-in';
import CurrentLocationImage from './components/current-location-image';
import { Helmet } from 'react-helmet-async';

export default function Login(): JSX.Element {
  return (
    <>
      <Helmet>
        <title>Авторизация</title>
      </Helmet>
      <div className="page page--gray page--login">
        <main className="page__main page__main--login">
          <div className="page__login-container container">
            <SignIn />
            <CurrentLocationImage />
          </div>
        </main>
      </div>
    </>
  );
}
