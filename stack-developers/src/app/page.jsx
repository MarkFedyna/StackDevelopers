import Button from "@/src/ui/button";
import Image from "next/image";
import dog1 from "@/public/dog1.png";
import './app.style.css'



function page() {
  return (
    <main className={'bg-[#F8F4E3]'}>
      <article className={'flex items-center border-b-[#333333] border-b-1'}>
        <section className={'flex content-between items-center text-center flex-col '}>
          <header>
            <h1 className={'font-bold'}>Допоможи знайти дім безпритульній тварині</h1>
            <p className={'font-medium'}>Щодня сотні тварин шукають тепло, турботу та новий дім.
              Допоможи їм зробити перший крок до щасливого життя.</p>
          </header>
          <section className={'mt-23.5 w-full flex justify-around'}>
            <Button>Створити оголошення</Button>
            <Button>Задонатити</Button>
          </section>
        </section>
        <Image
            src={dog1}
            alt={'dog1'}
            width={658}
            height={366}
        />
      </article>
    </main>
  )
}

export default page