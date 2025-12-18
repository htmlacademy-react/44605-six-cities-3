import PlaceCardMini from './place-card-mini';

export default function FavoritesList(): JSX.Element {
  return (
    <ul className="favorites__list">
      <li className="favorites__locations-items">
        <div className="favorites__locations locations locations--current">
          <div className="locations__item">
            <a className="locations__item-link" href="#">
              <span>Amsterdam</span>
            </a>
          </div>
        </div>
        <div className="favorites__places">
          <PlaceCardMini />
          <PlaceCardMini />
        </div>
      </li>

      <li className="favorites__locations-items">
        <div className="favorites__locations locations locations--current">
          <div className="locations__item">
            <a className="locations__item-link" href="#">
              <span>Cologne</span>
            </a>
          </div>
        </div>
        <div className="favorites__places">
          <PlaceCardMini />
        </div>
      </li>
    </ul>
  );
}
