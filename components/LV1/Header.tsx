import React from "react";
import { FaBars, FaCartArrowDown } from "react-icons/fa";

export const Header = () => {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <header className="absolute z-10 w-full">
      <nav className="flex items-center justify-between px-2 py-3">
        <a className="uppercase text-white font-bold font-mono ml-2 tracking-wide text-3xl md:text-5xl" href="#pablo">
          panzerotti
        </a>
        <div className="ml-auto md:mr-10 flex">
          <a className="mx-5 text-3xl md:text-5xl" href="#cart">
            <FaCartArrowDown color="white"/>
          </a>
        </div>
      </nav>
      <div
        className={
          "fixed top-0 left-0 h-full w-full bg-opacity-50 flex items-center justify-center" +
          (navbarOpen ? "flex" : " hidden")
        }
        onClick={() => setNavbarOpen(!navbarOpen)}
      >
        <div
          className={
            "flex-grow items-center top-12 right-1 absolute z-20 w-1/3" +
            (navbarOpen ? " flex" : " hidden")
          }
        >
          <div className="bg-white ml-auto rounded shadow-md">
            <div className="m-3">商品一覧</div>
            <div className="p-3 border-solid border-t border-gray-300">
              セット
            </div>
            <div className="p-3 border-solid border-t border-gray-300 md:hidden">
              カート
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
