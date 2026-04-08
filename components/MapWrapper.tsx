'use client';

import dynamic from 'next/dynamic';

const YandexMap = dynamic(() => import('./YandexMap'), {
  ssr: false,
  loading: () => (
    <div className="w-full h-[400px] sm:h-[500px] lg:h-[600px] bg-gray-100 rounded-lg flex items-center justify-center">
      <p className="text-gray-500">Загрузка карты...</p>
    </div>
  ),
});

interface Region {
  id: string;
  name: string;
  coordinates?: number[];
  description?: string;
}

interface MapWrapperProps {
  regions: Region[];
}

export default function MapWrapper({ regions }: MapWrapperProps) {
  const apiKey = process.env.NEXT_PUBLIC_YANDEX_MAPS_API_KEY || '';

  return <YandexMap regions={regions} apiKey={apiKey} />;
}
