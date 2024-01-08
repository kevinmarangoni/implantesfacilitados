
import Theme from '@/theme/ThemeContext'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Endodontia Facilitada',
  description: 'Endodontia Microscópica, Clínica e Cirúrgica. Somos referência em Tratamento de Canal Sem Dor. Acabe com a dor e o desconforto de canal. Nosso atendimento de endodontia é rápido, indolor e sem estresse.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <Theme>
      <html lang="pt">
        <head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link href="https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
        </head>
        <body>{children}</body>
      </html>
    </Theme>
  )
}
