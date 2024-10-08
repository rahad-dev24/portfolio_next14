type edu = {
  name: string;
  institution?: string;
  cgpa: string;
};

const edu: edu[] = [
  {
    name: "Master of Science in Computer Science",
    institution: "Jahangirnagar University",
    cgpa: "CGPA – 3.2 out of 4 (2021-2023)",
  },
  {
    name: "Bachelor of Science in Computer Science",
    institution: "Gono Bishwabidyalay",
    cgpa: "CGPA – 3.41 out of 4 (2016-2020)",
  },
  {
    name: "HSC",
    institution: "Bepza Public College, Savar, Dhaka.",
    cgpa: "GPA – 4.92 out of 5 (2014-2016)",
  },
  {
    name: "SSC",
    institution: "Adarsha High School, Savar, Dhaka.",
    cgpa: "GPA- 5 out of 5 (2012-2014)",
  },
  {
    name: "IELTS",
    cgpa: "7.0 out of 9 (2022)",
  },
];
const about = `Tech Stack:
• HTML, CSS, JAVASCRIPT, TYPESCRIPT.
• Node.js, Next.js, Tailwind CSS, shadcn/ui, Material UI.
• Apollo server, GraphQL, React Query.
• PostgreSQL, Redis, Prisma, Sequelize,
  Joi, Zod.
• Docker, Docker Compose, NGINX, PM2.
• Git, Github.
• GCP, Vercel, Digital Ocean, Namecheap.`;
const AboutCard = ({ className }: { className?: string }) => {
  return (
    <div className={`${className}`}>
      <h2 className="text-3xl font-bold text-center pb-10">About Me</h2>
      <p className=" text-justify p-1">
        A Full Stack developer with more then 2 years of experience in
        developing web apps. Ranging from small to medium-sized interactive
        websites to meet the expectations of the clients helping them to expand
        their business.
      </p>
      <pre className="text-justify pb-10 px-1 text-green-500">{about} </pre>
      <article className="grid grid-flow-row gap-4 grid-cols-4 xl:[&>*:nth-child(odd)]:col-span-2 xl:[&>*:nth-child(even)]:col-span-2 xl:[&>*:nth-last-child(1)]:col-span-4 xl:[&>*:nth-last-child(1)]:text-center">
        {edu.map((index) => {
          return (
            <div
              key={index.name}
              className="rounded border border-gray-500 hover:border-gray-50 p-4 col-span-4"
            >
              <h2 className="font-bold text-lg">{index.name}</h2>
              <h3>{index.institution}</h3>
              <p>{index.cgpa}</p>
            </div>
          );
        })}
      </article>
    </div>
  );
};

export default AboutCard;
