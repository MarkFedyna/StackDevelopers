import CardList from '@/src/ui/components/card-list/card-list';
import dog1 from '@/public/dog2.png';

const cardData = [
  {
    name: 'Барон',
    description: 'Собака, 2 роки',
    image: dog1,
    id: '12ex74k',
  },
  {
    name: 'Лорд',
    description: 'Собака, 3 роки',
    image: dog1,
    id: '12ex4k',
  },
  {
    name: 'Джессі',
    description: 'Собака, 1 рік',
    image: dog1,
    id: '12ex44k',
  },
  {
    name: 'Рокі',
    description: 'Собака, 5 років',
    image: dog1,
    id: '12ex34k',
  },
];

function PosterSection() {
  return (
    <section className='flex flex-col justify-between text-center gap-10 pt-9 px-12 pb-24'>
      <h1 className='text-[#6A994E] text-5xl font-bold'>Нові оголошення</h1>

      <CardList cards={cardData} />
    </section>
  );
}

export default PosterSection;
