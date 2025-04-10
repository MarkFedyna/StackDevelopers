import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import Header from '@/src/layouts/header';
import Footer from '@/src/layouts/footer';

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
