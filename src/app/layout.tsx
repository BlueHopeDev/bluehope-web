import Header from './(shared)/Header'
import './globals.css'
import { Ubuntu_Mono } from 'next/font/google'

const ubuntuMono = Ubuntu_Mono({ weight: '400',subsets: ['latin-ext'] })
const ubuntuMonoBold = Ubuntu_Mono({ weight: '700',subsets: ['latin-ext'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={ubuntuMono.className}>
        <Header/>
        {children}
      </body>
    </html>
  )
}
