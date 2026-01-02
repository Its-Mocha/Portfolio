"use client";

import { MapContainer, TileLayer, Marker, Polyline } from "react-leaflet";
import { useEffect, useRef, useState } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-rotatedmarker";


const issIcon = new L.Icon({
  iconUrl: "/iss.svg",      
  iconSize: [36, 36],
  iconAnchor: [18, 18],
});

function splitDateline(coords) {
  const segments = [];
  let current = [];

  for (let i = 0; i < coords.length; i++) {
    if (i > 0) {
      const lonDiff = Math.abs(coords[i][1] - coords[i - 1][1]);
      if (lonDiff > 180) {
        segments.push(current);
        current = [];
      }
    }
    current.push(coords[i]);
  }

  if (current.length > 0) {
    segments.push(current);
  }

  return segments;
}

export default function IssMap({
  lat,
  lon,
  heading = 0,
}) {
  const markerRef = useRef(null);
  const mapRef = useRef(null);

  const [trail, setTrail] = useState([]);

  useEffect(() => {
    if (markerRef.current) {
      markerRef.current.setLatLng([lat, lon]);
      markerRef.current.setRotationAngle(heading);
    }
  }, [lat, lon, heading]);

  useEffect(() => {
    fetch("https://mochajoe.dev/api/iss/history")
      .then((res) => res.json())
      .then((points) => {
        const coords = points.map((p) => [p.lat, p.lon]);
        setTrail(splitDateline(coords));
      })
      .catch(() => {});
  }, [lat, lon]);

  return (
    <div style={{ position: "relative" }}>
      {/* Status Badge */}
      <div
        style={{
          position: "absolute",
          top: 10,
          right: 10,
          padding: "6px 10px",
          borderRadius: "6px",
          fontWeight: "bold",
          zIndex: 1000,
        }}
      >
      </div>

      <MapContainer
        center={[lat, lon]}
        zoom={3}
        minZoom={2}
        whenCreated={(map) => (mapRef.current = map)}
        style={{
          height: "500px",
          width: "100%",
          borderRadius: "10px",
        }}
      >
        <TileLayer
          attribution="© OpenStreetMap contributors"
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {trail.map((segment, i) => (
          <Polyline
            key={i}
            positions={segment}
            pathOptions={{
              color: "red",
              weight: 2,
              opacity: 0.85,
            }}
          />
        ))}

        <Marker
          position={[lat, lon]}
          icon={issIcon}
          ref={markerRef}
          rotationAngle={heading}
          rotationOrigin="center"
        />
      </MapContainer>
    </div>
  );
}
