import React from "react";
import AboutCard from "@/components/AboutCard";
import LogoButton from "../_lib/logo-button";
import Link from "next/link";
import { links } from "@/public/links";
const Page = () => {
  return (
    <>
      <AboutCard className="px-2 py-8 md:w-[70%] lg:w-[60%] m-auto md:mt-8" />
      <section className="px-2 py-8 md:w-[70%] lg:w-[60%] m-auto flex flex-col justify-center items-center ">
        <h2 className="text-3xl font-bold my-8">Contact Me</h2>
        <section className="flex flex-col gap-3 m-auto w-full ">
          <div className="w-full md:w-4/5 lg:w-3/4 lg:px-8 m-auto text-left">
            <Link
              href="mailto: rahad.dev24@gmail.com"
              className="font-bold text-left  w-full text-xl block py-2"
            >
              Email:{" "}
              <span className="inline-flex select-all">
                rahad.dev24@gmail.com
              </span>
            </Link>
            <Link
              href="tel:+8801319639009"
              className="text-left text-xl w-full font-bold  block py-2"
            >
              Phone: <span className="select-all">+8801319639009</span>
            </Link>

            <address className=" mb-6 text-left w-full text-xl block py-2">
              <span className="font-bold">Address: </span>
              Uttar Gazirchat, Jamgora, Ashulia, Savar, Dhaka - 1349.{" "}
            </address>
          </div>
          <div className="flex md:flex-row flex-col gap-4 mb-32 w-4/5 md:w-full m-auto">
            {links.map((index) => (
              <LogoButton
                imageSrcWhite={index.imageSrcWhite}
                imageSrcBlack={index.imageSrcBlack}
                imageAlt={index.imageAlt}
                buttonText={index.buttonText}
                pathURL={index.pathURL}
                key={index.buttonText}
                className="gap-2"
              />
            ))}
          </div>
        </section>
      </section>
    </>
  );
};

export default Page;
