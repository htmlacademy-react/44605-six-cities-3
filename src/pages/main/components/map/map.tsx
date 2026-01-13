import { IMapProps } from '../../../../types.props';
import { useRef, useEffect } from 'react';
import { Icon, Marker, layerGroup } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { URL_MARKER_CURRENT, URL_MARKER_DEFAULT } from '../../../../const/const';
import useMap from '../../../../hooks/useMap';

const defaultCustomIcon = new Icon({
  iconUrl: URL_MARKER_DEFAULT,
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});

const currentCustomIcon = new Icon({
  iconUrl: URL_MARKER_CURRENT,
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});


export default function Map({ selectedOffer, offers }: IMapProps): JSX.Element {

  const mapRef = useRef(null);
  const map = useMap(mapRef);

  useEffect(() => {
    if (map) {
      const markerLayer = layerGroup().addTo(map);

      offers.forEach((offer) => {
        const marker = new Marker({
          lat: offer.location.latitude,
          lng: offer.location.longitude,
        });

        marker
          .setIcon(
            selectedOffer && offer.title === selectedOffer.title
              ? currentCustomIcon
              : defaultCustomIcon
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
