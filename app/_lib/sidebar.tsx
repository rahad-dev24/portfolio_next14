import Btn from "@/components/Btn";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import LogoButton from "./logo-button";

const Sidebar = () => {
  const links = [
    {
      imageSrcBlack: "/github.svg",
      imageSrcWhite: "/github-white.svg",
      imageAlt: "github",
      buttonText: "Github",
      pathURL: "https://github.com/rahad-dev24",
    },
    {
      imageSrcBlack: "/linkedin.svg",
      imageSrcWhite: "/linkedin-white.svg",
      imageAlt: "linkedin",
      buttonText: "LinkedIn",
      pathURL: "https://www.linkedin.com/in/rahad-dev24/",
    },
    {
      imageSrcBlack: "/facebook.svg",
      imageSrcWhite: "/facebook-white.svg",
      imageAlt: "facebook",
      buttonText: "Facebook",
      pathURL: "https://www.facebook.com/rahad.dev24/",
    },
    {
      imageSrcBlack: "/download.svg",
      imageSrcWhite: "/download-white.svg",
      imageAlt: "download",
      buttonText: "Download CV",
      pathURL: "/CV-Faisal_Ahamed_Rahad.pdf",
    },
  ];

  return (
    <aside className="hidden lg:block lg:w-72 xl:w-80 h-screen  bg-gray-900 p-4 fixed top-14 left-0">
      <article className="flex flex-col gap-4 items-center mt-8 ">
        <Link
          href="/"
          className="group my-4 border border-gray-50 hover:border-white rounded"
        >
          <img
            src="/white.png"
            alt="logo"
            className="group-hover:hidden  p-1 h-auto w-40 cursor-default"
          />
          <img
            src="/black.png"
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
          Email: <span className="font-thin">rahad.dev24@gmail.com</span>
        </Link>
        <Link
          href="tel:+8801319639009"
          className="text-left w-full font-bold text-sm xl:text-base"
        >
          Phone: <span className="font-thin">+880 1319-639009</span>
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
            indexKey={index.buttonText}
          />
        ))}
      </article>
    </aside>
  );
};

export default Sidebar;
