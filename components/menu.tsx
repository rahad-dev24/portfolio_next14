"use client";
import React from "react";

import { Bars3Icon } from "@heroicons/react/24/solid";
import { XMarkIcon } from "@heroicons/react/24/solid";
import Btn from "./Btn";
const Menu = () => {
  const [open, setOpen] = React.useState(true);
  const menu_list_css =
    " hover:text-black hover:bg-white border-0 w-full p-5 bg-black  ";
  return (
    <div
      className=" lg:hidden"
      onClick={() => {
        setOpen(!open);
      }}
    >
      {open ? (
        <Bars3Icon className="w-8 h-8 border rounded " />
      ) : (
        <div>
          <XMarkIcon className="w-8 h-8 border rounded relative" />
          <div
            className="
              flex
              flex-col
              absolute
              top-[3.70rem]
              right-4
              w-[40%]
              divide-y
             border 
              rounded-b
              
              "
          >
            <Btn
              pathURL="/projects"
              button_text="Projects"
              className={menu_list_css}
            />
            <Btn
              pathURL="/guides"
              button_text="Guides"
              className={menu_list_css}
            />
            <Btn
              pathURL="/about"
              button_text="About"
              className={menu_list_css + " rounded-b "}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Menu;
