import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import Header from '@/src/ui/components/header/header';
import Footer from '@/src/ui/components/footer/footer';

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
