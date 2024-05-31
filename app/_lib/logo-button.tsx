import Image from "next/image";
import Link from "next/link";
import React from "react";

const LogoButton = ({
  imageSrcWhite,
  imageSrcBlack,
  imageAlt,
  buttonText,
  pathURL,
  className,
}: {
  imageSrcWhite: string;
  imageSrcBlack: string;
  imageAlt: string;
  buttonText: string;
  pathURL: string;
  className?: string;
}) => {
  return (
    <Link
      href={pathURL}
      target="_blank"
      rel="noopener noreferrer"
      className={`gap-2 flex p-2 divide-gray-500 text-lg items-center justify-start w-full transition-all ease-in hover:text-black font-bold rounded hover:bg-white group ${className}`}
    >
      <Image
        src={imageSrcBlack}
        alt={imageAlt}
        width="30"
        height="30"
        className="hidden group-hover:block animate-wiggle"
      />
      <Image
        src={imageSrcWhite}
        alt={imageAlt}
        width="30"
        height="30"
        className=" group-hover:hidden"
      />
      <p className="pl-2 border-l">{buttonText}</p>
    </Link>
  );
};

export default LogoButton;
