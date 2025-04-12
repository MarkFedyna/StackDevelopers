export default function AboutUsPage() {
  return (
    <main className='bg-white text-[#3D4127]'>
      {/* Hero Section */}
      <section className='bg-[#F0F4E1] py-16 px-4 sm:py-20 sm:px-8 text-center'>
        <h1 className='text-3xl sm:text-5xl font-extrabold'>Про нас</h1>
        <p className='mt-4 text-lg text-[#636B2F] max-w-2xl mx-auto'>
          Ми — команда, яка допомагає безпритульним тваринам знайти дім та
          турботу.
        </p>
      </section>

      {/* Mission Section */}
      <section className='py-12 sm:py-16 px-4 sm:px-8 text-center'>
        <h2 className='text-2xl sm:text-3xl font-bold'>Наша місія</h2>
        <p className='mt-4 text-lg text-[#636B2F] max-w-3xl mx-auto'>
          Ми прагнемо дати шанс кожній безпритульній тварині на краще життя,
          знайшовши їй люблячу родину.
        </p>
      </section>

      {/* What We Do */}
      <section className='py-12 sm:py-16 px-4 sm:px-8 bg-[#F0F4E1]'>
        <h2 className='text-2xl sm:text-3xl font-bold text-center'>
          Чим ми займаємось
        </h2>
        <ul className='mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6 text-[#636B2F] max-w-4xl mx-auto text-lg'>
          <li>🔎 Знаходимо нові родини для тварин</li>
          <li>🤝 Співпрацюємо з волонтерами та притулками</li>
          <li>📢 Поширюємо інформацію про відповідальне ставлення</li>
          <li>💸 Організовуємо благодійні збори та події</li>
        </ul>
      </section>

      {/* Optional: Team */}
      <section className='py-12 sm:py-16 px-4 sm:px-8 text-center'>
        <h2 className='text-2xl sm:text-3xl font-bold'>Наша команда</h2>
        <p className='mt-4 text-lg text-[#636B2F] max-w-2xl mx-auto'>
          Ми — волонтери, дизайнери, розробники та просто небайдужі люди, які
          об'єднались заради спільної мети.
        </p>
      </section>

      {/* CTA Section */}
      <section className='bg-[#F0F4E1] py-12 sm:py-16 px-4 sm:px-8 text-center'>
        <h2 className='text-2xl sm:text-3xl font-bold'>Хочеш допомогти?</h2>
        <p className='mt-4 text-lg max-w-xl mx-auto text-[#636B2F]'>
          Приєднуйся до нашої ініціативи — допоможи знайти дім для ще однієї
          тваринки ❤️
        </p>
        <div className='mt-6 flex flex-col sm:flex-row justify-center gap-4'>
          <a
            href='/how-to-help'
            className='bg-white text-[#3D4127] px-6 py-3 rounded-xl font-semibold hover:bg-[#D4DE95] transition-all duration-300 ease-out'
          >
            Як допомогти
          </a>
          <a
            href='/send-initiative'
            className='bg-white text-[#3D4127] px-6 py-3 rounded-xl font-semibold hover:bg-[#D4DE95] transition-all duration-300 ease-out'
          >
            Подати ініціативу
          </a>
        </div>
      </section>
    </main>
  );
}
