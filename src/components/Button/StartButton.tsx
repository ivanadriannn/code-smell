import { useNavigate } from "react-router-dom";
const StartButton = () => {
  const navigate = useNavigate();

  return (
    <button
      className="bg-transparent hover:bg-slate-500 text-slate-700 font-semibold hover:text-white py-2 px-4 border border-slate-500 hover:border-transparent rounded"
      onClick={() => navigate("/content")}
    >
      How to Smell
    </button>
  );
};

export default StartButton;
