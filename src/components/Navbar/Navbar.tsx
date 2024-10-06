import { useNavigate } from "react-router-dom";
import hamburger from "../../assets/ham-menu.png";
import { useState } from "react";
import close from "../../assets/close-hid-nav.png";
import clsx from "clsx";

const Menu = () => {
  const navigate = useNavigate();

  const openInNewTab = (url: string) => {
    window.open(url, "_blank", "noreferrer");
  };

  return (
    <>
      <li
        className="cursor-pointer text-slate-600 hover:text-slate-300"
        onClick={() => {
          navigate("/");
        }}
      >
        Home
      </li>
      <li
        className="cursor-pointer text-slate-600 hover:text-slate-300"
        onClick={() => {
          navigate("/content");
        }}
      >
        Content
      </li>
      <li
        className="cursor-pointer text-slate-600 hover:text-slate-300"
        onClick={() =>
          openInNewTab(
            "https://github.com/Ryldi/Code-Smell-FE" //redirect github
          )
        }
      >
        Repository
      </li>
    </>
  );
};

const Navbar = () => {
  const navigate = useNavigate();
  const [isHiddenMenuOpen, setHidden] = useState(false);

  const openInNewTab = (url: string) => {
    window.open(url, "_blank", "noreferrer");
  };

  return (
    <>
      <ul className="flex justify-between items-center cursor-pointer py-4 px-6">
        <h1
          className="text-4xl w-full font-semibold text-slate-700"
          onClick={() => {
            navigate("/");
          }}
        >
          Code Reengineering
        </h1>

        {/* hidden navigation menu */}
        <div
          className={clsx(
            "fixed h-full w-screen md:hidden bg-black/50 backdrop-blur-sm top-0 left-0 right-0 -translate-x-full transition-all",
            isHiddenMenuOpen && "translate-x-0"
          )}
        >
          <section className="text-black bg-white flex-col absolute right-0 top-0 h-screen p-8 gap-8 z-50 flex w-56">
            <div
              className="cursor-pointer size-10 mt-0 hover:bg-gray-200 rounded-xl justify-center items-center"
              onClick={() => setHidden(false)}
            >
              <img src={close} alt="" />
            </div>

            <div className="font-semibold grid gap-3">
              <li
                className="cursor-pointer text-slate-600 hover:text-slate-300"
                onClick={() => {
                  setHidden(false);
                  navigate("/");
                }}
              >
                Home
              </li>
              <li
                className="cursor-pointer text-slate-600 hover:text-slate-300"
                onClick={() => {
                  setHidden(false);
                  navigate("/content");
                }}
              >
                Content
              </li>
              <li
                className="cursor-pointer text-slate-600 hover:text-slate-300"
                onClick={() => {
                  openInNewTab(
                    "https://github.com/Ryldi/Code-Smell-FE" //redirect github
                  );
                  setHidden(false);
                }}
              >
                Repository
              </li>
            </div>
          </section>
        </div>

        <div className="hidden md:flex justify-center gap-10 w-full">
          <Menu />
        </div>
        <div
          className="rounded-xl justify-center size-10 items-center cursor-pointer hover:bg-gray-200 bg-opacity-20 md:hidden"
          onClick={() => setHidden(true)}
        >
          <img src={hamburger} alt="" />
        </div>
      </ul>
      <hr />
    </>
  );
};

export default Navbar;
