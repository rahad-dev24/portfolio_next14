import React from "react";
import Link from "next/link";
import Btn from "@/components/Btn";
import Menu from "@/components/menu";
import Image from "next/image";
const Nav = () => {
  const button_css: string =
    "text-gray-400 hover:text-gray-50 hidden lg:block hover:text-black  ml-2 py-1 px-2 rounded border border-gray-600 hover:border-gray-50 bg-black";
  return (
    <nav className="h-full">
      <ul className="flex flex-wrap content-center items-center h-full px-4">
        <Link href="/" className="flex items-center group mr-auto">
          <Image
            src="/white.png"
            alt="logo"
            height={"56"}
            width={"72"}
            className="group-hover:hidden rounded p-1"
          />
          <Image
            src="/black.png"
            alt="logo"
            height={"56"}
            width={"72"}
            className="hidden group-hover:block group-hover:bg-white transition-all ease-in rounded p-1"
          />
          {/* <li className="text-2xl font-mono text-green-500"> */}
          {/*   Rahad */}
          {/*   <p className="w-3 h-[1.2rem] mt-[0.35rem] md:mt-[0.25rem]  ml-[2px] float-right animate-pulse bg-white "></p> */}
          {/* </li> */}
        </Link>

        <Btn
          pathURL="/projects"
          button_text="Projects"
          className={button_css}
        />
        <Btn pathURL="/guides" button_text="Guides" className={button_css} />
        <Btn
          pathURL="/about"
          button_text="About Me"
          className={button_css + " text-green-500"}
        />
        <Menu />
      </ul>
    </nav>
  );
};

export default Nav;
