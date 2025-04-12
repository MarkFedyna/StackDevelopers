import Card from '../card/card';

function CardList({ cards }) {
  return (
    <div className='flex flex-cols-1 flex-wrap md:flex-cols-2 lg:flex-cols-3 gap-9'>
      {cards.map((card) => (
        <Card
          key={card.id}
          imageSrc={card.image}
          name={card.name}
          description={card.description}
          id={card.id}
        />
      ))}
    </div>
  );
}

export default CardList;
