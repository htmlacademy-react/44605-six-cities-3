import Header from '../../components/header/header';
import SignIn from './components/sign-in';
import CurrentLocationImage from './components/current-location-image';

export default function Login(): JSX.Element {
  return (
    <div className="page page--gray page--login">
      <Header />

      <main className="page__main page__main--login">
        <div className="page__login-container container">
          <SignIn />
          <CurrentLocationImage />
        </div>
      </main>
    </div>
  );
}
