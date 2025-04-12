import Image from 'next/image';
import Link from 'next/link';
import Button from '@/src/ui/components/button/button';
import Card from '@/src/ui/components/card/card';

const likedAnimals = [
  {
    id: '1',
    name: 'Лорд',
    description: 'Дружній собака. Потребує турботи та прогулянок.',
    image: '/dog2.png',
  },
  {
    id: '2',
    name: 'Рекс',
    description:
      'Дружній собака. Любить дітей. Потребує турботи та прогулянок.',
    image: '/dog2.png',
  },
];

export default function LikedAnimalsPage() {
  return (
    <main className='bg-white text-[#3D4127] min-h-screen'>
      <section className='bg-[#BAC095] py-16 px-6 text-center'>
        <h1 className='text-4xl md:text-5xl font-extrabold'>
          Улюблені тварини
        </h1>
        <p className='mt-4 text-lg max-w-2xl mx-auto'>
          Список тварин, яких ви вподобали. Оберіть одного з них, щоб дізнатись
          більше.
        </p>
      </section>

      <section className='py-12 px-4 sm:px-6 md:px-10 max-w-6xl mx-auto'>
        {likedAnimals.length === 0 ? (
          <p className='text-center text-lg text-[#6B705C]'>
            Ви ще не додали жодної тварини до улюблених.
          </p>
        ) : (
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
            {likedAnimals.map((animal) => (
              <Card
                key={animal.id}
                imageSrc={animal.image}
                name={animal.name}
                description={animal.description}
                id={animal.id}
                liked={true}
              />
            ))}
          </div>
        )}
      </section>
    </main>
  );
}
