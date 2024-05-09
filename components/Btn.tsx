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
    <Link href={pathURL}>
      <button
        className={`transition-all ease-in text-white border py-1 px-1 ${className}`}
      >
        {button_text}
      </button>
    </Link>
  );
};

export default Btn;
