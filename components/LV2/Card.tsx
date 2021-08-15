import Image from "next/image";
import Button from "../LV1/Button";
import pizza from "../../public/image/friedpizza.jpeg";

type Props = {
  title: string;
  introduction: string;
  image: StaticImageData;
  buttonTitle: string;
};

const Card: React.VFC<Props> = ({title, introduction, image, buttonTitle}) => {
  return (
    <div className="bg-white shadow p-3 rounded lg:w-64 m-5 md:m-18">
      <div className="my-6">
        <p className="text-lg text-bold tracking-wide text-gray-600 mb-2">
          {title}
        </p>
        <p className="text-sm text-gray-600 font-hairline">
          {introduction}
        </p>
      </div>
      <div>
        <a href="#ditail">
          <div className="relative bg-cover bg-center bg-gray-300 h-32">
            <Image
              src={image}
              className="rounded"
              layout="fill"
              objectFit="cover"
              alt="topic"
            />
          </div>
        </a>
      </div>
      <div className="mt-6">
        <Button buttonTitle={buttonTitle} />
      </div>
    </div>
  );
};

export default Card;
