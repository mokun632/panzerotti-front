import Layout from "../components/Layout";
import Card from "../components/LV2/Card";
import pizza from "../public/image/friedpizza.jpeg";

interface CardProps {
  title: string;
  introduction: string;
  image: StaticImageData;
  buttonTitle: string;
}

const cardInfo: CardProps = {
  title: "マルゲリータ",
  introduction: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  image: pizza,
  buttonTitle: "カードに入れる",
};

const cardInfoArray: [CardProps] = [
  cardInfo,
  cardInfo,
  cardInfo,
  cardInfo,
  cardInfo,
  cardInfo,
  cardInfo,
  cardInfo,
];

export default function Home() {
  const sliceByNumber = (array: [CardProps], number: number) => {
    const length = Math.ceil(array.length / number);
    return new Array(length)
      .fill()
      .map((_, i) => array.slice(i * number, (i + 1) * number));
  };

  return (
    <Layout>
      <div className="w-full relative shadow-md">
        <img
          className="object-cover w-full h-screen md:h-96"
          src="image/friedpizza.jpeg"
          alt="topic"
        />
        <div className="absolute top-3/4 md:top-1/4 left-auto md:left-1/4 text-white font-bold font-mono text-2xl md:text-5xl p-3">
          イタリアの日常を
          <p className="text-white text-xl md:text-2xl font-light">
            I wish that for you. Stay Hungry. Stay Foolish. Thank you all very
            much.
          </p>
        </div>
      </div>
      <div className="mt-14 text-gray-600 font-semibold font-sans text-lg md:text-xl">
        商品一覧
      </div>
      {sliceByNumber(cardInfoArray, 4).map((v) => {
        return (
          <div className="md:flex justify-between mt-10">
            {v.map((v) => {
              return <Card {...v} />;
            })}
          </div>
        );
      })}
    </Layout>
  );
}
