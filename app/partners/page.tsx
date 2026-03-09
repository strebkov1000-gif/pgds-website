import content from '@/data/content.json'

export default function PartnersPage() {
  const { partners } = content

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-500 to-primary-700 text-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Наши партнеры</h1>
          <p className="text-xl max-w-3xl">
            Мы активно сотрудничаем с ведущими компаниями газовой отрасли
          </p>
        </div>
      </section>

      {/* Main Partners */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary-500 mb-4">
              Основные партнеры
            </h2>
            <p className="text-lg text-gray-600">
              Сегодня ПГДС - это оптовый подрядчик и надежный партнер в строительстве
              распределительных газопроводов
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {partners.slice(0, 3).map((partner) => (
              <div
                key={partner.id}
                className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow border-2 border-primary-100"
              >
                <div className="h-32 flex items-center justify-center mb-4 bg-gray-50 rounded-lg">
                  <p className="text-gray-400 text-sm text-center px-4">
                    [Логотип {partner.name}]
                  </p>
                </div>
                <h3 className="text-lg font-semibold text-primary-500 text-center">
                  {partner.name}
                </h3>
              </div>
            ))}
          </div>

          <div className="bg-primary-50 p-8 rounded-lg mb-16">
            <h3 className="text-2xl font-bold text-primary-500 mb-4 text-center">
              О сотрудничестве
            </h3>
            <p className="text-gray-700 text-center max-w-3xl mx-auto">
              Мы активно сотрудничаем с ООО «Газпром Газораспределение Тула», ООО «Газпром
              Газораспределение Архангельск», АО «Мособлгаз», обеспечивая высокое качество
              выполнения строительно-монтажных работ и соблюдение всех технологических
              требований.
            </p>
          </div>

          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary-500 mb-4">
              Другие партнеры
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {partners.slice(3).map((partner) => (
              <div
                key={partner.id}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="h-24 flex items-center justify-center mb-3 bg-gray-50 rounded">
                  <p className="text-gray-400 text-xs text-center px-2">
                    [Лого]
                  </p>
                </div>
                <h3 className="text-sm font-medium text-primary-500 text-center">
                  {partner.name}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="bg-primary-500 text-white p-12 rounded-lg text-center">
            <h2 className="text-3xl font-bold mb-4">
              Хотите стать нашим партнером?
            </h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto">
              Мы всегда открыты для новых возможностей сотрудничества
            </p>
            <a
              href="/contacts"
              className="inline-flex items-center justify-center px-8 py-3 bg-accent-500 text-white font-medium rounded-lg hover:bg-accent-600 transition-colors"
            >
              Связаться с нами
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
