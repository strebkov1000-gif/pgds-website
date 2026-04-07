/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',  // Статический экспорт для обычного хостинга

  trailingSlash: true,  // Создаёт /about/index.html вместо /about.html

  images: {
    unoptimized: true,  // Отключаем оптимизацию для static export
  },

  // Отключаем функции несовместимые со static export
  // headers() работают только на серверах с Node.js
  // На обычном хостинге можно настроить через .htaccess
}

module.exports = nextConfig
