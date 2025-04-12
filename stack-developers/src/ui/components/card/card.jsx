'use client';

import Image from 'next/image';
import Button from '@/src/ui/components/button/button';
import { useState } from 'react';
import Link from "next/link";

function Card({ imageSrc, name, description, id }) {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
  };

  return (
    <div
      className={
        'p-9 bg-[#BAC095] flex flex-col items-start rounded-3xl flex-wrap w-[303px] transition-transform transform hover:translate-y-[-5px]'
      }
    >
      <Image
        src={imageSrc}
        width={255}
        height={255}
        alt={name}
        className={'rounded-4xl'}
      />
      <div className={'flex flex-col'}>
        <div className={'text-left pt-4 pb-8'}>
          <h2 className={'text-3xl text-[#6a994e] font-bold'}>{name}</h2>
          <p className={'text-base'}>{description}</p>
        </div>
        <div className='flex items-center gap-2'>
          <Link href={'/animals/'+id}>
            <Button className={'bg-[#636B2F] px-3 py-2 rounded-10 hover:bg-[#D4DE95] hover:text-[#3D4127] transition-all duration-300 ease-out'}>
              Детальніше
            </Button>
          </Link>
          <svg
            onClick={handleClick}
            width='32'
            height='32'
            viewBox='0 0 32 32'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M16.0013 6.03804C19.1333 3.22667 23.9733 3.32 26.9901 6.34315C30.007 9.36629 30.1106 14.1827 27.3048 17.324L15.9998 28.6467L4.69513 17.324C1.88936 14.1827 1.99424 9.35868 5.00977 6.34315C8.02872 3.3242 12.8602 3.22249 16.0013 6.03804Z'
              fill={isActive ? 'red' : '#FFF'}
            />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default Card;
