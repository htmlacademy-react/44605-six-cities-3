import CitiesNavigation from '../../../../components/cities-navigation/cities-navigation';
import OffersContent from '../offers-content/offers-content';
import PlacesEmpty from '../places-empty/places-empty';
import { Offers } from '../../../../mock/offers';

export default function SearchOffers(): JSX.Element {
  return (
    <main className="page__main page__main--index">
      <h1 className="visually-hidden">Cities</h1>
      < CitiesNavigation />
      <div className="cities">
        {Offers.length > 0 ? <OffersContent offers={Offers} /> : <PlacesEmpty />}
      </div >
    </main >
  );
}
