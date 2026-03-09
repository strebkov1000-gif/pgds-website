import { Calendar, DollarSign, FileText, AlertCircle } from 'lucide-react'
import tenders from '@/data/tenders.json'

export default function TendersPage() {
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
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            Тендеры и закупки
          </h1>
          <p className="text-xl max-w-3xl">
            Актуальные тендеры и закупочные процедуры компании ПГДС
          </p>
        </div>
      </section>

      {/* Tenders List */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-6">
            {tenders.map((tender) => (
              <div
                key={tender.id}
                className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow border-t-4 border-accent-500"
              >
                <div className="p-8">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                    <div className="mb-4 lg:mb-0 flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <h3 className="text-2xl font-bold text-primary-500">
                          {tender.title}
                        </h3>
                        <span
                          className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${
                            tender.status === 'Активный'
                              ? 'bg-green-100 text-green-800'
                              : 'bg-gray-100 text-gray-800'
                          }`}
                        >
                          {tender.status}
                        </span>
                      </div>
                      <p className="text-gray-700 mb-4">{tender.description}</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                    <div className="flex items-center bg-gray-50 p-4 rounded-lg">
                      <DollarSign className="h-6 w-6 text-accent-500 mr-3 flex-shrink-0" />
                      <div>
                        <div className="text-sm text-gray-600">Бюджет</div>
                        <div className="font-semibold text-primary-500">
                          {tender.budget}
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center bg-gray-50 p-4 rounded-lg">
                      <Calendar className="h-6 w-6 text-accent-500 mr-3 flex-shrink-0" />
                      <div>
                        <div className="text-sm text-gray-600">Срок подачи</div>
                        <div className="font-semibold text-primary-500">
                          {formatDate(tender.deadline)}
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center bg-gray-50 p-4 rounded-lg">
                      <FileText className="h-6 w-6 text-accent-500 mr-3 flex-shrink-0" />
                      <div>
                        <div className="text-sm text-gray-600">Опубликовано</div>
                        <div className="font-semibold text-primary-500">
                          {formatDate(tender.posted)}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-primary-50 p-4 rounded-lg mb-6">
                    <div className="flex items-start">
                      <AlertCircle className="h-5 w-5 text-primary-500 mr-2 flex-shrink-0 mt-0.5" />
                      <div>
                        <h4 className="font-semibold text-primary-500 mb-2">
                          Требования к участникам:
                        </h4>
                        <p className="text-gray-700">{tender.requirements}</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <button className="px-6 py-2 bg-accent-500 text-white font-medium rounded-lg hover:bg-accent-600 transition-colors">
                      Подать заявку
                    </button>
                    <button className="px-6 py-2 bg-gray-200 text-gray-700 font-medium rounded-lg hover:bg-gray-300 transition-colors">
                      Скачать документацию
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Empty State */}
          {tenders.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">
                В данный момент нет активных тендеров
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Information Section */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-primary-500 mb-6 text-center">
              Как принять участие
            </h2>
            <div className="space-y-4 text-gray-700">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="font-semibold text-primary-500 mb-2">
                  1. Ознакомьтесь с требованиями
                </h3>
                <p>
                  Внимательно изучите техническое задание и требования к участникам
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="font-semibold text-primary-500 mb-2">
                  2. Подготовьте документы
                </h3>
                <p>
                  Соберите необходимый пакет документов согласно требованиям тендера
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="font-semibold text-primary-500 mb-2">
                  3. Подайте заявку
                </h3>
                <p>
                  Отправьте заявку до указанного срока через форму на сайте или по
                  электронной почте
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="bg-primary-500 text-white p-12 rounded-lg text-center">
            <h2 className="text-3xl font-bold mb-4">Есть вопросы по тендеру?</h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto">
              Свяжитесь с нашим отделом закупок для получения дополнительной информации
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
