import Image from "next/image";
import Link from "next/link";
import { projects } from "@/public/projects/projects";
const Pcards = ({
  name,
  img,
  live,
  code,
  desc,
  imgAlt,
  techStack,
  github,
}: {
  name: string;
  img: string;
  live?: string;
  code?: string;
  desc?: string;
  imgAlt?: string;
  techStack?: string;
  github?: string;
}) => {
  return (
    <div className="border border-gray-600 hover:border-green-500 rounded p-4 cursor-default  ">
      <Link
        href={live ? live : "#"}
        rel="noopener noreferrer"
        target="_blank"
        className=" group"
      >
        <div className="relative mb-2 m-auto">
          <Image
            src={img}
            alt={imgAlt ? imgAlt : name}
            width="500"
            height="500"
            className="bg-black w-[500px] h-[500px] group-hover:blur-sm
          rounded-md transition ease-in group-hover:opacity-30 m-auto "
          />
          <p className="absolute hidden group-hover:block   translate-y-[-50%] w-full h-full  text-center text-white">
            {live ? live : code}
          </p>
        </div>
      </Link>
      <h1 className="text-xl font-bold">{name}</h1>
      <p className="text-sm my-1">{desc}</p>
      {github ? (
        <p className="text-sm my-1">
          GitHub:{" "}
          <Link href={github} rel="noopener noreferrer" target="_blank">
            {github}
          </Link>
        </p>
      ) : null}
      {techStack ? (
        <p className="text-sm my-1">
          <span className="font-bold"> Tech Stack: </span> {techStack}
        </p>
      ) : null}
    </div>
  );
};
const ProjectCard = ({ className }: { className?: string }) => {
  return (
    <div className={`w-full m-auto overflow-hidden px-0.5 py-8 ${className}`}>
      <h2 className="text-3xl font-bold mb-8 text-center ">Projects</h2>
      <article className="grid grid-flow-row gap-16 ">
        {projects.map((index) => {
          return (
            <section key={index.name}>
              <Pcards
                name={index.name}
                img={index.img}
                live={index.live}
                desc={index.desc}
                imgAlt={index.imgAlt}
                techStack={index.techStack}
                github={index.github}
                code={index.code}
              />
            </section>
          );
        })}
      </article>
    </div>
  );
};

export default ProjectCard;
