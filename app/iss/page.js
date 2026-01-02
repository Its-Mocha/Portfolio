"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";

/**
 * Leaflet must be loaded client-side only
 */
const IssMap = dynamic(() => import("./issmap"), {
  ssr: false,
});

export default function IssPage() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  /**
   * Fetch latest ISS telemetry
   */
  useEffect(() => {
    const fetchTelemetry = async () => {
      try {
        const res = await fetch("https://mochajoe.dev/api/iss/latest");

        if (!res.ok) {
          throw new Error(`API error ${res.status}`);
        }

        const json = await res.json();
        setData(json);
        setError(null);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchTelemetry();
    const interval = setInterval(fetchTelemetry, 3000);
    return () => clearInterval(interval);
  }, []);

  if (error) {
    return (
      <div style={{ padding: "1rem", color: "red" }}>
        Error: {error}
      </div>
    );
  }

  if (!data) {
    return <div style={{ padding: "1rem" }}>Loading ISS telemetry…</div>;
  }

  /**
   * System health status
   */
  const status =
    data.age_seconds < 5
      ? "LIVE"
      : data.age_seconds < 15
      ? "STALE"
      : "NO DATA";

  return (
    <div style={{ padding: "1rem" }}>
      <h1>🛰️ ISS Mission Status</h1>

      {/* Status */}
      <p>
        <strong>Status:</strong>{" "}
        <span
          style={{
            color:
              status === "LIVE"
                ? "green"
                : status === "STALE"
                ? "orange"
                : "red",
            fontWeight: "bold",
          }}
        >
          {status}
        </span>
      </p>

      {/* Telemetry Readout */}
      <ul>
        <li>Latitude: {data.latitude.toFixed(2)}°</li>
        <li>Longitude: {data.longitude.toFixed(2)}°</li>
        <li>Altitude: {data.altitude_km.toFixed(1)} km</li>
        <li>Velocity: {data.velocity_kmh.toFixed(0)} km/h</li>
        <li>Heading: {data.heading?.toFixed(1) ?? 0}°</li>
        <li>Data age: {data.age_seconds.toFixed(1)} s</li>
      </ul>

      {/* Map */}
      <IssMap
        lat={data.latitude}
        lon={data.longitude}
        heading={data.heading ?? 0}
        status={status}
      />
    </div>
  );
}

