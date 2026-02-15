// Подключение вспомогательных файлов
import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import OfferImages from '../../components/offer-images/offer-images';
import OfferWrapper from '../../components/offer-wrapper/offer-wrapper';
import OfferMap from '../../components/offer-map/offer-map';
import PlaceCard from '../../components/place-card/place-card';
import { IOffer } from '../../types/types';
import { useParams } from 'react-router-dom';
import { fetchNearbyOffersAction, fetchOfferIdAction, fetchReviewsAction } from '../../store/async-actions';
import { useAppSelector } from '../../hooks/useStore';
import { useAppDispatch } from '../../hooks/useStore';
import { useNavigate } from 'react-router-dom';
import { AppRoute } from '../../const/const';

export default function OfferPage(): JSX.Element {
  const globalState = useAppSelector((state) => state);
  const { currentOffer, nearbyOffers, currentCity } = globalState;
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    if (!id) {
      return;
    }
    dispatch(fetchOfferIdAction({ id }))
      .unwrap()
      .then(() => {
        dispatch(fetchReviewsAction({ id }));
        dispatch(fetchNearbyOffersAction({ id }));
      })
      .catch(() => navigate(AppRoute.NOT_FOUND));
  }, [dispatch, navigate, id]);


  return (
    <>
      <Helmet>
        <title>Предложения</title>
      </Helmet>
      <main className="page__main page__main--offer">
        <section className="offer">
          <OfferImages images={currentOffer?.images || []} />
          <OfferWrapper currentOffer={currentOffer as IOffer} />
          {currentOffer && <OfferMap currentCity={currentCity} currentOffer={currentOffer} nearbyOffers={nearbyOffers} />}
          <div className="container">
            <section className="near-places places">
              <h2 className="near-places__title">Other places in the neighbourhood</h2>
              <div className="near-places__list places__list">
                {nearbyOffers.slice(0, 3).map((offer) => <PlaceCard key={offer.id} offer={offer} />)}
              </div>
            </section>
          </div>
        </section>
      </main>
    </>
  );
}
