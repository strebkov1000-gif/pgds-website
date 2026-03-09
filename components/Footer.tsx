import Link from 'next/link'
import { Phone, Mail, MapPin } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-primary-800 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* О компании */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-accent-500">О компании</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="hover:text-accent-500 transition-colors">
                  История
                </Link>
              </li>
              <li>
                <Link href="/about#team" className="hover:text-accent-500 transition-colors">
                  Руководство
                </Link>
              </li>
              <li>
                <Link href="/about#certificates" className="hover:text-accent-500 transition-colors">
                  Сертификаты
                </Link>
              </li>
              <li>
                <Link href="/about#equipment" className="hover:text-accent-500 transition-colors">
                  Техника
                </Link>
              </li>
            </ul>
          </div>

          {/* Услуги */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-accent-500">Услуги</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/services" className="hover:text-accent-500 transition-colors">
                  Строительство газопроводов
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-accent-500 transition-colors">
                  Реконструкция сетей
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-accent-500 transition-colors">
                  Газификация объектов
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-accent-500 transition-colors">
                  Проектные работы
                </Link>
              </li>
            </ul>
          </div>

          {/* Информация */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-accent-500">Информация</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/projects" className="hover:text-accent-500 transition-colors">
                  Проекты
                </Link>
              </li>
              <li>
                <Link href="/partners" className="hover:text-accent-500 transition-colors">
                  Партнеры
                </Link>
              </li>
              <li>
                <Link href="/news" className="hover:text-accent-500 transition-colors">
                  Новости
                </Link>
              </li>
              <li>
                <Link href="/vacancies" className="hover:text-accent-500 transition-colors">
                  Вакансии
                </Link>
              </li>
              <li>
                <Link href="/tenders" className="hover:text-accent-500 transition-colors">
                  Тендеры
                </Link>
              </li>
            </ul>
          </div>

          {/* Контакты */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-accent-500">Контакты</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-2">
                <Phone className="h-5 w-5 mt-0.5 text-accent-500 flex-shrink-0" />
                <span>+7 (XXX) XXX-XX-XX</span>
              </li>
              <li className="flex items-start space-x-2">
                <Mail className="h-5 w-5 mt-0.5 text-accent-500 flex-shrink-0" />
                <span>info@pgds.ru</span>
              </li>
              <li className="flex items-start space-x-2">
                <MapPin className="h-5 w-5 mt-0.5 text-accent-500 flex-shrink-0" />
                <span>Россия</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-primary-700 text-center text-sm">
          <p>&copy; {currentYear} ПГДС. Все права защищены.</p>
        </div>
      </div>
    </footer>
  )
}
