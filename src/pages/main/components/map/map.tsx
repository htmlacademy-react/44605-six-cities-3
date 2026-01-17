import { useRef, useEffect } from 'react';
import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { URL_MARKER_CURRENT, URL_MARKER_DEFAULT } from '../../../../const/const';
import useMap from '../../../../hooks/useMap';
import { IOffer } from '../../../../mock/offers';
import { City } from '../../../../mock/cities';

type MapProps = {
  offers: IOffer[];
  selectedOffer: IOffer | null;
  activeCity: City;
}

const defaultIcon = leaflet.icon({
  iconUrl: URL_MARKER_DEFAULT,
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});

const customIcon = leaflet.icon({
  iconUrl: URL_MARKER_CURRENT,
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});

export default function Map({ offers, selectedOffer, activeCity }: MapProps): JSX.Element {

  const mapRef = useRef<HTMLElement | null>(null);
  const map = useMap(mapRef, activeCity);

  useEffect(() => {
    if (map) {
      const markerLayer = leaflet
        .layerGroup()
        .addTo(map);

      offers.forEach((offer) => {
        const marker = leaflet
          .marker([offer.location.latitude, offer.location.longitude]);

        marker.setIcon(
          selectedOffer && selectedOffer.title === offer.title
            ? customIcon
            : defaultIcon
        )
          .addTo(markerLayer);
      });

      return () => {
        map.removeLayer(markerLayer);
      };
    }
  }, [map, offers, selectedOffer]);


  return (
    <section className="cities__map map" ref={mapRef}></section>
  );
}
