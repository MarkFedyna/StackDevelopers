import { Inter, Alegreya, Nunito, Roboto } from 'next/font/google';
import './globals.css';
import Header from '@/src/ui/components/header/header';
import Footer from '@/src/ui/components/footer/footer';


const nunito = Nunito()
const alegreya = Alegreya()
const inter = Inter()
const roboto = Roboto()



export default function RootLayout({ children }) {
  return (
    <html>
      <body className={`${inter.className} ${alegreya.className} ${nunito.className} ${roboto.className}`}>
        <article className='body__article'>
        <Header />
        {children}
        <Footer />
        </article>
      </body>
    </html>
  );
}
