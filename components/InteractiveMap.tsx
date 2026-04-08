'use client';

import { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import './InteractiveMap.css';

interface Region {
  id: string;
  name: string;
  coordinates?: number[];
  description?: string;
}

interface InteractiveMapProps {
  regions: Region[];
}

export default function InteractiveMap({ regions }: InteractiveMapProps) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Создаем кастомную иконку маркера
  const customIcon = L.icon({
    iconUrl: '/map-marker.svg',
    iconSize: [38, 48],
    iconAnchor: [19, 45],
    popupAnchor: [0, -45],
  });

  // Фильтруем регионы с координатами
  const regionsWithCoordinates = regions.filter(
    (region) => region.coordinates && region.coordinates.length === 2
  );

  if (!isMounted) {
    return (
      <div className="w-full h-[500px] bg-gray-100 rounded-lg flex items-center justify-center">
        <p className="text-gray-500">Загрузка карты...</p>
      </div>
    );
  }

  return (
    <div className="w-full h-[400px] sm:h-[500px] lg:h-[600px] rounded-lg overflow-hidden shadow-lg">
      <MapContainer
        center={[60, 65]}
        zoom={3}
        scrollWheelZoom={false}
        dragging={true}
        style={{ height: '100%', width: '100%' }}
        className="z-0"
      >
        <TileLayer
          attribution='&copy; <a href="https://yandex.ru/maps">Яндекс.Карты</a>'
          url="https://core-renderer-tiles.maps.yandex.net/tiles?l=map&v=21.06.03-0-b210520143850&x={x}&y={y}&z={z}&scale=1&lang=ru_RU"
        />
        {regionsWithCoordinates.map((region) => (
          <Marker
            key={region.id}
            position={region.coordinates as [number, number]}
            icon={customIcon}
          >
            <Popup closeButton={false}>
              <div className="text-center py-1">
                <h3 className="font-bold text-base text-primary">{region.name}</h3>
                {region.description && (
                  <p className="text-sm text-gray-600 mt-1">{region.description}</p>
                )}
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}
