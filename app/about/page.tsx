import { Award, Users, Wrench } from 'lucide-react'
import content from '@/data/content.json'
import FadeIn from '@/components/animations/FadeIn'
import StaggerContainer from '@/components/animations/StaggerContainer'
import StaggerItem from '@/components/animations/StaggerItem'
import AnimatedCounter from '@/components/animations/AnimatedCounter'
import RotateIn from '@/components/animations/RotateIn'
import FloatingIcon from '@/components/animations/FloatingIcon'

export default function AboutPage() {
  const { company, equipment } = content

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-500 to-primary-700 text-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeIn delay={0.2}>
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">О компании</h1>
            <p className="text-xl max-w-3xl">{company.description}</p>
          </FadeIn>
        </div>
      </section>

      {/* Company Info */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <FadeIn>
              <h2 className="text-3xl font-bold text-primary-500 mb-6">
                {company.fullName}
              </h2>
              <p className="text-gray-700 mb-6 text-lg">
                {company.about}
              </p>
            </FadeIn>

            {/* Mission */}
            <FadeIn delay={0.2}>
              <h3 className="text-2xl font-bold text-primary-500 mb-4 mt-8">
                Наша миссия
              </h3>
              <p className="text-gray-700 mb-6">
                {company.mission}
              </p>
            </FadeIn>

            {/* Social Gasification */}
            {company.socialGasification && (
              <FadeIn delay={0.3}>
                <h3 className="text-2xl font-bold text-primary-500 mb-4 mt-8">
                  {company.socialGasification.title}
                </h3>
                <p className="text-gray-700 mb-6">
                  {company.socialGasification.description}
                </p>
              </FadeIn>
            )}

            {/* Branches */}
            {company.branches && company.branches.length > 0 && (
              <FadeIn delay={0.4}>
                <h3 className="text-2xl font-bold text-primary-500 mb-4 mt-8">
                  География присутствия
                </h3>
                <p className="text-gray-700 mb-4">
                  Филиалы ООО «ПГДС» расположены в:
                </p>
                <ul className="list-disc list-inside text-gray-700 mb-6">
                  {company.branches.map((branch, index) => (
                    <li key={index}>
                      <strong>{branch.city}</strong> — {branch.type}
                    </li>
                  ))}
                </ul>
              </FadeIn>
            )}
          </div>
        </div>
      </section>

      {/* Values */}
      {company.values && company.values.length > 0 && (
        <section className="py-16 bg-gradient-to-r from-primary-50 to-primary-100">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <FadeIn>
              <h2 className="text-3xl font-bold text-primary-500 mb-12 text-center">
                Наши ценности
              </h2>
            </FadeIn>
            <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {company.values.map((value, index) => (
                <StaggerItem key={index}>
                  <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                    <h3 className="text-xl font-bold text-primary-500 mb-3">
                      {value.title}
                    </h3>
                    <p className="text-gray-700">
                      {value.description}
                    </p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>
      )}

      {/* Stats */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h2 className="text-3xl font-bold text-primary-500 mb-12 text-center">
              Ключевые показатели
            </h2>
          </FadeIn>
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8" staggerDelay={0.15}>
            <StaggerItem>
              <div className="bg-white p-8 rounded-lg shadow-md text-center hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
                <RotateIn delay={0.3}>
                  <FloatingIcon delay={0}>
                    <Users className="h-12 w-12 text-accent-500 mx-auto mb-4" />
                  </FloatingIcon>
                </RotateIn>
                <AnimatedCounter
                  end={company.stats.engineers}
                  className="text-4xl font-bold text-primary-500 mb-2"
                />
                <div className="text-gray-600">Инженеров (ИТР)</div>
              </div>
            </StaggerItem>
            <StaggerItem>
              <div className="bg-white p-8 rounded-lg shadow-md text-center hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
                <RotateIn delay={0.4}>
                  <FloatingIcon delay={0.2}>
                    <Users className="h-12 w-12 text-accent-500 mx-auto mb-4" />
                  </FloatingIcon>
                </RotateIn>
                <AnimatedCounter
                  end={company.stats.linePersonnel}
                  className="text-4xl font-bold text-primary-500 mb-2"
                />
                <div className="text-gray-600">Линейного персонала</div>
              </div>
            </StaggerItem>
            <StaggerItem>
              <div className="bg-white p-8 rounded-lg shadow-md text-center hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
                <RotateIn delay={0.5}>
                  <FloatingIcon delay={0.4}>
                    <Award className="h-12 w-12 text-accent-500 mx-auto mb-4" />
                  </FloatingIcon>
                </RotateIn>
                <div className="text-2xl font-bold text-primary-500 mb-2">
                  {company.stats.revenue}
                </div>
                <div className="text-gray-600">
                  Выручка с {company.stats.revenuePeriod.split('-')[0]} по{' '}
                  {company.stats.revenuePeriod.split('-')[1]} году
                </div>
              </div>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      {/* Certifications */}
      <section id="certificates" className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h2 className="text-3xl font-bold text-primary-500 mb-6">
              Сертификаты и допуски
            </h2>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-gray-700 mb-8">
              Наша компания является членом: {company.certifications.join(', ')}
            </p>
          </FadeIn>
          <FadeIn delay={0.3}>
            <p className="text-gray-700 mb-8">
              Применяем аттестованную технологию сварки НАКС.
            </p>
          </FadeIn>
          <FadeIn delay={0.4}>
            <p className="text-gray-700">
              Сотрудники ООО «ПГДС» имеют аттестации НАКС, НОСТРОЙ, НОПРИЗ, проходят
              аттестацию по промышленной безопасности.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Equipment */}
      <section id="equipment" className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <FadeIn>
              <h2 className="text-3xl font-bold text-primary-500 mb-4">
                Наша техника и оборудование
              </h2>
              <p className="text-lg text-gray-600">
                Наша компания имеет широкий автопарк собственной техники
              </p>
            </FadeIn>
          </div>
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {equipment.map((item, index) => (
              <StaggerItem key={index}>
                <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                  <RotateIn delay={index * 0.1}>
                    <Wrench className="h-10 w-10 text-accent-500 mb-4" />
                  </RotateIn>
                  <h3 className="text-lg font-semibold text-primary-500 mb-2">
                    {item.name}
                  </h3>
                  {item.models.length > 0 && (
                    <p className="text-gray-600 text-sm">
                      {item.models.join(', ')}
                    </p>
                  )}
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
          <FadeIn delay={0.5}>
            <div className="mt-8 text-center">
              <p className="text-gray-700">
                Благодаря этому мы можем оперативно и качественно выполнять поставленные
                задачи.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Continuous Improvement */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeIn>
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
          </FadeIn>
        </div>
      </section>
    </div>
  )
}
