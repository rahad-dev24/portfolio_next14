import React from "react";
import Link from "next/link";
import Btn from "@/components/Btn";
import Menu from "@/components/menu";
const Nav = () => {
  const button_css: string =
    " hidden lg:block hover:bg-[#FFFFFF] hover:text-black rounded ml-1 hover:text-bold p-2";
  return (
    <nav className="h-full">
      <ul className="flex flex-wrap content-center items-center h-full px-4">
        <Link href="/" className="group">
          <img
            src="/white.png"
            alt="logo"
            height={"56"}
            width={"72"}
            className="group-hover:hidden rounded p-1"
          />
          <img
            src="/black.png"
            alt="logo"
            height={"56"}
            width={"72"}
            className="hidden group-hover:block group-hover:bg-white transition-all ease-in rounded p-1"
          />
        </Link>

        <li className="text-2xl mr-auto md:mx-auto  ">
          Rahad
          <p className="w-3 h-[19px] mt-[4px] bg-white  float-right  animate-pulse "></p>
        </li>
        <Btn pathURL="/contact" button_text="Projects" className={button_css} />
        <Btn pathURL="/projects" button_text="Guides" className={button_css} />
        <Btn pathURL="/about" button_text="About" className={button_css} />
        <Menu />
      </ul>
    </nav>
  );
};

export default Nav;
