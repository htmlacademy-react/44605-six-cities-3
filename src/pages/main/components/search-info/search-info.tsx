import { IOffer } from '../../../../mock/offers';

type SearchInfoProps = {
  filteredOffers: IOffer[];
}

export default function SearchInfo({ filteredOffers }: SearchInfoProps): JSX.Element {

  const countOffersOfCity = filteredOffers.length;
  const cityName: string = countOffersOfCity > 0 ? filteredOffers[0].city.name : 'Город не найден';

  return (
    <b className="places__found">{countOffersOfCity} places to stay in {cityName}</b>
  );
}
