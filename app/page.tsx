import Link from "next/link";
import Image from "next/image";
import SocialLinks from "./_lib/socialLinks";
import Techs from "./_lib/techs";
export default function Home() {
  return (
    <main className=" min-h-screen lg:ml-72 xl:ml-80 ">
      <article className="p-4 grid grid-flow-row md:w-[75%] m-auto">
        <section className="min-h-screen text-center overflow-hidden  ">
          <h1 className="text-3xl md:text-4xl font-bold mt-16">
            Hello, <span className="animate-pulse">I'm Rahad!</span>
          </h1>
          <h3 className="text-center  font-bold my-2">
            Full-Stack Developer | Nextjs Developer
          </h3>{" "}
          <p className=" my-9 text-sm md:text-base lg:text-center text-justify">
            Webapp developer with 2+ years of experience in building web apps
            using technologies like Node.js, Next.js, FastAPI, NextAuth.js,
            Iron-session, GraphQL, Prisma, PostgreSQL, Tailwind CSS etc.
          </p>
          <p className=" my-4 text-center">
            Explore my portfolio and see some of my projects.
          </p>
          <section className="my-10">
            <SocialLinks />
          </section>
          <section className="my-10">
            <h2 className="text-2xl font-bold mb-8 ">Tech Stack</h2>
          </section>{" "}
          <Techs />
        </section>
        <section>Hello</section>
        <section>Hello</section>
        <section>Hello</section>
        <section>Hello</section>
      </article>
    </main>
  );
}
