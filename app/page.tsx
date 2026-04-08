import Link from 'next/link'
import { ArrowRight, Building2, Wrench, Factory, FileText, Award } from 'lucide-react'
import content from '@/data/content.json'
import ParallaxObject from '@/components/backgrounds/ParallaxObject'
import AnimatedExcavator from '@/components/backgrounds/AnimatedExcavator'
import AnimatedGasPipe from '@/components/backgrounds/AnimatedGasPipe'

export default function Home() {
  const { company, services, partners, regions } = content

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary-500 to-primary-700 text-white overflow-hidden">
        {/* Parallax Background Objects */}
        <div className="absolute inset-0 pointer-events-none hidden lg:block">
          <ParallaxObject
            speed={0.3}
            direction="down"
            className="absolute left-[-100px] top-0 w-[600px] h-[500px]"
          >
            <AnimatedExcavator />
          </ParallaxObject>
          <ParallaxObject
            speed={0.5}
            direction="up"
            className="absolute right-[-100px] top-20 w-[500px] h-[600px]"
          >
            <AnimatedGasPipe />
          </ParallaxObject>
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              {company.name}
            </h1>
            <p className="text-xl sm:text-2xl mb-4 text-accent-500 font-semibold">
              {company.slogan}
            </p>
            <p className="text-lg sm:text-xl mb-8 max-w-3xl mx-auto">
              {company.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/services"
                className="inline-flex items-center justify-center px-8 py-3 bg-accent-500 text-white font-medium rounded-lg hover:bg-accent-600 transition-colors"
              >
                Наши услуги
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                href="/contacts"
                className="inline-flex items-center justify-center px-8 py-3 bg-white text-primary-500 font-medium rounded-lg hover:bg-gray-100 transition-colors"
              >
                Связаться с нами
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="text-4xl font-bold text-primary-500 mb-2">
                {company.stats.engineers}
              </div>
              <div className="text-gray-600">Инженеров</div>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="text-4xl font-bold text-primary-500 mb-2">
                {company.stats.linePersonnel}
              </div>
              <div className="text-gray-600">Линейного персонала</div>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="text-2xl font-bold text-primary-500 mb-2">
                {company.stats.revenue}
              </div>
              <div className="text-gray-600">Выручка {company.stats.revenuePeriod}</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-primary-500 mb-4">
              Основные виды деятельности компании
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.slice(0, 5).map((service) => (
              <div
                key={service.id}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border-t-4 border-accent-500"
              >
                <div className="h-12 w-12 bg-primary-500 rounded-lg flex items-center justify-center mb-4">
                  {service.icon === 'building' && <Building2 className="h-6 w-6 text-white" />}
                  {service.icon === 'wrench' && <Wrench className="h-6 w-6 text-white" />}
                  {service.icon === 'factory' && <Factory className="h-6 w-6 text-white" />}
                  {service.icon === 'fileText' && <FileText className="h-6 w-6 text-white" />}
                  {service.icon === 'pipe' && <Building2 className="h-6 w-6 text-white" />}
                </div>
                <h3 className="text-xl font-semibold text-primary-500 mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              href="/services"
              className="inline-flex items-center text-accent-500 hover:text-accent-600 font-medium"
            >
              Подробнее об услугах
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-primary-500 mb-4">
              География присутствия
            </h2>
            <p className="text-lg text-gray-600">
              Наша компания имеет несколько обособленных подразделений в регионах России
            </p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-md">
            <div className="aspect-video bg-gradient-to-br from-primary-100 to-primary-50 rounded-lg flex items-center justify-center mb-6">
              <p className="text-gray-500 text-center px-4">
                [Карта России с отмеченными городами: Москва, Санкт-Петербург, Ставрополь, Тула, Архангельск]
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {regions.slice(0, 5).map((region) => (
                <div key={region.id} className="text-center p-4 bg-gray-50 rounded-lg">
                  <h3 className="font-semibold text-primary-500 mb-1">{region.name}</h3>
                  {region.description && (
                    <p className="text-sm text-gray-600">{region.description}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-primary-500 mb-4">
              Наша компания является членом
            </h2>
          </div>
          <div className="flex flex-wrap justify-center gap-8">
            {company.certifications.map((cert, index) => (
              <div
                key={index}
                className="flex items-center justify-center w-32 h-32 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <Award className="h-12 w-12 text-accent-500 mb-2" />
                <span className="font-bold text-primary-500">{cert}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-primary-500 mb-4">
              Мы активно сотрудничаем с
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {partners.map((partner) => (
              <div
                key={partner.id}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow flex items-center justify-center"
              >
                <p className="text-center text-sm font-medium text-gray-700">
                  {partner.name}
                </p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              href="/partners"
              className="inline-flex items-center text-accent-500 hover:text-accent-600 font-medium"
            >
              Все партнеры
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary-500 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Готовы начать сотрудничество?
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Свяжитесь с нами для обсуждения вашего проекта
          </p>
          <Link
            href="/contacts"
            className="inline-flex items-center justify-center px-8 py-3 bg-accent-500 text-white font-medium rounded-lg hover:bg-accent-600 transition-colors"
          >
            Связаться с нами
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}
