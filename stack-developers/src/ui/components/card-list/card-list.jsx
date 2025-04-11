'use client'

import Card from "../card/card"
import dog1 from '@/public/dog2.png';

const cardData = [
    {
        name: 'dog',
        description: 'Собака, 2 роки',
        image: dog1,
        id: '12ex74k',

    },
    {
        name: 'dog',
        description: 'Собака, 2 роки',
        image: dog1,
        id: '12ex4k',

    },
    {
        name: 'dog',
        description: 'Собака, 2 роки',
        image: dog1,
        id: '12ex44k',

    },
    {
        name: 'dog',
        description: 'Собака, 2 роки',
        image: dog1,
        id: '12ex34k',

    },
]

function CardList() {
    
  return (
    <div className={'flex w-full justify-around'}>
        {cardData.map(el => <Card name={el.name} imageSrc={el.image} description={el.description} key={el.id} />)}
    </div>
  )
}

export default CardList