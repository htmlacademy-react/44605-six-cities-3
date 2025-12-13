import SortingForm from '../../../components/sorting-form/sorting-form';
import PlaceCard from '../../../components/place-card/place-card';
import Map from '../../../components/map/map';
import SearchInfo from '../../../components/search-info/search-info';

interface IOffer {
  id: number;
  price: number;
  img: string;
  title: string;
  type: string;
  rating: number;
  isFavorite?: boolean;
  premium?: boolean;
}

interface IOffers {
  offers: IOffer[];
}

export default function PlacesContainer({ offers }: IOffers) {
  return (
    <div className="cities__places-container container">
      <section className="cities__places places">
        <h2 className="visually-hidden">Places</h2>
        <SearchInfo />
        <SortingForm />
        <div className="cities__places-list places__list tabs__content">
          {
            offers.map((offer) => (
              <PlaceCard
                key={offer.id}
                img={offer.img}
                premium={offer.premium}
                price={offer.price}
                title={offer.title}
                type={offer.type}
                rating={offer.rating}
              />
            ))
          }
        </div>
      </section>
      <div className="cities__right-section">
        <Map />
      </div>
    </div>
  );
}
