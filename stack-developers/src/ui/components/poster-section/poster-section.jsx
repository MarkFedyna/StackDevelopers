'use client';

import { useEffect, useState } from 'react';
import CardList from '@/src/ui/components/card-list/card-list';

function PosterSection() {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    fetch('/petsData.json')
      .then((res) => res.json())
      .then((data) => setCards(data.slice(0, 4)))
      .catch((error) => console.error('Помилка при завантаженні JSON:', error));
  }, []);

  return (
    <section className='flex flex-col justify-between text-center gap-10 pt-9 px-12 pb-24'>
      <h1 className='text-[#6A994E] text-5xl font-bold'>Нові оголошення</h1>
      <CardList cards={cards} />
    </section>
  );
}

export default PosterSection;
