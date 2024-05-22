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
      className=" bg-black bg-opacity-80 backdrop-blur rounded-b "
    >
      <button
        className={`transition-all ease-in text-lg text-white ${className}`}
      >
        {button_text}
      </button>
    </Link>
  );
};

export default Btn;
