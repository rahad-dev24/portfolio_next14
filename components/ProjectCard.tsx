import Image from "next/image";
import Link from "next/link";

const ProjectCard = ({
  name,
  img,
  live,
  desc,
}: {
  name: string;
  img: string;
  live: string;
  desc?: string;
}) => {
  return (
    <div className="border border-gray-600 hover:border-gray-50 rounded p-2 cursor-default">
      <Link
        href={live}
        rel="noopener noreferrer"
        target="_blank"
        className=" group"
      >
        <div className="relative mb-2">
          <Image
            src={img}
            alt="logo"
            width="200"
            height="200"
            className="bg-white w-full h-full group-hover:blur-sm
          rounded-md transition ease-in group-hover:opacity-30"
          />
          <p className="absolute hidden group-hover:block   translate-y-[-50%] w-full h-full  text-center text-white">
            {live}
          </p>
        </div>
      </Link>
      <h1 className="text-xl font-bold">{name}</h1>
      <p className="text-sm">{desc}</p>
    </div>
  );
};

export default ProjectCard;
