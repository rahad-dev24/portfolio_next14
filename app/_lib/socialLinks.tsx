import Link from "next/link";
import React from "react";
import Image from "next/image";
import { links } from "@/public/links";
const SocialLinks = () => {
  return (
    <div className="flex gap-2 items-center w-[90%] justify-evenly lg:justify-center lg:gap-10 m-auto h-16">
      {links.map((index) => {
        return (
          <Link
            key={index.buttonText}
            href={index.pathURL}
            target="_blank"
            rel="noopener noreferrer"
            className="h-full flex items-center px-4 border rounded transition-all ease-in hover:bg-white group"
          >
            <Image
              src={index.imageSrcBlack}
              alt={index.imageAlt}
              width="30"
              height="30"
              className=" hidden group-hover:block animate-bounce"
            />
            <Image
              src={index.imageSrcWhite}
              alt={index.imageAlt}
              width="30"
              height="30"
              className=" group-hover:hidden"
            ></Image>
          </Link>
        );
      })}{" "}
    </div>
  );
};

export default SocialLinks;
