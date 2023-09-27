import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";
import { useMemo } from "react";



export const MapsGoogle = () => {
    const { isLoaded } = useLoadScript({
        googleMapsApiKey: 'AIzaSyAROhQSCnr67au9yKiWuQGN-AjBkHj_l4U',
      });
    
      if (!isLoaded) return <div>Loading...</div>;
      return <Map />;
}

function Map() {
    const center = useMemo(() => ({ lat: 4.634852, lng: -74.066383 }), []);
  
    return (
    <section className="map-container">
      <GoogleMap zoom={10} center={center} mapContainerClassName="map">
        <Marker position={center} />
      </GoogleMap>
      <div className="info">
        <h2>¡¡Tambien tenemos punto físico!!</h2>
        <p>Estamos en la Av. Caracas #46-72</p>
        <p>Barrio Chapinero</p>
      </div>
    </section>
    );
}