/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',  // Статический экспорт для обычного хостинга

  images: {
    unoptimized: true,  // Отключаем оптимизацию для static export
  },

  // Отключаем функции несовместимые со static export
  // headers() работают только на серверах с Node.js
  // На обычном хостинге можно настроить через .htaccess
}

module.exports = nextConfig
