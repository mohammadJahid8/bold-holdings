"use client";
import WorldMap from "@/components/ui/world-map";

export function WorldMapSection() {
  return (
    <WorldMap
      dots={[
        {
          start: { lat: 51.5074, lng: -0.1278 },
          end: { lat: 28.6139, lng: 77.209 },
        }, // UK to India
        {
          start: { lat: 55.7558, lng: 37.6176 },
          end: { lat: 39.9042, lng: 116.4074 },
        }, // Russia to China
        {
          start: { lat: 37.5665, lng: 126.978 },
          end: { lat: 14.5995, lng: 120.9842 },
        }, // Korea to Philippines
        {
          start: { lat: 21.0285, lng: 105.8542 },
          end: { lat: 13.7563, lng: 100.5018 },
        }, // Vietnam to Thailand
        {
          start: { lat: 3.139, lng: 101.6869 },
          end: { lat: 1.3521, lng: 103.8198 },
        }, // Malaysia to Singapore
        {
          start: { lat: 25.276987, lng: 55.296249 },
          end: { lat: 28.6139, lng: 77.209 },
        }, // Dubai to India
      ]}
    />
  );
}
