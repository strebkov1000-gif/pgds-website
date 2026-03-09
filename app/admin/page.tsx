'use client'

import { useState } from 'react'
import { FileText, Newspaper, Briefcase, Gavel, Users, Settings } from 'lucide-react'

export default function AdminPage() {
  const [activeTab, setActiveTab] = useState('overview')

  const menuItems = [
    { id: 'overview', name: 'Обзор', icon: Settings },
    { id: 'content', name: 'Контент компании', icon: FileText },
    { id: 'projects', name: 'Проекты', icon: FileText },
    { id: 'news', name: 'Новости', icon: Newspaper },
    { id: 'vacancies', name: 'Вакансии', icon: Briefcase },
    { id: 'tenders', name: 'Тендеры', icon: Gavel },
    { id: 'partners', name: 'Партнеры', icon: Users },
  ]

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Admin Header */}
      <header className="bg-primary-500 text-white shadow-lg">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4">
          <h1 className="text-2xl font-bold">Панель администратора ПГДС</h1>
        </div>
      </header>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-4">
              <nav className="space-y-2">
                {menuItems.map((item) => {
                  const Icon = item.icon
                  return (
                    <button
                      key={item.id}
                      onClick={() => setActiveTab(item.id)}
                      className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                        activeTab === item.id
                          ? 'bg-primary-500 text-white'
                          : 'text-gray-700 hover:bg-gray-100'
                      }`}
                    >
                      <Icon className="h-5 w-5" />
                      <span className="font-medium">{item.name}</span>
                    </button>
                  )
                })}
              </nav>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-lg shadow-md p-6">
              {activeTab === 'overview' && (
                <div>
                  <h2 className="text-2xl font-bold text-primary-500 mb-6">
                    Панель управления
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-lg">
                      <div className="text-3xl font-bold text-blue-600 mb-2">3</div>
                      <div className="text-gray-700">Проектов</div>
                    </div>
                    <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-lg">
                      <div className="text-3xl font-bold text-green-600 mb-2">2</div>
                      <div className="text-gray-700">Новостей</div>
                    </div>
                    <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-lg">
                      <div className="text-3xl font-bold text-purple-600 mb-2">
                        3
                      </div>
                      <div className="text-gray-700">Вакансий</div>
                    </div>
                  </div>

                  <div className="bg-accent-50 border-l-4 border-accent-500 p-4 rounded">
                    <h3 className="font-semibold text-accent-800 mb-2">
                      Управление контентом
                    </h3>
                    <p className="text-gray-700 text-sm">
                      Для управления контентом отредактируйте файлы JSON в папке{' '}
                      <code className="bg-white px-2 py-1 rounded">data/</code>:
                    </p>
                    <ul className="mt-3 space-y-1 text-sm text-gray-700">
                      <li>
                        • <code className="bg-white px-1 rounded">content.json</code> -
                        информация о компании, услуги, партнеры
                      </li>
                      <li>
                        • <code className="bg-white px-1 rounded">projects.json</code> -
                        проекты
                      </li>
                      <li>
                        • <code className="bg-white px-1 rounded">news.json</code> -
                        новости
                      </li>
                      <li>
                        • <code className="bg-white px-1 rounded">vacancies.json</code> -
                        вакансии
                      </li>
                      <li>
                        • <code className="bg-white px-1 rounded">tenders.json</code> -
                        тендеры
                      </li>
                    </ul>
                    <p className="mt-3 text-sm text-gray-700">
                      После редактирования файлов перезапустите сервер разработки.
                    </p>
                  </div>
                </div>
              )}

              {activeTab !== 'overview' && (
                <div>
                  <h2 className="text-2xl font-bold text-primary-500 mb-6">
                    {menuItems.find((item) => item.id === activeTab)?.name}
                  </h2>
                  <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded">
                    <p className="text-gray-700">
                      Для редактирования этого раздела отредактируйте соответствующий
                      файл в папке <code className="bg-white px-2 py-1 rounded">data/</code>
                    </p>
                    <div className="mt-4">
                      <p className="text-sm text-gray-600 mb-2">
                        Пути к файлам данных:
                      </p>
                      <ul className="space-y-1 text-sm">
                        {activeTab === 'content' && (
                          <li>
                            <code className="bg-white px-2 py-1 rounded">
                              data/content.json
                            </code>
                          </li>
                        )}
                        {activeTab === 'projects' && (
                          <li>
                            <code className="bg-white px-2 py-1 rounded">
                              data/projects.json
                            </code>
                          </li>
                        )}
                        {activeTab === 'news' && (
                          <li>
                            <code className="bg-white px-2 py-1 rounded">
                              data/news.json
                            </code>
                          </li>
                        )}
                        {activeTab === 'vacancies' && (
                          <li>
                            <code className="bg-white px-2 py-1 rounded">
                              data/vacancies.json
                            </code>
                          </li>
                        )}
                        {activeTab === 'tenders' && (
                          <li>
                            <code className="bg-white px-2 py-1 rounded">
                              data/tenders.json
                            </code>
                          </li>
                        )}
                        {activeTab === 'partners' && (
                          <li>
                            <code className="bg-white px-2 py-1 rounded">
                              data/content.json (секция partners)
                            </code>
                          </li>
                        )}
                      </ul>
                    </div>
                  </div>

                  <div className="mt-6 bg-gray-50 p-4 rounded">
                    <h3 className="font-semibold text-gray-700 mb-2">
                      Быстрые действия:
                    </h3>
                    <div className="space-y-2">
                      <button className="w-full px-4 py-2 bg-primary-500 text-white rounded hover:bg-primary-600 transition-colors">
                        Открыть файл данных
                      </button>
                      <button className="w-full px-4 py-2 bg-accent-500 text-white rounded hover:bg-accent-600 transition-colors">
                        Добавить новую запись
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
