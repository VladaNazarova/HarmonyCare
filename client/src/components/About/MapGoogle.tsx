import { APIProvider, Map, AdvancedMarker } from "@vis.gl/react-google-maps";

export default function MapGoogle() {
  const position = { lat: 51.509865, lng: -0.118092 };

  return (
    <APIProvider apiKey={import.meta.env.VITE_GOOGLE_MAPS_KEY}>
      <Map
        defaultZoom={10}
        defaultCenter={position}
        style={{
          height: "400px",
          width: "1000px",
          borderRadius: "20px",
        }}
        gestureHandling={"greedy"}
        disableDefaultUI={false}
        mapId={import.meta.env.VITE_GOOGLE_MAP_ID}
      >
        <AdvancedMarker position={position}></AdvancedMarker>
      </Map>
    </APIProvider>
  );
}
