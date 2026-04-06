import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'ПГДС - Проектирование и строительство газопроводов',
  description: 'ПГДС - надежный подрядчик в строительстве распределительных газопроводов. С нами теплее!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru">
      <head>
        <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
      </head>
      <body className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              if (window.netlifyIdentity) {
                window.netlifyIdentity.on("init", user => {
                  if (!user) {
                    window.netlifyIdentity.on("login", () => {
                      document.location.href = "/admin/";
                    });
                  }
                });
              }
            `,
          }}
        />
      </body>
    </html>
  )
}
