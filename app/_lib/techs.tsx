import React from "react";
import { techs } from "@/public/tech/techs";
import Link from "next/link";
import Image from "next/image";
const Techs = () => {
  return (
    <div className="  h-16 inline-flex max-w-[1200px]  animate-banner  hover:paused ">
      <Floating_links />
      <Floating_links />
    </div>
  );
};
const Floating_links = () => {
  return (
    <div
      className=" flex gap-6 items-center px-1
      h-16 min-w-[100%] justify-evenly "
    >
      {techs.map((index) => (
        <Link
          href={index.pathURL}
          key={index.imageAlt}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center  rounded min-w-16 bg-white h-full"
        >
          <Image
            src={index.imageSrc}
            alt={index.imageAlt}
            width="64"
            height="64"
            className="rounded p-2"
          />
        </Link>
      ))}
    </div>
  );
};
export default Techs;
