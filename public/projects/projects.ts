export const projects: projects[] = [
  {
    name: "E-commerce Frontend (Development phase)",
    img: "/tomaato-store.svg",
    live: "https://tomaato-store.vercel.app/",
    desc: "E-Commerce App with GraphQL API",
    techStack:
      "Nextjs, Tailwind CSS, Shadcn UI, TypeGraphQL, React Query, TypeScript, Session based Auth.",
    imgAlt: "",
  },
  {
    name: "E-commerce Backend",
    img: "/graphql.svg",
    code: "Contact for code review",
    desc: "E-Commerce Backend with complete ERP System and store management.",
    techStack:
      "Nodejs, Apollo server, GraphQL, PostgreSQL, Prisma, TypeScript, Session based Auth.",
    imgAlt: "",
  },
  {
    name: "ERP System Frontend (Development phase)",
    img: "/graphql.svg",
    code: "Development phase",
    desc: "Frontend based on the ERP System backend for management of all sister concerns and stores, streamlining and simplifying the process of management",
    techStack: "Next.js, TypeScript, Tailwind CSS, Shadcn/ui.",
    imgAlt: "",
    github: "",
  },

  {
    name: "Result Processing and Management with student administration System",
    img: "/expressjs-icon.svg",
    code: "Contact for code review",
    desc: "An automated system for processing, publishing and archiving results for University as well as student administration system",
    techStack:
      "Nodejs, Express, Pug, CSS, Javascript, Sequelize ORM, PostgreSQL, Redis, Bcrypt, Passportjs.",
    imgAlt: "",
    github: "",
  },
];

type projects = {
  name: string;
  img: string;
  live?: string;
  code?: string;
  desc?: string;
  github?: string;
  techStack?: string;
  imgAlt?: string;
};
