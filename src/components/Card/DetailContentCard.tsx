import { CodeBlock, dracula } from "react-code-blocks";
import BackButton from "../Button/BackButton";
interface Props {
  data: {
    id: number;
    title: string;
    desc: string;
    treatment: string;
    codeBefore?: string;
    codeAfter?: string;
  };
}

const DetailContentCard = (data: Props) => {
  const { id, title, desc, treatment, codeBefore, codeAfter } = data.data;
  const codeBlock = () => {
    if (codeBefore == "" || codeAfter == "") {
      return;
    }

    return (
      <>
        <div className="text-xl font-semibold">Contoh Code: </div>
        <div className="gap-10 text-xs grid md:flex">
          <div>
            <div>Before Refactoring:</div>
            <div className="overflow-scroll h-[50vh]">
              <CodeBlock text={codeBefore} theme={dracula} />
            </div>
          </div>
          <div>
            <div>After Refactoring:</div>
            <div className="overflow-scroll h-[50vh]">
              <CodeBlock text={codeAfter} theme={dracula} />
            </div>
          </div>
        </div>
      </>
    );
  };

  return (
    <>
      <div>
        <BackButton />
        <div className="flex flex-col justify-center items-center content-center pt-0 p-10 gap-3">
          <div className="text-3xl">{title}</div>
          <div className="">{desc}</div>

          <div className="flex flex-col items-center">
            <div className="text-xl font-semibold">Treatment: </div>
            <div>{treatment}</div>
          </div>
          <div className="flex flex-col items-center gap-2">{codeBlock()}</div>
        </div>
      </div>
    </>
  );
};

export default DetailContentCard;
