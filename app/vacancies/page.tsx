import { MapPin, Briefcase, Calendar, DollarSign } from 'lucide-react'
import vacancies from '@/data/vacancies.json'

export default function VacanciesPage() {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('ru-RU', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    })
  }

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-500 to-primary-700 text-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Карьера в ПГДС</h1>
          <p className="text-xl max-w-3xl">
            Присоединяйтесь к нашей команде профессионалов
          </p>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary-500 mb-4">
              Почему стоит работать у нас?
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="text-accent-500 text-4xl mb-4">🎓</div>
              <h3 className="text-xl font-semibold text-primary-500 mb-2">
                Профессиональное развитие
              </h3>
              <p className="text-gray-600">
                Обучение, повышение квалификации, аттестации
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="text-accent-500 text-4xl mb-4">💰</div>
              <h3 className="text-xl font-semibold text-primary-500 mb-2">
                Достойная оплата
              </h3>
              <p className="text-gray-600">
                Конкурентная заработная плата и премии
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="text-accent-500 text-4xl mb-4">🏢</div>
              <h3 className="text-xl font-semibold text-primary-500 mb-2">
                Стабильная компания
              </h3>
              <p className="text-gray-600">
                Официальное трудоустройство, социальный пакет
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vacancies List */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary-500 mb-4">
              Открытые вакансии
            </h2>
          </div>

          <div className="space-y-6">
            {vacancies.map((vacancy) => (
              <div
                key={vacancy.id}
                className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow border-l-4 border-accent-500"
              >
                <div className="p-8">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                    <div className="mb-4 lg:mb-0">
                      <h3 className="text-2xl font-bold text-primary-500 mb-2">
                        {vacancy.title}
                      </h3>
                      <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                        <span className="flex items-center">
                          <Briefcase className="h-4 w-4 mr-1 text-accent-500" />
                          {vacancy.department}
                        </span>
                        <span className="flex items-center">
                          <MapPin className="h-4 w-4 mr-1 text-accent-500" />
                          {vacancy.location}
                        </span>
                        <span className="flex items-center">
                          <Calendar className="h-4 w-4 mr-1 text-accent-500" />
                          {formatDate(vacancy.posted)}
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center bg-accent-50 px-4 py-2 rounded-lg">
                      <DollarSign className="h-5 w-5 text-accent-500 mr-2" />
                      <span className="font-semibold text-primary-500">
                        {vacancy.salary}
                      </span>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-primary-500 mb-3">
                        Требования:
                      </h4>
                      <ul className="space-y-2">
                        {vacancy.requirements.map((req, index) => (
                          <li key={index} className="flex items-start">
                            <span className="text-accent-500 mr-2">•</span>
                            <span className="text-gray-700">{req}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary-500 mb-3">
                        Обязанности:
                      </h4>
                      <ul className="space-y-2">
                        {vacancy.responsibilities.map((resp, index) => (
                          <li key={index} className="flex items-start">
                            <span className="text-accent-500 mr-2">•</span>
                            <span className="text-gray-700">{resp}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="mt-6">
                    <span className="inline-block px-4 py-2 bg-primary-100 text-primary-700 rounded-lg text-sm font-medium">
                      {vacancy.type}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Empty State */}
          {vacancies.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">
                В данный момент нет открытых вакансий
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="bg-primary-500 text-white p-12 rounded-lg text-center">
            <h2 className="text-3xl font-bold mb-4">
              Не нашли подходящую вакансию?
            </h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto">
              Отправьте нам свое резюме, и мы свяжемся с вами при появлении подходящих
              позиций
            </p>
            <a
              href="/contacts"
              className="inline-flex items-center justify-center px-8 py-3 bg-accent-500 text-white font-medium rounded-lg hover:bg-accent-600 transition-colors"
            >
              Отправить резюме
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
