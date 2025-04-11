import Link from 'next/link';

const paths = [
  { name: 'Оголошення', path: '/advertisement' },
  { name: 'Про нас', path: '/about-us' },
  { name: 'Як допомогти', path: '/how-to-help' },
  { name: 'Подати ініціативу', path: '/send-initiative' },
];

function Header() {
  return (
    <header className=' bg-[#636B2F] h-[70px] flex justify-between items-center px-12'>
      <Link
        href={'/'}
        className='font-extrabold text-[#BAC095] font-[Alegreya] text-3xl'
      >
        Дай Лапу
      </Link>
      <nav className='flex gap-5'>
        {paths.map((item) => {
          return (
            <Link
              key={item.path}
              href={item.path}
              className='font-inter text-[20px] font-bold text-[#BAC095] hover:opacity-60 transition-all duration-300 ease-out'
            >
              {item.name}
            </Link>
          );
        })}
      </nav>

      <div className={'flex gap-6'}>
        <Link href={'/search'} className=''>
          {/* <Search width={32} height={32} /> */}
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
              stroke-width='3'
            />
            <path
              d='M26.6666 26.6667L22.6666 22.6667'
              stroke='#BAC095'
              stroke-width='3'
              stroke-linecap='round'
            />
          </svg>
        </Link>

        <div className={'flex gap-1.5'}>
          <Link href={'/like'}>
            {/* <Heart width={32} height={32} /> */}
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
          <Link href={'/profile'}>
            {/* <Account width={32} height={32} /> */}
            <svg
              width='32'
              height='33'
              viewBox='0 0 32 33'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                fill-rule='evenodd'
                clip-rule='evenodd'
                d='M2.66663 11.1667C2.66663 7.39543 2.66663 5.50981 3.8382 4.33824C5.00977 3.16667 6.89539 3.16667 10.6666 3.16667H21.3333C25.1045 3.16667 26.9901 3.16667 28.1617 4.33824C29.3333 5.50981 29.3333 7.39543 29.3333 11.1667V21.8333C29.3333 25.6046 29.3333 27.4902 28.1617 28.6618C26.9901 29.8333 25.1045 29.8333 21.3333 29.8333H10.6666C6.89539 29.8333 5.00977 29.8333 3.8382 28.6618C2.66663 27.4902 2.66663 25.6046 2.66663 21.8333V11.1667ZM10.5211 22.6932C12.0929 21.4871 14.0188 20.8333 16 20.8333C17.9812 20.8333 19.907 21.4871 21.4788 22.6932C23.0506 23.8992 24.1805 25.5903 24.6933 27.504C24.8362 28.0374 24.5197 28.5858 23.9862 28.7287C23.4527 28.8717 22.9044 28.5551 22.7614 28.0216C22.3626 26.5332 21.4838 25.2179 20.2613 24.2799C19.0388 23.3418 17.5409 22.8333 16 22.8333C14.459 22.8333 12.9611 23.3418 11.7386 24.2799C10.5161 25.2179 9.6373 26.5332 9.23848 28.0216C9.09554 28.5551 8.5472 28.8716 8.01373 28.7287C7.48027 28.5858 7.16369 28.0374 7.30663 27.504C7.8194 25.5903 8.94931 23.8992 10.5211 22.6932ZM13 12.5C13 10.8431 14.3431 9.5 16 9.5C17.6568 9.5 19 10.8431 19 12.5C19 14.1569 17.6568 15.5 16 15.5C14.3431 15.5 13 14.1569 13 12.5ZM16 7.5C13.2385 7.5 11 9.73858 11 12.5C11 15.2614 13.2385 17.5 16 17.5C18.7614 17.5 21 15.2614 21 12.5C21 9.73858 18.7614 7.5 16 7.5Z'
                fill='#BAC095'
              />
            </svg>
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
