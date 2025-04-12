import CardList from "@/src/ui/components/card-list/card-list";
import dog1 from "@/public/dog2.png";
import cardData from "..//../../../petsData.json";

function PosterSection() {
  return (
    <section className="flex flex-col justify-between text-center gap-10 pt-9 px-12 pb-24">
      <h1 className="text-[#6A994E] text-5xl font-bold">Нові оголошення</h1>

      <CardList cards={cardData.splice(0, 4)} />
    </section>
  );
}

export default PosterSection;
