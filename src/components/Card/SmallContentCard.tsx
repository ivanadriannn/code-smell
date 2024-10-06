interface Props{
    title: string;
}

const SmallContentCard = ({title} : Props) => {
  return (
    <>
      <div>
        
        <div>{title}</div>
      </div>
    </>
  );
};

export default SmallContentCard;
