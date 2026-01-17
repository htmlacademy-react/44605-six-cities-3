import CitiesNavigation from '../../../../components/cities-navigation/cities-navigation';
import OffersContent from '../offers-content/offers-content';
import PlacesEmpty from '../places-empty/places-empty';
import { ISearchOffersProps } from '../../../../types.props';
import { useState } from 'react';
import { City } from '../../../../mock/cities';


export default function SearchOffers({ offers, cities }: ISearchOffersProps): JSX.Element {
  const [activeCity, setActiveCity] = useState(cities[0]);

  const handleChangeCity = (newCity: City) => {
    setActiveCity(newCity);
  };

  return (
    <main className="page__main page__main--index">
      <h1 className="visually-hidden">Cities</h1>
      <CitiesNavigation cities={cities} activeCity={activeCity} onChangeCity={handleChangeCity} />
      <div className="cities">
        {offers.length > 0
          ? <OffersContent offers={offers} cities={cities} activeCity={activeCity} />
          : <PlacesEmpty />}
      </div >
    </main >
  );
}
