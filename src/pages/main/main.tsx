
import SearchOffers from './components/search-offers/search-offers';
import { Helmet } from 'react-helmet-async';

export default function Main(): JSX.Element {
  return (
    <>
      <Helmet>
        <title> Главная </title>
      </Helmet>
      <SearchOffers />
    </>
  );
}
