import Button from '@/src/ui/components/button/button';
import Image from 'next/image';
import Link from 'next/link';
import dog1 from '@/public/dog1.png';

export default function Hero() {
  return (
    <section className='flex flex-col-reverse lg:flex-row items-center justify-between border-b border-[#333333] py-12 px-6 md:px-8 lg:px-16'>
      {/* Left Column */}
      <div className='flex flex-col max-w-xl text-left space-y-6'>
        <h1 className='text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#3D4127]'>
          Допоможи знайти дім безпритульній тварині
        </h1>
        <p className='text-lg sm:text-xl lg:text-2xl text-[#636B2F]'>
          Щодня сотні тварин шукають тепло, турботу та новий дім. Допоможи їм
          зробити перший крок до щасливого життя.
        </p>
        <div className='flex gap-4 sm:gap-6 mt-4'>
          <Link href={'/create-animal-post'}>
            <Button className='bg-[#636B2F] px-5 py-2 hover:bg-[#D4DE95] hover:text-[#3D4127] transition-all duration-300 ease-out text-sm sm:text-base'>
              Створити оголошення
            </Button>
          </Link>
          <Button className='bg-[#636B2F] px-5 py-2 hover:bg-[#D4DE95] hover:text-[#3D4127] transition-all duration-300 ease-out text-sm sm:text-base'>
            Задонатити
          </Button>
        </div>
      </div>

      {/* Right Column with Image */}
      <figure className='lg:w-2/4 w-full'>
        <Image
          src={dog1}
          alt='dog'
          width={658}
          height={366}
          className='w-full h-full object-cover rounded-lg'
        />
      </figure>
    </section>
  );
}
