'use client';

import { useState } from 'react';
import petImg from '../../../../public/dog2.png';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Heart } from 'lucide-react';
import ContactUsModal from '@/src/ui/components/contact-us/contact-us';

const CarPage = () => {
  const [isFavorite, setIsFavorite] = useState(false);

  const toggleFavorite = () => setIsFavorite(!isFavorite);

  return (
    <div className='flex h-full w-ful max-sm:flex-col'>
      {/* Image and detail information */}
      <div className='flex flex-col ml-[100px] mt-[40px] mb-[100px] max-sm:mx-0 max-sm:mb-[20px]'>
        <Image src={petImg} alt='pet img' width={650} height={900} />
      </div>
      <div className='flex flex-col mt-[40px] mr-[60px] ml-[40px] max-sm:mx-0'>
        <h1 className='font-bold !text-[60px]'>Бобі</h1>
        <div className='w-[570px] bg-white shadow-lg h-auto border-2 border-black rounded-[8px] mt-[40px] flex flex-col max-sm:w-full max-sm:mt-[20px]'>
          <p className='font-medium !text-[40px] mt-[10px] ml-[20px] max-sm:ml-[10px]'>
            Інформація
          </p>
          <div className='grid grid-cols-2 mt-[10px] ml-[20px] mb-[20px] max-sm:ml-[10px]'>
            <div className='flex flex-col gap-[10px]'>
              <p className='font-normal text-[20px]'>Тип тварини</p>
              <p className='font-normal text-[20px]'>Вік</p>
            </div>
            <div className='flex flex-col gap-[10px]'>
              <p className='font-normal text-[20px]'>Собака</p>
              <p className='font-normal text-[20px]'>3 роки</p>
            </div>
          </div>
          <p className='font-semibold text-[20px] mx-[20px]'>
            Здоров'я:
            <span className='font-extralight text-[20px]'>
              {' '}
              Бобі — абсолютно здоровий песик. У нього проведені всі необхідні
              щеплення, є ветеринарний паспорт. Оброблений від паразитів,
              кастрований, регулярно оглядається ветеринаром.{' '}
            </span>
          </p>
          <p className='font-semibold text-[20px] mx-[20px] my-[10px]'>
            Опис:
            <span className='font-extralight text-[20px]'>
              {' '}
              Добрий, слухняний і товариський пес. Добре ладнає з дітьми й
              іншими тваринами. Ідеальний для родини.{' '}
            </span>
          </p>
          <p className='font-semibold text-[20px] mx-[20px] my-[10px]'>
            Місцезнаходження:
            <span className='font-extralight text-[20px]'>
              {' '}
              м. Львів, притулок "Лапа Друга".{' '}
            </span>
          </p>
        </div>
        <div className='flex flex-col mb-[50px] gap-y-[20px]'>
          <Button
            onClick={toggleFavorite}
            className='mt-[20px] bg-[#BAC095] w-[325px] h-[68px] font-semibold text-[30px] hover:bg-[#636B2F]'
          >
            <Heart
              className={`mr-[10px] !h-[30px] !w-[30px] ${
                isFavorite ? '!fill-red-500 !text-red-500' : 'fill-white '
              }`}
            />
            {isFavorite ? 'У обраному' : 'Додати в обране'}
          </Button>
          <ContactUsModal />
        </div>
      </div>
    </div>
  );
};

export default CarPage;
