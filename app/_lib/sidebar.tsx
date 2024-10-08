"use client";
import Link from "next/link";
import React from "react";
import LogoButton from "./logo-button";
import Image from "next/image";
import { links } from "@/public/links";
import { ChevronRightIcon, ChevronLeftIcon } from "@heroicons/react/24/solid";

const Sidebar = () => {
  const [openSideBar, srtOpenSideBar] = React.useState(false);
  return !openSideBar ? (
    <ChevronRightIcon
      onClick={() => srtOpenSideBar(!openSideBar)}
      className={
        `hidden lg:block w-8 h-8 m-4 border rounded fixed cursor-default border-green-500 hover:border-gray-50 text-green-500 hover:text-gray-50 animate-pulse ` +
        (openSideBar ? "hidden" : "block")
      }
    />
  ) : (
    <aside className="lg:w-72 xl:w-80 hidden lg:block ">
      <article className="flex flex-col gap-4 items-center fixed left-0 bg-gray-900 p-4 h-screen">
        <ChevronLeftIcon
          onClick={() => srtOpenSideBar(!openSideBar)}
          className="w-8 place-self-end h-8 border rounded cursor-pointer border-gray-400 hover:border-gray-50 text-gray-400 hover:text-gray-50 animate-pulse"
        />

        <Link
          href="/"
          className="group my-4 border border-gray-50 hover:border-white rounded"
        >
          <Image
            src="/white.png"
            width={"160"}
            height={"160"}
            alt="logo"
            className="group-hover:hidden  p-1 h-auto w-40 cursor-default"
          />
          <Image
            src="/black.png"
            width={"160"}
            height={"160"}
            alt="logo"
            className="hidden group-hover:block group-hover:bg-white transition-all ease-in  p-1 h-auto w-40 cursor-default"
          />
        </Link>

        <p className="text-xl my-5 xl:text-2xl font-bold font-serif ">
          Faisal Ahamed Rahad
        </p>
        <Link
          href="mailto: rahad.dev24@gmail.com"
          className="font-bold text-sm text-left w-full xl:text-base"
        >
          Email:{" "}
          <span className="font-thin select-all">rahad.dev24@gmail.com</span>
        </Link>
        <Link
          href="tel:+8801319639009"
          className="text-left w-full font-bold text-sm xl:text-base"
        >
          Phone: <span className="font-thin select-all">+8801319639009</span>
        </Link>

        <address className="text-sm mb-6 text-left w-full xl:text-base">
          <span className="font-bold">Address: </span>
          <div className="float-right text-left mr-3 xl:mr-3">
            <p className="font-thin">Uttar Gazirchat,</p>
            <p className="font-thin">Jamgora, Ashulia,</p>
            <p className="font-thin">Savar, Dhaka - 1349.</p>
          </div>
        </address>
        {links.map((index) => (
          <LogoButton
            imageSrcWhite={index.imageSrcWhite}
            imageSrcBlack={index.imageSrcBlack}
            imageAlt={index.imageAlt}
            buttonText={index.buttonText}
            pathURL={index.pathURL}
            key={index.buttonText}
            className="pl-8"
          />
        ))}
      </article>
    </aside>
  );
};

export default Sidebar;
