import Button from '@/src/ui/components/button/button';
import Image from 'next/image';
import dog1 from '@/public/dog1.png';

export default function Hero() {
  return (
    // <main className={'bg-[#F8F4E3] '}>
    // <article className={'flex items-center border-b-[#333333] border-b-1'}>
    <div
      className={
        'flex justify-between items-center text-center border-b-[#333333] border-b-1  '
      }
    >
      <div className='flex flex-col w-full justify-center'>
        <div>
          <h1>Допоможи знайти дім безпритульній тварині</h1>
          <p>
            Щодня сотні тварин шукають тепло, турботу та новий дім. Допоможи їм
            зробити перший крок до щасливого життя.
          </p>
        </div>
        <div className={'mt-23.5 w-full flex justify-around'}>
          <Button>Створити оголошення</Button>
          <Button>Задонатити</Button>
        </div>
      </div>
      <Image
        src={dog1}
        alt={'dog1'}
        width={658}
        height={366}
        className='w-1/3 h-auto'
      />
    </div>
    // </article>
    // </main>
  );
}
