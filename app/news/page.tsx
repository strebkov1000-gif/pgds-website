import { Calendar, Tag } from 'lucide-react'
import news from '@/data/news.json'

export default function NewsPage() {
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
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Новости компании</h1>
          <p className="text-xl max-w-3xl">
            Актуальные события и достижения ПГДС
          </p>
        </div>
      </section>

      {/* News Grid */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {news.map((item) => (
              <article
                key={item.id}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="md:flex">
                  {/* Image */}
                  <div className="md:w-1/3">
                    <div className="h-64 md:h-full bg-gradient-to-br from-primary-100 to-primary-50 flex items-center justify-center">
                      <p className="text-gray-400 text-sm px-4 text-center">
                        [Изображение новости]
                      </p>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="md:w-2/3 p-8">
                    <div className="flex items-center gap-4 mb-4">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-accent-100 text-accent-800">
                        <Tag className="h-3 w-3 mr-1" />
                        {item.category}
                      </span>
                      <span className="flex items-center text-sm text-gray-500">
                        <Calendar className="h-4 w-4 mr-1" />
                        {formatDate(item.date)}
                      </span>
                    </div>

                    <h2 className="text-2xl font-bold text-primary-500 mb-3">
                      {item.title}
                    </h2>

                    <p className="text-gray-600 mb-4">{item.excerpt}</p>

                    <p className="text-gray-700">{item.content}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Empty State */}
          {news.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">
                Новости скоро появятся
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
