import { MapContainer, Marker, Popup, TileLayer, useMapEvents } from 'react-leaflet';
import { useState } from 'react';
import './LeafletMap.scss';

//import data from '../../FakeData/data.json';
import CardHolder from '../Main/CardsHolder';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';

function LeafletMap() {
  const data = useAppSelector((state) => state.card);
  console.log(data)
  const [selectedMarker, setSelectedMarker] = useState(null);
  const [displayData, setDisplayData] = useState(data);

  const handleMarkerClick = (item) => {
    console.log("Marker clicked:", item);
    setSelectedMarker(item);
    setDisplayData([item]);
  };

  const handleClosePopup = () => {
    setSelectedMarker(null);
  };

  function MapEvents() {
    const map = useMapEvents({
      zoomend: () => {
        console.log("Data before creating LatLngBounds:", data);
        const bounds = map.getBounds();
        console.log(bounds)
        console.log("Data after creating LatLngBounds:", data);
        const filteredData = data.filter((item) => {
          // Ensure item.latitude and item.longitude are numbers
          const lat = Number(item.latitude);
          const lng = Number(item.longitude);
          if (isNaN(lat) || isNaN(lng)) {
            return false;
          }
          return bounds.contains([lat, lng]);
        });
        console.log(filteredData)
        setDisplayData(filteredData);
      },
    });

    return null;
}

  return (
    <div className='leaflet__data'>
      <MapContainer center={[48.3794, 31.1656]} zoom={6} scrollWheelZoom={true}>
        <MapEvents />
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {data.map((item) => (
          <Marker
            key={item.id}
            position={[item.latitude, item.longitude]}
            eventHandlers={{
              click: () => {
                console.log("Marker clicked");
                handleMarkerClick(item);
              },
            }}
          >
            <Popup position={[item.latitude, item.longitude]} onClose={handleClosePopup}>
              <div className="popup">
                <h2>{item.name}</h2>
                <p>{item.description}</p>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
      <CardHolder data={displayData} />
    </div>
  );
}

export default LeafletMap;