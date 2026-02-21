import { ISortingOptionsProps } from '../../types/types.props';
import { TSortingType } from '../../types/types';
import { sortingOptions } from '../../const/const';


export default function SortingOption({ currentSorting, handleChangeSorting }: ISortingOptionsProps): JSX.Element {
  return (
    <ul className='places__options places__options--custom places__options--opened'>
      {sortingOptions.map((option) => (
        <li className={`places__option ${currentSorting === option.value ? 'places__option--active' : ''}`} key={option.value} tabIndex={0} onClick={() => handleChangeSorting(option.value as TSortingType)}>
          {option.label}
        </li>
      ))}
    </ul>
  );
}
