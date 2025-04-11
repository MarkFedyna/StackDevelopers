import Image from "next/image"
import Button from "@/src/ui/components/button/button";


function Card({imageSrc, name, description  }) {
  return (
    <article className={'p-9 bg-white flex flex-col items-start rounded-3xl gap-8.5 shadow-md'}>
        <Image
            src={imageSrc}
            width={255}
            height={255}
            alt={name}
            className={'rounded-4xl'}
        />
        <section className={'flex flex-col gap-14'}>
          <header className={'text-left'}>
              <h2 className={'text-3xl text-[#6a994e] font-bold'}>{name}</h2>
              <p className={'text-base'}>{description}</p>
          </header>
        <Button className={'bg-[#BC4749] px-5 py-3 rounded-lg'}>Подати заявку</Button>
        </section>
    </article>
  )
}

export default Card