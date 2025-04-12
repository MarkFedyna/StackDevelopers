import Button from '@/src/ui/components/button/button';
import Image from 'next/image';
import Link from "next/link";
import dog1 from '@/public/dog1.png';

export default function Hero() {
  return (
    <section className='flex flex-col-reverse lg:flex-row items-center justify-between border-b border-[#333333]'>
      <div className='flex flex-col max-w-xl text-left py-16 px-8 space-y-6'>
        <h1 className='text-4xl font-extrabold text-[#3D4127]'>
          Допоможи знайти дім безпритульній тварині
        </h1>
        <p className='text-lg text-[#636B2F]'>
          Щодня сотні тварин шукають тепло, турботу та новий дім. Допоможи їм
          зробити перший крок до щасливого життя.
        </p>
        <div className='flex gap-6 mt-4'>
          <Link href={'/create-animal-post'}>
            <Button
                className='bg-[#636B2F] px-5 py-2 hover:bg-[#D4DE95] hover:text-[#3D4127] transition-all duration-300 ease-out
'
            >
              Створити оголошення
            </Button>
          </Link>
          <Button className='bg-[#636B2F] px-5 py-2 hover:bg-[#D4DE95] hover:text-[#3D4127] transition-all duration-300 ease-out'>
            Задонатити
          </Button>
        </div>
      </div>
      <figure className='lg:w-2/4 h-auto h-full w-full'>
        <Image
          src={dog1}
          alt='dog'
          width={658}
          height={366}
          className='w-full h-full object-cover'
        />
      </figure>
    </section>
  );
}
