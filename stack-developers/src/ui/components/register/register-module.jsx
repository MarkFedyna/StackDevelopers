'use client';

import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogTitle,
  DialogDescription,
  DialogHeader,
} from '@/components/ui/dialog';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';
import { FaInstagram, FaFacebook, FaTwitter } from 'react-icons/fa';
import Image from 'next/image';
import Link from 'next/link';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';

const RegisterModule = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
    acceptTerms: false,
  });
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant='ghost'
          className={
            'bg-white text-[#BAC095] hover:bg-[#BAC095] hover:text-white transition-all duration-300 ease-out'
          }
        >
          Зареєструватися
        </Button>
      </DialogTrigger>
      <DialogContent className='w-full max-w-[600px] sm:max-w-[800px] h-[95vh] p-0 overflow-hidden border-none'>
        <div className='grid grid-cols-1 sm:grid-cols-2 w-full h-full'>
          <div
            className='hidden sm:block bg-cover bg-center bg-no-repeat'
            style={{ backgroundImage: "url('/register-img.png')" }}
          ></div>
          <div className='p-8 flex flex-col justify-center space-y-6'>
            <DialogHeader>
              <DialogTitle className='text-2xl text-[#BAC095]'>
                Створіть Ваш акаунт
              </DialogTitle>
              <DialogDescription>
                Введіть ваші дані для створення облікового запису
              </DialogDescription>
            </DialogHeader>
            <form className='space-y-4'>
              <div className='space-y-2'>
                <Label htmlFor='name'>Ім’я користувача</Label>
                <Input
                  id='name'
                  name='name'
                  type='text'
                  placeholder="Вкажіть ім'я..."
                  value={form.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className='space-y-2'>
                <Label htmlFor='email'>Електронна пошта</Label>
                <Input
                  id='email'
                  name='email'
                  type='email'
                  placeholder='Введіть електронну пошту...'
                  value={form.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className='space-y-2 relative'>
                <Label htmlFor='password'>Пароль</Label>
                <Input
                  id='password'
                  name='password'
                  type={showPassword ? 'text' : 'password'}
                  placeholder='Введіть пароль...'
                  value={form.password}
                  onChange={handleChange}
                  required
                  className='pr-10'
                />
                <button
                  type='button'
                  onClick={() => setShowPassword((prev) => !prev)}
                  className='absolute right-3 top-9 text-gray-500 hover:text-gray-700'
                  tabIndex={-1}
                >
                  {showPassword ? (
                    <Eye className='w-5 h-5' />
                  ) : (
                    <EyeOff className='w-5 h-5' />
                  )}
                </button>
              </div>
              <div className='flex flex-col space-x-2'>
                <p className='mb-2'>Зареєструватись як:</p>
                <RadioGroup defaultValue='comfortable'>
                  <div className='flex items-center space-x-2'>
                    <RadioGroupItem value='volonter' id='r1' />
                    <Label htmlFor='r1'>Волонтер</Label>
                  </div>
                  <div className='flex items-center space-x-2'>
                    <RadioGroupItem value='prutylok' id='r2' />
                    <Label htmlFor='r2'>
                      <Select>
                        <SelectTrigger className='w-[150px]'>
                          <SelectValue placeholder='Притулок' />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value='vetclinica'>Ветклініка</SelectItem>
                          <SelectItem value='prutylok'>
                            Притулок для собак і котів
                          </SelectItem>
                          <SelectItem value='rozplidnuc'>Розплідник</SelectItem>
                        </SelectContent>
                      </Select>
                    </Label>
                  </div>
                </RadioGroup>
              </div>
              <Button
                type='submit'
                className='w-full bg-[#636B2F] hover:bg-[#BAC095] transition-all duration-300 ease-out'
              >
                Зареєструватися
              </Button>
              <div className='flex items-center gap-2 text-sm text-muted-foreground'>
                <div className='flex-1 h-px bg-gray-300' />
                або
                <div className='flex-1 h-px bg-gray-300' />
              </div>
              <div className='flex justify-self-center gap-4'>
                <div className='w-[30px] h-[30px] rounded-[10px] bg-gradient-to-r from-[#F048FF] to-[#FFCC13]'>
                  <FaInstagram className='w-full h-full text-white mix-blend-lighten' />
                </div>

                <FaFacebook className='w-[30px] h-[30px] text-blue-600' />
                <FaTwitter className='w-[30px] h-[30px] text-blue-600' />
              </div>
            </form>
            <p className='text-sm text-center text-muted-foreground'>
              Вже маєте акаунт?{' '}
              <Link href='#' className='underline'>
                Увійти
              </Link>
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default RegisterModule;
