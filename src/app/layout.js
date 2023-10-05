import { Inter } from 'next/font/google'
import Head from 'next/head'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Transfer2Market Anasayfa',
  description: 'Transferlerin Konforlu ve Güvenilir Yeri',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
          
      <body className={inter.className}>{children}</body>

    
    </html>
  )
}
