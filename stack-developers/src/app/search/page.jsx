'use client';

import { useState } from 'react';
import Card from '@/src/ui/components/card/card';
import animalsData from '@/public/petsData.json';
import Button from '@/src/ui/components/button/button';

export default function SearchPage() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredAnimals = animalsData.filter(
    (animal) =>
      (animal?.name?.toLowerCase() || '').includes(searchTerm.toLowerCase()) ||
      (animal?.description?.toLowerCase() || '').includes(
        searchTerm.toLowerCase()
      )
  );

  return (
    <main className='bg-white min-h-screen px-4 sm:px-8 py-12 text-[#3D4127]'>
      <div className='text-center mb-12'>
        <h1 className='text-4xl md:text-5xl font-extrabold mb-4'>
          Пошук тварин
        </h1>
        <p className='text-lg text-[#6B705C]'>
          Введіть ім'я тварини або ключове слово, щоб знайти оголошення.
        </p>

        <div className='mt-6 flex flex-col sm:flex-row justify-center items-center gap-4'>
          <input
            type='text'
            placeholder='Наприклад: собака, 3 роки'
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className='w-full sm:w-96 px-4 py-3 border border-[#BAC095] rounded-xl text-base focus:outline-none focus:ring-2 focus:ring-[#6A994E]'
          />
          <Button className='bg-[#6A994E] text-white hover:bg-[#D4DE95] hover:text-[#3D4127] px-6 py-3 transition'>
            Знайти
          </Button>
        </div>
      </div>

      <div className='max-w-6xl mx-auto'>
        {filteredAnimals.length === 0 ? (
          <p className='text-center text-lg text-[#6B705C]'>
            Нічого не знайдено. Спробуйте інше ключове слово.
          </p>
        ) : (
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
            {filteredAnimals.map((animal) => (
              <Card
                key={animal.id}
                imageSrc={animal.image}
                name={animal.name}
                description={animal.description}
                id={animal.id}
              />
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
