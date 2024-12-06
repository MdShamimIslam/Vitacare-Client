import { MapContainer, Marker, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import markerIcon from "../../assets/images/marker.png";

const icon = L.icon({
  iconUrl: markerIcon,
  iconSize: [30, 30],
});
const position = [23.7260, 90.3976];

const Maps = () => {
 
  return (
    <MapContainer
      center={position}
      zoom={8}
      scrollWheelZoom={true}
      className=" md:w-[730px] lg:w-[600px] h-[300px] md:h-[450px]"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://api.maptiler.com/maps/basic-v2/256/{z}/{x}/{y}.png?key=YEI95Jvk57zAEnNOTx8u"
      />
      <Marker
        position={position} icon={icon}>
      </Marker>
    </MapContainer>
  );
};

export default Maps;
