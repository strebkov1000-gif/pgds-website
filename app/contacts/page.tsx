'use client'

import { Phone, Mail, MapPin, Send } from 'lucide-react'
import content from '@/data/content.json'
import { useState } from 'react'

export default function ContactsPage() {
  const { company, regions } = content
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    alert('Спасибо за обращение! Мы свяжемся с вами в ближайшее время.')
    setFormData({ name: '', email: '', phone: '', message: '' })
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-500 to-primary-700 text-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Контакты</h1>
          <p className="text-xl max-w-3xl">
            Свяжитесь с нами удобным для вас способом
          </p>
        </div>
      </section>

      {/* Contact Information & Form */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h2 className="text-3xl font-bold text-primary-500 mb-8">
                Наши контакты
              </h2>

              <div className="space-y-6 mb-8">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="h-12 w-12 bg-accent-100 rounded-lg flex items-center justify-center">
                      <Phone className="h-6 w-6 text-accent-500" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary-500 mb-1">Телефон</h3>
                    <p className="text-gray-700">{company.contacts.phone}</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="h-12 w-12 bg-accent-100 rounded-lg flex items-center justify-center">
                      <Mail className="h-6 w-6 text-accent-500" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary-500 mb-1">
                      Электронная почта
                    </h3>
                    <p className="text-gray-700">{company.contacts.email}</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="h-12 w-12 bg-accent-100 rounded-lg flex items-center justify-center">
                      <MapPin className="h-6 w-6 text-accent-500" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary-500 mb-1">Адрес</h3>
                    <p className="text-gray-700">{company.contacts.address}</p>
                  </div>
                </div>
              </div>

              <div className="bg-primary-50 p-6 rounded-lg">
                <h3 className="font-semibold text-primary-500 mb-4">
                  Режим работы
                </h3>
                <div className="space-y-2 text-gray-700">
                  <p>Понедельник - Пятница: 9:00 - 18:00</p>
                  <p>Суббота - Воскресенье: Выходной</p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-primary-500 mb-8">
                Напишите нам
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Имя *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-transparent"
                    placeholder="Ваше имя"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-transparent"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Телефон
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-transparent"
                    placeholder="+7 (XXX) XXX-XX-XX"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Сообщение *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-transparent resize-none"
                    placeholder="Ваше сообщение..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center px-6 py-3 bg-accent-500 text-white font-medium rounded-lg hover:bg-accent-600 transition-colors"
                >
                  <Send className="h-5 w-5 mr-2" />
                  Отправить сообщение
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Regional Offices */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-primary-500 mb-12 text-center">
            Наши подразделения
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {regions.map((region) => (
              <div
                key={region.id}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="flex items-start space-x-3 mb-3">
                  <MapPin className="h-6 w-6 text-accent-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold text-primary-500 mb-1">
                      {region.name}
                    </h3>
                    {region.description && (
                      <p className="text-sm text-gray-600">{region.description}</p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
