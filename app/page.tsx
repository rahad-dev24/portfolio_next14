import Link from "next/link";
import Image from "next/image";
import SocialLinks from "./_lib/socialLinks";
import Techs from "./_lib/techs";
import { projects } from "@/public/projects/projects";
import ProjectCard from "@/components/ProjectCard";
import AboutCard from "./_lib/AboutCard";
import Guides from "./_lib/Guides";

export default function Home() {
  return (
    <main className=" min-h-screen lg:ml-72 xl:ml-80 ">
      <article className="p-4 grid grid-flow-row md:w-[75%] m-auto">
        <section className="  min-h-screen text-center overflow-hidden pt-6 md:pt-16  ">
          <Image
            className="text-center m-auto  bg-white rounded-full p-3"
            src={"/user.svg"}
            alt="logo"
            width="150"
            height="150"
          ></Image>
          <h1 className="text-3xl md:text-4xl font-bold pt-6 md:pt-10">
            Hello, <span className="animate-pulse">I'm Rahad!</span>
          </h1>
          <h3 className="text-center  font-bold my-2">
            Full-Stack Developer | Nextjs Developer
          </h3>{" "}
          <p className="pt-8 md:py-9 text-sm md:text-base lg:text-center text-justify">
            Webapp developer with 2+ years of experience in building web apps
            using technologies like Node.js, Next.js, FastAPI, NextAuth.js,
            Iron-session, GraphQL, Prisma, PostgreSQL, Tailwind CSS etc.
          </p>
          <p className="pt-4 md:py-4 text-center">
            Explore my portfolio and see some of my projects.
          </p>
          <section className="py-5 md:py-10">
            <SocialLinks />
          </section>
          <section className="py-5">
            <h2 className="text-2xl font-bold ">Tech Stack</h2>
          </section>{" "}
          <Techs />
        </section>
        <section className="rounded">
          <h2 className="text-3xl font-bold mb-8 text-center ">Projects</h2>
          <article className="grid grid-flow-row gap-4">
            {projects.map((index) => {
              return (
                <section key={index.name}>
                  <ProjectCard
                    name={index.name}
                    img={index.img}
                    live={index.live}
                    desc={index.desc}
                  />
                </section>
              );
            })}
          </article>
        </section>
        <section>
          <AboutCard />
        </section>
        <section>
          <Guides />
        </section>
        <section>Hello</section>
      </article>
    </main>
  );
}
