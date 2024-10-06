import ContentCard from "../components/Card/ContentCard";
import dispen from "../data/dispensables.json"
import change_preventer from "../data/change-preventer.json"
import dispenImg from "../assets/dispensables-2x.png"
import changeImg from "../assets/change-preventers-2x.png"
const ContentPage = () => {
  return (
    <>
      <ContentCard title={dispen.title} desc={dispen.desc} data={dispen.data} image={<img className="w-6/12 h-full md:w-full md:h-4/6" alt="" src={dispenImg}/>}/>
      <ContentCard title={change_preventer.title} desc={change_preventer.desc} data={change_preventer.data} image={<img className="w-6/12 h-full md:w-full md:h-4/6" alt="" src={changeImg}/>}/>
    </>
  );
};

export default ContentPage;
