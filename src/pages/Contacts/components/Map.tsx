import { MapContainer, TileLayer, Marker, Popup, Tooltip } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
const defaultIcon = L.icon({
  iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png",
  shadowUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

const MapComponent = () => {
  const center: [number, number] = [54.509089, 36.271276];
  const company = {
    name: "Николо-Козинская ул., 29, Калуга",
    position: [54.509089, 36.271276] as [number, number],
  };

  return (
    <div id="leaflet-map-wrapper">
      <MapContainer center={center} zoom={16}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        />
        <Marker position={company.position} icon={defaultIcon}>
          <Popup>{company.name}</Popup>
          <Tooltip direction="top" offset={[0, -10]} opacity={1} permanent>
            {company.name}
          </Tooltip>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default MapComponent;
