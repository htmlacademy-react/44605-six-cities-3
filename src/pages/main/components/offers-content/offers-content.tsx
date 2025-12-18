import Map from '../map/map';
import PlaceCard from '../../../../components/place-card/place-card';
import SearchInfo from '../search-info/search-info';
import SortingForm from '../sorting-form/sorting-form';
import { Offers } from '../../../../types';


export default function OffersContent({ offers }: Offers): JSX.Element {
  return (
    <div className="cities__places-container container">
      <section className="cities__places places">
        <h2 className="visually-hidden">Places</h2>
        <SearchInfo />
        <SortingForm />
        <div className="cities__places-list places__list tabs__content">
          {offers.map((offer) => <PlaceCard key={offer.id} offer={offer} />)}
        </div>
      </section>
      <div className="cities__right-section">
        < Map />
      </div>
    </div>
  );
}
