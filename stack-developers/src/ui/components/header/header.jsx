// import './header.module.css';
import Link from 'next/link';
import { SquareUserRound, Heart, Search } from 'lucide-react';

const paths = [
  { name: 'Оголошення', path: '/advertisement' },
  { name: 'Про нас', path: '/about-us' },
  { name: 'Як допомогти', path: '/how-to-help' },
  { name: 'Подати ініціативу', path: '/send-initiative' },
];

function Header() {
  return (
    <header className=' bg-[#A7C957] h-[70px] flex justify-between items-center px-12'>
      <Link href={'/'} className='font-extrabold font-[Alegreya] text-3xl'>
        Дай лапу
      </Link>
      <nav className='flex gap-5'>
        {paths.map((item) => {
          return (
            <Link
              key={item.path}
              href={item.path}
              className='font-inter text-[20px] font-bold hover:text-[#BC4749] transition-all duration-300 ease-out'
            >
              {item.name}
            </Link>
          );
        })}
      </nav>
      <div className={'flex gap-6'}>
        <Link href={'/search'} className=''>
          <Search size={32} />
        </Link>
        <div className={'flex gap-1.5'}>
          <Link href={'/like'}>
            <Heart size={32} />
          </Link>
          <Link href={'/profile'}>
            <SquareUserRound size={32} />
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
