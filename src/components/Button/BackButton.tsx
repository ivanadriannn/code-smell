import { useNavigate } from "react-router-dom";
import arrow from "../../assets/left-arrow.png";
const BackButton = () => {
  const navigate = useNavigate();

  return (
    <div className="p-5 pl-10">
      <button
        className="rounded-xl size-10 cursor-pointer hover:bg-gray-200"
        onClick={() => navigate("/content")}
      >
        <img src={arrow} alt="" />
      </button>
    </div>
  );
};

export default BackButton;
