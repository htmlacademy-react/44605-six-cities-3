import Map from '../map/map';
import PlaceCard from '../../../../components/place-card/place-card';
import SearchInfo from '../search-info/search-info';
import SortingForm from '../sorting-form/sorting-form';
import { useState } from 'react';
import { IOffer } from '../../../../mock/offers';
import { City } from '../../../../mock/cities';


type OfferContentProps = {
  offers: IOffer[];
  activeCity: City;
}

export default function OffersContent({ offers, activeCity }: OfferContentProps): JSX.Element {
  const [selectedOffer, setSelectedOffer] = useState<IOffer | null>(null);

  const filteredOffers = offers.filter((offer) => offer.city.name === activeCity.title);

  /** При наведении на offer обновляется state компонента */
  const handleMouseEnter = (offer: IOffer) => {
    setSelectedOffer(offer);
  };

  return (
    <div className="cities__places-container container">
      <section className="cities__places places">
        <h2 className="visually-hidden">Places</h2>
        <SearchInfo filteredOffers={filteredOffers} />
        <SortingForm />
        <div className="cities__places-list places__list tabs__content">
          {filteredOffers.map((offer) => <PlaceCard key={offer.id} offer={offer} onMouseEnter={() => handleMouseEnter(offer)} />)}
        </div>
      </section>
      <div className="cities__right-section">
        <Map selectedOffer={selectedOffer} offers={offers} activeCity={activeCity} />
      </div>
    </div>
  );
}
