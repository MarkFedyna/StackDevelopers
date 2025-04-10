import './header.styles.css'
import Link from "next/link";
import {SquareUserRound, Heart, Search} from 'lucide-react'

function Header() {
  return (
    <header className="header flex justify-between items-center px-12">
        <h1>Дай лапу</h1>
        <nav>
            <ul className={'flex gap-9'}>
                <li><Link  href="#">Оголошення</Link></li>
                <li><Link  href="#">Про нас</Link></li>
                <li><Link  href="#">Як допомогти</Link></li>
                <li><Link  href="#">Подати  ініціативу</Link></li>
            </ul>

        </nav>
        <section className={'header__icons flex gap-6'}>
            <Link href={'#'} className=''><Search  size={32}/></Link>
            <section className={'flex gap-1.5'}>
                <Link href={'#'}><Heart size={32} /></Link>
                <Link href={'#'}><SquareUserRound  size={32}/></Link>
            </section>
            
        </section>
    </header>
  )
}

export default Header