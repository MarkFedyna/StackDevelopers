import Link from 'next/link';
import RegisterModule from '../register/register-module';

const paths = [
  { name: 'Оголошення', path: '/advertisement' },
  { name: 'Про нас', path: '/about-us' },
  { name: 'Як допомогти', path: '/how-to-help' },
  { name: 'Подати ініціативу', path: '/send-initiative' },
];

function Header() {
  return (
    <header className='bg-[#636B2F] h-[70px] flex justify-between items-center px-6 sm:px-12'>
      <Link
        href={'/'}
        className='font-extrabold text-[#BAC095] font-[Alegreya] text-2xl sm:text-3xl'
      >
        Дай Лапу
      </Link>

      <nav className='hidden sm:flex gap-6'>
        {paths.map((item) => (
          <Link
            key={item.path}
            href={item.path}
            className='font-inter text-sm sm:text-lg font-bold text-[#BAC095] hover:opacity-60 transition-all duration-300 ease-out'
          >
            {item.name}
          </Link>
        ))}
      </nav>

      <div className='lg:flex gap-6 hidden'>
        <Link href='/search'>
          <svg
            width='32'
            height='32'
            viewBox='0 0 32 32'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <circle
              cx='14.6667'
              cy='14.6667'
              r='9.33333'
              stroke='#BAC095'
              strokeWidth='3'
            />
            <path
              d='M26.6666 26.6667L22.6666 22.6667'
              stroke='#BAC095'
              strokeWidth='3'
              strokeLinecap='round'
            />
          </svg>
        </Link>

        <div className='flex gap-1.5'>
          <Link href='/liked'>
            <svg
              width='32'
              height='32'
              viewBox='0 0 32 32'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M16.0013 6.03804C19.1333 3.22667 23.9733 3.32 26.9901 6.34315C30.007 9.36629 30.1106 14.1827 27.3048 17.324L15.9998 28.6467L4.69513 17.324C1.88936 14.1827 1.99424 9.35868 5.00977 6.34315C8.02872 3.3242 12.8602 3.22249 16.0013 6.03804Z'
                fill='#BAC095'
              />
            </svg>
          </Link>

          <RegisterModule />
        </div>
      </div>
    </header>
  );
}

export default Header;
