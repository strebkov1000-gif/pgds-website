import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  // Защита админ-панели простым паролем
  if (request.nextUrl.pathname.startsWith('/admin')) {
    // Получаем пароль из переменной окружения или используем дефолтный
    const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || 'pgds2024'

    // Проверяем заголовок авторизации
    const authHeader = request.headers.get('authorization')

    if (!authHeader) {
      return new NextResponse('Требуется авторизация', {
        status: 401,
        headers: {
          'WWW-Authenticate': 'Basic realm="Админ панель ПГДС"',
        },
      })
    }

    // Декодируем Basic Auth
    const auth = authHeader.split(' ')[1]
    const [username, password] = Buffer.from(auth, 'base64').toString().split(':')

    // Проверяем пароль (логин может быть любым)
    if (password !== ADMIN_PASSWORD) {
      return new NextResponse('Неверный пароль', {
        status: 401,
        headers: {
          'WWW-Authenticate': 'Basic realm="Админ панель ПГДС"',
        },
      })
    }
  }

  return NextResponse.next()
}

export const config = {
  matcher: '/admin/:path*',
}
