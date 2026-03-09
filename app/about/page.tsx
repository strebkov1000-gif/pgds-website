import { Award, Users, Wrench } from 'lucide-react'
import content from '@/data/content.json'

export default function AboutPage() {
  const { company, equipment } = content

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-500 to-primary-700 text-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">О компании</h1>
          <p className="text-xl max-w-3xl">{company.description}</p>
        </div>
      </section>

      {/* Company Info */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold text-primary-500 mb-6">
              {company.fullName}
            </h2>
            <p className="text-gray-700 mb-6">
              ПГДС сегодня это оптовый подрядчик и надежный партнер в строительстве
              распределительных газопроводов! Мы активно сотрудничаем с ООО «Газпром
              Газораспределение Тула», ООО «Газпром Газораспределение Архангельск»,
              АО «Мособлгаз».
            </p>
            <p className="text-gray-700 mb-6">
              В 2025 году главным активом компании являются ее сотрудники. Сегодня в
              штате ООО «ПГДС» числится 27 инженерно-технических работников и 140
              человек линейного персонала.
            </p>
            <p className="text-gray-700 mb-6">
              Специалисты нашей компании имеют все необходимые допуски и аттестации,
              чтобы производить работы на высоком профессиональном уровне!
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-primary-500 mb-12 text-center">
            Ключевые показатели
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <Users className="h-12 w-12 text-accent-500 mx-auto mb-4" />
              <div className="text-4xl font-bold text-primary-500 mb-2">
                {company.stats.engineers}
              </div>
              <div className="text-gray-600">Инженеров (ИТР)</div>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <Users className="h-12 w-12 text-accent-500 mx-auto mb-4" />
              <div className="text-4xl font-bold text-primary-500 mb-2">
                {company.stats.linePersonnel}
              </div>
              <div className="text-gray-600">Линейного персонала</div>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <Award className="h-12 w-12 text-accent-500 mx-auto mb-4" />
              <div className="text-2xl font-bold text-primary-500 mb-2">
                {company.stats.revenue}
              </div>
              <div className="text-gray-600">
                Выручка с {company.stats.revenuePeriod.split('-')[0]} по{' '}
                {company.stats.revenuePeriod.split('-')[1]} году
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section id="certificates" className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-primary-500 mb-6">
            Сертификаты и допуски
          </h2>
          <p className="text-gray-700 mb-8">
            Наша компания является членом: {company.certifications.join(', ')}
          </p>
          <p className="text-gray-700 mb-8">
            Применяем аттестованную технологию сварки НАКС.
          </p>
          <p className="text-gray-700">
            Сотрудники ООО «ПГДС» имеют аттестации НАКС, НОСТРОЙ, НОПРИЗ, проходят
            аттестацию по промышленной безопасности.
          </p>
        </div>
      </section>

      {/* Equipment */}
      <section id="equipment" className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary-500 mb-4">
              Наша техника и оборудование
            </h2>
            <p className="text-lg text-gray-600">
              Наша компания имеет широкий автопарк собственной техники
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {equipment.map((item, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <Wrench className="h-10 w-10 text-accent-500 mb-4" />
                <h3 className="text-lg font-semibold text-primary-500 mb-2">
                  {item.name}
                </h3>
                {item.models.length > 0 && (
                  <p className="text-gray-600 text-sm">
                    {item.models.join(', ')}
                  </p>
                )}
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <p className="text-gray-700">
              Благодаря этому мы можем оперативно и качественно выполнять поставленные
              задачи.
            </p>
          </div>
        </div>
      </section>

      {/* Continuous Improvement */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="bg-primary-500 text-white p-12 rounded-lg">
            <h2 className="text-3xl font-bold mb-6 text-center">
              Постоянное развитие
            </h2>
            <p className="text-lg text-center max-w-3xl mx-auto">
              Ежегодно мы повышаем уровень квалификации своих специалистов, внедряем
              новые производственные и технологические процессы. Залогом финансовой
              стабильности нашей компании является грамотная стратегия развития.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
