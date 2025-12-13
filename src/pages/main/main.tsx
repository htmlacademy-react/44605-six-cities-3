import Header from '../../components/header/header';
import CitiesBar from '../../components/cities-bar/cities-bar';
import PlacesContainer from './components/places-container';
import PlacesContainerEmpty from './components/places-container-empty';
import { Offers } from '../../mock/offers';

export default function Main() {
  return (
    <div className="page page--gray page--main">
      <Header />
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        < CitiesBar />
        <div className="cities">
          {Offers.length > 0 ? <PlacesContainer offers={Offers} /> : <PlacesContainerEmpty />}
        </div >
      </main >
    </div >
  );
}
