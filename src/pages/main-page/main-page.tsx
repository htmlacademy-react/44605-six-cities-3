// Подключение вспомогательных файлов
import { Helmet } from 'react-helmet-async';
import { useAppDispatch, useAppSelector } from '../../hooks/useStore';
import { changeCityAction } from '../../store/actions';
import CityNavigation from '../../components/city-navigation/city-navigation';
import OffersContainer from '../../components/offers-container/offers-container';
import PlacesEmpty from '../../components/places-empty/places-empty';
import Spinner from '../../components/spinner/spinner';
import { ICity } from '../../types/types';


export default function MainPage(): JSX.Element {
  const dispatch = useAppDispatch(); // Получаем функцию dispatch для отправки действий в хранилище
  const offers = useAppSelector((state) => state.offers.offers);
  const isLoading = useAppSelector((state) => state.offers.isLoading);
  const oldState = useAppSelector((state) => state.appReducer);
  const { currentCity, sorting } = oldState;

  const handleChangeCity = (newCity: ICity) => {
    dispatch(changeCityAction(newCity));
  };


  return (
    <>
      <Helmet>
        <title> Главная </title>
      </Helmet>
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <CityNavigation currentCity={currentCity} onChangeCity={handleChangeCity} />
        <div className="cities">
          {isLoading && <Spinner />}
          {!isLoading && offers.length > 0 && (
            <OffersContainer offers={offers} currentCity={currentCity} currentSorting={sorting} />
          )}
          {!isLoading && offers.length === 0 && <PlacesEmpty />}
        </div>
      </main>
    </>
  );
}
