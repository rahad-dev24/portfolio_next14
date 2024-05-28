import Link from "next/link";
import React from "react";

const Btn = ({
  pathURL,
  button_text,
  className,
}: {
  pathURL: string;
  button_text: string;
  className: string;
}) => {
  return (
    <Link
      href={pathURL}
      className={`transition-all ease-in text-lg text-white bg-opacity-80 backdrop-blur ${className}`}
    >
      <button>{button_text}</button>
    </Link>
  );
};

export default Btn;
