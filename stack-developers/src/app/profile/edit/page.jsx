'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Button from '@/src/ui/components/button/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

const EditProfilePage = () => {
  const [form, setForm] = useState({
    name: 'Іван Петренко',
    email: 'ivan.petrenko@email.com',
    role: 'Волонтер',
  });
  const router = useRouter();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSaveChanges = (e) => {
    e.preventDefault();
    // Логіка збереження змін (можливо на бекенді або в localStorage)
    router.push('/profile'); // Перехід назад на профіль після збереження
  };

  return (
    <main className='bg-white text-[#3D4127] min-h-screen px-4 sm:px-8 py-12'>
      <section className='text-center mb-12'>
        <h1 className='text-4xl md:text-5xl font-extrabold mb-4'>
          Редагувати профіль
        </h1>
        <p className='text-lg text-[#6B705C]'>Оновіть свої дані.</p>
      </section>

      <section className='max-w-2xl mx-auto bg-[#F0F4E1] p-8 rounded-xl shadow-md'>
        <form onSubmit={handleSaveChanges}>
          <div className='space-y-4 mb-6'>
            <div>
              <Label htmlFor='name'>Ім'я користувача</Label>
              <Input
                id='name'
                name='name'
                value={form.name}
                onChange={handleChange}
                placeholder="Введіть ваше ім'я"
                required
              />
            </div>
            <div>
              <Label htmlFor='email'>Email</Label>
              <Input
                id='email'
                name='email'
                value={form.email}
                onChange={handleChange}
                placeholder='Введіть ваш email'
                required
              />
            </div>
            <div>
              <Label htmlFor='role'>Роль</Label>
              <Input
                id='role'
                name='role'
                value={form.role}
                onChange={handleChange}
                placeholder='Введіть вашу роль'
                required
              />
            </div>
          </div>

          <Button
            type='submit'
            className='w-full bg-[#636B2F] hover:bg-[#BAC095] transition-all duration-300 ease-out'
          >
            Зберегти зміни
          </Button>
        </form>
      </section>
    </main>
  );
};

export default EditProfilePage;
