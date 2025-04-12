import Link from 'next/link';

export default function HowToHelpPage() {
  return (
    <main className='bg-white text-[#3D4127]'>
      {/* Hero */}
      <section className='bg-[#BAC095] py-16 px-4 md:px-8 text-center'>
        <h1 className='text-4xl md:text-5xl font-extrabold'>Як допомогти</h1>
        <p className='mt-4 text-base md:text-lg text-[#3D4127] max-w-2xl mx-auto'>
          Є багато способів допомогти тваринам. Обери той, який підходить саме
          тобі.
        </p>
      </section>

      {/* Ways to help */}
      <section className='py-12 px-4 md:px-8 max-w-6xl mx-auto space-y-10'>
        <div className='flex flex-col lg:flex-row gap-6'>
          <div className='bg-[#F0F4E1] p-6 rounded-xl shadow-md flex-1'>
            <h2 className='text-xl md:text-2xl font-bold text-[#6A994E] mb-2'>
              💸 Задонатити
            </h2>
            <p className='text-sm md:text-base text-[#3D4127]'>
              Навіть невелика сума може врятувати життя. Усі кошти йдуть на
              харчування, лікування та утримання тварин.
            </p>
          </div>
          <div className='bg-[#F0F4E1] p-6 rounded-xl shadow-md flex-1'>
            <h2 className='text-xl md:text-2xl font-bold text-[#6A994E] mb-2'>
              🏠 Тимчасовий дім
            </h2>
            <p className='text-sm md:text-base text-[#3D4127]'>
              Стань тимчасовим опікуном для тварини, поки ми знайдемо їй
              постійну родину.
            </p>
          </div>
        </div>

        <div className='flex flex-col lg:flex-row gap-6'>
          <div className='bg-[#F0F4E1] p-6 rounded-xl shadow-md flex-1'>
            <h2 className='text-xl md:text-2xl font-bold text-[#6A994E] mb-2'>
              🤝 Стати волонтером
            </h2>
            <p className='text-sm md:text-base text-[#3D4127]'>
              Допомагай на місцях, поширюй інформацію або підтримуй онлайн.
              Будь-яка допомога важлива.
            </p>
          </div>
          <div className='bg-[#F0F4E1] p-6 rounded-xl shadow-md flex-1'>
            <h2 className='text-xl md:text-2xl font-bold text-[#6A994E] mb-2'>
              📢 Розповідай іншим
            </h2>
            <p className='text-sm md:text-base text-[#3D4127]'>
              Поширюй інформацію про наш проєкт у соцмережах, це допоможе знайти
              ще більше небайдужих людей.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className='bg-[#BAC095] py-16 px-4 md:px-8 text-center'>
        <h2 className='text-2xl md:text-3xl font-bold'>Готові допомогти?</h2>
        <p className='mt-4 text-base md:text-lg max-w-xl mx-auto text-[#3D4127]'>
          Зв’яжіться з нами або заповніть анкету волонтера, і ми зв’яжемось з
          вами найближчим часом!
        </p>
        <div className='mt-6'>
          <Link
            href='/send-initiative'
            className='inline-block bg-white text-[#3D4127] hover:bg-[#D4DE95] px-6 py-3 rounded-xl font-semibold transition'
          >
            Подати ініціативу
          </Link>
        </div>
      </section>
    </main>
  );
}
