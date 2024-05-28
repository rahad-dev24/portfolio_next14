import Image from "next/image";
import SocialLinks from "./_lib/socialLinks";
import Techs from "./_lib/techs";
import ProjectCard from "@/components/ProjectCard";
import AboutCard from "@/components/AboutCard";
import Sidebar from "./_lib/sidebar";
import GuideCard from "@/components/GuideCard";

export default function Home() {
  return (
    <main className=" min-h-screen  flex flex-row mb-32">
      <Sidebar />
      <article className="p-4 grid grid-flow-row md:w-[85%] lg:w-[65%] m-auto">
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
          <p className="pt-8 md:w-3/4 m-auto md:py-9 text-sm md:text-base lg:text-center text-justify">
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
        <section>
          <ProjectCard className="md:w-full lg:w-5/6" />
        </section>
        <section>
          <AboutCard className="mt-10 md:mt-24" />
        </section>
        <section>
          <GuideCard className="mt-10 md:mt-24" />
        </section>
      </article>
    </main>
  );
}
