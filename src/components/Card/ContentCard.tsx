import { useNavigate } from "react-router-dom";

interface Props {
  title: string;
  desc: string;
  data: {
    id: number;
    title: string;
  }[];
  image: JSX.Element;
}

const ContentCard = ({ title, desc, data, image }: Props) => {
  const navigate = useNavigate();

  return (
    <div>
      <div className="grid pr-10 pl-10 md:flex md:py-20 md:pr-24 md:pl-24">
        <div className="px-10 flex justify-center md:px-0 md:items-center pt-10">{image}</div>
        <div className="py-3 px-10 space-y-3">
          <div className="text-4xl">{title}</div>
          <div>{desc}</div>
          <div className="font-semibold">Jenis-jenis {title}:</div>
          {data.map((item) => (
            <div
              className="flex items-center space-x-2 cursor-pointer hover:underline"
              key={item.id}
              onClick={() => navigate(`/detail/${item.id}`)}
            >
              <img
                src={require("../../assets/dice.png")}
                alt=""
                className="size-5"
              />
              <div>{item.title}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContentCard;
