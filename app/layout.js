import './globals.css'
import { Inter } from 'next/font/google'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Wondernest',
  description: 'Moonwith v6',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className='main-header'>
          <Link href="/">
          <div className='title'>
            <h1>wondernest</h1>
          </div>
          </Link>
          <div className='subtitle'>
            <p>A blog on product development and social psychology.</p>
          </div>
        </header>
        
          {children}
          <footer>Only You Know Who You Can Be</footer>
      </body>
    </html>
  )
}
