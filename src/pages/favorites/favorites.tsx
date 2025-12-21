import FavoritesEmpty from './components/favorites-empty';
import FavoritesList from './components/favorites-list';
import { Helmet } from 'react-helmet-async';

export default function Favorites(): JSX.Element {
  const emptyFlag = true; // Временное решение для отображается пустой страницы с избранными
  return (
    <>
      <Helmet>
        <title>Избранное</title>
      </Helmet>
      <div className="page">
        <main className="page__main page__main--favorites">
          <div className="page__favorites-container container">
            <section className="favorites">
              <h1 className="favorites__title">Saved listing</h1>
              {emptyFlag ? <FavoritesList /> : <FavoritesEmpty />}
            </section>
          </div>
        </main>
      </div>
    </>
  );
}
