'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navigation = [
    { name: 'Главная', href: '/' },
    { name: 'О компании', href: '/about' },
    { name: 'Услуги', href: '/services' },
    { name: 'Проекты', href: '/projects' },
    { name: 'Партнеры', href: '/partners' },
    { name: 'Новости', href: '/news' },
    { name: 'Вакансии', href: '/vacancies' },
    { name: 'Тендеры', href: '/tenders' },
    { name: 'Контакты', href: '/contacts' },
  ]

  return (
    <header className="sticky top-0 z-50 bg-primary-500 shadow-lg">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" aria-label="Top">
        <div className="flex w-full items-center justify-between py-4">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-3">
              <div className="h-12 w-12 rounded-lg bg-accent-500 flex items-center justify-center">
                <div className="text-white font-bold text-xl">ПГДС</div>
              </div>
              <div className="text-white">
                <div className="text-xl font-bold">ПГДС</div>
                <div className="text-sm opacity-90">с нами теплее</div>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:space-x-6">
            {navigation.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-white hover:text-accent-500 transition-colors duration-200 text-sm font-medium"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="flex lg:hidden">
            <button
              type="button"
              className="text-white"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <span className="sr-only">Открыть меню</span>
              {mobileMenuOpen ? (
                <X className="h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden pb-4">
            <div className="space-y-2">
              {navigation.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="block text-white hover:text-accent-500 transition-colors duration-200 py-2 text-base font-medium"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
