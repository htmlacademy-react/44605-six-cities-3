import { Link } from 'react-router-dom';
import { City } from '../../mock/cities';

type CitiesNavigationProps = {
  cities: City[];
  activeCity: City;
  onChangeCity: (cityName: City) => void;
};

export default function CitiesNavigation({ cities, activeCity, onChangeCity }: CitiesNavigationProps): JSX.Element {

  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {
            cities.map((city) => (
              <li className="locations__item" key={city.title}>
                <Link to='#' className={`locations__item-link tabs__item ${activeCity === city ? 'tabs__item--active' : ''}`}>
                  <span onClick={() => onChangeCity(city)}>{city.title}</span>
                </Link>
              </li>
            ))
          }
        </ul>
      </section>
    </div>
  );
}
