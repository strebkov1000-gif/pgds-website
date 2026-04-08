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

    const initMap = () => {
      if (!mapRef.current) return;

      // @ts-ignore
      if (!window.ymaps) {
        console.error('Yandex Maps API не загружен');
        return;
      }

      // @ts-ignore
      window.ymaps.ready(() => {
        try {
          // @ts-ignore
          const map = new window.ymaps.Map(mapRef.current, {
            center: [60, 65],
            zoom: 3,
            controls: ['zoomControl'],
          });

          // Фильтруем регионы с координатами
          const regionsWithCoordinates = regions.filter(
            (region) => region.coordinates && region.coordinates.length === 2
          );

          // Добавляем маркеры
          regionsWithCoordinates.forEach((region) => {
            if (!region.coordinates) return;

            // @ts-ignore
            const placemark = new window.ymaps.Placemark(
              region.coordinates,
              {
                balloonContentHeader: region.name,
                balloonContentBody: region.description || '',
              },
              {
                iconLayout: 'default#image',
                iconImageHref: '/map-marker.svg',
                iconImageSize: [38, 48],
                iconImageOffset: [-19, -48],
              }
            );

            map.geoObjects.add(placemark);
          });

          mapInstanceRef.current = map;
        } catch (error) {
          console.error('Ошибка инициализации карты:', error);
        }
      });
    };

    // Загружаем Yandex Maps API 2.1
    const script = document.createElement('script');
    script.src = `https://api-maps.yandex.ru/2.1/?apikey=${apiKey}&lang=ru_RU`;
    script.async = true;
    script.onload = initMap;
    script.onerror = () => {
      console.error('Не удалось загрузить Yandex Maps API');
    };
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
