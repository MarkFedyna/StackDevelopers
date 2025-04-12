import Link from 'next/link';
import Image from 'next/image';
import Button from '@/src/ui/components/button/button';
import addsData from '@/public/addsData.json';
import dog1 from '@/public/dog1.png';
// import cat1 from '@/public/cat1.jng';
// import dog2 from '@/public/dog2.png';

const adsData = [
  {
    id: '1',
    title: 'Собака шукає дім',
    description:
      'Молодий пес, 1 рік, потребує турботи та уваги. Знайдіть йому дім!',
    image: dog1,
  },
  {
    id: '2',
    title: 'Кіт потребує допомоги',
    description:
      'Кіт шукає тимчасовий дім на час лікування. Будь ласка, допоможіть!',
    image: dog1,
  },
  {
    id: '3',
    title: 'Потрібна допомога для собаки',
    description:
      'Собака потребує лікування та притулку. Давайте врятуємо разом!',
    image: dog1,
  },
];

export default function AdsPage() {
  return (
    <main className='bg-white text-[#3D4127]'>
      <div className='bg-[#BAC095] py-20 px-8 text-center'>
        <h1 className='text-5xl font-extrabold'>Оголошення про тварин</h1>
        <p className='mt-4 text-lg text-[#3D4127] max-w-2xl mx-auto'>
          Тут ви можете знайти оголошення про безпритульних тварин, які
          потребують допомоги або нового дому.
        </p>
      </div>

      <div className='py-16 px-4 md:px-8 max-w-5xl mx-auto space-y-12'>
        {adsData.map((ad) => (
          <div
            key={ad.id}
            className='flex flex-col md:flex-row gap-8 bg-[#F0F4E1] p-6 rounded-xl shadow-md'
          >
            <div className='w-full md:w-1/3'>
              <Image
                src={ad.image}
                alt={ad.title}
                width={500}
                height={300}
                className='rounded-xl object-cover'
              />
            </div>
            <div className='w-full md:w-2/3 flex flex-col justify-between'>
              <h2 className='text-2xl font-bold text-[#6A994E]'>{ad.title}</h2>
              <p className='text-[#3D4127] mt-4'>{ad.description}</p>
              <Link href={`/ads/${ad.id}`}>
                <Button className='bg-[#6A994E] text-white hover:bg-[#D4DE95] hover:text-[#3D4127] mt-6 transition-all duration-300 ease-out'>
                  Дізнатись більше
                </Button>
              </Link>
            </div>
          </div>
        ))}
      </div>

      <div className='bg-[#BAC095] py-16 px-8 text-center'>
        <h2 className='text-3xl font-bold'>Хочеш допомогти?</h2>
        <p className='mt-4 text-lg max-w-xl mx-auto text-[#3D4127]'>
          Якщо ви хочете допомогти або знайти дім для тварини, заповніть заявку!
        </p>
        <div className='mt-6'>
          <Link href='/how-to-help'>
            <Button className='bg-[#6A994E] text-white hover:bg-[#D4DE95] hover:text-[#3D4127] transition-all duration-300 ease-out'>
              Як допомогти
            </Button>
          </Link>
        </div>
      </div>
    </main>
  );
}
