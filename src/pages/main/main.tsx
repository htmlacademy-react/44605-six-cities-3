import Header from '../../components/header/header';
import SearchOffers from './components/search-offers/search-offers';

export default function Main(): JSX.Element {
  return (
    <div className="page page--gray page--main">
      <Header />
      <SearchOffers />
    </div >
  );
}
