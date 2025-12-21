
import SearchOffers from './components/search-offers/search-offers';
import { Helmet } from 'react-helmet-async';

export default function Main(): JSX.Element {
  return (
    <div className="page page--gray page--main">
      <Helmet>
        <title> Главная </title>
      </Helmet>
      <SearchOffers />
    </div >
  );
}
