'use client';

import { useEffect, useRef } from 'react';
import './YandexMap.css';

interface Region {
  id: string;
  name: string;
  coordinates?: number[];
  description?: string;
}

interface YandexMapProps {
  regions: Region[];
  apiKey: string;
}

export default function YandexMap({ regions, apiKey }: YandexMapProps) {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<any>(null);

  useEffect(() => {
    if (!mapRef.current || mapInstanceRef.current || !apiKey) return;

    const initMap = async () => {
    if (!mapRef.current) return;

    try {
      // @ts-ignore
      await ymaps3.ready;

      // @ts-ignore
      const { YMap, YMapDefaultSchemeLayer, YMapDefaultFeaturesLayer, YMapMarker } = ymaps3;

      // Создаем карту
      const map = new YMap(mapRef.current, {
        location: {
          center: [65, 60], // долгота, широта (в Yandex Maps 3.0 порядок изменился!)
          zoom: 3,
        },
      });

      // Добавляем слои карты
      map.addChild(new YMapDefaultSchemeLayer());
      map.addChild(new YMapDefaultFeaturesLayer());

      // Фильтруем регионы с координатами
      const regionsWithCoordinates = regions.filter(
        (region) => region.coordinates && region.coordinates.length === 2
      );

      // Добавляем маркеры
      regionsWithCoordinates.forEach((region) => {
        if (!region.coordinates) return;

        // В Yandex Maps 3.0 координаты: [долгота, широта]
        const coordinates = [region.coordinates[1], region.coordinates[0]];

        // Создаем HTML элемент для маркера
        const markerElement = document.createElement('div');
        markerElement.className = 'yandex-marker';
        markerElement.innerHTML = `
          <div class="marker-icon">
            <img src="/map-marker.svg" alt="${region.name}" style="width: 38px; height: 48px;" />
          </div>
          <div class="marker-popup">
            <div class="marker-popup-content">
              <h3 class="font-bold text-base text-primary">${region.name}</h3>
              ${region.description ? `<p class="text-sm text-gray-600 mt-1">${region.description}</p>` : ''}
            </div>
          </div>
        `;

        const marker = new YMapMarker({ coordinates }, markerElement);
        map.addChild(marker);
      });

      mapInstanceRef.current = map;
    } catch (error) {
      console.error('Ошибка инициализации карты:', error);
    }
  };

    // Загружаем Yandex Maps API
    const script = document.createElement('script');
    script.src = `https://api-maps.yandex.ru/3.0/?apikey=${apiKey}&lang=ru_RU`;
    script.async = true;
    script.onload = initMap;
    document.head.appendChild(script);

    return () => {
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, [apiKey, regions]);

  if (!apiKey) {
    return (
      <div className="w-full h-[400px] sm:h-[500px] lg:h-[600px] bg-red-100 rounded-lg flex items-center justify-center">
        <p className="text-red-600">Ошибка: API ключ Яндекс.Карт не найден</p>
      </div>
    );
  }

  return (
    <div className="w-full h-[400px] sm:h-[500px] lg:h-[600px] rounded-lg overflow-hidden shadow-lg">
      <div ref={mapRef} style={{ width: '100%', height: '100%' }} />
    </div>
  );
}
