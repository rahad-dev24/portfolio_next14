import React from "react";
import AboutCard from "@/components/AboutCard";
import LogoButton from "../_lib/logo-button";
import Link from "next/link";
import { links } from "@/public/links";
const Page = () => {
  return (
    <>
      <AboutCard className="px-2 py-8 md:w-[70%] lg:w-[60%] m-auto md:mt-10" />
      <section className="px-2 py-8 md:w-[70%] lg:w-[60%] m-auto flex flex-col justify-center items-center">
        <h2 className="text-3xl font-bold my-12">Contact Me</h2>
        <section className="flex flex-col gap-6 m-auto w-5/6 md:flex-row ">
          <Link
            href="mailto: rahad.dev24@gmail.com"
            className="font-bold text-left w-full text-xl"
          >
            Email: <span className="">rahad.dev24@gmail.com</span>
          </Link>
          <Link
            href="tel:+8801319639009"
            className="text-left text-xl font-bold"
          >
            Phone: <span className="">+880 1319-639009</span>
          </Link>

          <address className=" mb-6 text-left w-full text-xl">
            <span className="font-bold">Address: </span>
            <div className="float-right text-left mr-1 xl:mr-3">
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
              className="gap-8"
            />
          ))}
        </section>
      </section>
    </>
  );
};

export default Page;
