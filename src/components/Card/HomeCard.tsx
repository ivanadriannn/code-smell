import StartButton from "../Button/StartButton";

const HomeCard = () => {
  return (
    <>
      <div className="py-10 px-20 space-y-5 min-h-screen">
        <h1 className="font-semibold text-4xl ">Code Smell</h1>
        <div className="text-2xl">Code Smell adalah indikasi di permukaan codebase yang biasanya berhubungan dengan masalah yang lebih dalam pada sistem. (Martin Fowler,2006)</div>
        <StartButton />
      </div>    
    </>
  );
};

export default HomeCard;
