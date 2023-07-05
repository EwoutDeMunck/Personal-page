import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { Icon } from 'leaflet'
import 'leaflet/dist/leaflet.css'
import marker from 'icons/marker.png'



const markerIcon = new Icon({
  iconUrl: marker,
  iconSize: [38, 38]
})
interface ChildComponentProps {
    position: any
  }
const Map = ({position}:ChildComponentProps) => {
    
  return (
    <MapContainer center={position} zoom={13} scrollWheelZoom={false}>
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    <Marker position={position} icon={markerIcon}>
      <Popup>
        <h2 className="mb-3 text-gray-500 dark:text-gray-400">
          Ten Bosse 53, 9800 Deinze, Belgium
        </h2>
      </Popup>
    </Marker>
  </MapContainer>
  )
}

export default Map