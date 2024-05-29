export const projects: projects[] = [
  {
    name: "E-Commerce App(Frontend)",
    img: "/tomaato-store.svg",
    live: "https://tomaato-store.vercel.app/",
    desc: "E-Commerce App with complete ERP System and store management",
    techStack:
      "Nextjs, TypeGraphQL, React Query, TypeScript, Session based Auth.",
    imgAlt: "",
  },
  {
    name: "E-Commerce App(Backend)",
    img: "/graphql.svg",
    live: "",
    desc: "E-Commerce App with complete ERP System and store management",
    techStack:
      "Nodejs, Apollo server, GraphQL, PostgreSQL, Prisma, TypeScript, Session based Auth.",
    imgAlt: "",
  },
];

type projects = {
  name: string;
  img: string;
  live?: string;
  desc?: string;
  github?: string;
  techStack?: string;
  imgAlt?: string;
};
