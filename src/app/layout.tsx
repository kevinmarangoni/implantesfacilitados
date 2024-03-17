/* eslint-disable @next/next/no-page-custom-font */

import Theme from '@/theme/ThemeContext'
import type { Metadata } from 'next'
import StyledComponentsRegistry from '../../lib/registry'
import { GoogleAnalytics, GoogleTagManager } from '@next/third-parties/google'

export const metadata: Metadata = {
  title: 'Implante Facilitado',
  description: 'Implantodontia Estética e Funcional. Somos especialistas em Implantes Dentários de Alta Qualidade. Recupere sua confiança e função mastigatória com nossos procedimentos eficientes, confortáveis e personalizados.',
  keywords: ["implante", "facilitado", "dentista", "implantes", "urgente", "urgência", "sem dor", "tratamento", "dor", "dente", "profissional", "limpeza"],
  icons: {
    icon: ["/public/favicon.ico", "/public/favicon-16x16.png", "/public/favicon-32x32.png"],
    apple: "/public/apple-touch-icon.png"
  },
  openGraph: {
    type: "website",
    url: "https://implantefacilitado.com.br",
    title: "Implante Facilitado",
    description: 'Implantodontia Estética e Funcional. Somos especialistas em Implantes Dentários de Alta Qualidade. Recupere sua confiança e função mastigatória com nossos procedimentos eficientes, confortáveis e personalizados.',
    siteName: "Implante Facilitado",
    images: [{
      url: "https://iili.io/JcaXE5N.jpg",
      width: 1200,
      height: 480,
    }],
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet" />
      </head>
          <StyledComponentsRegistry>
        <Theme>
          <body>{children}</body>
          {/* <GoogleAnalytics gaId="G-2015LETTD0" />
          <GoogleTagManager gtmId="G-2015LETTD0" /> */}
        </Theme>
          </StyledComponentsRegistry>
      </html>
  )
}
