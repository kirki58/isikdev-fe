import styles from '../globals.css'
import Header from '@/components/Header/Header'

export const metadata = {
  title: 'Işıkdev',
  description: 'Işıkdev teknoloji alanında kendinizi geliştirebileceğiniz kapsamlı bir eğitim ve kurs platformudur.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
      </body>
    </html>
  )
}
