'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Button from '@/src/ui/components/button/button';

const ProfilePage = () => {
  const [userData, setUserData] = useState({
    name: 'Іван Петренко', // ці дані можна отримати з бекенду або localStorage
    email: 'ivan.petrenko@email.com',
    role: 'Волонтер', // або з іншого джерела
  });

  const router = useRouter();

  const handleEditProfile = () => {
    // Тут буде логіка редагування (переходимо на сторінку редагування)
    router.push('/profile/edit');
  };

  return (
    <main className='bg-white text-[#3D4127] min-h-screen px-4 sm:px-8 py-12'>
      <section className='text-center mb-12'>
        <h1 className='text-4xl md:text-5xl font-extrabold mb-4'>
          Мій профіль
        </h1>
        <p className='text-lg text-[#6B705C]'>
          Ви можете переглянути та редагувати свої дані.
        </p>
      </section>

      <section className='max-w-2xl mx-auto bg-[#F0F4E1] p-8 rounded-xl shadow-md'>
        <div className='mb-6'>
          <h2 className='text-2xl font-semibold text-[#6A994E]'>
            Особисті дані
          </h2>
          <div className='mt-4'>
            <p className='text-lg'>
              <strong>Ім'я:</strong> {userData.name}
            </p>
            <p className='text-lg'>
              <strong>Email:</strong> {userData.email}
            </p>
            <p className='text-lg'>
              <strong>Роль:</strong> {userData.role}
            </p>
          </div>
        </div>

        <Button
          onClick={handleEditProfile}
          className='w-full bg-[#636B2F] hover:bg-[#BAC095] transition-all duration-300 ease-out'
        >
          Редагувати профіль
        </Button>
      </section>
    </main>
  );
};

export default ProfilePage;
