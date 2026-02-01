import { ISortingProps } from '../../types/types.props';

export default function SortingOption({ handleChangeSorting }: ISortingProps): JSX.Element {
  return (
    <ul className="places__options places__options--custom places__options--opened">
      <li className="places__option places__option--active" tabIndex={0} onClick={() => handleChangeSorting('Popular')}>Popular</li>
      <li className="places__option" tabIndex={0} onClick={() => handleChangeSorting('Price: low to high')}>Price: low to high</li>
      <li className="places__option" tabIndex={0} onClick={() => handleChangeSorting('Price: high to low')}>Price: high to low</li>
      <li className="places__option" tabIndex={0} onClick={() => handleChangeSorting('Top rated first')}>Top rated first</li>
    </ul>
  );
}
