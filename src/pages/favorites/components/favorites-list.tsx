import PlaceCardMini from './place-card-mini';
import { Link } from 'react-router-dom';

export default function FavoritesList(): JSX.Element {
  return (
    <ul className="favorites__list">
      <li className="favorites__locations-items">
        <div className="favorites__locations locations locations--current">
          <div className="locations__item">
            <Link className="locations__item-link" to="#">
              <span>Amsterdam</span>
            </Link>
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
            <Link className="locations__item-link" to="#">
              <span>Cologne</span>
            </Link>
          </div>
        </div>
        <div className="favorites__places">
          <PlaceCardMini />
        </div>
      </li>
    </ul>
  );
}
