"use client";
import React, { useState } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  //   useMapEvents,
} from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

const center: [number, number] = [23.928131307415317, 90.31585693359375]; // center
const dhakaCoordinates: [number, number] = [
  23.761996553887787, 90.40031433105469,
];
const tangailCoordinates: [number, number] = [
  24.23154659103459, 89.93133544921876,
];
const norshingdiCoordinates: [number, number] = [
  23.91306726791801, 90.72235107421875,
];

// interface MarkerData {
//   lat: number;
//   lng: number;
// }

const CoverageMap: React.FC = () => {
  //   const [markers, setMarkers] = useState<MarkerData[]>([
  //     { lat: dhakaCoordinates[0], lng: dhakaCoordinates[1] },
  //     { lat: tangailCoordinates[0], lng: tangailCoordinates[1] },
  //     { lat: norshingdiCoordinates[0], lng: norshingdiCoordinates[1] },
  //   ]);

  const markers = [
    { lat: dhakaCoordinates[0], lng: dhakaCoordinates[1] },
    { lat: tangailCoordinates[0], lng: tangailCoordinates[1] },
    { lat: norshingdiCoordinates[0], lng: norshingdiCoordinates[1] },
  ];

  //   const MapClickHandler = () => {
  //     useMapEvents({
  //       click(e) {
  //         const { lat, lng } = e.latlng;
  //         setMarkers((prevMarkers) => [...prevMarkers, { lat, lng }]);
  //       },
  //     });
  //     return null;
  //   };

  return (
    <MapContainer
      center={center}
      zoom={8}
      style={{ height: "40vh", width: "100%" }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="&copy; <strong>Blood</strong> contributors"
      />
      {markers.map((marker, idx) => (
        <Marker
          key={idx}
          position={[marker.lat, marker.lng]}
          icon={L.icon({
            iconUrl: "/marker-icon.png",
            iconSize: [25, 41],
            iconAnchor: [12, 41],
          })}
        >
          <Popup>
            Marker at {marker.lat}, {marker.lng}
          </Popup>
        </Marker>
      ))}
      {/* <MapClickHandler /> */}
    </MapContainer>
  );
};

export default CoverageMap;
