import { MapPin, Calendar, Tag } from 'lucide-react'
import projects from '@/data/projects.json'

export default function ProjectsPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-500 to-primary-700 text-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Наши проекты</h1>
          <p className="text-xl max-w-3xl">
            Реализованные проекты по строительству и реконструкции газопроводов
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div
                key={project.id}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
              >
                {/* Project Image Placeholder */}
                <div className="h-48 bg-gradient-to-br from-primary-100 to-primary-50 flex items-center justify-center">
                  <p className="text-gray-400 text-sm px-4 text-center">
                    [Изображение проекта]
                  </p>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-accent-100 text-accent-800">
                      <Tag className="h-3 w-3 mr-1" />
                      {project.category}
                    </span>
                    <span
                      className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${
                        project.status === 'Завершен'
                          ? 'bg-green-100 text-green-800'
                          : 'bg-blue-100 text-blue-800'
                      }`}
                    >
                      {project.status}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-primary-500 mb-2">
                    {project.title}
                  </h3>

                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  <div className="space-y-2 text-sm text-gray-500">
                    <div className="flex items-center">
                      <MapPin className="h-4 w-4 mr-2 text-accent-500" />
                      <span>{project.location}</span>
                    </div>
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-2 text-accent-500" />
                      <span>{project.year} год</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Empty State */}
          {projects.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">
                Проекты скоро появятся
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Project Stats */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary-500 mb-4">
              Наш опыт в цифрах
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="text-4xl font-bold text-accent-500 mb-2">
                {projects.length}+
              </div>
              <div className="text-gray-600">Реализованных проектов</div>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="text-4xl font-bold text-accent-500 mb-2">100%</div>
              <div className="text-gray-600">Соблюдение сроков</div>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="text-4xl font-bold text-accent-500 mb-2">5+</div>
              <div className="text-gray-600">Регионов присутствия</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
