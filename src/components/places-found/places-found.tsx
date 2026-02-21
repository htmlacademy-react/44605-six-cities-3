import { memo } from 'react';
import { IPlacesFoundProps } from '../../types/types.props';


function PlacesFound({ countOffers, cityName }: IPlacesFoundProps): JSX.Element {
  return (
    <b className="places__found">{countOffers} places to stay in {cityName}</b>
  );
}

const MemoizedPlacesFound = memo(PlacesFound);
export default MemoizedPlacesFound;
