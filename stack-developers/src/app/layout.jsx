import {Nunito, Alegreya, Inter} from 'next/font/google';
import './globals.css';
import Header from '@/src/layouts/header';
import Footer from '@/src/layouts/footer';

const nunito = Nunito()
const alegreya = Alegreya()
const inter = Inter()

export default function RootLayout({ children }) {
  return (
    <html>
      <body className={`${nunito.className} ${alegreya.className} ${inter.className}`}>
        <Header />
        {children}  
        <Footer />
      </body>
    </html>
  );
}
