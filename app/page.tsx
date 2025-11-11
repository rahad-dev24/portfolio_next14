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
        <section className="  min-h-screen text-center overflow-hidden pt-4 md:pt-10  ">
          <Image
            className="text-center m-auto  bg-white rounded-full p-0.5"
            src={"/profilePicture.png"}
            alt="logo"
            width="180"
            height="200"
          ></Image>
          <h1 className="text-3xl md:text-4xl font-bold pt-4 md:pt-10">
            Hello, <span className="animate-pulse">I&apos;m Rahad!</span>
          </h1>
          <h3 className="text-center  font-bold my-2">
            Full-Stack Developer | Nextjs Developer
          </h3>{" "}
          <p className="pt-6 md:w-3/4 m-auto md:py-9 text-sm md:text-base lg:text-center text-justify">
            Full-Stack developer with 2+ years of experience in web development
            with Node.js, Next.js, PostgreSQL, GraphQL, Tailwind CSS,
            TypeScript. Currently I am looking for a full time job as a
            full-stack developer or a backend developer in a reputable company.
            I am willing to learn new technologies, improve my skills
            consistently and work under pressure to meet company
            requirements.{" "}
          </p>
          <p className="pt-4 md:py-4 text-center">
            Explore my portfolio and see some of my projects.
          </p>
          <section className="py-5 md:py-5">
            <SocialLinks />
          </section>
          <section className="py-2 md:py-5">
            <h2 className="text-2xl font-bold ">Tech Stack</h2>
          </section>{" "}
          <Techs />
        </section>
        <section className="md:w-3/4 lg:w-full xl:w-3/4 m-auto">
          <ProjectCard className="md:w-full " />
        </section>
      </article>
    </main>
  );
}
