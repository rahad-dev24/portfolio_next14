import Link from "next/link";
import React from "react";

const Sidebar = () => {
  return (
    <aside className="hidden lg:block lg:w-72 xl:w-80 h-screen  bg-gray-900 p-4 fixed top-14 left-0">
      <article className="flex flex-col gap-4 items-center ">
        <Link href="/" className="group mt-auto">
          <img
            src="/white.png"
            alt="logo"
            className="group-hover:hidden rounded p-1 h-auto w-40 cursor-default"
          />
          <img
            src="/black.png"
            alt="logo"
            className="hidden group-hover:block group-hover:bg-white transition-all ease-in rounded p-1 h-auto w-40 cursor-default"
          />
        </Link>

        <p className="text-xl xl:text-2xl font-bold font-serif ">
          Faisal Ahamed Rahad
        </p>
        <Link
          href="mailto: rahad.dev24@gmail.com"
          className="font-bold text-sm text-left w-full xl:text-base"
        >
          Email: <span className="font-thin">rahad.dev24@gmail.com</span>
        </Link>
        <Link
          href="tel:+8801319639009"
          className="text-left w-full font-bold text-sm xl:text-base"
        >
          Phone: <span className="font-thin">+880 1319-639009</span>
        </Link>

        <address className="text-sm text-left w-full xl:text-base">
          <span className="font-bold">Address: </span>
          <div className="float-right text-left mr-3 xl:mr-3">
            <p className="font-thin">Uttar Gazirchat,</p>
            <p className="font-thin">Jamgora, Ashulia,</p>
            <p className="font-thin">Savar, Dhaka - 1349.</p>
          </div>
        </address>
        <Link href="/">GitHub</Link>
        <Link href="/about">Linkedin</Link>
        <Link href="/about">Facebook</Link>
        <Link href="/about">Download CV</Link>
      </article>
    </aside>
  );
};

export default Sidebar;
