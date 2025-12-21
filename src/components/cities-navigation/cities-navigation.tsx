// Импортирую массив наименований 6 городов
import { NameOfCities } from '../../const/const';
import { Link } from 'react-router-dom';

export default function CitiesNavigation(): JSX.Element {
  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {
            NameOfCities.map((city: string) => (
              <li className="locations__item" key={city}>
                {/* Нужно продумать атрибут checked для выбранного города*/}
                <Link to='#' className="locations__item-link tabs__item" >
                  <span>{city}</span>
                </Link>
              </li>
            ))
          }
        </ul>
      </section>
    </div>
  );
}
