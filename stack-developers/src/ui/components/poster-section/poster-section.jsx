
import CardList from '@/src/ui/components/card-list/card-list';

function getPosts() {
  return fetch('http://localhost:3000/petsData.json')
         .then(res => res.json())
         .then(res => res.splice(-4))
}


async function PosterSection() {

  const cards = await getPosts()



  return (
    <section className='flex flex-col justify-between items-center text-center gap-10 pt-9 px-12 pb-24'>
      <h1 className='text-[#6A994E] text-5xl font-bold'>Нові оголошення</h1>
      <CardList cards={cards} />
    </section>
  );
}

export default PosterSection;
