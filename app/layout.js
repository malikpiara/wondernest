import './globals.css'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react';
import * as amplitude from '@amplitude/analytics-browser';
import Link from 'next/link'
import LoadingPage from '../components/loadingPage';

const inter = Inter({ subsets: ['latin'] })

amplitude.init(process.env.NEXT_PUBLIC_AMPLITUDE_API_KEY);

export const metadata = {
  title: 'Wondernest',
  description: 'Moonwith v6',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <LoadingPage/>
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

          {/* The following tag enables web analytics at Vercel */}
          <Analytics />
          
      </body>
    </html>
  )
}
