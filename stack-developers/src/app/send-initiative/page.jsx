import Button from '@/src/ui/components/button/button';

export default function SendInitiativePage() {
  return (
    <main className='bg-white text-[#3D4127]'>
      <div className='bg-[#BAC095] py-16 px-4 md:px-8 text-center'>
        <h1 className='text-4xl md:text-5xl font-extrabold'>
          Подати ініціативу
        </h1>
        <p className='mt-4 text-base md:text-lg max-w-2xl mx-auto'>
          Якщо ти хочеш допомогти або маєш ідею, як покращити життя тварин —
          залиш заявку.
        </p>
      </div>

      <div className='py-12 px-4 md:px-8 max-w-3xl mx-auto'>
        <form className='space-y-6 bg-[#F0F4E1] p-6 md:p-10 rounded-xl shadow-lg'>
          <div>
            <label htmlFor='name' className='block font-semibold mb-1'>
              Ім’я
            </label>
            <input
              type='text'
              id='name'
              name='name'
              placeholder='Ваше ім’я'
              className='w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#6A994E]'
              required
            />
          </div>

          <div>
            <label htmlFor='email' className='block font-semibold mb-1'>
              Електронна пошта
            </label>
            <input
              type='email'
              id='email'
              name='email'
              placeholder='email@example.com'
              className='w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#6A994E]'
              required
            />
          </div>

          <div>
            <label htmlFor='message' className='block font-semibold mb-1'>
              Повідомлення
            </label>
            <textarea
              id='message'
              name='message'
              placeholder='Опиши свою ініціативу або ідею...'
              rows={5}
              className='w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#6A994E]'
              required
            />
          </div>

          <div className='text-center'>
            <Button
              type='submit'
              className='bg-[#6A994E] hover:bg-[#D4DE95] hover:text-[#3D4127] text-white font-semibold px-6 py-3 rounded-xl transition-all duration-300 ease-out'
            >
              Надіслати
            </Button>
          </div>
        </form>
      </div>
    </main>
  );
}
