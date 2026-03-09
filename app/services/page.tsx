import { Building2, Wrench, Factory, FileText, CheckCircle } from 'lucide-react'
import content from '@/data/content.json'
import Link from 'next/link'

export default function ServicesPage() {
  const { services } = content

  const iconMap: Record<string, any> = {
    building: Building2,
    wrench: Wrench,
    factory: Factory,
    fileText: FileText,
    pipe: Building2,
  }

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-500 to-primary-700 text-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            Наши услуги
          </h1>
          <p className="text-xl max-w-3xl">
            Полный спектр услуг по проектированию, строительству и обслуживанию газопроводов
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service) => {
              const Icon = iconMap[service.icon] || Building2
              return (
                <div
                  key={service.id}
                  className="bg-white border-2 border-gray-200 rounded-lg p-8 hover:border-accent-500 hover:shadow-lg transition-all"
                >
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="h-16 w-16 bg-primary-500 rounded-lg flex items-center justify-center">
                        <Icon className="h-8 w-8 text-white" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-primary-500 mb-3">
                        {service.title}
                      </h3>
                      <p className="text-gray-700 leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Detailed Services */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-primary-500 mb-12 text-center">
            Детальное описание услуг
          </h2>

          <div className="space-y-12">
            {/* Строительство газопроводов */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold text-primary-500 mb-4">
                Строительство распределительных газопроводов
              </h3>
              <p className="text-gray-700 mb-4">
                Мы выполняем строительство газопроводов всех уровней давления:
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-accent-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Газопроводы низкого давления (до 0,005 МПа)</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-accent-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Газопроводы среднего давления (от 0,005 до 0,3 МПа)</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-accent-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Газопроводы высокого давления (от 0,3 до 1,2 МПа)</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-accent-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Строительство из полиэтиленовых труб (ПЭ100)</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-accent-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Строительство из стальных труб</span>
                </li>
              </ul>
            </div>

            {/* Реконструкция */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold text-primary-500 mb-4">
                Реконструкция сетей газораспределения
              </h3>
              <p className="text-gray-700 mb-4">
                Модернизация и обновление существующих газораспределительных сетей:
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-accent-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Замена изношенных участков трубопроводов</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-accent-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Увеличение пропускной способности</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-accent-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Установка современного оборудования</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-accent-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Техническое перевооружение сетей</span>
                </li>
              </ul>
            </div>

            {/* Газификация */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold text-primary-500 mb-4">
                Газификация объектов
              </h3>
              <p className="text-gray-700 mb-4">
                Подключение различных типов объектов к системам газоснабжения:
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-accent-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Жилые дома и коттеджные поселки</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-accent-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Коммерческие и административные здания</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-accent-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Промышленные предприятия</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-accent-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Государственные учреждения</span>
                </li>
              </ul>
            </div>

            {/* Проектирование */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold text-primary-500 mb-4">
                Проектно-изыскательские работы
              </h3>
              <p className="text-gray-700 mb-4">
                Полный цикл проектных работ:
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-accent-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Инженерные изыскания</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-accent-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Разработка проектной документации</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-accent-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Экспертиза и согласование проектов</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-accent-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Авторский надзор</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="bg-primary-500 text-white p-12 rounded-lg text-center">
            <h2 className="text-3xl font-bold mb-4">
              Нужна консультация по нашим услугам?
            </h2>
            <p className="text-lg mb-8">
              Свяжитесь с нами, и мы подберем оптимальное решение для вашего проекта
            </p>
            <Link
              href="/contacts"
              className="inline-flex items-center justify-center px-8 py-3 bg-accent-500 text-white font-medium rounded-lg hover:bg-accent-600 transition-colors"
            >
              Связаться с нами
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
